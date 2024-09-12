const plugin = require("../../../static_src/node_modules/tailwindcss/plugin");

const tableCaption = plugin(function({addUtilities}){
    addUtilities({
        ".caption-bottom": {
            "caption-side":"bottom",
        },
        ".caption-top":{
            "caption-side":"top",
        }
    })
})

module.exports = tableCaption;