const path = require("path");

module.exports = {
    entry : "./src/index.js",
    output : {
        path : path.join(__dirname,"builds"),
        filename : "bundle.js",
    },
    mode : "development",
    module : {
        rules : [{
            test : /\.css$/,
            use : ["style-loader","css-loader"],
        },{
            test: /\.(png|jpe?g|gif)$/i,
            use: [
            {
                loader: 'file-loader',
            },
            ],
        }]        
    }
}