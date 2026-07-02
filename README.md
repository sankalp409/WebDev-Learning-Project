# 🌍 Wanderlust - Travel Exploration Platform

Wanderlust is a full-stack web application designed for travel enthusiasts to discover, list, and review unique travel destinations around the world. Built using the **MVC (Model-View-Controller)** architecture, this project allows users to seamlessly browse through listings, view detailed information about specific spots, and manage destination data.

---

## 🚀 Features

- **Explore Destinations:** A dynamic homepage showcasing a wide variety of travel listings.
- **Detailed Views:** In-depth information for each destination, including descriptions, pricing, and location details.
- **Full CRUD Functionality:** Authorized users can create new listings, edit existing details, or delete destinations.
- **Responsive Layouts:** Crafted with a clean, mobile-friendly UI using boilerplate templates and custom styling.

---

## 🛠️ Tech Stack

- **Frontend:** HTML5, CSS3, Bootstrap, EJS (Embedded JavaScript Templates)
- **Backend:** Node.js, Express.js
- **Database:** MongoDB (via Mongoose ODM)

---

## 📁 Project Structure

Based on the core MVC architecture:

```text
MAJOR PROJECT/
├── init/             # DB initialization scripts and sample data (data.js, index.js)
├── models/           # Mongoose schemas (listing.js)
├── public/           # Static assets (custom style.css, images)
├── views/            # EJS template engine files
│   ├── layouts/      # Global templates (boilerplate.js)
│   ├── includes/     # Reusable UI components (navbar.ejs)
│   └── listings/     # CRUD views (index, show, new, edit)
├── app.js            # Main entry point of the application
├── package.json      # Project dependencies and metadata
└── .gitignore        # Files excluded from Git tracking (node_modules)
```
