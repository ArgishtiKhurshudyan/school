import * as path from "path";
const express = require("express");
const dotenv = require("dotenv");
import cookieParser from "cookie-parser";
import cors from "cors";
import teacherRouter from './routes/teacher'
import learnerRouter from './routes/learner'
import classListRouter from './routes/classlists'
import classRouter from './routes/class'
import classHourRouter from './routes/classhour'
import floorRouter from './routes/floor'
import roomRouter from './routes/room'
import schoolRouter from './routes/school'
import topicRouter from './routes/topic'
import wekDayRouter from './routes/learner'
import roleRouter from './routes/role'
import userRouter from './routes/user'
import authRouter from './routes/auth'

dotenv.config()
const resources = path.join(__dirname, 'resources')
const app = express()
const PORT = process.env.PORT || 3333;
// app.use('/resources', path.join(__dirname, 'resources') )
app.use('/resources', express.static(resources));
app.use(cookieParser())
app.use(express.json())
app.use(cors())
app.use("/api/teacher", teacherRouter)
app.use("/api/learner", learnerRouter)
app.use('/api/class', classRouter)
app.use('/api/classList', classListRouter)
app.use('/api/floor', floorRouter)
app.use('/api/school', schoolRouter)
app.use('/api/weekDay', wekDayRouter)
app.use('/api/topic', topicRouter)
app.use('/api/classHour', classHourRouter)
app.use('/api/room', roomRouter)
app.use('/api/role', roleRouter)
app.use('/api/user', userRouter)
app.use('/api/auth', authRouter)
app.listen(PORT, () => {
  console.log(` connected on port ${ PORT } `)
})

