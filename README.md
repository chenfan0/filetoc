# FileToc
Generates table of contents for markdown files inside local git repository. Link to file address.

**Table of Contents generated with FileToc**
<!--filetoc-start-->
- [lib](https://github.com/chenfan0/filetoc/tree/main/lib)
  - [config.js](https://github.com/chenfan0/filetoc/tree/main/lib/config.js)
  - [constant.js](https://github.com/chenfan0/filetoc/tree/main/lib/constant.js)
  - [createToc.js](https://github.com/chenfan0/filetoc/tree/main/lib/createToc.js)
  - [index.js](https://github.com/chenfan0/filetoc/tree/main/lib/index.js)
  - [utilis.js](https://github.com/chenfan0/filetoc/tree/main/lib/utilis.js)
- [filetoc.config.js](https://github.com/chenfan0/filetoc/blob/main/filetoc.config.js)
- [index.js](https://github.com/chenfan0/filetoc/blob/main/index.js)
- [package.json](https://github.com/chenfan0/filetoc/blob/main/package.json)
- [README.md](https://github.com/chenfan0/filetoc/blob/main/README.md)
<!--filetoc-end-->

## Installation
```shell
npm install filetoc -g
```
## Usage

### Create a config File(filetoc.config.js)
#### Examples
```js
// filetoc.config.js
module.exports = {
  remoteUrl: 'https://github.com/chenfan0/dirtoc',   // your repo address
  mainBranch: 'main',  // your default branch. default 'main'
  dirPath: '.',  //  the dir where you want to gengerate the toc. default '.'
  mdPath: './README.md',  // the markdown  file path.  default 'README.md'
  excludes: ['.git']  // the excludes file name or dir name
}
```
### Specifying location of toc
**You should specify where to insert the TOC in your markdown file.**
#### Example
```
<!--filetoc-start-->
<!--filetoc-end-->
```
### Run filetoc
Go into the directory that contains you local git project and type:
```
filetoc
```
