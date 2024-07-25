const express = require("express");
const app = express();

const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://madegbenro908:A1wCvZyK8X8ojI14@cluster0.t4wp77j.mongodb.net/audiophile/?retryWrites=true&w=majority&appName=Cluster0")
.then(() => {
     console.log("Database connected successfully");
})
.catch((error) => {
     console.log(error ,"error occured")
});

app.get("/", (req, res) => res.send("Express on Vercel"));





// exports.getAllProducts = async (req , res) => {
//      try {
//            const collection = mongoose.connection.db.collection("products");
//            const products =  await collection.find({}).toArray();
//           res.status(200).json({
//                status : "sucess",
//                products 
//           })
//      } catch (error) {
//           console.log(error)
//      }
// }

// exports.getProductsByCategory = async (req , res) => {
//          try {
//            let category = req.params.category;
//            if(!category){
//                return res.status(400).json({
//                     status : "failed",
//                     message : "No category specified"
//                });
//            };
//            const collection = mongoose.connection.db.collection("products");
           
//            const productsInCategotry = await collection.find({category : category}).toArray();
//            res.status(200).json({
//                status : "success",
//                products : productsInCategotry,
//            });          
          
//      } 
//      catch (error) {
//           res.status(500).json({
//                status : "Internal error",
//                message : "Failed to fetch products"
//           });
//      }
// }

app.listen(3000, () => console.log("Server ready on port 3000."));

module.exports = app;