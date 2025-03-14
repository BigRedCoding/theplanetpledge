class Api {
  constructor({ baseUrl, headers }) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }

  _responseCheck(res) {
    if (res.ok) {
      return res.json();
    }
    return res.json().then((error) => {
      return Promise.reject(`Error: ${error.message}`);
    });
  }

  getAllPledges() {
    return fetch(`${this._baseUrl}/pledges`, {
      method: "GET",
      headers: this._headers,
    })
      .then((res) => this._responseCheck(res))
      .then((res) => {
        return res.data;
      })
      .catch((error) => {
        console.error(error);
      });
  }

  addPledge(pledge) {
    return fetch(`${this._baseUrl}/pledges`, {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify({
        description: pledge,
      }),
    })
      .then((res) => this._responseCheck(res))
      .then((res) => res.data)
      .catch((error) => {
        console.error(error);
        return Promise.reject(`Error: ${error.message}`);
      });
  }
}

export default Api;
