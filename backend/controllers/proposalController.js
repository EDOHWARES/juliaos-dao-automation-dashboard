// Mock controller for proposals
const getProposals = (req, res) => {
  res.json([
    { id: 1, title: "Proposal to Automate Treasury", status: "Active" },
    { id: 2, title: "DAO Voting Upgrade", status: "Pending" }
  ]);
};

module.exports = { getProposals };
