module.exports = app => {
	app.get("/cadastrarProduto", (request, response) => {
		response.render('cadastrarProduto');
	});
	
	app.get("/cadastrarFuncionario", (request, response) => {
		response.render('cadastrarFuncionario');
	});
}
