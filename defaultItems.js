const {
    Item
} = require('./mongo/schema')

const defaultItem = new Item({
    item: "< -- click this to remove item by adding more items" //default items to be in the DB when initializing empty todo list
});

module.exports = defaultItem