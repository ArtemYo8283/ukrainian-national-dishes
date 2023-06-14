class AppRouter {
	constructor(app) { this.app = app }
	init() {
		this.app.get('/', (_req, res) => {
			res.send('API Running');
		});

	}
}

export default AppRouter;