var express = require('express');
// grab the images model
var ImageList = require('../schema/images');
var router = express.Router();

/* GET favorite images. */
router.get('/favorite', function (req, res, next) {
    res.send('respond with a resource');
});

router.post('/add-to/favorite', async function (req, res, next) {

    var newList = ImageList({
        id: 11122200,
        username: 'nodeTest1',
        favoriteImages: req.body.images,
        created_at: new Date()
    });

    var images = await ImageList.findOne({ username: 'nodeTest1' }).exec();

    //delete the existing document to maintain the image order
    if (images)
       await ImageList.deleteOne(images);

    // save the favorite images
    newList.save(function (err) {
        if (err) throw err;
        console.log('List created!');
    });

    res.send('Successfuly added to favorites');
});

module.exports = router;
