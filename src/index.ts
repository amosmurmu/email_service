import express from 'express'
import dotenv from 'dotenv'

dotenv.config()

const app = express()

app.use(express.json)

app.post('/send-email', async (req, res) => {
  const { to, subject, body, requestId } = req.body

  if (!to || !subject || !body || !requestId) {
    return res.status()
  }
})
