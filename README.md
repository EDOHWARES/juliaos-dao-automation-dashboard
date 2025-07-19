# AI Treasurer DAO Dashboard (Powered by JuliaOS)

An intelligent DAO automation dashboard built to showcase the power of JuliaOS agents and swarms.  
This project introduces **AI-driven treasury analysis and proposal recommendations**, tailored for **ClimateDAO**, a fictional DAO deployed on Ethereum's Sepolia testnet.

---

## 🚀 **What It Does**
- **AI Proposal Summaries:** JuliaOS agents analyze and summarize DAO proposals using LLM-powered insights.
- **Treasury Risk Analysis:** Automatically evaluates the impact of proposals on DAO funds (e.g., spending forecasts).
- **Multi-Agent Orchestration:** Uses JuliaOS swarms to coordinate multiple agents (Proposal Analyzer + Risk Calculator + Voting Advisor).
- **Voting Simulations:** Simulate DAO votes and treasury outcomes using a test ERC-20 governance token.
- **Multi-Chain Ready:** Built for Ethereum Sepolia testnet but easily extendable to Polygon and other chains.

---

## 🛠 **Tech Stack**
- **Frontend:** React (Vite) + TailwindCSS + Recharts (visual treasury analytics).
- **Backend:** Node.js (Express) + JuliaOS Agent Framework.
- **Blockchain:** Ethereum Sepolia Testnet + ethers.js.
- **Database:** MongoDB (for caching proposals).
- **AI:** JuliaOS `agent.useLLM()` for proposal analysis and recommendations.

---

## 🌍 **Why ClimateDAO?**
ClimateDAO is a fictional testnet DAO designed for this project.  
Members hold **ClimateToken (CLT)** — a mock ERC-20 governance token — to vote on funding climate-positive initiatives (e.g., "Allocate 10,000 CLT to tree planting in Lagos").

---

## 📦 **Project Structure**
