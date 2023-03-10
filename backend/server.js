const express = require('express')
const colors = require('colors')
//Omogucava da imamo .env fajl sa svojim promenljivama
const dotenv = require('dotenv').config()
const {errorHandler} = require('./middleware/errorMiddleware')
const connectDB = require('./config/db')
const port = process.env.PORT || 5000

connectDB()

//Inicijalizacija express-a
const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use('/api/categories', require('./routes/categoryRoutes'))
app.use('/api/ingredients', require('./routes/ingredientRoutes'))
app.use('/api/users', require('./routes/userRoutes'))
app.use('/api/recipes', require('./routes/recipeRoutes'))
app.use('/api/recipeLikes', require('./routes/recipeLikesRoutes'))
app.use('/api/comments', require('./routes/commentRoutes'))


app.use(errorHandler)

app.listen(port, () => console.log(`Sever started on port ${port}`))