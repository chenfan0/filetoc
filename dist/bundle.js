import fs from 'fs';
import path from 'path';

function resolve(...args) {
    return path.resolve(...args);
}
function join(...args) {
    return path.join(...args);
}
function readdirSync(...args) {
    return fs.readdirSync(...args);
}
function writeFileSync(...args) {
    return fs.writeFileSync(...args);
}
function readFileSync(filePath, options = 'utf-8') {
    return fs.readFileSync(filePath, options);
}
function isDir(dirent) {
    return dirent[Object.getOwnPropertySymbols(dirent)[0]] === 2;
}
function handleBaseUrl(remoteUrl, dirPath, mainBranch) {
    if (dirPath === '.' || dirPath === './') {
        return remoteUrl;
    }
    else {
        // 项目的某一个文件夹
        if (dirPath.endsWith('/')) {
            dirPath = dirPath.slice(0, dirPath.length - 1);
        }
        if (dirPath.startsWith('.')) {
            dirPath = dirPath.slice(1);
        }
        return `${remoteUrl}/tree/${mainBranch}${dirPath}`;
    }
}
function callWithErrorHanding(fn, ...args) {
    try {
        fn(...args);
    }
    catch (err) {
        console.error(err);
    }
}

const TREE = '/tree/';
const BLOB = '/blob/';
const CONFIG_NAME = 'filetoc.config.js';

const cwd = process.cwd();
async function getConfig(cwd, configName) {
    const relativeConfigPath = path
        .relative('./config.js', join(cwd, configName))
        .replace(/\\/g, '/');
    return import(relativeConfigPath);
}
let config;
try {
    const result = await getConfig(cwd, CONFIG_NAME);
    config = result.default;
}
catch (err) {
    config = {};
}
// 要生成toc的文件夹路径
const dirPath = config.dirPath || './';
// 主分支名称，在生成链接时会使用到
const mainBranch = config.mainBranch || 'main';
// 要添加toc的md文件路径
const mdPath = Array.isArray(config.mdPath)
    ? config.mdPath
    : typeof config.mdPath === 'string'
        ? [config.mdPath]
        : ['README.md'];
// 远程仓库的地址
const remoteUrl = config.remoteUrl || '';
const excludes = config.excludes || [];
const baseUrl = handleBaseUrl(remoteUrl, dirPath, mainBranch);
const readDirSyncOptions = { withFileTypes: true };

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
        // 处理后缀名
        const suffixs = excludes.filter((item) => item.startsWith('.'));
        if (isDir(dir)) {
            if (!excludes.includes(name)) {
                dirResult.push(dir);
                const children = readdirSync(resolve(parentPath, name), readDirSyncOptions);
                dir.children = handleDirent(children, resolve(parentPath, name), excludes);
            }
        }
        else {
            let skip = false;
            // 判断当前文件的后缀名是要否是被排除的
            for (const suffix of suffixs) {
                if (name.endsWith(suffix)) {
                    skip = true;
                    break;
                }
            }
            if (!excludes.includes(name) && !skip) {
                fileResult.push(dir);
            }
        }
    }
    // 处理文件排序
    fileResult.sort((a, b) => {
        const numA = Number(a.name.split('.')[0]);
        const numB = Number(b.name.split('.')[0]);
        return numA - numB;
    });
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
            const childIndent = indent + '  ';
            if (remoteUrl !== baseUrl) {
                // 要生成toc的目录不是根目录
                const url = baseUrl + `/${name}`;
                tocContent += getTocContent(indent, name, url);
                if (dir.children) {
                    recurse(dir.children, childIndent, url);
                }
            }
            else {
                // 要生成toc的目录为根目录的情况
                const topLevel = level === 0;
                if (dir.children && topLevel) {
                    // 根目录下的文件夹
                    const url = baseUrl + `${TREE}${mainBranch}/${name}`;
                    tocContent += getTocContent(indent, name, url);
                    recurse(dir.children, childIndent, url);
                }
                else {
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
const tocContent = handleTocContent(dirsInfo, '', baseUrl, '\n');
function generatorToc() {
    const reg = /(?<=<!--filetoc-start-->)[^>]*(?=<!--filetoc-end-->)/gms;
    const n = mdPath.length;
    for (let i = 0; i < n; i++) {
        const path = mdPath[i];
        const content = readFileSync(path);
        const resultContent = content.replace(reg, tocContent);
        writeFileSync(path, resultContent);
    }
    console.log('\n--------------------------------');
    console.log('\nThe toc inserted successfully!!!');
    console.log('\n--------------------------------');
}

export { callWithErrorHanding, generatorToc };
