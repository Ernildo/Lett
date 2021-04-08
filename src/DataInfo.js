String.prototype.between = function(arg1, arg2) {
   
   const startIndex = this.indexOf(arg1);
   let str = null;

   if (startIndex >= 0) {
      str = this.substring(startIndex)
      const endIndex = str.indexOf(arg2) + arg2.length;

      if (endIndex >= 0) str = str.substring(0, endIndex);
   }

   return str;
};

const getTitle = function private_getOtherTitle(markup = '') {
   
   const title = markup
      .between('header-product__title', '</h1>')
      .between('>', '<')
      .replace('> ', '')
      .replace(' <', '');
   
   return title;
};

function DataInfo(markup = '') {

   const dta = JSON.parse(markup
      .between('data-product', "}'>")
      .replace("data-product='", '')
      .replace("'>", '')
   );
   
   const getName = () => {
      const { fullTitle } = dta;
      return (fullTitle || getTitle(markup));
   };

   const getAvailability = () => {
      const { fullTitle } = dta;
      return (fullTitle ? true : false);
   };

   const getPrice = () => {
      const { priceTemplate } = dta;

      try {
         return priceTemplate.replace(' ', '');
      } catch(e) {
         return '';
      }
   };

   const getImage = () => {
      const { imageUrl } = dta;
      return imageUrl.replace('{w}x{h}', '618x463');
   };

   const getUrl = () => {
      const { variationPath, baseUrl } = dta;
      let stringUrl = null; 
      
      if (variationPath && baseUrl) stringUrl = `${baseUrl}/${variationPath}`;
      
      return stringUrl;
   };

   return {
      get availability() { 
         return getAvailability(); 
      },
      get price() { 
         return getPrice(); 
      },
      get image() { 
         return getImage(); 
      },
      get name() { 
         return getName(); 
      },
      get url() { 
         return getUrl(); 
      }
   };
}

module.exports = DataInfo;