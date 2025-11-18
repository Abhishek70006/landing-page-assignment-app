// import React, { useState } from 'react';
// import api from '../api';

// export default function Newsletter(){
//   const [email, setEmail] = useState('');
//   const [msg, setMsg] = useState(null);

//   const subscribe = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await api.post('/subscribe', { email });
//       setMsg(res.data.message || 'Subscribed!');
//       setEmail('');
//     } catch (err) {
//       setMsg('Error subscribing');
//     }
//   };

//   return (
//     <form onSubmit={subscribe}>
//       <input value={email} onChange={e=>setEmail(e.target.value)} placeholder="Enter email" type="email" required />
//       <button type="submit">Subscribe</button>
//       {msg && <div>{msg}</div>}
//     </form>
//   );
// }

import React, { useState } from "react";
import api from "../api";

export default function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState(null);

  const subscribe = async (e) => {
    e.preventDefault();
    if (!email) {
      setMsg("Please enter your email");
      return;
    }
    try {
      const res = await api.post("/subscribe", { email });
      setMsg(res.data.message || "Subscribed!");
      setEmail("");
    } catch (err) {
      setMsg("Error subscribing");
    }
  };

  return (
    <section
      style={{
        backgroundColor: "#1D4ED8",
        color: "white",
        padding: "40px 20px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "wrap",
      }}
    >
      {/* Left: Navigation Links */}
      <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
        <a href="#home" style={{ color: "white", textDecoration: "none" }}>
          Home
        </a>
        <a href="#services" style={{ color: "white", textDecoration: "none" }}>
          Services
        </a>
        <a href="#projects" style={{ color: "white", textDecoration: "none" }}>
          Projects
        </a>
        <a href="#about" style={{ color: "white", textDecoration: "none" }}>
          About
        </a>
        <a href="#contact" style={{ color: "white", textDecoration: "none" }}>
          Contact
        </a>
      </div>

      {/* Right: Newsletter Form */}
      <form
        onSubmit={subscribe}
        style={{
          display: "flex",
          alignItems: "center",
          gap: "0px",
          flexWrap: "nowrap", // prevent wrapping
        }}
      >
        {/* Label */}
        <label
          htmlFor="email"
          style={{
            color: "white",
            fontWeight: "600",
            marginRight: "10px",
            whiteSpace: "nowrap",
          }}
        >
          Subscribe Me
        </label>

        {/* Input */}
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          style={{
            padding: "10px 15px",
            borderTopLeftRadius: "5px",
            borderBottomLeftRadius: "5px",
            border: "2px solid white",
            borderRight: "none",
            backgroundColor: "#1D4ED8",
            color: "white",
            outline: "none",
            minWidth: "250px",
            height: "40px",
            boxSizing: "border-box",
          }}
          required
        />

        {/* Button */}
        <button
          type="submit"
          style={{
            padding: "10px 40px",
            borderTopRightRadius: "5px",
            borderBottomRightRadius: "5px",
            border: "2px solid white",
            borderLeft: "none",
            backgroundColor: "white",
            color: "#1D4ED8",
            fontWeight: "600",
            cursor: "pointer",
            height: "40px",
          }}
        >
          Subscribe
        </button>
      </form>
    </section>
  );
}
