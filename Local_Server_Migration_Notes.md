# Local Server Migration — Notes (for later)

Right now all data (sessions, results, config, and now passwords) lives in a
Google Sheet, reached through the Apps Script web app at `SCRIPT_URL`. That's
fine for today. When you're ready to move to a local server on your office
network, here's the shape of that change — no need to act on this now.

## What changes
- Replace `SCRIPT_URL` in `js/config.js` with your local server's URL
  (e.g. `http://192.168.1.50:3000/api`).
- Replace the Google Sheet with a real database (SQLite is enough for a
  single-location office; Postgres/MySQL if multiple sites need to share data).
- Re-implement the same endpoints your frontend already calls:
  `mode=student`, `mode=sessions`, `mode=admin`, plus the POST actions
  (`UPDATE_CONFIG`, `DELETE_SESSION`, result submission, and the new
  `RESET_PASSWORD`).
- Store passwords hashed (e.g. bcrypt) instead of plain text in a sheet —
  worth doing at that point since a local server can do this properly.

## Why this is low-risk to defer
Because the frontend only talks to `SCRIPT_URL` through `fetch()`, none of
the HTML/CSS/JS needs to change structurally later — only the URL and the
backend behind it. The endpoint contract (`mode=...`, `type=...` params)
already used here can be kept identical on the new server.

## Suggested stack for "runs locally on the office LAN"
- Node.js + Express (or Python + FastAPI) serving the same JSON contract
- SQLite file on the machine acting as the server
- Any laptop/PC on the network runs it; other machines hit its LAN IP

Happy to build this out (Express + SQLite, or another stack you prefer)
whenever you're ready — it's a clean, separate piece of work from the
password-reset feature added now.
