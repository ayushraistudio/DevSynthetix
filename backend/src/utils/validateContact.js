export function validateContactPayload(payload) {
  const errors = [];

  if (!payload.name || payload.name.trim().length < 2) {
    errors.push("Name must be at least 2 characters.");
  }

  if (!payload.email || !/^\S+@\S+\.\S+$/.test(payload.email)) {
    errors.push("A valid email is required.");
  }

  if (!payload.message || payload.message.trim().length < 20) {
    errors.push("Message must be at least 20 characters.");
  }

  return {
    isValid: errors.length === 0,
    errors
  };
}
