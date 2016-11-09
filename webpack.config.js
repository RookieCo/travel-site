module.exports = {
	entry: "./app/assets/scripts/App.js",
	output: {
		path: "./app/tem/scripts",
		filename: "App.js"
	},

	module: {
		loaders: [
			{
				loader: 'babel',
				query: {
					presets: ['es2015']
				},
				test: /\.js$/,
				exclude: /node_modules/
			}
		]
	}
}