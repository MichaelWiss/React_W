const path = require('path');
const merge = require('webpack-merge');
const baseConfig = required('./webpack.base.js');


const config = {
   //inform webpack that we are building a bundle for node js
   target: 'node',
   //tell webpack the root file of our server app
   entry: './src/index.js',
   //tell webpack where to put the output file
   output: {
   filename: 'bundle.js',	
   path: path.resolve(__dirname, 'build')
   }
};

module.exports = merge(baseConfig, config);