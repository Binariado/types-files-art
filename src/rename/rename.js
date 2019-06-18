const fs = require('fs');
let renameFile=class{
    constructor(){
        class filesRename{
            static rename(name, renplacename){
                if(name=="test"){
                    return "ok";
                }else{
                    fs.rename(name, renplacename, (err) => {
                        if (err) throw err;
                        /*fs.stat('dist/ulo.confi.js', (err, stats) => {
                          if (err) throw err;
                          console.log(`stats: ${JSON.stringify(stats)}`);
                        });*/
                    });
                }
            }
        }
        return filesRename.prototype.renames=(object)=>{
            for (const key in object) {
                if (object.hasOwnProperty(key)) {
                    const element = object[key];
                   const res=filesRename.rename(key,element);
                   if(res!=undefined){
                       return res;
                   }
                }
            }
        }
    }
}
module.exports= new renameFile;