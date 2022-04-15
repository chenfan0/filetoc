#!/usr/bin/env node

import { generatorToc, callWithErrorHanding } from './dist/bundle.js'

callWithErrorHanding(generatorToc)
