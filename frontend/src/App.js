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
