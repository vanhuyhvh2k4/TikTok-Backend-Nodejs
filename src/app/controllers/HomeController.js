const Video = require('../models/Video.js');
const Follower =  require('../models/Follower.js');

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

    //[POST] /api/home/videoLogin
    homeLogin (req, res) {
        const userId = req.user.user_id;

        // List of users that user don't follow
        Follower
            .find({ following_user_id: { $nin: userId }})
            .lean()
            .select('user_id')
            .distinct('user_id')
            .exec((err, userIds) => {
                if (err) {
                    res.status(500).json({ message: 'dont found any users'});
                    return;
                }
                Video
                    .find({ user_id: userIds})
                    .lean()
                    .populate('user_id')
                    .exec((err, videos) => {
                        if (err) {
                            res.status(500).json({ message: 'dont found any videos'})
                        }
                        const responseData = videos.map((video) => {
                            return {
                                
                                        user_id: video.user_id._id,
                                        video_description: video.video_description,
                                        video_url: video.video_url,
                                        avatar_url: video.user_id.avatar_url,
                                        user_name: video.user_id.user_name,
                                        full_name: video.user_id.full_name,
                                        is_tick: video.user_id.is_tick  
                                    }
                        })

                        res.status(200).json({data: responseData})
                    })
            });
            
        }

        //[PATCH] /api/home/follow
        follow (req, res) {
            const currentUserId = req.user.user_id;
            const userIdFollowed = req.body.userId;
            const status = req.body.status;
            
            const newFollow = {
                user_id: userIdFollowed,
                following_user_id: currentUserId
            }
            if (status) {

                Follower.create(newFollow)
                    .then((follower) => res.status(200).json({ data: follower }))
                    .catch((err) => res.status(500).json({message: err}));
            }
            else {
                Follower.deleteOne(newFollow)
                    .then((follower) => res.status(200).json({data: follower}))
                    .catch((err) => res.status(500).json({message: err})); 
            }
        }
    }

module.exports = new SiteController;

