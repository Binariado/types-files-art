const renames=require("./rename/rename");
const compresS=require("./compress/compress")
class typesFileArt{
   rename(f){
     return renames(f);
   }
   compress(f){
    return compresS(f);
   }
}
module.exports= new typesFileArt;