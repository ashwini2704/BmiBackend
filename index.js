const express = require("express");
const cors = require("cors");
const {connection} = require("./db");
const {userRouter} = require("./routes/user.route")
const {bmiRouter} = require('./routes/bmi.route')
const {auth} = require("./middleware/auth.middleware")
const app = express();

app.use(express.json());
app.use(cors());
app.use("/users", userRouter)
app.use("/bmi",auth,bmiRouter)

app.listen(8080, async () => {
    try {
        await connection;
        console.log("Connnected to db");
        console.log("Server is running on port 8080")
    } catch (error) {
        console.log(error)
    }
})