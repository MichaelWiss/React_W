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
      loader: 'babel-loader',
      exclude: /node_modules/,
      options: {
      	presets: [
      	'react',
      	'stage-0',
        ['env', { targets: { browsers: ['last 2 versions'] }}] 
      	]
      }
   	 }
   	]
   }
};