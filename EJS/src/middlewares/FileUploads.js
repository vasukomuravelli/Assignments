const multer = require("multer");

const path = require("path");

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null,path.join(__dirname, '../uploads'));
    },
    filename: function (req, file, cb) {
      const uniqueprefix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      cb(null, uniqueprefix+'-'+file.originalname);
    }
  })

  function fileFilter (req, file, cb) {

    if(file.mimetype == "image/jpeg" || file.mimetype == "image/png" || file.mimetype == "text/html")
    {
        cb(null, true);
    }
    else
    {
        cb(null, false);
    }  
  }
  
module.exports = multer({ storage,fileFilter,limits:{filesize : 1024 * 1024 * 5} });
