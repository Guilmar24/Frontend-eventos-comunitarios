import { joinUrl } from './config.js';



async function parseJsonSafe(res) {
  const text = await res.text();
  try {
    return text ? JSON.parse(text) : null;
  } catch {
    return text || null;
  }
}

function buildHeaders(extra) {
  return {
    'Content-Type': 'application/json',
    ...(extra || {})
  };
}

export async function httpPost(path, body, headers) {
  const url = joinUrl(path);
  const res = await fetch(url, {
    method: 'POST',
    headers: buildHeaders(headers),
    body: JSON.stringify(body)
  });

  const data = await parseJsonSafe(res);
  if (!res.ok) {
    const msg = (data && (data.message || data.error || data.errors)) || res.statusText;
    const err = new Error(typeof msg === 'string' ? msg : 'Request failed');
    err.status = res.status;
    err.data = data;
    throw err;
  }
  return data;
}

export async function httpGet(path, headers) {
  const url = joinUrl(path);
  const res = await fetch(url, {
    method: 'GET',
    headers: buildHeaders(headers)
  });

  const data = await parseJsonSafe(res);
  if (!res.ok) {
    const msg = (data && (data.message || data.error || data.errors)) || res.statusText;
    const err = new Error(typeof msg === 'string' ? msg : 'Request failed');
    err.status = res.status;
    err.data = data;
    throw err;
  }
  return data;
}
