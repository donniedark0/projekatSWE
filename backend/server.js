const express = require('express')
//Omogucava da imamo .env fajl sa svojim promenljivama
const dotenv = require('dotenv').config()
const {errorHandler} = require('./middleware/errorMiddleware')
const port = process.env.PORT || 5000

//Inicijalizacija express-a
const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use('/api/ingredients', require('./routes/ingredientRoutes'))

app.use(errorHandler)

app.listen(port, () => console.log(`Sever started on port ${port}`))