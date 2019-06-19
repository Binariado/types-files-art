#Doc
[inglish](https://github.com/Binariado/types-files-art/blob/master/README.md), [Español](https://github.com/Binariado/types-files-art/tree/master/languague-Doc/español.md)
# Types files art
file manager

# Start 
```javascript
  const tfilesArt=require('types-files-art');
```

or directly to the route node_modules/types-files-art/src/typesFilesArt

```javascript
  const tfilesArt=require('./node_modules/types-files-art/src/typesFilesArt');
```
# Functions

## Rename

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
###### *Propiedates*

**press**: global item, all objects must be within pres:

```javascript
{
press:{objects}
}
```

**main**: It refers to the group of files and properties that are processed, this reference can be any name.

**path**: refers to the group of files and properties that will be processed, this reference can have any name:

```javascript
path:{
  "src/compress/example.html":"src/compress/example.min.html",
},

path:{
  "entrada":"salida",
},
```
**file**: specifies that the file will be renamed and a new file will not be created, it must be equal to                "rename", by not specifying this property a new file will be created.

# What comes

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