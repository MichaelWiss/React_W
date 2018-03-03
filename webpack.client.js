const path = require('path');


module.exports = {
   
   //tell webpack the root file of our server app
   entry: './src/client/client.js',

   //tell webpack where to put the output file
   output: {
   filename: 'bundle.js',	
   path: path.resolve(__dirname, 'public')
   }
};