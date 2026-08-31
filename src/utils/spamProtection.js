const MINIMUM_COMPLETION_TIME = 3000;
const SUBMISSION_WINDOW = 60_000;

export function createFormGuard() {
  return { startedAt: Date.now() };
}

export function isLikelySpam({ honeypot = "", startedAt = 0, formName = "form" }) {
  if (honeypot.trim() || Date.now() - startedAt < MINIMUM_COMPLETION_TIME) return true;

  try {
    const key = `timex_form_${formName}`;
    const previous = Number(sessionStorage.getItem(key) || 0);
    if (previous && Date.now() - previous < SUBMISSION_WINDOW) return true;
    sessionStorage.setItem(key, String(Date.now()));
  } catch {
    // Storage can be unavailable in private browsing; the other checks still apply.
  }
  return false;
}
