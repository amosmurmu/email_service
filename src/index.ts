import express from 'express'
import dotenv from 'dotenv'

dotenv.config()

const app = express()

app.use(express.json())

// app.get('/', (req, res) => {
//   return res.status(200).json({
//     sucess: 'banana',
//   })
// })

app.post('/send-email', async (req, res) => {
  const { to, subject, body, requestId } = req.body

  if (!to || !subject || !body || !requestId) {
    return res.status(400).json({
      error: 'Missing required fields',
    })
  }
  const result = 'success'
  res.json(result)
})

const port = process.env.PORT

app.listen(port || 8000, () => {
  console.log(`The server is listening to ${port}`)
})
