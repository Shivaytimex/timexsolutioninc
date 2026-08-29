const defaultFormEndpoint = "https://api.web3forms.com/submit";

function isPlaceholder(value = "") {
  return /(^|[./_-])(your|example|placeholder)([./_-]|$)/i.test(value) || value.includes("localhost");
}

export function getFormDeliveryConfig({ endpoint, accessKey }) {
  const normalizedEndpoint = endpoint?.trim() || defaultFormEndpoint;
  const normalizedKey = accessKey?.trim() || "";

  try {
    const url = new URL(normalizedEndpoint);
    const configured = url.protocol === "https:" && Boolean(normalizedKey) && !isPlaceholder(normalizedKey);
    return { endpoint: url.toString(), accessKey: normalizedKey, configured };
  } catch {
    return { endpoint: defaultFormEndpoint, accessKey: normalizedKey, configured: false };
  }
}

export function isConfiguredBackend(value) {
  if (!value || isPlaceholder(value)) return false;
  try {
    const url = new URL(value);
    return url.protocol === "https:";
  } catch {
    return false;
  }
}
