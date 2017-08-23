let http = require('http')
let cheerio = require('cheerio')

function connect () {
  let uri = 'http://bulbapedia.bulbagarden.net/wiki/List_of_Pok%C3%A9mon_by_base_stats_(Pok%C3%A9mon_GO)'
  return new Promise((resolve, reject) => {
    var request = http.get(uri, resp => {
      const status = resp.statusCode
      if (status !== 200) {
        reject(new Error('Request failed: ' + resp.statusCode + '\n' + resp.statusText))
      }
      else {
        let content = ''
        resp.on('data', chunk => {
          content += chunk
        })
        resp.on('end', () => {
          request.end()
          resolve(content)
        })
      }
    })
  })
}

module.exports = function update() {
  connect().then(code => {
    let site = cheerio.load(code)
    let table = site('#mw-content-text > table').first()
    let rows = []
    table.find('tr').map((index, elem) => {
      rows.push(cheerio(elem).text().replace(/\n/g,'').split(' ').filter(c => !!c))
    })
    module.exports.headers = rows.shift()
    module.exports.rows = rows
  })
}
