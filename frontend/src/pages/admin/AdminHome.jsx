import React from "react";
import { Link } from "react-router-dom";

export default function AdminHome() {
  const cards = [
    {
      title: "Add Project",
      desc: "Add a new project to showcase",
      link: "/admin/add-project",
    },
    {
      title: "Add Client",
      desc: "Add a new client testimonial",
      link: "/admin/add-client",
    },
    {
      title: "View Contacts",
      desc: "Check messages from the contact form",
      link: "/admin/contact-data",
    },
    {
      title: "Subscribers",
      desc: "View all newsletter subscribers",
      link: "/admin/subscribers",
    },
  ];

  return (
    <div>
      <h1 style={{ color: "#2F80ED", marginBottom: "20px" }}>
        Welcome to Admin Dashboard
      </h1>
      <p style={{ marginBottom: "30px", color: "#555" }}>
        Manage your projects, clients, and leads efficiently from here.
      </p>

      <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
        {cards.map((c) => (
          <Link
            to={c.link}
            key={c.title}
            style={{
              flex: "1 1 200px",
              minWidth: "200px",
              background: "white",
              borderRadius: "12px",
              boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
              padding: "20px",
              textDecoration: "none",
              color: "#2F80ED",
              transition: "0.3s",
            }}
          >
            <h3 style={{ marginBottom: "10px" }}>{c.title}</h3>
            <p style={{ color: "#555" }}>{c.desc}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
