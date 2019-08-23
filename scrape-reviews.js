var gplay = require('google-play-scraper');
var fs = require("fs");


const app_name = 'com.rapido.passenger';


  for (let pageCount=1; pageCount<=200; pageCount++){
    gplay.reviews({
      appId: app_name,
      page: pageCount,
      // sort: gplay.sort.RATING
      sort: gplay.sort.HELPFULNESS
    }).then(
      
      
      
      data => fs.writeFile(`./output/${app_name}_reviews_page_${pageCount}.json`,  JSON.stringify(data, null, 4), (err) => {
        if (err) {
            console.error(err);
            return;
        };
        console.log(`File has been created_page_no_${pageCount}` );
      }));
  }
