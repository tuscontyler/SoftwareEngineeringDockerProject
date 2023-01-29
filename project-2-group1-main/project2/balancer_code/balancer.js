
const express = require('express');
const app = express();
const port = 2400;
const axios = require("axios").create({baseUtl: `http://localhost:${port}`})


app.get("/gethostname", async (req,res)=>{
 await axios.get(`http://end_service:3000/gethostname`).then(resp =>{
   res.send(resp.data)
 })
    

   // console.log(axiosdata)
   
})


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })