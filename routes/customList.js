const router = require('express').Router()
const _ = require('lodash')
const {
    List
} = require('../mongo/schema')
const defaultItem = require('../defaultItems')


//adding custom todo list
router.get("/:todoHeading", function (req, res) {

    if (_.capitalize(req.params.todoHeading) === "Today") {
        res.redirect('/')
    } else {
        List.findOne({ //checking if a todolist exist with the same name
            name: _.capitalize(req.params.todoHeading)
        }, function (err, item) {

            if (err) {
                console.log(err);
                res.redirect('/');
            } else if (item) {

                res.render("list", { //rendering available list
                    listTitle: _.capitalize(req.params.todoHeading),
                    items: item.items
                });
            } else {

                const list = new List({
                    name: _.capitalize(req.params.todoHeading),
                    items: defaultItem
                });
                list.save() //creating new list
                res.redirect("/" + req.params.todoHeading);
            }
        });
    }
});


module.exports = router