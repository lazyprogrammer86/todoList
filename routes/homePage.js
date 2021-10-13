const router = require('express').Router()
const {
    Item
} = require('../mongo/schema')
const defaultItem = require('../defaultItems')




//getting the homepage
router.get("/", function (req, res) {
    Item.find({}, function (err, items) {
        if (!items.length) {
            Item.insertMany(defaultItem, function (err) { // inserting items if list is empty
                if (err) {
                    console.log(err)
                } else {
                    res.redirect("/");
                }
            });
        } else { //rendering the list recieved from DB
            res.render("list", {
                listTitle: "Today",
                items: items
            });
        }
    });
});


module.exports = router