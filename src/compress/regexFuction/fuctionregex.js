const regex=require('./regex');
const regexApp={
    ".js":{
      c1:regex.c1,
      c2:regex.c2
    },
    ".html":{
      ext:".js",
      c3:regex.c3,
    }
}

module.exports=regexApp;