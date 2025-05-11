const express = require('express')
const app = express()
const port = 3000

app.use(express.static('public'))

//app.get app.post app.
app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/blog', (req, res) => {
  res.send('Hello blog!')
})

app.get('/blog/:slug/:sec', (req, res) => {
  
  res.send(`Hello ${req.params.slug} and ${req.params.sec}`)
})
app.get('/blog1/:slug', (req, res) => {
  //for url : "http://localhost:3000/blog1/new?mode=dark&region=in"
  console.log(req)
  console.log(req.params) //will output { slug: 'man'}
  console.log(req.query)  //will output { mode: 'dark', region: 'in' }
  res.send(`Hello ${req.params.slug}`)
})

// app.get('/contact', (req, res) => {
//   res.send('Hello contact!')
// })
// app.get('/yenin', (req, res) => {
//   res.send('Hello yenin!')
// })


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})