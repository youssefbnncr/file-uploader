const epxress = require('express');
const app = epxress();

app.get('/',(req,res)=>{
  res.send('init');
})

const PORT = process.env.PORT || 3000;

app.listen(PORT,() => {
  console.log(`Server running at http://localhost:${PORT}`);
})