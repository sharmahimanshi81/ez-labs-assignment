# 🌐 EZ Assignment

**EZ Assignment** is a responsive React web application that includes a **Hero Section**, a **validated Contact Form**, and a **responsive Header** with a toggle menu for mobile view.  
It is built entirely using **pure React.js and CSS**, without any external UI or state management libraries — focusing on simplicity, performance, and responsiveness.

---

## 🚀 Features

- **Fully Responsive Layout**
  - Adapts seamlessly across desktop, tablet, and mobile screens.
  - Built using CSS Flexbox and media queries.

- **Hero Section**
  - Includes a Mandala background, brand logo, and introductory text.
  - Left-right layout on desktop and stacked layout on mobile.
  - Creates a clean and minimal first impression.

- **Contact Form with Validation**
  - Input fields for Name, Email, and Message.
  - Built-in validation for required fields (e.g., email format, empty input checks).
  - Displays error messages below invalid fields.
  - Shows success confirmation on valid submission.
  - State managed using React’s `useState` hooks.

- **Responsive Header with Toggle Menu**
  - Header includes brand logo and navigation options (Home, Contact, etc.).
  - In mobile view:
    - Only a **menu icon** (hamburger) is visible.
    - On **first click**, the menu expands to show options.
    - On **second click**, it collapses back.
  - Controlled using a React `useState` toggle for open/close state.
  - Smooth CSS transitions for menu animation.

- **Lightweight & Clean**
  - No Tailwind, Bootstrap, or external libraries.
  - Pure React + CSS for total control and faster load times.

---

## 🧠 Tech Stack

| Category | Technology |
|-----------|-------------|
| **Framework** | React.js |
| **Styling** | CSS (Pure CSS / CSS Modules) |
| **State Management** | React Hooks (`useState`, `useEffect`) |
| **Build Tool** | Create React +Vite website |
| **Version Control** | Git & GitHub |

---

## 🧩 Pages Overview

### 🏠 Hero Page
- Features Mandala background and EZ brand logo.
- Introductory section aligned using flexbox.
- Visually appealing landing page optimized for all devices.

### 📬 Contact Page
- Functional contact form with name, email, and message fields.
- Validates input and displays error messages dynamically.
- Shows success message after valid submission.
- Uses controlled components for real-time input handling.

### 📱 Header (Responsive Navigation)
- Desktop: Full navigation bar visible.
- Mobile: Collapsible hamburger menu.
- Toggle controlled via React state and CSS transitions.

---

## 📱 Responsiveness

- **Desktop:** Split layout for hero section and full nav bar visible.
- **Tablet:** Adjusted font sizes and spacing for balanced layout.
- **Mobile:**  
  - Header collapses into a toggle menu.  
  - Sections stack vertically with centered text and visuals.  
  - Buttons and input fields scale for touch-friendly usability.

---

