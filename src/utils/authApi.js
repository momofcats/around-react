class AuthApi {
	constructor(options) {
		this.options = options;
	}

	register({ email, password }) {
		return this.request("/signup", "POST", JSON.stringify({ email, password }));
	}

	request(authApi, method, body) {
		return fetch(`${this.options.baseUrl}${authApi}`, {
			headers: this.options.headers,
			method,
			body,
		}).then((res) => {
			if (res.ok) {
				return res.json();
			}
			return Promise.reject(`Error: ${res.status}`);
		});
	}
}

const authApi = new AuthApi({
	baseUrl: "https://around.nomoreparties.co",
	headers: {
    authorization: "2ea24103-3839-4671-8e47-57675e6fba9c",
		"Content-Type": "application/json",
	},
});

export default authApi;
