export async function Logins(authDetail) {
  const response = await fetch(`${process.env.REACT_APP_HOSTLOGIN}/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(authDetail),
  });
  const data = await response.json();
  return data;
}
export async function Registeration(authDetail) {
  const response = await fetch(`${process.env.REACT_APP_HOSTLOGIN}/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(authDetail),
  });
  const data = await response.json();
  return data;
}
