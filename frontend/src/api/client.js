const BASE = 'http://localhost:4000';

const defaultHeaders = {
  'Content-Type': 'application/json',
  'x-tenant-id': 'demo-tenant',
  'x-user-role': 'admin'
};

export async function api(path, options = {}) {
  const response = await fetch(`${BASE}${path}`, {
    ...options,
    headers: {
      ...defaultHeaders,
      ...(options.headers || {})
    }
  });

  const payload = await response.json();

  if (!response.ok) {
    throw new Error(payload.error || 'API request failed');
  }

  return payload;
}
