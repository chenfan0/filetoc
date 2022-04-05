#!/usr/bin/env node

const { generatorToc, callWithErrorHanding } = require('./lib')

callWithErrorHanding(generatorToc)
