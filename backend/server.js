import express from 'express';
import cors from 'cors';
import proposalsRouter from './routes/proposals.js';
import treasuryRouter from './routes/treasury.js';

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

// Routes
app.use('/api/proposals', proposalsRouter);
app.use('/api/treasury', treasuryRouter);

app.get('/', (req, res) => {
  res.send('AI Treasurer DAO Backend is running.');
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
