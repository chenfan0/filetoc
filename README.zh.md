# FileToc

为本地的 git 仓库生成 markdown 文件目录。链接到该文件的地址。

**用 FileToc 生成的目录**

<!--filetoc-start-->
- [.husky](https://github.com/chenfan0/filetoc/tree/main/.husky)
  - [pre-commit](https://github.com/chenfan0/filetoc/tree/main/.husky/pre-commit)
- [dist](https://github.com/chenfan0/filetoc/tree/main/dist)
  - [bundle.js](https://github.com/chenfan0/filetoc/tree/main/dist/bundle.js)
- [lib](https://github.com/chenfan0/filetoc/tree/main/lib)
  - [config.ts](https://github.com/chenfan0/filetoc/tree/main/lib/config.ts)
  - [constant.ts](https://github.com/chenfan0/filetoc/tree/main/lib/constant.ts)
  - [createToc.ts](https://github.com/chenfan0/filetoc/tree/main/lib/createToc.ts)
  - [index.ts](https://github.com/chenfan0/filetoc/tree/main/lib/index.ts)
  - [utilis.ts](https://github.com/chenfan0/filetoc/tree/main/lib/utilis.ts)
- [.editorconfig](https://github.com/chenfan0/filetoc/blob/main/.editorconfig)
- [.gitignore](https://github.com/chenfan0/filetoc/blob/main/.gitignore)
- [.npmignore](https://github.com/chenfan0/filetoc/blob/main/.npmignore)
- [.prettierignore](https://github.com/chenfan0/filetoc/blob/main/.prettierignore)
- [.prettierrc](https://github.com/chenfan0/filetoc/blob/main/.prettierrc)
- [filetoc.config.js](https://github.com/chenfan0/filetoc/blob/main/filetoc.config.js)
- [index.js](https://github.com/chenfan0/filetoc/blob/main/index.js)
- [package.json](https://github.com/chenfan0/filetoc/blob/main/package.json)
- [pnpm-lock.yaml](https://github.com/chenfan0/filetoc/blob/main/pnpm-lock.yaml)
- [README.md](https://github.com/chenfan0/filetoc/blob/main/README.md)
- [README.zh.md](https://github.com/chenfan0/filetoc/blob/main/README.zh.md)
- [rollup.config.js](https://github.com/chenfan0/filetoc/blob/main/rollup.config.js)
- [tsconfig.json](https://github.com/chenfan0/filetoc/blob/main/tsconfig.json)
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
export default {
  remoteUrl: 'https://github.com/chenfan0/dirtoc', // 你的仓库远程地址
  mainBranch: 'main', // 你的默认分支，默认为'main'
  dirPath: '.', //  你想要生成toc的目录地址. 默认 '.'
  mdPath: ['./README.md', './README.zh.md'], // markdown文件路径, 当只有一个路径时，也可写成字符串形式.  默认 ['README.md']
  excludes: ['.git'] // 不需要生成toc的文件名或者目录名
}
```

### 指定 toc 生成的位置

**你应该在 markdown 文件中指定插入 toc 的位置**

#### Example

```
<!--filetoc-start-->
toc目录会插入在这里
<!--filetoc-end-->
```

### 执行 filetoc

进入到你本地仓库的目录，并且执行 filetoc 命令:

```
filetoc
```
## 配合git hooks使用
如果你想要在每次commit之前，自动帮你修改md文档。你可以借助[husky](https://github.com/typicode/husky)来实现这个效果。

在终端执行如下命令
```shell
npx husky-init && npm install
```
在生成的husky文件夹下找到**pre-commit**文件，并在该文件中写入：
```
filetoc
git add .
```
