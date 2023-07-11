import React, { useState } from "react";
import OtpInput from "react-otp-input";
import "./styles.css";

export default function App() {
  const [otp, setOtp] = useState("");
  return (
    <div className="App">
      <h2>OTP Input Box</h2>
      <OtpInput
        value={otp}
        onChange={setOtp}
        numInputs={6}
        renderSeparator={<span>-</span>}
        renderInput={(props) => <input {...props} />}
      />
    </div>
  );
}
