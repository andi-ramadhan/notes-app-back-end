const Joi = require('joi');

const ImageHeadersSchema = Joi.object({
  'content-type': Joi.string().valid('image/apng', 'imgae/avif', 'image/gif', 'image/jpeg', 'image/png', 'image/webp').required(),
}).unknown(); //unknown means that object can have any property as long it has a content-type property

module.exports = { ImageHeadersSchema };