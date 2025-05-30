import mongoose from 'mongoose';

const otpSchema = new mongoose.Schema({
  email: String,
  otp: String,
  createdAt: { type: Date, default: Date.now, index: { expires: 600 } } // 10 mins
});

export default mongoose.model('Otp', otpSchema);
