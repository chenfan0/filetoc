import { Dirent } from 'fs'

import {
  readdirSync,
  resolve,
  isDir,
  writeFileSync,
  readFileSync
} from './utilis'
import {
  dirPath,
  cwd,
  readDirSyncOptions,
  baseUrl,
  remoteUrl,
  mdPath,
  mainBranch,
  excludes
} from './config'
import { TREE, BLOB } from './constant'

interface IDirent extends Dirent {
  children?: IDirent[]
}

/**
 *
 * @param {[]} dirsInfo 读取的文件信息
 * @param {string} parentPath 该文件所在的文件夹
 * @param {[]} excludes
 * @returns []
 */
// 对readdirSync读取的数据进行处理
function handleDirent(
  dirsInfo: IDirent[],
  parentPath: string,
  excludes: string[]
) {
  const dirResult: Dirent[] = []
  const fileResult: Dirent[] = []
  for (let i = 0; i < dirsInfo.length; i++) {
    const dir = dirsInfo[i]
    const name = dir.name
    // 处理后缀名
    const suffixs = excludes.filter((item) => item.startsWith('.'))
    if (isDir(dir)) {
      if (!excludes.includes(name)) {
        dirResult.push(dir)
        const children = readdirSync(
          resolve(parentPath, name),
          readDirSyncOptions
        )

        dir.children = handleDirent(
          children as any as IDirent[],
          resolve(parentPath, name),
          excludes
        )
      }
    } else {
      let skip = false
      // 判断当前文件的后缀名是要否是被排除的
      for (const suffix of suffixs) {
        if (name.endsWith(suffix)) {
          skip = true
          break
        }
      }
      if (!excludes.includes(name) && !skip) {
        fileResult.push(dir)
      }
    }
  }

  // 处理文件排序
  fileResult.sort((a, b) => {
    const numA = Number(a.name.split('.')[0])
    const numB = Number(b.name.split('.')[0])
    return numA - numB
  })

  return [...dirResult, ...fileResult]
}

/**
 *
 * @param {[]} dirsInfo 目录信息
 * @param {string} indent 生成md内容之间的间隔
 * @param {string} baseUrl
 * @param {string} tocContent
 * @returns string
 */
// 根据目录生成对应的md文件内容
function handleTocContent(
  dirsInfo: any[],
  indent: string,
  baseUrl: string,
  tocContent: string
) {
  function getTocContent(indent: string, name: string, url: string) {
    return `${indent}- [${name}](${url})\n`
  }
  function recurse(dirsInfo, indent: string, baseUrl: string, level?: number) {
    for (let i = 0; i < dirsInfo.length; i++) {
      const dir = dirsInfo[i]
      const name = dir.name
      const childIndent = indent + '  '

      if (remoteUrl !== baseUrl) {
        // 要生成toc的目录不是根目录
        const url = baseUrl + `/${name}`
        tocContent += getTocContent(indent, name, url)
        if (dir.children) {
          recurse(dir.children, childIndent, url)
        }
      } else {
        // 要生成toc的目录为根目录的情况
        const topLevel = level === 0
        if (dir.children && topLevel) {
          // 根目录下的文件夹
          const url = baseUrl + `${TREE}${mainBranch}/${name}`
          tocContent += getTocContent(indent, name, url)
          recurse(dir.children, childIndent, url)
        } else {
          // 根目录下的文件
          const url = baseUrl + `${BLOB}${mainBranch}/${name}`
          tocContent += getTocContent(indent, name, url)
        }
      }
    }
  }
  recurse(dirsInfo, indent, baseUrl, 0)
  return tocContent
}

const dirent = readdirSync(resolve(cwd, dirPath), readDirSyncOptions)
const dirsInfo = handleDirent(dirent as any as IDirent[], resolve(cwd, dirPath), excludes)

const tocContent = handleTocContent(dirsInfo, '', baseUrl, '\n')

export function generatorToc() {
  const reg = /(?<=<!--filetoc-start-->)[^>]*(?=<!--filetoc-end-->)/gms
  const n = mdPath.length
  for (let i = 0; i < n; i++) {
    const path = mdPath[i]
    const content = readFileSync(path) as string
    const resultContent = content.replace(reg, tocContent)
    writeFileSync(path, resultContent)
  }
  console.log('\n--------------------------------')
  console.log('\nThe toc inserted successfully!!!')
  console.log('\n--------------------------------')
}

export default generatorToc
