const express = require("express");
const dotenv = require("dotenv")
import cookieParser from "cookie-parser"
import cors from "cors"


dotenv.config()

const app = express()
const PORT = process.env.PORT || 3333;
app.use(cookieParser())
app.use(express.json())
app.use(cors())

app.listen(PORT, () => {
  console.log(`connected on port ${PORT}`)
})

