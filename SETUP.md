# SETUP

## Voraussetzungen
- Node.js 20+
- npm 10+

## Backend starten
```bash
cd backend
cp .env.example .env
npm install
npm run dev
```
Backend läuft auf `http://localhost:4000`.

## Frontend starten
```bash
cd frontend
npm install
npm run dev
```
Frontend läuft auf `http://localhost:5173`.

## API schnell testen
```bash
curl http://localhost:4000/health
curl -H "x-tenant-id: tenant-a" -H "x-user-role: admin" http://localhost:4000/api/patients
curl -X POST http://localhost:4000/api/patients \
  -H "Content-Type: application/json" \
  -H "x-tenant-id: tenant-a" \
  -H "x-user-role: admin" \
  -d '{"name":"Anna Keller","birthDate":"1985-04-01","ventilation":true}'
```
