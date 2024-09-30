const express = require('express')

const app = express()
const PORT = process.env.PORT || 3000

app.use(express.json())

app.get('/api/hello', (req,res)=>{
    res.json({message : "Hello, World... ha haa.."})
})

app.post('api/greet',(req,res)=>{
    const {name} = req.body;
    res.json({ message : `hello, ${name}`})
})

app.listen(PORT, ()=>{
    console.log(`Server is running  on http://localhost:${PORT}`)
})