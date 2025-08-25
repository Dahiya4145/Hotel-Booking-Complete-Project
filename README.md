# 🏨 Hotel Booking Complete Project

A **full-stack Hotel Booking Management System** with three main modules:

* **Client App** – for customers to browse hotels, check availability, and book rooms.
* **Admin Dashboard** – for hotel admins to manage rooms, bookings, and users.
* **API Backend** – handles authentication, booking logic, and database operations.

---

## 🚀 Tech Stack

* **Frontend (Client & Admin):** React.js, CSS/SCSS
* **Backend (API):** Node.js, Express.js
* **Database:** MongoDB (or SQL – update if different)
* **Authentication:** JWT (JSON Web Token)
* **Version Control:** Git & GitHub

---

## 📂 Project Structure

```
Hotel-Booking-Complete-Project/
│
├── admin/     # React Admin Dashboard
├── api/       # Node.js + Express Backend API
├── client/    # React Client App (Customer side)
└── README.md  # Project Documentation
```

---

## ✨ Features

### Client (User Side)

* Browse available hotels and rooms
* User authentication (sign up / login)
* Search & filter rooms
* Book a room instantly
* View booking history

### Admin Panel

* Manage hotels, rooms, and bookings
* Approve or cancel reservations
* User management
* Dashboard with analytics

### API Backend

* RESTful API endpoints
* Authentication & Authorization (JWT)
* Booking management logic
* Database integration

---

## ⚙️ Installation & Setup

### Prerequisites

Make sure you have installed:

* [Node.js](https://nodejs.org/) (v16+ recommended)
* [MongoDB](https://www.mongodb.com/) (local or cloud like MongoDB Atlas)
* Git

### Steps

1. **Clone the repository**

   ```bash
   git clone https://github.com/Dahiya4145/Hotel-Booking-Complete-Project.git
   cd Hotel-Booking-Complete-Project
   ```

2. **Install dependencies for each module**

   ```bash
   cd client
   npm install
   cd ../admin
   npm install
   cd ../api
   npm install
   ```

3. **Set up environment variables**
   Create a `.env` file in `/api` with:

   ```
   PORT=5000
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_secret_key
   ```

4. **Run the project**

   * Start backend:

     ```bash
     cd api
     npm start
     ```
   * Start client:

     ```bash
     cd client
     npm start
     ```
   * Start admin:

     ```bash
     cd admin
     npm start
     ```

5. Open in browser:

   * Client: [http://localhost:3000](http://localhost:3000)
   * Admin: [http://localhost:3001](http://localhost:3001) (or whichever port React chooses)
   * API: [http://localhost:5000](http://localhost:5000)

---

## 📌 API Endpoints (Sample)

| Method | Endpoint             | Description        |
| ------ | -------------------- | ------------------ |
| POST   | `/api/auth/register` | Register new user  |
| POST   | `/api/auth/login`    | Login user         |
| GET    | `/api/rooms`         | Get all rooms      |
| POST   | `/api/bookings`      | Create new booking |
| GET    | `/api/bookings/:id`  | Get booking by ID  |

---

## 🖼️ Screenshots (Add later)

* Client homepage
* Booking form
* Admin dashboard

---

## 📅 Roadmap

* [ ] Add online payment gateway (Razorpay / Stripe)
* [ ] Add email notifications for booking confirmation
* [ ] Deploy on cloud (Render/Heroku + Netlify/Vercel)
* [ ] Add CI/CD pipeline

---

## 🤝 Contributing

Pull requests are welcome! For major changes, please open an issue first to discuss what you’d like to change.

---

## 📜 License

This project is licensed under the **MIT License**.

