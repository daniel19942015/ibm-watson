const fs = require('fs');
const request = require("request");

const endpoint = 'https://stream.watsonplatform.net/speech-to-text/api';
const api = Buffer.from("apikey:zJOMyWvrT5n49l_oTawx8BB0FAHE9XVLMAeO0ITHwXQD").toString("base64");
const file = 'audio-file.flac'; 

const options = {
    method: 'post',
    url: endpoint,
    body: fs.createReadStream(file),
    headers:{
        "Authorization":`Basic ${api}`,
        "Content-Type":'audio/flac'
    }
} 

request(options, function(error, response, data){
    if(!error){
        console.log(data);
    }
})
