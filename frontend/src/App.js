// import React from 'react';
// import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
// import LandingPage from './pages/LandingPage';
// import AddProject from './pages/admin/AddProject';
// import AddClient from './pages/admin/AddClient';
// import ViewContacts from './pages/admin/ViewContacts';
// import ViewSubscribers from './pages/admin/ViewSubscribers';

// function App(){
//   return (
//     <BrowserRouter>
//       <nav>
//         <Link to="/">Home</Link> | <Link to="/admin">Admin</Link>
//       </nav>
//       <div className="container">
//       <Routes>
//         <Route path="/" element={<LandingPage />} />
//         <Route path="/admin" element={
//           <div>
//             <h2>Admin</h2>
//             <Link to="/admin/add-project">Add Project</Link> | <Link to="/admin/add-client">Add Client</Link> | <Link to="/admin/contact-data">View Contacts</Link> | <Link to="/admin/subscribers">Subscribers</Link>
//           </div>
//         }/>
//         <Route path="/admin/add-project" element={<AddProject/>} />
//         <Route path="/admin/add-client" element={<AddClient/>} />
//         <Route path="/admin/contact-data" element={<ViewContacts/>} />
//         <Route path="/admin/subscribers" element={<ViewSubscribers/>} />
//       </Routes>
//       </div>
//     </BrowserRouter>
//   );
// }

// import React from "react";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import LandingPage from "./pages/LandingPage";
// import AddProject from "./pages/admin/AddProject";
// import AddClient from "./pages/admin/AddClient";
// import ViewContacts from "./pages/admin/ViewContacts";
// import ViewSubscribers from "./pages/admin/ViewSubscribers";
// import AdminLayout from "./pages/admin/AdminLayout";
// import AdminHome from "./pages/admin/AdminHome";

// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         {/* Public Landing Page */}
//         <Route path="/" element={<LandingPage />} />

//         {/* Admin routes with layout */}
//         <Route path="/admin" element={<AdminLayout />}>
//           <Route index element={<AdminHome />} />
//           <Route path="add-project" element={<AddProject />} />
//           <Route path="add-client" element={<AddClient />} />
//           <Route path="contact-data" element={<ViewContacts />} />
//           <Route path="subscribers" element={<ViewSubscribers />} />
//         </Route>
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;

import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  Outlet,
} from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Signup from "./pages/Auth/Signup";
import Login from "./pages/Auth/Login";
import AddProject from "./pages/admin/AddProject";
import AddClient from "./pages/admin/AddClient";
import ViewContacts from "./pages/admin/ViewContacts";
import ViewSubscribers from "./pages/admin/ViewSubscribers";
import AdminLayout from "./pages/admin/AdminLayout";
import AdminHome from "./pages/admin/AdminHome";

// ----------------- Protected Routes -----------------

// Checks if user is logged in
const PrivateRoute = ({ children }) => {
  const token = localStorage.getItem("token");
  return token ? children : <Navigate to="/signup" replace />;
};

// Checks if user is admin
const AdminRoute = ({ children }) => {
  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role");
  return token && role === "admin" ? (
    children
  ) : (
    <Navigate to="/signup" replace />
  );
};

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public pages */}
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />

        {/* Landing page: private for logged-in users */}
        <Route
          path="/"
          element={
            <PrivateRoute>
              <LandingPage />
            </PrivateRoute>
          }
        />

        {/* Admin routes */}
        <Route
          path="/admin"
          element={
            <AdminRoute>
              <AdminLayout />
            </AdminRoute>
          }
        >
          <Route index element={<AdminHome />} />
          <Route path="add-project" element={<AddProject />} />
          <Route path="add-client" element={<AddClient />} />
          <Route path="contact-data" element={<ViewContacts />} />
          <Route path="subscribers" element={<ViewSubscribers />} />
        </Route>

        {/* Catch all unmatched routes */}
        <Route path="*" element={<Navigate to="/signup" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
