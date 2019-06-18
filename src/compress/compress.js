const fs = require('fs');
const readline = require('readline');

/*const rl = readline.createInterface({
  input: fs.createReadStream('src/compress/example.js'),
  crlfDelay: Infinity
});
let l="";
rl.on('line', (line) => {
    l
  console.log(`${line}`);
});*/

function read(r){
    const commmet={
        "/*":"*/",
        "//":"/1",
    }
    let deletes=false;
    let closeComent="";
    fs.readFile(r,'utf8',(err, data) => {
        if (err) throw err;
        //console.log(data.split(/(\d)/));
        const d=data.split('\n');
        for (const key in d){
            if (d.hasOwnProperty(key)) {
                const element = d[key];
                const line=element.trim();
                const deleteComent=commmet[line.substring(0,2)];
                console.log(line);
                            
            }
        }
    }); 
}
fs.open('src/compress/example.js', 'r', (err, fd) => {
  if (err) {
    if (err.code === 'ENOENT') {
      console.error('myfile does not exist');
      return;
    }

    throw err;
  }
  read(fd);
});

