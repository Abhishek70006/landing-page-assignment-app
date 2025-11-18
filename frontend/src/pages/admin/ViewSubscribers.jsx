import React, { useEffect, useState } from "react";
import api from "../../api";

export default function ViewSubscribers() {
  const [subs, setSubs] = useState([]);

  useEffect(() => {
    api
      .get("/subscribe/all")
      .then((r) => setSubs(r.data))
      .catch((e) => console.error(e));
  }, []);

  return (
    <div
      style={{
        padding: "30px",
        fontFamily: "Arial, sans-serif",
        backgroundColor: "#f9f9f9",
        minHeight: "100vh",
      }}
    >
      <h2
        style={{
          textAlign: "center",
          marginBottom: "30px",
          color: "#2F80ED",
          fontSize: "28px",
        }}
      >
        Subscribers List
      </h2>

      <div
        style={{
          overflowX: "auto",
          borderRadius: "12px",
          boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
          background: "white",
        }}
      >
        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
            minWidth: "400px",
          }}
        >
          <thead>
            <tr style={{ backgroundColor: "#2F80ED", color: "white" }}>
              <th style={thStyle}>#</th>
              <th style={thStyle}>Email</th>
            </tr>
          </thead>

          <tbody>
            {subs.map((s, index) => (
              <tr
                key={s._id}
                style={{
                  borderBottom: "1px solid #ddd",
                  textAlign: "center",
                  transition: "background 0.3s",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.backgroundColor = "#f1f1f1")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.backgroundColor = "white")
                }
              >
                <td style={tdStyle}>{index + 1}</td>
                <td style={tdStyle}>{s.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

const thStyle = {
  padding: "12px",
  fontSize: "16px",
  fontWeight: "600",
  textAlign: "center",
};

const tdStyle = {
  padding: "12px",
  fontSize: "15px",
};
