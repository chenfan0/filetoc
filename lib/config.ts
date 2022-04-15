import path from 'path'

import { join, handleBaseUrl } from './utilis.js'
import { CONFIG_NAME } from './constant.js'

export const cwd = process.cwd()

export async function getConfig(cwd: string, configName: string) {
  const relativeConfigPath = path
    .relative('./config.js', join(cwd, configName))
    .replace(/\\/g, '/')
  return import(relativeConfigPath)
}

interface TConfig {
  dirPath?: string
  mainBranch?: string
  mdPath?: string | string[]
  remoteUrl?: string
  excludes?: string[]
}

let config: TConfig
try {
  const result = await getConfig(cwd, CONFIG_NAME)
  config = result.default
} catch (err) {
  config = {}
}

// 要生成toc的文件夹路径
export const dirPath = config.dirPath || './'
// 主分支名称，在生成链接时会使用到
export const mainBranch = config.mainBranch || 'main'
// 要添加toc的md文件路径
export const mdPath = Array.isArray(config.mdPath)
  ? config.mdPath
  : typeof config.mdPath === 'string'
  ? [config.mdPath]
  : ['README.md']
// 远程仓库的地址
export const remoteUrl = config.remoteUrl || ''
export const excludes = config.excludes || []
export const baseUrl = handleBaseUrl(remoteUrl, dirPath, mainBranch)
export const readDirSyncOptions = { withFileTypes: true }
