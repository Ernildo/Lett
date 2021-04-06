String.prototype.between = function(arg1, arg2) {
   
   const startIndex = this.indexOf(arg1)
   let str = null

   if (startIndex >= 0) {
      str = this.substring(startIndex)
      const endIndex = str.indexOf(arg2)

      if (endIndex >= 0)
         str = str.substring(0, endIndex + arg2.length)
   }

   return str
}

function DataInfo(markup) {

   const dta = JSON.parse(markup
      .between('data-product', "}'>")
      .replace("data-product='", '')
      .replace("'>", ''))

   const { fullTitle, priceTemplate, baseUrl, variationPath, imageUrl } = dta
   
   const getName = () => {
      if (fullTitle) return fullTitle
      
      return markup.between('header-product__title', '</h1>')
                   .between('>', '<')
                   .replace('> ', '')
                   .replace(' <', '')
   }
   const getAvailability = () => fullTitle ? true : false
   const getPrice = () => priceTemplate ? priceTemplate.replace(' ', '') : ''
   const getImage = () => imageUrl.replace('{w}x{h}', '618x463')
   const getUrl = () => variationPath ? `${baseUrl}/${variationPath}` : null

   return {
      getName,
      getPrice,
      getImage,
      getUrl,
      getAvailability
   }
}

module.exports = DataInfo