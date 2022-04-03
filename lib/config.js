const { join, handleBaseUrl } = require('./utilis')
const { CONFIG_NAME } = require('./constant')

const cwd = process.cwd()

function getConfig(cwd, path) {
  return require(join(cwd, path))
}

let config
try {
  config = getConfig(cwd, CONFIG_NAME)
} catch (err) {
  config = {}
}

// 要生成toc的文件夹路径
const dirPath = config.dirPath || './'
// 主分支名称，在生成链接时会使用到
const mainBranch = config.mainBranch || 'main'
// 要添加toc的md文件路径
const mdPath = config.mdPath || 'README.md'
// 远程仓库的地址
const remoteUrl = config.remoteUrl || ''
const excludes = config.excludes || []
const baseUrl = handleBaseUrl(remoteUrl, dirPath, mainBranch)
const readDirSyncOptions = { withFileTypes: true };

module.exports = {
  cwd,
  dirPath,
  mainBranch,
  mdPath,
  remoteUrl,
  excludes,
  baseUrl,
  readDirSyncOptions,
}