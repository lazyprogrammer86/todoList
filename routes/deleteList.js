const router = require('express').Router()
const {
    List
} = require('../mongo/schema')


//delete a custom list
router.post('/deleteList', (req, res) => {
    const id = req.body.listId
    List.deleteOne({
            _id: id
        })
        .then(() => {
            res.redirect('/')
        }).catch(err => {
            console.log(err)
            res.redirect('/')
        })

})

module.exports = router;