#Types files art
manejador de archivos

# Empezando 
```javascript
  const tfilesArt=require('types-files-art');
```
o directamente a la ruta node_modules/types-files-art/src/typesFilesArt


```javascript
  const tfilesArt=require('./node_modules/types-files-art/src/typesFilesArt');
```
# Funciones

## Rename
Renombrando archivos.

Renaming files.

```javascript
const nameFileProd={
    "dist/example.js":"dist/example.pro.js",
    "dist/example.css":"dist/example.pro.css",
    "dist/example.html":"dist/example.pro.html",
}
tfilesArt.rename(nameFileProd);
```

## Compress
Comprimiendo contenido en archivos.

```javascript
tfilesArt.compress({
  press:{
    main:{
      path:{
        "src/compress/example.html":"src/compress/example.min.html",
      },
      file:"rename"
    }
  },
})
```
###### *Propiedates - Propiedates*
**press**: item global, todos los objetos deben estar dentro pres:
           

```javascript
{
press:{objects}
}
```

**main**: hace referencia al grupo de archivos y propiedades que se procesaran, esta referencia pode terner              cualquier nombre.
          

**path**: hace refencia a los archivos que seran modificados, su nombre es unico, no puede ser cambiado:
          

```javascript
path:{
  "src/compress/example.html":"src/compress/example.min.html",
},

path:{
  "entrada":"salida",
},
```
**file**: especifica que el archivo sera renombrado y no se creara un nuevo archivo, debe ser igual a "rename",          al no especificar esta propiedad se creara un nuevo arhivo.

# Lo que viene - What comes


* Propiedad **typesCompres**: espeficicar el tipo de compresión ("super" o "supercompresión")
* Manejadores para folders
* Propiedad **folders**: espicifica la ruta del folders donde se ejecutara la acción, de esta manera evitar colocar la ruta del archivo en el path, si no unicamente el nombre del archivo a cambiar example:

```javascript
tfilesArt.compress({
  press:{
    main:{
      path:{
        "example.html":"example.min.html",
      },
      folders:{
       "src/compress/":"comp/"
       }
    }
  },
})
```

# MIT License

Copyright (c) 2019, Brayan Salgado Navarro