const Koa = require('koa')
const fs = require('fs')
const app = new Koa()

app.use(ctx => {
  ctx.type = 'html'
  ctx.body = fs.createReadStream(`${__dirname}/index.html`)
})

const port = 3000
app.listen(port)
console.log(`app is running at: http://localhost:${port}`)
