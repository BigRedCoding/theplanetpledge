const baseUrl =
  process.env.NODE_ENV === "production"
    ? "https://api.theplanetpledge.justlearning.net"
    : "http://localhost:3001";

export function responseCheck(res) {
  if (res.ok) {
    return res.json();
  }
  return res.json().then((error) => {
    return Promise.reject(`Error: ${error.message}`);
  });
}

export async function getAllPledges() {
  return fetch(`${baseUrl}/pledges`, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  })
    .then((res) => responseCheck(res))
    .then((res) => {
      return res;
    })
    .catch((error) => {
      console.error(error);
    });
}

export async function addPledge(pledge) {
  return fetch(`${baseUrl}/pledges`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      description: pledge,
    }),
  })
    .then((res) => responseCheck(res))
    .then((res) => res.data)
    .catch((error) => {
      console.error(error);
      return Promise.reject(`Error: ${error.message}`);
    });
}
