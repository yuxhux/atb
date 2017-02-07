var express = require('express')
var app = express()
var multer  = require('multer')
var cloudinary = require('cloudinary')
var cloudinaryStorage = require('multer-storage-cloudinary')

/* Config html directory to serve static HTML files.
   Pages are accessed with /static URL. */
app.use('/static', express.static('html'))

/* Config cloudinary for the multer-storage-cloudinary object.
   Notice that the cloudinary object automatically configures itself
   based on the Heroku env-variables. */
var storage = cloudinaryStorage({
  cloudinary: cloudinary,
  folder: '', // cloudinary folder where you want to store images, empty is root
  allowedFormats: ['jpg', 'png'],
});

/* Initialize multer middleware with the multer-storage-cloudinary based
   storage engine */
var parser = multer({ storage: storage });

app.get('/', function (req, res) {
  res.send('Hello World for Testing!')
})

/* POST route for reciving the uploads. The multer based parser middleware will handle the incoming data based on the 'image' key.
   So make sure that you are sending multipart/form-data with that as input name.

   Multer parser will automatically parse the incoming request, create temporary files and then upload the received file
   to cloudinary.  Once the upload to cloudinary has been completed, the handling function
   will execute and the image details in cloudinary will be available in the req.file 
   
   Notice that error handling has not been properly implemented. */
app.post('/upload', parser.single('image'), function (req, res) {       
    console.log(req.file);
    res.json(req.file); // respond with json output of the cloudinary data
});

app.listen(process.env.PORT || 3000, function () {
  console.log('Example app listening on port ' + (process.env.PORT || 3000))
})