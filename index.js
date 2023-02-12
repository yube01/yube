const express = require("express")
const request = require("request-promise")
const port = 8888;

const app = express();


// apiKey = "37ad75e136d5dacc1d26c2df2802cfce";
// baseUrl = 

const generateUrl = (apiKey)=>{
    `http://api.scraperapi.com?api_key=${apiKey}&autoparse=true`

}

//middleware 



app.get("/", (req,res)=>{
    res.send('connected')
})


// getting product full detail

// app.get("/products/:productId", async(req,res)=>{

//     const {productId} = req.params;

//     try {
//         const response = await request(`${baseUrl}&url=https://www.amazon.com/dp/${productId}`)
//         res.json(JSON.parse(response))
        
//     } catch (error) {
//         res.json(error)
        
//     }
// })


//reviews
app.get("/products/:id/reviews", async(req,res)=>{
    const {id}  = req.params;
    const {apiKey} = req.query;

    try {
        const response = await request(`${generateUrl(apiKey)}&url=https://www.amazon.com/product-review/${id}`)
        res.json(JSON.parse(response))
    } catch (error) {
        res.json(error)
        
    }
})


//offers
app.get("/products/:id/offers", async(req,res)=>{
    const {id}  = req.params;
    const {apiKey} = req.query;
    try {
        const response = await request(`${generateUrl(apiKey)}&url=https://www.amazon.com/gp/offer-listing/${id}`)
        res.json(JSON.parse(response))
    } catch (error) {
        res.json(error)
        
    }
})

//search result
app.get("/search/:searchQuery", async(req,res)=>{
    const {searchQuery}  = req.params;
    const {apiKey} = req.query;
    try {
        const response = await request(`${generateUrl(apiKey)}&url=https://www.amazon.com/s?k=${searchQuery}`)
        res.json(JSON.parse(response))
        
    } catch (error) {
        res.json(error)
        
    }
})



app.listen(port , ()=>{
    console.log("Server started")
})



