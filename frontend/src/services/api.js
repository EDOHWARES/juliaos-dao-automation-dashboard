import axios from "axios";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export const getProposals = async () => {
  try {
    const res = await axios.get(`${API_BASE_URL}/proposals`);
    return res.data;
  } catch (err) {
    console.error("Error fetching proposals:", err);
    return [];
  }
};

export const getTreasury = async () => {
  try {
    const res = await axios.get(`${API_BASE_URL}/treasury`);
    return res.data;
  } catch (err) {
    console.error("Error fetching treasury data:", err);
    return {};
  }
};

export const getAIAgents = async () => {
  try {
    const res = await axios.get(`${API_BASE_URL}/ai/agents`);
    return res.data;
  } catch (err) {
    console.error("Error fetching AI agents:", err);
    return [];
  }
};

export const getAIInsights = async (proposalId) => {
  try {
    const url = proposalId ? `${API_BASE_URL}/ai/insights/${proposalId}` : `${API_BASE_URL}/ai/insights`;
    const res = await axios.get(url);
    return res.data;
  } catch (err) {
    console.error("Error fetching AI insights:", err);
    return [];
  }
};

export const getAIRecommendations = async () => {
  try {
    const res = await axios.get(`${API_BASE_URL}/ai/recommendations`);
    return res.data;
  } catch (err) {
    console.error("Error fetching AI recommendations:", err);
    return [];
  }
};
