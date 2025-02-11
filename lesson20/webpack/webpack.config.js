const path = require(`path`)
module.exports = {
    entry: `./scr/index.html`}
    output: {
		filename: 'bundle.[contenthash].js',
		path: path.resolve(__dirname, 'build'),
	};