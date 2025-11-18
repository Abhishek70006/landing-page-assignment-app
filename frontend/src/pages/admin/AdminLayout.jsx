import React from "react";
import { Link, Outlet, useLocation } from "react-router-dom";

export default function AdminLayout() {
  const location = useLocation();

  return (
    <div
      style={{
        display: "flex",
        minHeight: "100vh",
        fontFamily: "Arial, sans-serif",
      }}
    >
      {/* Sidebar */}
      <div
        style={{
          width: "220px",
          backgroundColor: "#293754",
          color: "white",
          display: "flex",
          flexDirection: "column",
          padding: "20px",
        }}
      >
        <h2 style={{ marginBottom: "30px", textAlign: "center" }}>
          Admin Panel
        </h2>

        {/* Home Link */}
        <Link style={getLinkStyle(location.pathname, "/admin")} to="/admin">
          Home
        </Link>

        <Link
          style={getLinkStyle(location.pathname, "/admin/add-project")}
          to="/admin/add-project"
        >
          Add Project
        </Link>
        <Link
          style={getLinkStyle(location.pathname, "/admin/add-client")}
          to="/admin/add-client"
        >
          Add Client
        </Link>
        <Link
          style={getLinkStyle(location.pathname, "/admin/contact-data")}
          to="/admin/contact-data"
        >
          View Contacts
        </Link>
        <Link
          style={getLinkStyle(location.pathname, "/admin/subscribers")}
          to="/admin/subscribers"
        >
          Subscribers
        </Link>
      </div>

      {/* Main Content */}
      <div style={{ flex: 1, padding: "30px", background: "#f4f4f4" }}>
        <Outlet />
      </div>
    </div>
  );
}

// Highlight active link
const getLinkStyle = (current, target) => ({
  color: "white",
  textDecoration: "none",
  marginBottom: "15px",
  padding: "10px",
  borderRadius: "6px",
  display: "block",
  backgroundColor:
    current === target ? "rgba(255,255,255,0.3)" : "rgba(255,255,255,0.1)",
  transition: "0.3s",
});
