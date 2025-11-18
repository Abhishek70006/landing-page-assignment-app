import React, { useState } from "react";
import api from "../api";

export default function ContactForm() {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    mobile: "",
    city: "",
  });
  const [msg, setMsg] = useState(null);

  const submit = async (e) => {
    e.preventDefault();
    try {
      await api.post("/contact", form);
      setMsg("Submitted — thank you!");
      setForm({ fullName: "", email: "", mobile: "", city: "" });
    } catch (err) {
      setMsg("Error submitting");
    }
  };

  return (
    <div
      style={{
        backgroundImage: "url('/images/contact-bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "20px",
      }}
    >
      {/* White placeholder style */}
      <style>
        {`
          ::placeholder {
            color: white;
            opacity: 1; /* Firefox */
          }
        `}
      </style>

      <form
        onSubmit={submit}
        style={{
          background: "rgba(74, 84, 128, 0.85)",
          padding: "30px",
          borderRadius: "16px",
          width: "350px",
          boxShadow: "0 4px 20px rgba(0,0,0,0.3)",
          backdropFilter: "blur(5px)",
          color: "white",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            marginBottom: "20px",
            color: "white",
          }}
        >
          Get a Free Consultation
        </h2>

        <input
          value={form.fullName}
          onChange={(e) => setForm({ ...form, fullName: e.target.value })}
          placeholder="Full name"
          required
          style={inputStyle}
        />

        <input
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          placeholder="Email"
          type="email"
          required
          style={inputStyle}
        />

        <input
          value={form.mobile}
          onChange={(e) => setForm({ ...form, mobile: e.target.value })}
          placeholder="Mobile"
          style={inputStyle}
        />

        <input
          value={form.city}
          onChange={(e) => setForm({ ...form, city: e.target.value })}
          placeholder="City"
          style={inputStyle}
        />

        <button
          type="submit"
          style={{
            width: "100%",
            padding: "12px",
            marginTop: "10px",
            border: "none",
            background: "#FF6A00",
            color: "white",
            borderRadius: "8px",
            cursor: "pointer",
            fontSize: "16px",
          }}
        >
          Submit
        </button>

        {msg && (
          <div
            style={{ marginTop: "15px", textAlign: "center", color: "green" }}
          >
            {msg}
          </div>
        )}
      </form>
    </div>
  );
}

const inputStyle = {
  width: "100%",
  padding: "12px",
  marginBottom: "12px",
  borderRadius: "8px",
  border: "1px solid white",
  fontSize: "15px",
  background: "transparent",
  color: "white",
};
