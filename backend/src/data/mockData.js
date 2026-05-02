export const db = {
  patients: [
    { id: 'p1', tenantId: 'demo-tenant', name: 'Anna Keller', birthDate: '1985-04-01', status: 'stabil', warnings: ['Dekubitusrisiko'], tasksOpen: 2 },
    { id: 'p2', tenantId: 'demo-tenant', name: 'Mehmet Yildiz', birthDate: '1979-11-19', status: 'beobachtung', warnings: ['Erhöhte Atemfrequenz'], tasksOpen: 1 }
  ],
  shifts: {}, measures: { p1: [{ id: 'm1', title: 'Absaugen', status: 'offen', comment: '' },{ id: 'm2', title: 'Lagerung 30°', status: 'erledigt', comment: '' }] }, vitals: { p1: [] }, docs: { p1: [] }
};
