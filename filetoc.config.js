module.exports = {
  remoteUrl: 'https://github.com/chenfan0/filetoc', // 仓库地址
  mainBranch: 'main', // 主分支
  dirPath: '.', // 要生成toc的目录路径
  mdPath: ['./README.md', './README.zh.md'], // 生成的toc添加到的md文件路径
  excludes: ['.git', 'node_modules', '_']
}
