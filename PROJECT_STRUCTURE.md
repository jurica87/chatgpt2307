# PROJECT STRUCTURE

```
.
├── backend/
│   ├── .env.example
│   ├── package.json
│   └── src/
│       ├── app.js
│       ├── server.js
│       ├── config/
│       │   └── roles.js
│       ├── db/
│       │   └── postgres.js
│       ├── middleware/
│       │   ├── audit-logger.js
│       │   ├── auth-context.js
│       │   ├── request-context.js
│       │   └── require-permission.js
│       ├── modules/patients/
│       │   ├── patient.controller.js
│       │   ├── patient.repository.js
│       │   └── patient.service.js
│       └── routes/
│           ├── health.routes.js
│           └── patient.routes.js
├── frontend/
│   ├── index.html
│   ├── package.json
│   ├── vite.config.js
│   └── src/
│       ├── App.jsx
│       ├── main.jsx
│       ├── layouts/AppLayout.jsx
│       ├── pages/PatientDashboardPage.jsx
│       └── styles/global.css
├── README.md
├── SECURITY_DSGVO.md
├── SETUP.md
└── PROJECT_STRUCTURE.md
```
