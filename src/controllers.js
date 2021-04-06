const DataInfo = require('./DataInfo')
const fetch = require('node-fetch')

function status(_, res) {
   res.status(200).send('ok')
}

function scrap(req, res) {
   const { url } = req.body

   fetch(url)
      .then(response => response.text())
      .then(markup => {
         const data = DataInfo(markup)

         const object = {
            name: data.getName(),
            imagePrimary: data.getImage(),
            price: data.getPrice(),
            availability: data.getAvailability(),
            url: data.getUrl() || url
         }

         res.status(200).json(object)
      })
      .catch(() => res.status(500).send('problema desconhecido'))
}

module.exports = { status, scrap }