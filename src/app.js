const express = require("express")
const path = require("path")
const morgan = require("morgan")
const mysql = require("mysql")
const myConnection = require("express-myconnection")
const moment = require("moment")

const app = express()

//importing routes
const usuarioRoutes = require("./routes/usuario")


// settings
app.set("port", process.env.PORT || 3000)
app.set("view engine", "ejs")
app.set("views", path.join(__dirname, "views"))


// middlewares
app.use(morgan("dev"))
app.use(myConnection(mysql, {
    host: "localhost",
    user: "root",
    password: "root",
    port: 3306,
    database: "usuariosiptv"
}, "single"))
app.use(express.urlencoded({extended: false}))


//routes
app.use("/", usuarioRoutes)


//static files
app.use(express.static(path.join( __dirname, "public")))


//starting the server
app.listen(app.get("port"), () => {
    console.log("server on port 3000")
})


//config moment.js
var shortDateFormat = "DD-MM-YYYY"
app.locals.moment = moment
app.locals.shortDateFormat = shortDateFormat