const path = require('path');


module.exports = {
   //inform webpack that we are building a bundle for node js
   target: 'node',
   //tell webpack the root file of our server app
   entry: './src/index.js',
   //tell webpack where to put the output file
   output: {
   path: path.resolve(__dirname, 'build')
   },

   //tell webpack to run babel on every file
   module: {
   	rules: [
   	{
      test: /\.js?$/,
   	}
   	]
   }
};