# New #Types files art
manejador de archivos

file manager
# Empezando 
```javascript
  const tfilesArt=require('types-files-art');
```
o directamente a la ruta node_modules/types-files-art/src/typesFilesArt

or directly to the route node_modules/types-files-art/src/typesFilesArt

```javascript
  const tfilesArt=require('./node_modules/types-files-art/src/typesFilesArt');
```
# Funciones - Functions

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

Compressing content in files.

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
           global item, all objects must be within pres:

```javascript
{
press:{objects}
}
```

**main**: hace referencia al grupo de archivos y propiedades que se procesaran, esta referencia pode terner cualquier nombre.

**path**: hace refencia a los archivos que seran modificados, su nombre es unico, no puede ser cambiado:
          refers to the group of files and properties that will be processed, this reference can have any name:

```javascript
path:{
  "src/compress/example.html":"src/compress/example.min.html",
},

path:{
  "entrada":"salida",
},
```
**file**: especifica que el archivo sera renombrado y no se creara un nuevo archivo, debe ser igual a "rename",          al no especificar esta propiedad se creara un nuevo arhivo.
          specifies that the file will be renamed and a new file will not be created, it must be equal to "rename", by not specifying this property a new file will be created.

# Lo que viene - What comes


* Propiedad **typesCompres**: espeficicar el tipo de compresión ("super" o "supercompresión")
* Manejadores para folders
* Propiedad **folders**: espicifica la ruta del folders donde se ejecutara la acción, de esta manera evitar colocar la ruta del archivo en el path, si no unicamente el nombre del archivo a cambiar example:

* Property **TypesCompres**: Specify the type of compression ("super" or "supercompression")
* Handlers for folders.
* Property **Folders**: specifies the path of the folders where the action is executed, thus avoiding placing the path of the file in the path, if not just the name of the file to change example:

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