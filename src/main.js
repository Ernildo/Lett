const exprees = require('express')
const middlewares = require('./middlewares')

const { scrap, status } = require('./controllers')

const app = exprees()

app.use(exprees.json())

app.get('/status', status)
app.post('/scrap_product', middlewares, scrap)

const PORT = 3000
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`))