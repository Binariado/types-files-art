'use stric';

class regex{
    static c1(d){
        const c1=((cd)=>{
            /* comentario */
            return cd.replace(/\h*\/\*.*?\*\/\h*/gsm,'');;
        });
        return c1(d);
    }  
    static c2(d){
      const c2=((cd)=>{
        // comentario 
        return cd.replace(/\/\*.+?\*\/|\/\/.*(?=[\n\r])/g,"");
      }); 
      return c2(d);
    }
    static c3(d){
        const c3=((cd)=>{
            // <!-- comentario -->
            return cd.replace(/\h*<!--.*?-->\h*/gsm,'');
        });
        return c3(d);
    }
}

module.exports=regex;