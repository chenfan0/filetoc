const {
  readdirSync,
  resolve,
  isDir,
  writeFileSync,
  readFileSync,
} = require("./utilis");
const {
  dirPath,
  cwd,
  readDirSyncOptions,
  baseUrl,
  remoteUrl,
  mdPath,
  mainBranch,
  excludes,
} = require("./config");
const { TREE, BLOB } = require("./constant");

/**
 *
 * @param {[]} dirsInfo 读取的文件信息
 * @param {string} parentPath 该文件所在的文件夹
 * @param {[]} excludes
 * @returns []
 */
// 对readdirSync读取的数据进行处理
function handleDirent(dirsInfo, parentPath, excludes) {
  const dirResult = [];
  const fileResult = [];
  for (let i = 0; i < dirsInfo.length; i++) {
    const dir = dirsInfo[i];
    const name = dir.name;
    if (isDir(dir)) {
      if (!excludes.includes(name)) {
        dirResult.push(dir);
      }
      dir.children = readdirSync(resolve(parentPath, name), readDirSyncOptions);
      dir.children = handleDirent(
        dir.children,
        resolve(parentPath, name),
        excludes
      );
    } else {
      if (!excludes.includes(name)) {
        fileResult.push(dir);
      }
    }
  }
  return [...dirResult, ...fileResult];
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
function handleTocContent(dirsInfo, indent, baseUrl, tocContent) {
  function getTocContent(indent, name, url) {
    return `${indent}- [${name}](${url})\n`;
  }
  function recurse(dirsInfo, indent, baseUrl, level) {
    for (let i = 0; i < dirsInfo.length; i++) {
      const dir = dirsInfo[i];
      const name = dir.name;
      const childIndent = indent + "  ";

      if (remoteUrl !== baseUrl) {
        // 要生成toc的目录不是根目录
        const url = baseUrl + `/${name}`;
        tocContent += getTocContent(indent, name, url);
        if (dir.children) {
          recurse(dir.children, childIndent, url);
        }
      } else {
        // 要生成toc的目录为根目录的情况
        const topLevel = level === 0;
        if (dir.children && topLevel) {
          // 根目录下的文件夹
          const url = baseUrl + `${TREE}${mainBranch}/${name}`;
          tocContent += getTocContent(indent, name, url);
          recurse(dir.children, childIndent, url);
        } else {
          // 根目录下的文件
          const url = baseUrl + `${BLOB}${mainBranch}/${name}`;
          tocContent += getTocContent(indent, name, url);
        }
      }
    }
  }
  recurse(dirsInfo, indent, baseUrl, 0);
  return tocContent;
}

const dirent = readdirSync(resolve(cwd, dirPath), readDirSyncOptions);
const dirsInfo = handleDirent(dirent, resolve(cwd, dirPath), excludes);
const tocContent = handleTocContent(dirsInfo, "", baseUrl, "\n");

function generatorToc() {
  const n = mdPath.length;
  for (let i = 0; i < n; i++) {
    const path = mdPath[i]
    const content = readFileSync(path);
    const reg = /(?<=<!--filetoc-start-->)[^>]*(?=<!--filetoc-end-->)/gms;
    const resultContent = content.replace(reg, tocContent);
    writeFileSync(path, resultContent);
  }
}

module.exports = {
  generatorToc,
};

// 生成md的文件顺序
