#!/usr/bin/env node

const  { generatorToc, callWithErrorHanding } = require('./dist/bundle.js')

callWithErrorHanding(generatorToc)
