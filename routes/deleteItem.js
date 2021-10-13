const router = require('express').Router()
const _ = require('lodash')
const {
    Item,
    List
} = require('../mongo/schema')

//deleting item 
router.post("/delete", function (req, res) {
    if (req.body.listName === "Today") { // checking the title for 'today'
        Item.findByIdAndRemove(req.body.checkbox, function (err) { //removing item by its ID
            if (err) {
                console.log(err);
            } else {
                res.redirect("/"); //redirecting to homepage
            }
        });
    } else {
        List.findOneAndUpdate({ //finding a item using the title of the list and removing an item
            name: _.capitalize(req.body.listName)
        }, {
            $pull: {
                items: {
                    _id: req.body.checkbox //value of check box is the Item ID
                }
            }
        }, function (err) {
            if (err) {
                console.log(err);
            } else {
                res.redirect("/" + req.body.listName); //redirecting to the custom list
            }
        });
    }
});


module.exports = router