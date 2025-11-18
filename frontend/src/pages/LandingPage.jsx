import React, { useEffect, useState } from "react";
import api from "../api";
import ContactForm from "../shared/ContactForm";
import Newsletter from "../shared/Newsletter";
import { motion } from "framer-motion";

import myphoto from "../assets/homepagephoto.svg";
import image from "../assets/image1.png";
import facebook from "../assets/facebook.png";
import insta from "../assets/insta.jpg";
import twitter from "../assets/image.png";
import boy from "../assets/Ellipse11.svg";
import girl from "../assets/Ellipse12.svg";
import boy1 from "../assets/Ellipse13.svg";
import rectangle from "../assets/Rectangle.svg";

export default function LandingPage() {
  const [projects, setProjects] = useState([]);
  const [clients, setClients] = useState([]);

  const handleLogout = () => {
    // 1. Remove token from localStorage
    localStorage.removeItem("token");

    // 2. Redirect to login page
    window.location.href = "/signup"; // or use react-router's navigate if using react-router
  };

  useEffect(() => {
    api
      .get("/projects")
      .then((r) => setProjects(r.data))
      .catch(console.error);
    api
      .get("/clients")
      .then((r) => setClients(r.data))
      .catch(console.error);
  }, []);

  return (
    <div
      style={{
        width: "100vw", // full viewport width
        minHeight: "100vh",
        backgroundColor: "#f9fafb",
        overflowX: "hidden", // prevent horizontal scroll
      }}
    >
      {/* HEADER */}

      <header
        style={{ width: "100%", padding: "15px 0", backgroundColor: "white" }}
      >
        <div
          style={{
            maxWidth: "1300px",
            margin: "auto",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "0 20px",
          }}
        >
          {/* Logo container (text + image together) */}
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <h1
              style={{
                fontSize: "32px",
                fontWeight: "bold",
                color: "black",
              }}
            >
              NextStep Solutions
            </h1>
            <img
              src={image}
              alt="Team Discussion"
              style={{
                width: "50px",
                height: "50px",
              }}
            />
          </div>

          {/* NAVBAR RIGHT SIDE */}
          <nav
            style={{
              display: "flex",
              gap: "40px",
              alignItems: "center",
              color: "white",
              backgroundColor: "white",
            }}
          >
            <a
              href="#home"
              style={{
                color: "black",
                fontSize: "22px",
                textDecoration: "none",
              }}
            >
              Home
            </a>

            <a
              href="#services"
              style={{
                color: "black",
                fontSize: "22px",
                textDecoration: "none",
              }}
            >
              Services
            </a>

            <a
              href="#projects"
              style={{
                color: "black",
                fontSize: "22px",
                textDecoration: "none",
              }}
            >
              Projects
            </a>

            <a
              href="#about"
              style={{
                color: "black",
                fontSize: "22px",
                textDecoration: "none",
              }}
            >
              About
            </a>

            <a
              href="#contact"
              style={{
                color: "black",
                backgroundColor: "orange",
                fontSize: "22px",
                textDecoration: "none",
              }}
            >
              Contact
            </a>

            {/* LOGOUT */}
            <button
              onClick={handleLogout}
              style={{
                backgroundColor: "red",
                color: "white",
                padding: "8px 15px",
                borderRadius: "6px",
                border: "none",
                cursor: "pointer",
                fontSize: "16px",
                fontWeight: "600",
              }}
            >
              Logout
            </button>
          </nav>
        </div>
      </header>

      {/* HERO */}
      {/* HERO SECTION LIKE REAL TRUST */}
      {/* HERO */}
      <section
        style={{ width: "100%", padding: "10px 0", background: "white" }}
      >
        <div
          style={{
            maxWidth: "1300px",
            margin: "auto",
            position: "relative", // <-- Important
            padding: "0 0px",
          }}
        >
          {/* FULL WIDTH IMAGE */}
          <img
            src={myphoto}
            alt="Team Discussion"
            style={{
              width: "100%",
              height: "500px",
              objectFit: "cover",
              borderRadius: "",
            }}
          />

          {/* TEXT OVER IMAGE */}
          <h1
            style={{
              position: "absolute",
              top: "50%",
              left: "40px",
              transform: "translateY(-50%)",
              fontSize: "48px",
              fontWeight: "bold",
              color: "white",
              textShadow: "2px 2px 8px rgba(0,0,0,0.8)",
            }}
          >
            Consultation, <br />
            Design, <br />& Marketing
          </h1>

          {/* FORM OVER IMAGE - RIGHT SIDE */}
          <div
            style={{
              position: "absolute",
              top: "50%",
              right: "40px",
              transform: "translateY(-50%)",
              width: "350px",

              padding: "30px",

              color: "#fff",
            }}
          >
            <ContactForm />
          </div>
        </div>
      </section>
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "60px 100px",
          background: "white",
        }}
      >
        {/* LEFT SIDE TEXT */}
        <div style={{ width: "45%" }}>
          <h1
            style={{
              fontSize: "36px",
              fontWeight: "700",
              color: "#2A64F6",
              marginBottom: "20px",
            }}
          >
            Not Your Average Realtor
          </h1>

          <p style={{ fontSize: "16px", color: "#444", lineHeight: "1.6" }}>
            Most realtors are eager for a sale, giving properties artificial
            cosmetic makeovers and effectively misrepresenting to get the
            maximum appraisal value.
          </p>
        </div>

        {/* RIGHT SIDE IMAGES */}
        {/* RIGHT SIDE IMAGES */}
        <div
          style={{
            width: "50%",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start", // align everything to right
            gap: "10px", // vertical space between big and small images
          }}
        >
          {/* BIG CIRCLE IMAGE */}
          <div>
            <img
              src={boy}
              style={{
                width: "280px",
                height: "280px",
                borderRadius: "50%",
                objectFit: "cover",
              }}
            />
          </div>

          {/* SMALL IMAGES HORIZONTAL */}
          <div
            style={{
              display: "flex",
              gap: "10px", // space between girl and boy1
            }}
          >
            <img
              src={girl}
              style={{
                width: "180px",
                height: "180px",
                borderRadius: "50%",
                objectFit: "cover",
              }}
            />

            <img
              src={boy1}
              style={{
                width: "180px",
                height: "180px",
                borderRadius: "50%",
                objectFit: "cover",
              }}
            />
          </div>
        </div>
      </div>

      <section
        style={{
          width: "100%",
          padding: "80px 0",
          textAlign: "center",
          background: "white",
        }}
      >
        {/* TITLE */}
        <h2
          style={{
            fontSize: "32px",
            fontWeight: "bold",
            color: "#2F80ED",
            marginBottom: "10px",
          }}
        >
          Why Choose Us?
        </h2>

        {/* BLUE UNDERLINE */}
        <div
          style={{
            width: "60px",
            height: "4px",
            background: "#2F80ED",
            margin: "0 auto 60px auto",
            borderRadius: "4px",
          }}
        ></div>

        {/* MAIN WRAPPER */}
        <div
          style={{
            maxWidth: "1200px",
            margin: "auto",
            display: "flex",
            justifyContent: "space-between",
            gap: "10px",
            flexWrap: "wrap",
          }}
        >
          {/* CARD 1 */}
          <div style={{ width: "32%", minWidth: "300px" }}>
            <div
              style={{
                width: "70px",
                height: "70px",
                margin: "auto",
                background: "rgba(47,128,237,0.1)",
                borderRadius: "50%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginBottom: "20px",
              }}
            >
              <img
                src="https://cdn-icons-png.flaticon.com/512/1040/1040230.png"
                alt="ROI"
                style={{ width: "32px", height: "32px" }}
              />
            </div>

            <h3
              style={{
                color: "#2F80ED",
                fontSize: "20px",
                fontWeight: "600",
                marginBottom: "10px",
              }}
            >
              Potential ROI
            </h3>

            <p style={{ color: "#666", lineHeight: "1.6", fontSize: "15px" }}>
              Whether you're looking to buy or re-design your home… we will
              assist you through potential return on investment.
            </p>
          </div>

          {/* CARD 2 */}
          <div style={{ width: "32%", minWidth: "300px" }}>
            <div
              style={{
                width: "70px",
                height: "70px",
                margin: "auto",
                background: "rgba(47,128,237,0.1)",
                borderRadius: "50%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginBottom: "20px",
              }}
            >
              <img
                src="https://cdn-icons-png.flaticon.com/512/1828/1828884.png"
                alt="Design"
                style={{ width: "32px", height: "32px" }}
              />
            </div>

            <h3
              style={{
                color: "#2F80ED",
                fontSize: "20px",
                fontWeight: "600",
                marginBottom: "10px",
              }}
            >
              Design
            </h3>

            <p style={{ color: "#666", lineHeight: "1.6", fontSize: "15px" }}>
              Our design team ensures your vision is maintained & helps enhance
              your property's appearance through thoughtful design.
            </p>
          </div>

          {/* CARD 3 */}
          <div style={{ width: "32%", minWidth: "300px" }}>
            <div
              style={{
                width: "70px",
                height: "70px",
                margin: "auto",
                background: "rgba(47,128,237,0.1)",
                borderRadius: "50%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginBottom: "20px",
              }}
            >
              <img
                src="https://cdn-icons-png.flaticon.com/512/2331/2331970.png"
                alt="Marketing"
                style={{ width: "32px", height: "32px" }}
              />
            </div>

            <h3
              style={{
                color: "#2F80ED",
                fontSize: "20px",
                fontWeight: "600",
                marginBottom: "10px",
              }}
            >
              Marketing
            </h3>

            <p style={{ color: "#666", lineHeight: "1.6", fontSize: "15px" }}>
              Strong online, content and social media marketing helps your
              property stand out in today's digital landscape.
            </p>
          </div>
        </div>
      </section>
      {/* PROJECTS */}
      <section
        id="projects"
        style={{
          maxWidth: "1200px",
          margin: "80px auto",
          padding: "0 20px",
        }}
      >
        {/* HEADING */}
        <h2
          style={{
            textAlign: "center",
            fontSize: "36px",
            fontWeight: "700",
            color: "#2F80ED",
            marginBottom: "10px",
          }}
        >
          Our Projects
        </h2>

        {/* SUBTEXT */}
        <p
          style={{
            textAlign: "center",
            maxWidth: "700px",
            margin: "0 auto 50px auto",
            color: "#666",
            fontSize: "16px",
            lineHeight: "1.6",
          }}
        >
          Discover our latest completed work, showcasing creativity, modern
          design, and client-focused solutions that deliver real value.
        </p>

        {/* PROJECT CARDS HORIZONTAL */}
        <div
          style={{
            display: "flex",
            gap: "30px",
            overflowX: "auto",
            paddingBottom: "15px",
          }}
        >
          {projects.map((p) => (
            <div
              key={p._id}
              style={{
                minWidth: "340px",
                background: "white",
                borderRadius: "16px",
                boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
                padding: "20px",
                flexShrink: 0,
              }}
            >
              {/* IMAGE BELOW TITLE */}
              {p.imageUrl && (
                <img
                  src={p.imageUrl}
                  alt={p.name}
                  style={{
                    width: "100%",
                    height: "200px",
                    objectFit: "cover",
                    borderRadius: "12px",
                    marginBottom: "15px",
                  }}
                />
              )}
              {/* PROJECT NAME */}
              <h3
                style={{
                  fontSize: "22px",
                  fontWeight: "700",
                  marginBottom: "12px",
                }}
              >
                {p.name}
              </h3>

              {/* DESCRIPTION BELOW IMAGE */}
              <p
                style={{
                  color: "#555",
                  marginBottom: "20px",
                  lineHeight: "1.6",
                  fontSize: "15px",
                }}
              >
                {p.description}
              </p>

              {/* BUTTON */}
              <button
                disabled
                style={{
                  width: "100%",
                  padding: "10px",
                  borderRadius: "10px",
                  background: "#ccc",
                  color: "#444",
                  fontWeight: "600",
                  cursor: "not-allowed",
                  border: "none",
                }}
              >
                Read More
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* CLIENTS */}
      <section
        id="clients"
        style={{
          width: "100%",
          background: "#fff",
          padding: "60px 0",
        }}
      >
        {/* HEADING */}
        <h2
          style={{
            textAlign: "center",
            fontSize: "36px",
            fontWeight: "700",
            color: "#2F80ED",
            marginBottom: "10px",
          }}
        >
          Happy Clients
        </h2>

        {/* SUBTEXT */}
        <p
          style={{
            textAlign: "center",
            maxWidth: "700px",
            margin: "0 auto 50px auto",
            color: "#666",
            fontSize: "16px",
            lineHeight: "1.6",
          }}
        >
          Here’s what our clients say about our service, professionalism, and
          dedication to delivering quality work.
        </p>

        {/* CLIENT CARDS */}
        <div
          style={{
            maxWidth: "1200px",
            margin: "auto",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "30px",
            padding: "0 20px",
          }}
        >
          {clients.map((c) => (
            <div
              key={c._id}
              style={{
                width: "320px",
                height: "380px",
                background: "#F7F8FA",
                borderRadius: "20px",
                boxShadow: "0 4px 15px rgba(0,0,0,0.08)",
                padding: "30px 20px",
                textAlign: "center",
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
              }}
            >
              {/* CIRCLE IMAGE */}
              {c.imageUrl && (
                <img
                  src={c.imageUrl}
                  alt={c.name}
                  style={{
                    width: "90px",
                    height: "90px",
                    borderRadius: "50%",
                    objectFit: "cover",
                    margin: "0 auto 20px auto",
                    boxShadow: "0 2px 10px rgba(0,0,0,0.15)",
                  }}
                />
              )}

              {/* DESCRIPTION */}
              <p
                style={{
                  color: "#444",
                  lineHeight: "1.5",
                  fontSize: "15px",
                  marginBottom: "20px",
                  minHeight: "90px", // fix height so text lines align
                }}
              >
                {c.description}
              </p>

              {/* NAME */}
              <h4
                style={{
                  fontSize: "20px",
                  fontWeight: "700",
                  marginBottom: "5px",
                }}
              >
                {c.name}
              </h4>

              {/* DESIGNATION */}
              <small style={{ color: "#777" }}>{c.designation}</small>
            </div>
          ))}
        </div>
      </section>

      {/* <footer className="w-full bg-gray-900 text-white py-6 text-center">
        <p>© {new Date().getFullYear()} My Company. All Rights Reserved.</p>
      </footer> */}

      <div>
        {/* IMAGE WITH TEXT AND BUTTON */}
        <section
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${rectangle})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "400px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            color: "white",
            textAlign: "center",
            padding: "0 20px",
            width: "100vw", // full width
          }}
        >
          <h2
            style={{
              fontSize: "2.5rem",
              fontWeight: "bold",
              marginBottom: "20px",
            }}
          >
            Learn more about our listing process, as well as our additional
            staging design work
          </h2>
          <p
            style={{
              fontSize: "1.2rem",
              marginBottom: "20px",
              maxWidth: "600px",
            }}
          >
            Some description or tagline goes here.
          </p>
          <button
            style={{
              backgroundColor: "#2563EB",
              color: "white",
              fontWeight: "600",
              padding: "10px 20px",
              borderRadius: "6px",
              border: "none",
              cursor: "pointer",
            }}
          >
            Learn More
          </button>
        </section>

        {/* NEWSLETTER */}
        <section id="newsletter" className="bg-gray-100 py-16 px-4">
          <Newsletter />
        </section>
        {/* MAIN FOOTER BLACK WITH SOCIAL ICONS */}
        <footer
          style={{
            backgroundColor: "#000",
            color: "white",
            padding: "20px 40px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
          }}
        >
          {/* Left: Copyright */}
          <div style={{ flex: 1, textAlign: "left" }}>
            © {new Date().getFullYear()} My Company. All Rights Reserved.
          </div>

          {/* Center: Logo */}
          <div style={{ flex: 1, textAlign: "center" }}>
            <img
              src={image} // replace with correct path
              alt="Logo"
              style={{ height: "50px" }}
            />
          </div>

          {/* Right: Social Icons */}
          <div
            style={{
              flex: 1,
              textAlign: "right",
              display: "flex",
              justifyContent: "flex-end",
              gap: "15px",
            }}
          >
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={facebook} // make sure this path is correct
                alt="Facebook"
                style={{
                  height: "24px",
                  width: "24px",
                  backgroundColor: "white",
                }}
              />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={insta}
                alt="Instagram"
                style={{ height: "24px", width: "24px" }}
              />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={twitter}
                alt="Twitter"
                style={{ height: "24px", width: "24px" }}
              />
            </a>
          </div>
        </footer>
      </div>
    </div>
  );
}
