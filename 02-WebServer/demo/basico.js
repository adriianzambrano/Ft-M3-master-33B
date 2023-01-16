var http = require('http'); // importamos el módulo http para poder trabajar con el protocolo

http.createServer( function(req, res){ // Creamos una serie de events listener, que van a escuchar por requests que ocurren en este socket
	// Para crear un response empezamos escribiendo el header
	// console.log("Resuesta====> ", req.url);
	// var nombre = "joaqui adrian Zambrano";
	// console.log("Nombre---->  ", encodeURI(nombre))
	res.writeHead(200, { 'Content-Type':'text/plain' }) //Le ponemos el status code y algunos pair-values en el header
	res.end('Hola, Mundo!\n');


}).listen(1337, ()=>{
	console.log("http://localhost:1337");

}); //Por último tenemos que especificar en que puerto y en qué dirección va a estar escuchando nuestro servidor

	//'127.0.0.1'
