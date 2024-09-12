const plugin = require("../../../static_src/node_modules/tailwindcss/plugin")

const openVariant = plugin(function({addVariant}){
    addVariant("group-open", ":merge(.group).open &");
    addVariant("peer-open", ":merge(.peer).open ~ &");
})

module.exports = openVariant;