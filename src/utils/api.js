const baseUrl =
  process.env.NODE_ENV === "production"
    ? "https://api.theplanetpledge.justlearning.net"
    : "http://localhost:3001";

console.log(baseUrl);

export function responseCheck(res) {
  if (res.ok) {
    return res.json();
  }
  return res.json().then((error) => {
    return Promise.reject(`Error: ${error.message || "Unknown error"}`);
  });
}

export async function getAllPledges() {
  try {
    const res = await fetch(`${baseUrl}/pledges`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });

    return responseCheck(res);
  } catch (error) {
    console.error("Error fetching pledges:", error);
  }
}

export async function addPledge(pledge) {
  try {
    const res = await fetch(`${baseUrl}/pledges`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        description: pledge,
      }),
    });

    const data = await responseCheck(res);
    return data;
  } catch (error) {
    console.error("Error adding pledge:", error);
    return Promise.reject(`Error: ${error.message || "Unknown error"}`);
  }
}

export async function deletePledges() {
  try {
    const res = await fetch(`${baseUrl}/pledges`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    });

    return responseCheck(res);
  } catch (error) {
    console.error("Error fetching pledges:", error);
  }
}
