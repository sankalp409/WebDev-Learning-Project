# 🌍 Wanderlust - Travel Listing Platform

LIVE - https://webdev-learning-project.onrender.com/listings

Welcome to **Wanderlust**, a full-stack travel listing platform inspired by Airbnb. This project was built as a major project to gain practical experience in **Node.js, Express.js, MongoDB, authentication, RESTful routing, MVC architecture, and deployment**.

Users can explore travel listings, view detailed information, search and filter listings, leave reviews, and interact with the platform through a complete CRUD-based system.

---

## ✨ Features

### 🏠 Travel Listings

- Create, read, update, and delete listings
- View detailed listing information
- Add location, country, price, description, and images
- Display listing images dynamically
- Server-side validation using Joi

### 👤 User Authentication & Authorization

- User registration and login
- Secure session-based authentication
- Authorization for protected routes
- Users can manage their own listings
- Authentication handled using Passport.js and Passport-Local-Mongoose

### ⭐ Reviews & Ratings

- Add reviews to listings
- Give listings ratings
- Display ratings on listing pages
- Delete reviews when authorized
- Customized rating UI

### 🔍 Search & Filters

- Search listings
- Filter listings based on categories
- Dynamic filter UI
- Search functionality integrated with the backend

### 💰 Tax / Price Display

- Added tax switch UI
- Toggle tax-inclusive pricing
- Dynamic frontend price calculation/display

### 🖼️ Image Upload

- Upload listing images
- Store images using Cloudinary
- Save image URLs in MongoDB
- Display uploaded images dynamically

### 🗺️ MongoDB Atlas

- Connected the application to MongoDB Atlas
- Used MongoDB sessions for persistent session storage
- Mongoose used for database modeling and operations

### 🛡️ Error Handling & Validation

- Custom `ExpressError` class
- `wrapAsync` for asynchronous error handling
- Joi-based server-side validation
- Custom error pages
- Protection against invalid requests

### 🚀 Deployment

- Source code hosted on GitHub
- Deployed using Render
- Connected Render with GitHub for deployment
- Configured the application for production environment

---

## 🏗️ Architecture

The application follows the **MVC (Model-View-Controller)** architecture.

```text
                 ┌──────────────────┐
                 │      User        │
                 └────────┬─────────┘
                          │
                          ▼
                 ┌──────────────────┐
                 │     Routes       │
                 └────────┬─────────┘
                          │
                          ▼
                 ┌──────────────────┐
                 │   Controllers    │
                 └────────┬─────────┘
                          │
              ┌───────────┴───────────┐
              ▼                       ▼
      ┌───────────────┐       ┌───────────────┐
      │     Models    │       │     Views     │
      │   Mongoose    │       │     EJS       │
      └───────┬───────┘       └───────────────┘
              │
              ▼
      ┌───────────────┐
      │    MongoDB    │
      └───────────────┘
```

---

## 🛠️ Tech Stack

| Technology                  | Purpose                            |
| --------------------------- | ---------------------------------- |
| **Node.js**                 | Server-side JavaScript runtime     |
| **Express.js**              | Backend web framework              |
| **MongoDB**                 | Database                           |
| **MongoDB Atlas**           | Cloud database                     |
| **Mongoose**                | MongoDB ODM                        |
| **EJS**                     | Server-side templating             |
| **EJS-Mate**                | EJS layouts and reusable templates |
| **Bootstrap**               | Responsive UI                      |
| **JavaScript**              | Frontend functionality             |
| **Passport.js**             | Authentication                     |
| **Passport-Local-Mongoose** | User authentication                |
| **Joi**                     | Data validation                    |
| **Cloudinary**              | Image storage                      |
| **Multer**                  | File/image upload handling         |
| **Express Session**         | Session management                 |
| **Mongo Store**             | Persistent session storage         |
| **Render**                  | Deployment                         |
| **Git & GitHub**            | Version control                    |

---

## 📂 Project Structure

