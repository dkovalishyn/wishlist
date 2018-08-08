import multer from 'multer';
import mime from 'mime-types';
import mongoose from 'mongoose';
import Person from '../../models/Person';

/**
 * Picture upload
 *
 * POST: /api/v1/user/{userId}/avatar
 *
 * path:
 *   userId {string} User Id.
 *
 * formData:
 *   avatar {file} User's avatar.
 *
 */
const { Types: { ObjectId } } = mongoose;

exports.handler = async function uploadImage(req, res) {
  const { file, params: { userId } } = req;

  try {
    await Person.findOneAndUpdate({ userId: ObjectId(userId) }, {
      avatar: `/avatars/${file.filename}`,
    });
    console.log(req.file);
    res.sendStatus(200);
  } catch (e) {
    console.error(e);
    res.sendStatus(500);
  }
};

exports.middleware = multer({ dest: 'server/dist/public/avatars' }).single('avatar');
