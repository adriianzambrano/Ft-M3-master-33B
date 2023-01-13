const process = require('process');

function consola (){
    process.stdout.write('Dime = ')
    process.stdin.on('data', (d)=>{
         console.log(d.toString())
         process.stdout.write('Dime =  ')
    })
}

consola()