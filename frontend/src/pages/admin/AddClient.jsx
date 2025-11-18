// import React, { useState } from 'react';
// import api from '../../api';

// export default function AddClient(){
//   const [name,setName] = useState('');
//   const [description,setDescription] = useState('');
//   const [designation,setDesignation] = useState('');
//   const [file,setFile] = useState(null);
//   const [msg,setMsg] = useState('');

//   const submit = async (e) => {
//     e.preventDefault();
//     const fd = new FormData();
//     fd.append('name', name);
//     fd.append('description', description);
//     fd.append('designation', designation);
//     if (file) fd.append('image', file);
//     try {
//       await api.post('/clients/add', fd, { headers: {'Content-Type': 'multipart/form-data'}});
//       setMsg('Client added');
//       setName(''); setDescription(''); setDesignation(''); setFile(null);
//     } catch (err) { setMsg('Error'); }
//   };

//   return (
//     <form onSubmit={submit}>
//       <input value={name} onChange={e=>setName(e.target.value)} placeholder="Name" required />
//       <input value={designation} onChange={e=>setDesignation(e.target.value)} placeholder="Designation" />
//       <textarea value={description} onChange={e=>setDescription(e.target.value)} placeholder="Description" />
//       <input type="file" onChange={e=>setFile(e.target.files[0])} />
//       <button type="submit">Add Client</button>
//       {msg && <div>{msg}</div>}
//     </form>
//   );
// }

import React, { useState } from "react";
import api from "../../api";

export default function AddClient() {
  const [name, setName] = useState("");
  const [designation, setDesignation] = useState("");
  const [description, setDescription] = useState("");
  const [file, setFile] = useState(null);
  const [msg, setMsg] = useState("");

  const submit = async (e) => {
    e.preventDefault();
    const fd = new FormData();
    fd.append("name", name);
    fd.append("designation", designation);
    fd.append("description", description);
    if (file) fd.append("image", file);

    try {
      await api.post("/clients/add", fd, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      setMsg("Client added successfully!");
      setName("");
      setDesignation("");
      setDescription("");
      setFile(null);
    } catch (err) {
      setMsg("Error adding client");
    }
  };

  return (
    <div
      style={{
        maxWidth: "500px",
        margin: "40px auto",
        padding: "30px",
        background: "#f9f9f9",
        borderRadius: "12px",
        boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h2
        style={{
          textAlign: "center",
          marginBottom: "20px",
          color: "#2F80ED",
          fontSize: "24px",
        }}
      >
        Add New Client
      </h2>

      <form
        onSubmit={submit}
        style={{ display: "flex", flexDirection: "column", gap: "15px" }}
      >
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
          required
          style={inputStyle}
        />

        <input
          value={designation}
          onChange={(e) => setDesignation(e.target.value)}
          placeholder="Designation"
          style={inputStyle}
        />

        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Description"
          rows={4}
          style={textareaStyle}
        />

        <input
          type="file"
          onChange={(e) => setFile(e.target.files[0])}
          style={{ padding: "8px" }}
        />

        <button type="submit" style={btnStyle}>
          Add Client
        </button>

        {msg && (
          <div
            style={{
              textAlign: "center",
              color: msg.includes("success") ? "green" : "red",
              marginTop: "10px",
              fontWeight: "600",
            }}
          >
            {msg}
          </div>
        )}
      </form>
    </div>
  );
}

const inputStyle = {
  padding: "12px",
  borderRadius: "8px",
  border: "1px solid #ccc",
  fontSize: "15px",
  width: "100%",
  boxSizing: "border-box",
};

const textareaStyle = {
  ...inputStyle,
  resize: "vertical",
};

const btnStyle = {
  padding: "12px",
  borderRadius: "8px",
  border: "none",
  backgroundColor: "#FF7F50", // Orange button
  color: "white",
  fontSize: "16px",
  fontWeight: "600",
  cursor: "pointer",
};
