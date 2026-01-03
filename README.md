# KindEarth - Social Development Events Platform

**KindEarth** is a community-driven event management platform that empowers users to create, join, and manage social service events in their local area.  
From cleanup drives and plantation programs to donation campaigns — KindEarth brings people together to make a positive impact on society.

---

## 🔗 Live Site URL

[https://harmonious-lebkuchen-d713e8.netlify.app/](https://harmonious-lebkuchen-d713e8.netlify.app/)

## 🚀 Features

- **Create & Join Events** – Easily organize or participate in social activities like cleanups, plantations, and donations.
- **Event Management Dashboard** – View and manage all your events in one place with real-time updates and delete.
- **Community Connection** – Connect with people who share your passion for social change.
- **Dark & Light Themes** – Enjoy a modern, user-friendly interface with theme customization.
- **Secure Authentication** – Sign in securely with your email or Google account.
- **Filter sort and search** – Joined event, manage event sorting by date and search sort filter maintains with database api(mongoDb).
- **Protected Routes** – Secure private routes (like 'ViewDetails', 'Create event', 'manage event', 'joined event' ) that automatically redirect unauthenticated users to the Login page.

---

## 🛠️ Technology Stack

### Client-Side

- **UI Framework:** React.js
- **Routing:** React Router
- **Styling:** Tailwind CSS, DaisyUI
- **Animation:** Framer Motion, animate-presence
- **Date:** react-datepicker, date-fns
- **State Management:** React Context API
- **Data Fetching:** UseEffect
- **Notifications:** React Toastify, SweetAlert2
- **Icons:** React Icons, lucide icons

---

### Server-Side

- **Runtime:** Node.js
- **Framework:** Express.js
- **Database:** MongoDB (MongoDB Atlas)
- **Security:** Firebase Token

---

### Authentication

- **Firebase Authentication** (Email/Password & Google Sign-In)

---

## 📦 Dependencies

| Package | Version |
|--------|---------|
| @tailwindcss/vite | ^4.1.17 |
| animate-presence | ^0.2.1 |
| axios | ^1.13.2 |
| date-fns | ^4.1.0 |
| firebase | ^12.5.0 |
| framer-motion | ^12.23.24 |
| lucide | ^0.553.0 |
| lucide-react | ^0.553.0 |
| react | ^19.1.1 |
| react-datepicker | ^8.8.0 |
| react-dom | ^19.1.1 |
| react-hot-toast | ^2.6.0 |
| react-icons | ^5.5.0 |
| react-router | ^7.9.5 |
| react-toastify | ^11.0.5 |
| sweetalert2 | ^11.26.3 |
| tailwindcss | ^4.1.17 |

### 🛠 Dev Dependencies

| Package | Version |
|--------|---------|
| @eslint/js | ^9.36.0 |
| @types/react | ^19.1.16 |
| @types/react-dom | ^19.1.9 |
| @vitejs/plugin-react | ^5.0.4 |
| daisyui | ^5.4.7 |
| eslint | ^9.36.0 |
| eslint-plugin-react-hooks | ^5.2.0 |
| eslint-plugin-react-refresh | ^0.4.22 |
| globals | ^16.4.0 |
| vite | ^7.1.7 |

---
### Deployment

- Client: Netlify
- Server: Vercel

## 🚀 How to Run Locally

### 1️⃣ Clone the Repository
```bash
https://github.com/SowvikSuvo/social-events-client.git
cd social-events-client


