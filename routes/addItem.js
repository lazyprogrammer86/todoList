const router = require('express').Router()
const _ = require('lodash')
const {
    Item,
    List
} = require('../mongo/schema')


//adding items to list
router.post("/", function (req, res) {
    const newItem = new Item({
        item: req.body.item //item form the fronend
    });

    if (_.capitalize(req.body.list) === "Today") {
        newItem.save()
            .then(() => {
                res.redirect("/");
            }).catch(err => {
                console.log(err)
            })

    } else {
        List.findOne({
            name: req.body.list
        }, function (err, foundList) {
            foundList.items.push(newItem); //adding new item to the custom list
            foundList.save() //saving new item
                .then(() => {
                    res.redirect("/" + req.body.list);
                })
                .catch(err => {
                    console.log(err);
                })

        });
    }

});


module.exports = router;