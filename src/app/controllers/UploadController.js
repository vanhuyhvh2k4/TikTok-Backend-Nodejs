
const Video = require('../models/Video');
const cloudinary = require('../../lib/cloudinary');

class UploadController {
    uploadVideo (req, res, next) {
        cloudinary.uploader.upload(req.file.path, {
            resource_type: "video",
            folder: "video",
        }, 
        
        (err, result) =>{
            if (err) {
                console.log(err);
                return res.status(500).send(err);
            }
            const upload = new Video({
                user_id: req.body.user_id,
                cloudinary_id: result.public_id,
                video_name: (req.file.originalname).split('.')[0],
                video_url: result.url,
                video_description: req.body.description,
                // is_public: req.body.is_public,
            });
            upload.save((err, result) => {
                if (err) {
                    console.log(err);
                    return res.status(500).send(err);
                }
                return res.status(200).send(result);
            });
        })
    }
}

module.exports = new UploadController;