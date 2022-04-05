# FileToc
<div align=center> 

  [中文](https://github.com/chenfan0/filetoc/blob/main/README.zh.md)
<div align=left>
Generates table of contents for markdown files inside local git repository. Link to file address.

**Table of Contents generated with FileToc**
<!--filetoc-start-->
- [.husky](https://github.com/chenfan0/filetoc/tree/main/.husky)
  - [_](https://github.com/chenfan0/filetoc/tree/main/.husky/_)
    - [.gitignore](https://github.com/chenfan0/filetoc/tree/main/.husky/_/.gitignore)
    - [husky.sh](https://github.com/chenfan0/filetoc/tree/main/.husky/_/husky.sh)
  - [pre-commit](https://github.com/chenfan0/filetoc/tree/main/.husky/pre-commit)
- [lib](https://github.com/chenfan0/filetoc/tree/main/lib)
  - [config.js](https://github.com/chenfan0/filetoc/tree/main/lib/config.js)
  - [constant.js](https://github.com/chenfan0/filetoc/tree/main/lib/constant.js)
  - [createToc.js](https://github.com/chenfan0/filetoc/tree/main/lib/createToc.js)
  - [index.js](https://github.com/chenfan0/filetoc/tree/main/lib/index.js)
  - [utilis.js](https://github.com/chenfan0/filetoc/tree/main/lib/utilis.js)
- [node_modules](https://github.com/chenfan0/filetoc/tree/main/node_modules)
  - [.bin](https://github.com/chenfan0/filetoc/tree/main/node_modules/.bin)
    - [husky](https://github.com/chenfan0/filetoc/tree/main/node_modules/.bin/husky)
    - [husky.CMD](https://github.com/chenfan0/filetoc/tree/main/node_modules/.bin/husky.CMD)
    - [husky.ps1](https://github.com/chenfan0/filetoc/tree/main/node_modules/.bin/husky.ps1)
  - [.pnpm](https://github.com/chenfan0/filetoc/tree/main/node_modules/.pnpm)
    - [husky@7.0.4](https://github.com/chenfan0/filetoc/tree/main/node_modules/.pnpm/husky@7.0.4)
      - [node_modules](https://github.com/chenfan0/filetoc/tree/main/node_modules/.pnpm/husky@7.0.4/node_modules)
        - [husky](https://github.com/chenfan0/filetoc/tree/main/node_modules/.pnpm/husky@7.0.4/node_modules/husky)
          - [lib](https://github.com/chenfan0/filetoc/tree/main/node_modules/.pnpm/husky@7.0.4/node_modules/husky/lib)
            - [bin.d.ts](https://github.com/chenfan0/filetoc/tree/main/node_modules/.pnpm/husky@7.0.4/node_modules/husky/lib/bin.d.ts)
            - [bin.js](https://github.com/chenfan0/filetoc/tree/main/node_modules/.pnpm/husky@7.0.4/node_modules/husky/lib/bin.js)
            - [index.d.ts](https://github.com/chenfan0/filetoc/tree/main/node_modules/.pnpm/husky@7.0.4/node_modules/husky/lib/index.d.ts)
            - [index.js](https://github.com/chenfan0/filetoc/tree/main/node_modules/.pnpm/husky@7.0.4/node_modules/husky/lib/index.js)
          - [node_modules](https://github.com/chenfan0/filetoc/tree/main/node_modules/.pnpm/husky@7.0.4/node_modules/husky/node_modules)
            - [.bin](https://github.com/chenfan0/filetoc/tree/main/node_modules/.pnpm/husky@7.0.4/node_modules/husky/node_modules/.bin)
              - [husky](https://github.com/chenfan0/filetoc/tree/main/node_modules/.pnpm/husky@7.0.4/node_modules/husky/node_modules/.bin/husky)
              - [husky.CMD](https://github.com/chenfan0/filetoc/tree/main/node_modules/.pnpm/husky@7.0.4/node_modules/husky/node_modules/.bin/husky.CMD)
              - [husky.ps1](https://github.com/chenfan0/filetoc/tree/main/node_modules/.pnpm/husky@7.0.4/node_modules/husky/node_modules/.bin/husky.ps1)
          - [husky.sh](https://github.com/chenfan0/filetoc/tree/main/node_modules/.pnpm/husky@7.0.4/node_modules/husky/husky.sh)
          - [LICENSE](https://github.com/chenfan0/filetoc/tree/main/node_modules/.pnpm/husky@7.0.4/node_modules/husky/LICENSE)
          - [package.json](https://github.com/chenfan0/filetoc/tree/main/node_modules/.pnpm/husky@7.0.4/node_modules/husky/package.json)
          - [README.md](https://github.com/chenfan0/filetoc/tree/main/node_modules/.pnpm/husky@7.0.4/node_modules/husky/README.md)
    - [lock.yaml](https://github.com/chenfan0/filetoc/tree/main/node_modules/.pnpm/lock.yaml)
  - [.modules.yaml](https://github.com/chenfan0/filetoc/tree/main/node_modules/.modules.yaml)
  - [husky](https://github.com/chenfan0/filetoc/tree/main/node_modules/husky)
  - [rollup](https://github.com/chenfan0/filetoc/tree/main/node_modules/rollup)
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
  mdPath: './README.md',  // the markdown  file path.  default 'README.md'
  excludes: ['.git']  // the excludes file name or dir name
}
```
### Specifying location of toc
**You should specify where to insert the TOC in your markdown file.**
#### Example
```
<!--filetoc-start-->
- [.husky](https://github.com/chenfan0/filetoc/tree/main/.husky)
  - [_](https://github.com/chenfan0/filetoc/tree/main/.husky/_)
    - [.gitignore](https://github.com/chenfan0/filetoc/tree/main/.husky/_/.gitignore)
    - [husky.sh](https://github.com/chenfan0/filetoc/tree/main/.husky/_/husky.sh)
  - [pre-commit](https://github.com/chenfan0/filetoc/tree/main/.husky/pre-commit)
- [lib](https://github.com/chenfan0/filetoc/tree/main/lib)
  - [config.js](https://github.com/chenfan0/filetoc/tree/main/lib/config.js)
  - [constant.js](https://github.com/chenfan0/filetoc/tree/main/lib/constant.js)
  - [createToc.js](https://github.com/chenfan0/filetoc/tree/main/lib/createToc.js)
  - [index.js](https://github.com/chenfan0/filetoc/tree/main/lib/index.js)
  - [utilis.js](https://github.com/chenfan0/filetoc/tree/main/lib/utilis.js)
- [node_modules](https://github.com/chenfan0/filetoc/tree/main/node_modules)
  - [.bin](https://github.com/chenfan0/filetoc/tree/main/node_modules/.bin)
    - [husky](https://github.com/chenfan0/filetoc/tree/main/node_modules/.bin/husky)
    - [husky.CMD](https://github.com/chenfan0/filetoc/tree/main/node_modules/.bin/husky.CMD)
    - [husky.ps1](https://github.com/chenfan0/filetoc/tree/main/node_modules/.bin/husky.ps1)
  - [.pnpm](https://github.com/chenfan0/filetoc/tree/main/node_modules/.pnpm)
    - [husky@7.0.4](https://github.com/chenfan0/filetoc/tree/main/node_modules/.pnpm/husky@7.0.4)
      - [node_modules](https://github.com/chenfan0/filetoc/tree/main/node_modules/.pnpm/husky@7.0.4/node_modules)
        - [husky](https://github.com/chenfan0/filetoc/tree/main/node_modules/.pnpm/husky@7.0.4/node_modules/husky)
          - [lib](https://github.com/chenfan0/filetoc/tree/main/node_modules/.pnpm/husky@7.0.4/node_modules/husky/lib)
            - [bin.d.ts](https://github.com/chenfan0/filetoc/tree/main/node_modules/.pnpm/husky@7.0.4/node_modules/husky/lib/bin.d.ts)
            - [bin.js](https://github.com/chenfan0/filetoc/tree/main/node_modules/.pnpm/husky@7.0.4/node_modules/husky/lib/bin.js)
            - [index.d.ts](https://github.com/chenfan0/filetoc/tree/main/node_modules/.pnpm/husky@7.0.4/node_modules/husky/lib/index.d.ts)
            - [index.js](https://github.com/chenfan0/filetoc/tree/main/node_modules/.pnpm/husky@7.0.4/node_modules/husky/lib/index.js)
          - [node_modules](https://github.com/chenfan0/filetoc/tree/main/node_modules/.pnpm/husky@7.0.4/node_modules/husky/node_modules)
            - [.bin](https://github.com/chenfan0/filetoc/tree/main/node_modules/.pnpm/husky@7.0.4/node_modules/husky/node_modules/.bin)
              - [husky](https://github.com/chenfan0/filetoc/tree/main/node_modules/.pnpm/husky@7.0.4/node_modules/husky/node_modules/.bin/husky)
              - [husky.CMD](https://github.com/chenfan0/filetoc/tree/main/node_modules/.pnpm/husky@7.0.4/node_modules/husky/node_modules/.bin/husky.CMD)
              - [husky.ps1](https://github.com/chenfan0/filetoc/tree/main/node_modules/.pnpm/husky@7.0.4/node_modules/husky/node_modules/.bin/husky.ps1)
          - [husky.sh](https://github.com/chenfan0/filetoc/tree/main/node_modules/.pnpm/husky@7.0.4/node_modules/husky/husky.sh)
          - [LICENSE](https://github.com/chenfan0/filetoc/tree/main/node_modules/.pnpm/husky@7.0.4/node_modules/husky/LICENSE)
          - [package.json](https://github.com/chenfan0/filetoc/tree/main/node_modules/.pnpm/husky@7.0.4/node_modules/husky/package.json)
          - [README.md](https://github.com/chenfan0/filetoc/tree/main/node_modules/.pnpm/husky@7.0.4/node_modules/husky/README.md)
    - [lock.yaml](https://github.com/chenfan0/filetoc/tree/main/node_modules/.pnpm/lock.yaml)
  - [.modules.yaml](https://github.com/chenfan0/filetoc/tree/main/node_modules/.modules.yaml)
  - [husky](https://github.com/chenfan0/filetoc/tree/main/node_modules/husky)
  - [rollup](https://github.com/chenfan0/filetoc/tree/main/node_modules/rollup)
- [.gitignore](https://github.com/chenfan0/filetoc/blob/main/.gitignore)
- [filetoc.config.js](https://github.com/chenfan0/filetoc/blob/main/filetoc.config.js)
- [index.js](https://github.com/chenfan0/filetoc/blob/main/index.js)
- [package.json](https://github.com/chenfan0/filetoc/blob/main/package.json)
- [pnpm-lock.yaml](https://github.com/chenfan0/filetoc/blob/main/pnpm-lock.yaml)
- [README.md](https://github.com/chenfan0/filetoc/blob/main/README.md)
- [README.zh.md](https://github.com/chenfan0/filetoc/blob/main/README.zh.md)
<!--filetoc-end-->
```
### Run filetoc
Go into the directory that contains you local git project and type:
```
filetoc
```