```text
WANDERLUST/
│
├── controllers/          # Application/business logic
│   ├── listings.js
│   ├── reviews.js
│   └── users.js
│
├── init/                 # Database initialization / sample data
│
├── models/               # Mongoose data models
│   ├── listing.js
│   ├── review.js
│   └── user.js
│
├── public/               # Static files
│   ├── css/
│   └── js/
│
├── routes/               # Express routes
│   ├── listing.js
│   ├── review.js
│   └── user.js
│
├── utils/                # Utility functions
│   ├── ExpressError.js
│   └── wrapAsync.js
│
├── views/                # EJS templates
│   ├── layouts/
│   ├── listings/
│   ├── users/
│   └── includes/
│
├── app.js                # Main application entry point
├── cloudConfig.js        # Cloudinary configuration
├── middleware.js         # Custom middleware
├── schema.js             # Joi validation schemas
├── package.json          # Project dependencies
└── README.md             # Project documentation
```

---

## 🔐 Authentication Flow

Wanderlust uses **Passport.js** for authentication.

```text
User
  │
  ├── Register
  │      ↓
  │   User saved in MongoDB
  │
  ├── Login
  │      ↓
  │   Passport verifies credentials
  │      ↓
  │   Session created
  │
  └── Protected Routes
         ↓
      Authorization
         ↓
   Create / Edit / Delete
```

---

## ☁️ Image Upload Flow

Listing images are uploaded using **Multer** and stored on **Cloudinary**.

```text
User selects image
       ↓
     Multer
       ↓
   Cloudinary
       ↓
 Image URL generated
       ↓
 URL saved in MongoDB
       ↓
 Image displayed on website
```

---

## 🗄️ Database

The project uses **MongoDB** with **Mongoose**.

Main collections/models include:

- `User`
- `Listing`
- `Review`

Listings and reviews are connected using MongoDB relationships, allowing users to review specific travel listings.

---

## 🚀 Deployment

The project is deployed using **Render**.

Deployment workflow:

```text
Local Development
       ↓
     Git
       ↓
    GitHub
       ↓
 Render connected to GitHub
       ↓
   Build & Deploy
       ↓
 Production Application
```

The application also uses **MongoDB Atlas** for the production database and **Cloudinary** for cloud-based image storage.

---

## 💻 Running Locally

### 1. Clone the repository

```bash
git clone <your-github-repository-url>
cd wanderlust
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure environment variables

Create a `.env` file:

```env
ATLASDB_URL=your_mongodb_atlas_connection_string
SECRET=your_session_secret

CLOUD_NAME=your_cloudinary_cloud_name
CLOUD_API_KEY=your_cloudinary_api_key
CLOUD_API_SECRET=your_cloudinary_api_secret
```

### 4. Start the application

For development:

```bash
npm run dev
```

Or:

```bash
node app.js
```

Then open:

```text
http://localhost:8080
```

---

## 📸 Project Highlights

Some of the major concepts implemented while building Wanderlust:

- MVC architecture
- CRUD operations
- RESTful routing
- User authentication
- Authorization middleware
- Session management
- MongoDB Atlas
- MongoDB session store
- Image upload with Cloudinary
- Search and filtering
- Reviews and ratings
- Tax calculation/display
- Server-side validation
- Custom error handling
- Git/GitHub workflow
- Deployment with Render

---

## 🎯 Learning Outcomes

Building Wanderlust helped me move from basic frontend development toward real-world backend development.

Through this project, I gained practical experience with:

- Designing backend applications using MVC
- Building RESTful APIs and routes
- Working with MongoDB and Mongoose
- Implementing authentication and authorization
- Handling file uploads and cloud storage
- Managing sessions
- Validating user input
- Working with third-party services
- Deploying a full-stack application
- Using Git and GitHub for version control

---

## 🔮 Future Improvements

Some features I would like to add in the future:

- 🗺️ Interactive maps for listings
- ❤️ Wishlist / favorite listings
- 💳 Online payment integration
- 📧 Email notifications
- 🤖 AI-powered travel recommendations
- 📱 Improved mobile-first UI
- 🔔 Real-time notifications
- 🌐 More advanced search and sorting

---

## 👨‍💻 Author

**Sankalp Yadav**

B.Tech Computer Science & Engineering Student

This project is part of my journey toward becoming a **Full-Stack Web Developer**.

---

## ⭐ Acknowledgement

This project was created as a learning project to understand and implement full-stack web development concepts using the **Node.js, Express.js, MongoDB, and EJS ecosystem**.

If you found this project interesting, consider giving the repository a ⭐!
