const renames=require("./rename/rename");
class typesFileArt{
   rename(f){
     return renames(f);
   }
}
module.exports= renames;