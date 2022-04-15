import fs from 'fs'
import path from 'path'

export function resolve(...args) {
  return path.resolve(...args)
}

export function join(...args) {
  return path.join(...args)
}

export function readdirSync(...args: [string, ...any]) {
  return fs.readdirSync(...args)
}

export function writeFileSync(...args: [string, string | NodeJS.ArrayBufferView,...any]) {
  return fs.writeFileSync(...args)
}

export function readFileSync(filePath: string, options = 'utf-8'): string | Buffer {
  return fs.readFileSync(filePath, options as any)
}

export function isDir(dirent) {
  return dirent[Object.getOwnPropertySymbols(dirent)[0]] === 2
}

export function handleBaseUrl(remoteUrl: string, dirPath: string, mainBranch: string) {
  if (dirPath === '.' || dirPath === './') {
    return remoteUrl
  } else {
    // 项目的某一个文件夹
    if (dirPath.endsWith('/')) {
      dirPath = dirPath.slice(0, dirPath.length - 1)
    }
    if (dirPath.startsWith('.')) {
      dirPath = dirPath.slice(1)
    }
    return `${remoteUrl}/tree/${mainBranch}${dirPath}`
  }
}

export function callWithErrorHanding(fn: (...args) => void, ...args) {
  try {
    fn(...args)
  } catch (err) {
    console.error(err)
  }
}
