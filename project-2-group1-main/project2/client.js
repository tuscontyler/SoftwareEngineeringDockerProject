const axios = require("axios")

for(let i =0;i<20;i++)
{
    spammer();
}


async function spammer(){
        let name = await axios.get("http://localhost:2400/gethostname")
    console.log("hostname: " + name.data)
}