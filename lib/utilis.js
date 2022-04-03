const fs = require("fs");
const path = require("path");

function resolve(...args) {
  return path.resolve(...args);
}

function join(...args) {
  return path.join(...args)
}

function readdirSync(...args) {
  return fs.readdirSync(...args);
}

function writeFileSync(...args) {
  return fs.writeFileSync(...args)
}

function readFileSync(file, options = 'utf-8') {
  return fs.readFileSync(file, options)
}

function isDir(dirent) {
  return dirent[Object.getOwnPropertySymbols(dirent)[0]] === 2;
}

function handleBaseUrl(remoteUrl, dirPath, mainBranch) {
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

function callWithErrorHanding(fn, ...args) {
  try {
    fn(...args)
  } catch (err) {
    console.error(err)
  }
}


module.exports = {
  resolve,
  join,
  readdirSync,
  writeFileSync,
  readFileSync,
  isDir,
  handleBaseUrl,
  callWithErrorHanding
}