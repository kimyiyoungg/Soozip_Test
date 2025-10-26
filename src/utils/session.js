export function getOrCreateSessionUUID() {
  let uuid = localStorage.getItem("roombti_session_uuid");
  if (!uuid) {
    uuid = crypto.randomUUID();
    localStorage.setItem("roombti_session_uuid", uuid);
  }
  return uuid;
}