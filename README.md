# PflegeDoc

PflegeDoc ist eine Dokumentationssoftware für die außerklinische Intensivpflege mit Fokus auf einfache Bedienung, Nachvollziehbarkeit und DSGVO-konforme Architektur.

## Zielbild
- Tablet-first UI für den Pflegealltag
- Desktop-kompatibel für Teamleitung und QM
- Mandantenfähig (mehrere Pflegedienste)
- Rollen/Rechte und Auditierbarkeit von Anfang an

## Aktueller Stand
- **Backend (Node.js + Express)** mit API-Endpunkten:
  - `GET /health`
  - `GET /api/patients`
  - `POST /api/patients`
- **Frontend (React + Vite)** mit erster Patientendashboard-Ansicht
- **Dokumentation** für Setup, Struktur und DSGVO/Sicherheit

## Schnellstart
1. Setup-Anleitung lesen: `SETUP.md`
2. Projektstruktur prüfen: `PROJECT_STRUCTURE.md`
3. Sicherheitskonzept lesen: `SECURITY_DSGVO.md`

## MVP Leitlinien
- Keine unnötige Komplexität
- Pflegeprozesse vor Verwaltung
- Erweiterbar Richtung PostgreSQL, RLS und revisionssicheres Audit-Log
