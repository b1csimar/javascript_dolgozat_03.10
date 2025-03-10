import express from 'express'
import moviesRoutes from './routes/movies.js'

const app = express()
app.use(express.json())
app.use('/movies', moviesRoutes)

app.listen(3000, () => {
  console.log('Server is running on port 3000')
})