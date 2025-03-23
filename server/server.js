import express from "express";
import cors from "cors";


const app =express();
const port =3000;

app.use(cors());

app.use(express.static(path.join(__dirname, '../frontend/build')));

app.get('/api/data', (req, res) => {
    res.json({ message: 'Hello from the backend!', data: 'Some JSON data' });
  });


  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/build', 'index.html'));
  });


app.listen(port ,()=>{
    console.log(`Server running on port ${port}`);
})