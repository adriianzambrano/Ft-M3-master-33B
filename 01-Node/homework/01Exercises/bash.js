
const process = require("process"); // process nativo de Node - solo hay que traerlo
const commands = require("./commands/index.js");

function print(output){
  process.stdout.write(output)
  process.stdout.write( "\nprompt > ")
}
function bash() {
  process.stdout.write("prompt > ")
  process.stdin.on('data', (data)=>{
    var args = data.toString().trim().split(" ")
    var cmd = args.shift()
    //console.log("---> ", args)
    if(commands.hasOwnProperty(cmd)){
      commands[cmd](print, args.join(" "))
    }else{
      print(`command not found: ${cmd}`)
    }
  

  })
}

bash();
module.exports = {
  print,
  bash,
};
