
class Api {
  constructor(options) {
    this.options = options;
  }

  getInitialCards() {
    return this.request("/cards");
  }

  getUserInfo() {
    return this.request("/users/me");
  }

  getAppInfo() {
    return Promise.all([this.getInitialCards(), this.getUserInfo()]);
  }

  request(api, method, body) {
    return fetch(`${this.options.baseUrl}${api}`, {
      headers: this.options.headers,
      method,
      body,
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Error: ${res.status}`);
      })
  }
}
const api = new Api({
  baseUrl: "https://around.nomoreparties.co/v1/group-2",
  headers: {
    authorization: "2ea24103-3839-4671-8e47-57675e6fba9c",
    "Content-Type": "application/json",
  },
});

export default api;