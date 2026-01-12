import express from 'express'
import cors from 'cors'

const app = express();
app.use(cors());

app.use(express.json());


app.get("/", (req,res) => {
    res.send("Hello , world");
})

app.listen(3000, () =>{
    console.log("Server is rrnnin at port at 3000");
})