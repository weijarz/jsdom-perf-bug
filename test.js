const fs = require('fs')
const jsdom = require('jsdom')

const h = fs.readFileSync(__dirname + '/bug.html', 'utf8')
const virtualConsole = new jsdom.VirtualConsole()
for (let i = 0; i < 3; i++) {
  console.time(`parse-${i}`)
  let opts = {
    url: 'http://example.com',
    runScripts: 'outside-only',
    includeNodeLocations: false,
    virtualConsole
  }
  dom = new jsdom.JSDOM(h, opts)
  console.timeEnd(`parse-${i}`)
}

