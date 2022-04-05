# FileToc
<div align=center> 

  [中文](https://github.com/chenfan0/filetoc/blob/main/README.zh.md)
<div align=left>
Generates table of contents for markdown files inside local git repository. Link to file address.

**Table of Contents generated with FileToc**
<!--filetoc-start-->
- [.husky](https://github.com/chenfan0/filetoc/tree/main/.husky)
  - [pre-commit](https://github.com/chenfan0/filetoc/tree/main/.husky/pre-commit)
- [lib](https://github.com/chenfan0/filetoc/tree/main/lib)
  - [config.js](https://github.com/chenfan0/filetoc/tree/main/lib/config.js)
  - [constant.js](https://github.com/chenfan0/filetoc/tree/main/lib/constant.js)
  - [createToc.js](https://github.com/chenfan0/filetoc/tree/main/lib/createToc.js)
  - [index.js](https://github.com/chenfan0/filetoc/tree/main/lib/index.js)
  - [utilis.js](https://github.com/chenfan0/filetoc/tree/main/lib/utilis.js)
- [.gitignore](https://github.com/chenfan0/filetoc/blob/main/.gitignore)
- [filetoc.config.js](https://github.com/chenfan0/filetoc/blob/main/filetoc.config.js)
- [index.js](https://github.com/chenfan0/filetoc/blob/main/index.js)
- [package.json](https://github.com/chenfan0/filetoc/blob/main/package.json)
- [pnpm-lock.yaml](https://github.com/chenfan0/filetoc/blob/main/pnpm-lock.yaml)
- [README.md](https://github.com/chenfan0/filetoc/blob/main/README.md)
- [README.zh.md](https://github.com/chenfan0/filetoc/blob/main/README.zh.md)
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
  mdPath: ['./README.md', './README.zh.md'],  // the markdown files path, when there is only one path, it also can be a string.  default ['README.md']
  excludes: ['.git']  // the excludes file name or dir name
}
```
### Specifying location of toc
**You should specify where to insert the TOC in your markdown file.**
#### Example
```
<!--filetoc-start1-->
the toc will insert here
<!--filetoc-end1-->
```
### Run filetoc
Go into the directory that contains you local git project and type:
```
filetoc
```
