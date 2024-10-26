import express from 'express';
import UserRouter from './routes/userRoutes.js';
import cors from 'cors'
import connectdb from './db/index.js';
import FactRouter from './routes/FactRoutes.js';


const app = express()
const port = 8080

app.use(cors({
    origin:"*",
    methods: "GET, POST",
    credentials: true,
    allowedHeaders: ["Content-Type", "Authorization"]  // Allow specific headers
}))

app.use(express.json());

connectdb()



app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use('/users',UserRouter)

app.use('/api',FactRouter)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})