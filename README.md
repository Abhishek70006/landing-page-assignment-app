# Landing Page Assignment App

This repository contains a full-stack landing page application with a React frontend and a Node/Express backend. The backend uses MongoDB for persistence and Cloudinary for image uploads.

**Tech Stack**

- **Backend**: Node.js, Express, MongoDB, Mongoose, Cloudinary, Multer, JSON Web Tokens (JWT), `bcryptjs`
- **Frontend**: React (Create React App), `axios`, `react-router-dom`, `framer-motion`
- **Dev / Tooling**: `nodemon` (via `npx nodemon`), `dotenv`, CORS

**Models**

- **`Client`**: `imageUrl` (String), `name` (String, required), `description` (String), `designation` (String), timestamps
- **`Project`**: `imageUrl` (String), `name` (String, required), `description` (String), timestamps
- **`Contact`**: `fullName` (String, required), `email` (String, required), `mobile` (String), `city` (String), timestamps
- **`Subscriber`**: `email` (String, required, unique), timestamps
- **`User`**: `name` (String), `email` (String, required, unique), `password` (String), `role` (String enum: `user|admin`, default `user`), `isPreRegistered` (Boolean)

Files: `backend/models/Client.js`, `backend/models/Project.js`, `backend/models/Contact.js`, `backend/models/Subscriber.js`, `backend/models/User.js`

**API**

Base URL (backend): `/api`

- **Auth**:

  - **POST** `/api/auth/signup` : create account (returns JWT + user)
  - **POST** `/api/auth/login` : login with email & password (returns JWT + user)
  - **GET** `/api/auth/admin-dashboard` : example protected admin route (requires `Authorization: Bearer <token>` and admin role)
  - **GET** `/api/auth/user-dashboard` : example protected user route (requires `Authorization: Bearer <token>`)

- **Clients** (`backend/routes/clientRoutes.js`):

  - **GET** `/api/clients/` : get all clients (public)
  - **POST** `/api/clients/add` : add new client (multipart/form-data with `image`) — used by admin in UI (uploads image to Cloudinary)

- **Projects** (`backend/routes/projectRoutes.js`):

  - **GET** `/api/projects/` : get all projects (public)
  - **POST** `/api/projects/add` : add new project (multipart/form-data with `image`) — used by admin (uploads image to Cloudinary)

- **Contact** (`backend/routes/contactRoutes.js`):

  - **POST** `/api/contact/` : submit contact form (public)
  - **GET** `/api/contact/all` : get all contact submissions (admin)

- **Subscribe** (`backend/routes/subscribeRoutes.js`):

  - **POST** `/api/subscribe/` : add subscriber (body: `{ email }`)
  - **GET** `/api/subscribe/all` : list subscribers (admin)

- **Admin** (`backend/routes/adminRoutes.js`):
  - **GET** `/api/admin/contact-data` : list contact submissions (admin)
  - **GET** `/api/admin/subscribers` : list subscribers (admin)

Notes:

- Authentication uses JWT tokens issued by the auth endpoints. Protected routes expect an `Authorization: Bearer <token>` header. The `authController` defines `protect` and `admin` middlewares.
- File uploads are handled with `multer` (memory storage) and `backend/middleware/uploadToCloudinary.js` streams files to Cloudinary.

**Environment Variables**

- `MONGO_URI` : MongoDB connection string (defaults to `mongodb://localhost:27017/fullstack_app` if not set)
- `PORT` : Backend port (default `5000`)
- `JWT_SECRET` : Secret for signing JWT tokens
- `CLOUDINARY_NAME`, `CLOUDINARY_API_KEY`, `CLOUDINARY_API_SECRET` : Cloudinary credentials for image uploads

**Local Setup**

1. Backend

```powershell
cd backend
npm install
# create a .env file with the variables: MONGO_URI, JWT_SECRET, CLOUDINARY_NAME, CLOUDINARY_API_KEY, CLOUDINARY_API_SECRET
npm run dev
```

2. Frontend

```powershell
cd frontend
npm install
npm start
```

Access the frontend at `http://localhost:3000` (CRA default) and the backend at `http://localhost:5000` (or configured `PORT`).

**Project Structure (important files)**

- `backend/server.js` : mounts routes under `/api/*` and connects to MongoDB
- `backend/routes/*` : route handlers for auth, clients, projects, contact, subscribe, admin
- `backend/models/*` : Mongoose models
- `backend/middleware/uploadToCloudinary.js` : Cloudinary upload helper used by client/project routes
- `frontend/src` : React app (pages under `pages/`, shared components under `shared/`)

If you want, I can also:

- Add example `curl` or `Postman` requests for each endpoint
- Generate a `.env.example` file with required variables

---
