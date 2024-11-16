require('dotenv').config

const express = require('express');
const axios = require('axios');
const app = express();

app.get('api/data',async(req,res)=>{
    try{
        const apiKey = process.env.NUM_LOOKUP_API_KEY;//<<----- FIX SOON
        const repsponse = await axios.get(`https://api.numlookupai.com?apikey=${apiKey}`);
        res.json(response.data);
     } catch (error) {
        res.status(500).json({error: 'Failed to fetch data' });
     }
});
const port = 3000;
app.listen(port,()=>{
    console.log(`Server running on port ${port}`);
});