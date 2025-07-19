import express from 'express';
import fs from 'fs';
import path from 'path';

const router = express.Router();
const __dirname = path.resolve();

router.get('/', (req, res) => {
  const treasury = JSON.parse(fs.readFileSync(path.join(__dirname, '/data/treasury.json')));
  res.json(treasury);
});

export default router;
