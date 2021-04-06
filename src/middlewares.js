const SITE_MAGALU = 'https://www.magazineluiza.com.br/'
const ERROR = 'URL não é válida'

function urlIsProductMagalu(req, res, next) {
   const { url } = req.body

   if (url.length > 33 && url.includes(SITE_MAGALU))
      next()
   else 
      res.status(400).send(ERROR)
}

module.exports = [ urlIsProductMagalu ]