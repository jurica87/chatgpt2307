# SECURITY & DSGVO (MVP-Konzept)

## Datenschutzgrundsätze
- Privacy by Design und Privacy by Default
- Datenminimierung: nur notwendige Patientendaten
- Zweckbindung und rollenbasierte Zugriffskontrolle

## Technische Maßnahmen (MVP)
- HTTP Security Header über `helmet`
- CORS-Restriktion über erlaubte Origins
- Request-IDs für Nachvollziehbarkeit
- Mandantenkontext über `x-tenant-id`
- Rollen-/Rechteprüfung über Middleware

## Mandantenfähigkeit
- Jeder Datensatz trägt `tenantId`
- Abfragen werden tenant-spezifisch gefiltert
- Perspektivisch: PostgreSQL Row-Level Security (RLS)

## Audit-Log Konzept
- Für jeden Request: `requestId`, `tenantId`, `userId`, Route, Zeitstempel
- Später persistent in `audit_logs` speichern
- Unveränderbarkeit über append-only Strategie

## Nächste Security-Schritte
1. JWT + Refresh Token einführen
2. PostgreSQL mit verschlüsselter Speicherung anbinden
3. Audit-Events revisionssicher persistieren
4. TOMs und Löschkonzept formal dokumentieren
