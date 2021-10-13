require('./connection');
const mongoose = require('mongoose')

const itemsSchema = new mongoose.Schema({ //creating new schema for items
    item: {
        type: String,
        required: [true, 'Name is required'] // item feild is required
    }
});

const Item = new mongoose.model("Item", itemsSchema); // creating interface to work on Items


const listSchema = new mongoose.Schema({ // creating a new schema for list of items
    name: String,
    items: [itemsSchema]
});

const List = new mongoose.model("List", listSchema); //creating interface to work on list of items


module.exports = {
    List,
    Item
}