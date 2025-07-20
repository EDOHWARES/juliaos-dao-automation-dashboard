import express from 'express';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

const router = express.Router();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const dataPath = path.join(__dirname, '../data/aiData.json');

function getAIData() {
  return JSON.parse(fs.readFileSync(dataPath, 'utf8'));
}

// GET /api/ai/agents
router.get('/agents', (req, res) => {
  const data = getAIData();
  res.json(data.agents || []);
});

// GET /api/ai/insights
router.get('/insights', (req, res) => {
  const data = getAIData();
  res.json(data.insights || []);
});

// GET /api/ai/insights/:proposalId
router.get('/insights/:proposalId', (req, res) => {
  const data = getAIData();
  const { proposalId } = req.params;
  const insights = (data.insights || []).filter(i => i.proposalId === proposalId);
  res.json(insights);
});

// GET /api/ai/recommendations
router.get('/recommendations', (req, res) => {
  const data = getAIData();
  res.json(data.recommendations || []);
});

export default router;
