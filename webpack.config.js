// webpack.config.js

module.exports = {
    module: {
        // configuration regarding modules

        rules: [
            // rules for modules (configure loaders, parser options)

            {
                options: {
                    presets: ["es2015"]
                }
            }
        ]
    }
}