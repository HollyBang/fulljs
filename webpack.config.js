module.exports = {
	entry: './src/index.js',
	output: {
		filename: 'bundle.js',
		path: __dirname + '/public',
	},
	module: {
		loaders: [
		{
			test: /\.js$/,
			loader: 'babel-loader'
		}
		]
	}
};