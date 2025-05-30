import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "../Styles/Signup.css";

function Signup() {
  const [email, setEmail] = useState("");
  const [otp, setOTP] = useState("");
  const [isOTPSent, setIsOTPSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSendOTP = async () => {
    if (!email) {
      alert("Please enter your email.");
      return;
    }
    if (!validateEmail(email)) {
      alert("Please enter a valid email.");
      return;
    }

    setLoading(true);
    try {
      await axios.post("http://localhost:3000/api/auth/send-otp", { email });
      setIsOTPSent(true);
      alert("OTP sent successfully! Check your email.");
    } catch (error) {
      alert("Failed to send OTP. Please try again.");
      console.error(error);
    }
    setLoading(false);
  };

  const handleVerifyOTP = async () => {
    if (!otp) {
      alert("Please enter the OTP.");
      return;
    }

    setLoading(true);
    try {
      await axios.post("http://localhost:3000/api/auth/verify-otp", { email, otp });
      alert("Signup successful!");
      // redirect or update auth context here
    } catch (error) {
      alert("Invalid OTP. Please try again.");
      console.error(error);
    }
    setLoading(false);
  };

  return (
    <div className="signup-container">
      <div style={{ marginBottom: "1rem" }}>
        <Link to="/" style={{ textDecoration: "none", color: "#007bff" }}>
          &larr; Back to Home
        </Link>
      </div>

      <h2>Signup</h2>

      <label htmlFor="email">Email*</label>
      <input
        id="email"
        type="email"
        placeholder="example@example.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        disabled={isOTPSent || loading}
      />

      {!isOTPSent ? (
        <button onClick={handleSendOTP} disabled={loading}>
          {loading ? "Sending..." : "Send OTP"}
        </button>
      ) : (
        <>
          <label htmlFor="otp">Enter OTP*</label>
          <input
            id="otp"
            type="text"
            placeholder="Enter OTP"
            value={otp}
            onChange={(e) => setOTP(e.target.value)}
            disabled={loading}
          />
          <button onClick={handleVerifyOTP} disabled={loading}>
            {loading ? "Verifying..." : "Verify OTP"}
          </button>
        </>
      )}
    </div>
  );
}

export default Signup;
