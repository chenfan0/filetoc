# FileToc
为本地的git仓库生成markdown文件目录。链接到该文件的地址。

**用FileToc生成的目录**
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

## 安装
```shell
npm install filetoc -g
```
## 使用

### 创建一个配置文件(filetoc.config.js)
#### 例子
```js
// filetoc.config.js
module.exports = {
  remoteUrl: 'https://github.com/chenfan0/dirtoc',   // 你的仓库远程地址
  mainBranch: 'main',  // 你的默认分支，默认为'main'
  dirPath: '.',  //  你想要生成toc的目录地址. 默认 '.'
  mdPath: ['./README.md', './README.zh.md'],  // markdown文件路径, 当只有一个路径时，也可写成字符串形式.  默认 ['README.md']
  excludes: ['.git', 'node_module', '_']  // 不需要生成toc的文件名或者目录名
}
```
### 指定toc生成的位置
**你应该在markdown文件中指定插入toc的位置**
#### Example
```
<!--filetoc-start-->
toc目录将会插入在这里
<!--filetoc-end-->
```
### 执行 filetoc
进入到你本地仓库的目录，并且执行filetoc命令:
```
filetoc
```
