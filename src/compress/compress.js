'use stric';
const renames=require("../rename/rename");
const fs = require('fs');
const c1=((cd)=>{
  /* comentario */
  return cd.replace(/\h*\/\*.*?\*\/\h*/gsm,'');;
});
const c2=((cd)=>{
  // comentario 
  return cd.replace(/\/\*.+?\*\/|\/\/.*(?=[\n\r])/g,"");
});
const c3=((cd)=>{
  // <!-- comentario -->
  return cd.replace(/\h*<!--.*?-->\h*/gsm,'');
});


const regexApp={
  ".js":{
    c1:c1,
    c2:c2
  },
  ".html":{
    ext:".js",
    c3:c3,
  }
}

function writeAr(p,d){
  fs.writeFile(p,d, function(err){
    if(err){
      console.log(err);
    }else{
      console.log('Se ha escrito correctamente');
    }
  });
}

function extTypes(a,data,r) {
  let res=data;
  this.a = a;
  const bel=((extRgx)=>{
    function extsatar(a1){
      this.b= a1;
      for (const key in this.b) {
        if (this.b.hasOwnProperty(key)) {
          const element = this.b[key];
          if(typeof element=="string"){
            //console.log(element)
            construcRgx(regexApp[element]);
          }else{
            res=element(res)
          }
          
        }
      }
    }
    let construcRgx=function (rg) {
      new extsatar(rg)
    }
    construcRgx(extRgx);
    return res;
  });
  this.conte=bel(this.a)
  console.log(r)
  //console.log(res.trim().replace(/\s\s+/g, ' ').split("\n").join(" "))
  //.replace(/\s\s+/g, ' ')
   if(r.path1==r.path2|| r.file=='rename'){
     console.log("re")
     let rPath={};
     rPath[r.path1]=r.path2;
     console.log(rPath)
     renames(rPath)
     writeAr(r.path2,res.trim().replace(/\s\s+/g, ' ').split("\n").join(" "))
   }else{
    writeAr(r.path2,res.trim().replace(/\s\s+/g, ' ').split("\n").join(" "));
   }
  /*fs.writeFile(r.path2,res.trim().replace(/\s\s+/g, ' ').split("\n").join(" "), function(err){
    if(err){
      console.log(err);
    }else{
      console.log('Se ha escrito correctamente');
    }
  });*/
}
function constructor(rgx,data,r) {
 new extTypes(rgx,data,r);
}
//constructor(regexApp[".html"]);

read=((r)=>{
    fs.readFile(r["conten"],'utf8',(err, data) => {
        if (err) throw err;
        const ext = require("path");
        const ext2=ext.basename(r.path2).split("."),
              ext3=[ext2[ext2.length-1]];

        constructor(regexApp["."+ext3[0]],data,r);
    });
});

class compress{
  constructor(){
    let startCompres=function(stCompress){
      this.stCompress=stCompress;

      for (const key in this.stCompress["path"]) {
        if (this.stCompress["path"].hasOwnProperty(key)) {
          const p = this.stCompress["path"][key];
          //console.log(p,key)
          fs.open(key, 'r', (err, fd) => {
            if (err) {
              if (err.code === 'ENOENT') {
                console.error('myfile does not exist');
                return;
              } 
              throw err;
            }
            read({
              conten:fd,
              path1:key,
              path2:p,
              typeCompres:this.stCompress["typeCompres"],
              file:this.stCompress["file"],
            });
          });
        }
      }
    }  
    const compressArt=((press)=>{
      for (const key in press["press"]) {
        if (press["press"].hasOwnProperty(key)) {
          const element = press["press"][key];
          //console.log(element)
          new startCompres(element);
        }
      }
    })   
   return compressArt;
  }
}
module.exports=new compress;
/*new compress({
  press:{
    min:{
      path:{
        "src/compress/example.html":"src/compress/example.min.html",
      },
      typeCompres:"super",
      file:"rename"
    }
  },
})*/