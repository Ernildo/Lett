const DataInfo = require('./DataInfo');
const fetch = require('node-fetch');

const status = (_, res) => {
   res.status(200).send('ok');
};

const scrap = (req, res) => {

   const { url } = req.body;

   fetch(url)
      .then(response => response.text())
      .then(markup => {
         const data = DataInfo(markup);
         
         const object = {
            ...data,
            url: data.url || url
         };
         
         res.status(200).json(object);
      })
      .catch(() => res.status(500).send('problema desconhecido'));
};

module.exports = { status, scrap }