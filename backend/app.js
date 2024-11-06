const express=require('express')


const UserRouter =require('./routes/userRoutes.js')

const cors=require('cors')
const connectdb=require('./db/index.js')
const FactRouter=require('./routes/FactRoutes.js')
const GameRouter = require('./routes/GameRoutes.js')


const app = express()
const port = 8080

app.use(cors({
    origin:"*",
    methods: "GET, POST,PUT, DELETE, OPTIONS",
   
    allowedHeaders: ["Content-Type", "Authorization"]  // Allow specific headers
}))

app.use(express.json());

connectdb()



app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use('/users',UserRouter)

app.use('/api',FactRouter)

app.use('/games',GameRouter)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})