#!/usr/bin/env node

const { generatorToc, callWithErrorHanding } = require('./lib')

callWithErrorHanding(generatorToc)


// 实现功能1，可以提供一个md数组，然后将toc插入到这个数组中的每一个md文件 √
// 实现功能2，可以提供自动读取.gitignore里的文件信息，并且不生成该目录