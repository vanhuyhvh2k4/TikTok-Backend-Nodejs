const Video = require('../models/Video.js');

class SiteController {

    //[GET] /api/home/video
    home(req, res) {
        Video.find()
            .lean()
            .populate({
                path: 'user_id',
            })
            .limit(5)
            .then((video) => {
                if (video.length) {
                    const sendData = video.map(({ 
                        video_description,
                        video_url,
                        user_id: {
                            avatar_url,
                            user_name,
                            full_name,
                            is_tick  
                        }
                    }) => ({
                        video_description,
                        video_url,
                        avatar_url,
                        user_name,
                        full_name,
                        is_tick  
                        }))
                    const responseData = { data: sendData };
                    res.status(200).json(responseData);
                }
                else {
                    const responseData = { message: 'Dont have any data'};
                    res.status(404).json(responseData);
                }
            })
            .catch(error => {
                res.status(500).send(error);
            });
    }
}

module.exports = new SiteController;

