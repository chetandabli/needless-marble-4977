const express = require("express");
const cors = require('cors');
const bodyParser = require('body-parser');
const { connection } = require("./config/db");
const {userRoute} = require("./routes/user.route");
const {adminRoute} = require("./routes/admin.route");
const { productRoute } = require("./routes/product.route");
const { cartRoute } = require("./routes/cart.route");
const app = express();
require('dotenv').config();

app.use(bodyParser.json({ limit: "50mb" }))
app.use(cors());

app.use("/user", userRoute);
app.use("/admin", adminRoute);
app.use("/products", productRoute);
app.use("/cart", cartRoute)

let port = process.env.port
app.listen(port, async ()=>{
    try {
        await connection;
        console.log("server is running at port", port);
    } catch (error) {
        console.log("error eccures: ", error);
    }
})