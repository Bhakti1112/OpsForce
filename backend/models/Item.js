const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
  title:       String,
  description: String,
  images:      [String],
  category:    String,
  type:        String,
  size:        String,
  condition:   String,
  tags:        [String],
  uploader:    { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  status:      { type: String, enum: ['available', 'swapped', 'redeemed'], default: 'available' },
  // Add more fields as needed
});

module.exports = mongoose.model('Item', itemSchema);
