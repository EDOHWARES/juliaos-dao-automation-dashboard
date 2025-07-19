const express = require('express');
const axios = require('axios');

const router = express.Router();

// Snapshot GraphQL endpoint
const SNAPSHOT_API_URL = 'https://hub.snapshot.org/graphql';

// Uniswap DAO space ID on Snapshot
const UNISWAP_SPACE_ID = 'uniswap.eth';

// GraphQL query to fetch active proposals
const GET_PROPOSALS_QUERY = `
  query GetProposals($space: String!, $state: String!) {
    proposals(
      where: {
        space: $space,
        state: $state
      },
      orderBy: "created",
      orderDirection: desc
    ) {
      id
      title
      body
      start
      end
      state
      author
      space {
        id
        name
      }
    }
  }
`;

router.get('/api/proposals', async (req, res) => {
  try {
    // Make GraphQL request to Snapshot API
    const response = await axios.post(SNAPSHOT_API_URL, {
      query: GET_PROPOSALS_QUERY,
      variables: {
        space: UNISWAP_SPACE_ID,
        state: 'active'
      }
    }, {
      headers: {
        'Content-Type': 'application/json',
      },
      timeout: 10000 // 10 second timeout
    });

    // Check if the request was successful
    if (response.status !== 200 || response.data.errors) {
      throw new Error('Failed to fetch proposals from Snapshot API');
    }

    const proposals = response.data.data.proposals;

    // Transform the data to match the required format
    const formattedProposals = proposals.map(proposal => ({
      proposalId: proposal.id,
      title: proposal.title,
      description: proposal.body,
      start: proposal.start,
      end: proposal.end
    }));

    // Return the formatted proposals
    res.json({
      success: true,
      count: formattedProposals.length,
      proposals: formattedProposals
    });

  } catch (error) {
    console.error('Error fetching Uniswap proposals:', error.message);
    
    // Handle different types of errors
    if (error.code === 'ECONNABORTED') {
      return res.status(408).json({
        success: false,
        error: 'Request timeout - Snapshot API did not respond in time'
      });
    }
    
    if (error.response) {
      // API returned an error response
      return res.status(error.response.status).json({
        success: false,
        error: 'Failed to fetch proposals from Snapshot API',
        details: error.response.data
      });
    }
    
    // Generic server error
    res.status(500).json({
      success: false,
      error: 'Internal server error while fetching proposals'
    });
  }
});

module.exports = router;