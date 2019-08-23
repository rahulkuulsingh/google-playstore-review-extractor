var fs = require('fs');

// Config
appID = 'com.rapido.passenger'
filePath = `./output/rapido_merged/${appID}_reviews_page`


function ReadAppend(file, appendFile){
    fs.readFile(appendFile, function(err, data){
        if(err) throw err;
        console.log('file was read');

        fs.appendFile(file, data, function(err){
            if(err) throw err;
            console.log('the data to appead was appended to the file')
        });

    });

}

// Starting file, this is the file in  which we are going to appeand the files.
file = `${filePath}_1.json`;

// nodejs\output\Tata Medical\com.tatahealth.tatadhp_reviews_page_18.json


// Appending multiple .json / .txt / .csv files in one single file.
for( let count =2 ; count <=111 ; count++){

    appendFile = `${filePath}_${count}.json`;
    ReadAppend(file, appendFile);
}

