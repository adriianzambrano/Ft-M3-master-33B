var http = require('http');
var fs   = require('fs');

http.createServer( function(req, res){ 
	if( req.url === '/33b'){ //Si la URL es / devolvemos el HTML
		res.writeHead(200, { 'Content-Type':'text/html' })
		var html = fs.readFileSync('./html/index.html');
		res.end("Hola MUndo Prueba 33b");
	}
	if( req.url === '/'){
		res.writeHead(200, { 'Content-Type':'text/html' })
		var html = fs.readFileSync('./html/index.html');
		res.end(html);
	}if(req.url === '/api'){
		res.writeHead(200, { 'Content-Type':'application/json' })
		var obj = {
			nombre: 'Juan',
			apellido: 'Perez'
		};	
		res.end( JSON.stringify(obj) );
	} else{
		var htmlerror = fs.readFileSync('./html/error.html')
		res.writeHead(404, { 'Content-Type':'text/html' }); //Ponemos el status del response a 404: Not Found
		res.end(htmlerror); //No devolvemos nada más que el estado.
	}
	
}).listen(1337, '127.0.0.1');