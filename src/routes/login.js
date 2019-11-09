module.exports = app => {
	app.get('/login', (request, response) => {
		response.render('login');
	});
	
	app.post('/validarLogin', (request, response) => {});
}
