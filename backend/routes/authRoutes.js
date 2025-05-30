import express from 'express';
import { sendOtpToEmail } from '../sendEmailOTP.js';
import { verifyOtp } from '../verifyotp.js'; // ✅ lowercase file name match

const router = express.Router();

router.post('/send-otp', sendOtpToEmail);
router.post('/verify-otp', verifyOtp);

export default router;
