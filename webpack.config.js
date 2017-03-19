var webpack = require("webpack");
var ExtractTextPlugin = require("extract-text-webpack-plugin");


module.exports = {
	context: __dirname + "/app/js",
	entry: {
		app: "./app.js",
		vendor: ["angular", "angular-sanitize"]
	},
	output: {
		path: __dirname + "/public",
		filename: "app.bundle.js"
	},
	module: {
		loaders: [
			{
				test: /\.scss?/,
				loader: ExtractTextPlugin.extract({
					fallback: "style-loader", 
					use: "css-loader!sass-loader"
				})
			},
			{ 
      			test: /bootstrap\/dist\/js\/umd\//, 
      			loaders: ['imports?jQuery=jquery'] 
      		},
			{
				test: /\.js$/,
				exclude: "/node_modules/",
				loaders: ["babel-loader"] 
			},
			{ 
      			test: /\.json$/, 
      			loader: 'json' 
      		}
		]
	},
	plugins: [
				new webpack.optimize.CommonsChunkPlugin({"name": "vendor", "filename": "app.vendor.js"}),
				new ExtractTextPlugin("[name].css"),
				new webpack.ProvidePlugin({   
			        jQuery: 'jquery',
			        $: 'jquery',
			        jquery: 'jquery'
			    })
			]
}