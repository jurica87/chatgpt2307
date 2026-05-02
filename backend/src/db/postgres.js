// Vorbereitung für PostgreSQL-Integration.
// Für den MVP wird noch ein In-Memory-Store genutzt.
export function getDb() {
  return {
    query: async () => {
      throw new Error('PostgreSQL not connected yet. Implement with pg/Prisma in next step.');
    }
  };
}
