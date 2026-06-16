import "dotenv/config"
import express from "express"
import userRouter from "./routes/users.routes.js"
// CREAR INSTANCIA 
const app = express()
const PORT = process.env.PORT || 8000

// Middleware para leer JSON
app.use(express.json())

// ESPECIFICAR JSON
app.use("/user", userRouter)


app.listen(PORT, () => {
    console.log("Server running on ${PORT} 🚀🚀🚀")
})