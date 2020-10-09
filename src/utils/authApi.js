class AuthApi {
	constructor(options) {
		this.options = options;
	}

	register(credentials) {
		return this.request("/signup", "POST", JSON.stringify(credentials));
	}

	authorize(credentials) {
		return this.request("/signin", "POST", JSON.stringify(credentials))
	}
	request(authApi, method, body) {
		return fetch(`${this.options.baseUrl}${authApi}`, {
			headers: this.options.headers,
			method,
			body,
		}).then(async (res) => {
			if (res.ok) {
				return res.json();
			}
			const body = await res.json();
			return Promise.reject(body.error || body.message);
		});
	}
}

const authApi = new AuthApi({
	baseUrl: "https://register.nomoreparties.co",
	headers: {
		"Content-Type": "application/json",
	},
});

export default authApi;
