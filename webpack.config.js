var path = require("path");

var DIST_DIR = path.resolve(__dirname, "src/main/webapp/dist");
var SRC_DIR = path.resolve(__dirname, "src/main/webapp/js");

var config = {
    entry: SRC_DIR + "/index.js",
    output: {
        path: DIST_DIR,
        filename: "bundle.js"
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                include: SRC_DIR,
                exclude: "/node_modules",
                loader: "babel-loader",
                query: {
                    presets: ["es2015", "react", "stage-2"]
                }
            },
        ]
    },
    watch: true
};

module.exports = config;
