var multer = require('multer')
var path = require('path')

const imageStorage = multer.diskStorage({
    // Destination to store image     
    destination: 'images', 
       filename: (req, file, cb) => {
        console.log(file);
         cb(null, file.fieldname + '_' + Date.now() 
            + path.extname(file.originalname))
            // file.fieldname is name of the field (image)
            // path.extname get the uploaded file extension
    }
});

const imageUpload = multer({
    storage: imageStorage,
    limits: {
      fileSize: 1000000 // 1000000 Bytes = 1 MB
    },
    fileFilter(req, file, cb) {
        console.log(file)
      if (!file.originalname.match(/\.(png|jpeg|jpg)$/)) { 
         // upload only png and jpg format
         return cb(new Error('Please upload a Image'))
       }
     cb(undefined, true)
  }
}) 
module.exports.imageUpload=imageUpload;