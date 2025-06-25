# Globe Quest

## Purpose
Globe Quest is a holiday plan subscription box website, similar to "Globe Insight," designed to deliver curated travel kits that inspire unique adventures and save planning time. It builds customer loyalty and recurring revenue by showcasing themed boxes through a visually engaging Swiper JS carousel while offering personalized, cost-effective holiday experiences. This demo project highlights front-end development skills, focusing on an interactive user interface for showcasing subscription options.

## Live URL
( https://globe-quest-77b62.web.app/)

## Key Features
- **Swiper JS Carousel**: A 3D coverflow carousel displaying themed holiday subscription boxes (e.g., jungle, arctic, desert) with 5 slides visible, centered, and auto-playing.
- **Responsive Design**: A clean, user-friendly layout with sections for a header, carousel, subscription plans, contact form, and footer.
- **Static Subscription Plans**: Simulated plans with titles, prices, and "Explore Now" buttons to mimic a subscription model.
- **Contact Form**: A simple form for user inquiries, enhancing interactivity.
- **Branding**: Incorporates the "Globe Quest" theme to reflect global holiday adventures.

## NPM Packages Used
- **swiper**: Used for creating the interactive carousel with coverflow and autoplay effects (`npm install swiper`).
- **react**: The core library for building the user interface (`npx create-react-app`).
- **react-dom**: Supports rendering React components in the DOM (included with Create React App).
- **sweet-alert**: Provides a customizable, modern popup library for alerts and confirmations in web applications. Easily integrated with React to enhance user interactions with styled, animated dialogs, replacing basic browser alerts.
- **react-icons**: Offers a collection of popular icon libraries (e.g., Font Awesome, Material Icons) as React components. Simplifies adding scalable, customizable icons to React apps, enhancing UI with minimal setup.

---

## 🚀 Setup Instructions

### Prerequisites

- Node.js (v14 or later)
- MongoDB Atlas account
- Firebase project with Service Account

### Installation Steps

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd project-directory
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Set up environment variables** Create a `.env` file in root directory with
   these variables:

   ```
   PORT=3000
   DB_USER=your_mongodb_username
   DB_PASS=your_mongodb_password
   JWT_SECRET_KEY=your_jwt_secret
   FB_SERVICE_KEY=your_firebase_service_account_base64
   ```

4. **Run the server**

   ```bash
   npm start
   # or for development
   npm run dev
   ```

5. **Test the server** The server should be running at:
   ```
   http://localhost:3000
   ```
---