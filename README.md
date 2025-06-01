# 🎉 Eventify 
[🔗 Demo](https://chaitanya566.github.io/Eventify/)


Eventify is a modern and dynamic calendar and event management web application built with **React** and **TypeScript**. It features customizable themes, user-friendly interfaces, and a modular architecture for ease of scalability and maintainability.

---

## ✨ Features

- 🗓️ Interactive and responsive calendar interface
- 🧠 Add and manage task details with tooltips
- 🎨 Multiple themes including:
  - Dark Theme
  - Neon Blue Theme
  - Neon Red Theme
- 🧩 Modular components like SideBar, ThemeSelector, Input Forms, and Calendar Templates
- 🖼️ Custom icons for enhanced UI experience

---

## ⚙️ Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/chaitanya566/Eventify.git
cd Eventify
npm install
```

Run the development server:

```bash
npm run dev
```
or
```bash
npm start
```
---

## 🚀 Usage

1. Select your preferred theme from the dropdown.
2. Navigate using the sidebar.
3. Add events/tasks by clicking on the calendar or via the input form.
4. View your events dynamically rendered in the task calendar.

---

## 🏗️ Architecture

```plaintext
src/
├── assets/
│   └── themes/
│       ├── dark-Theme/
│       ├── neon-blue-theme/
│       └── neon-red-theme/
├── components/
│   ├── Calendar/
│   ├── CalendarTemplate/
│   ├── InputTaskDetails/
│   ├── SideBar/
│   ├── taskCalendar/
│   └── ThemeSelection/
└── App.tsx (entry)
```

Each component folder contains associated logic and styling, promoting reusability and separation of concerns.

---

## 🧰 Tech Stack

- ⚛️ React
- ⛑️ TypeScript
- 🎨 CSS Modules
- 🗂️ Vite / Webpack

---

## 📁 Assets

This project includes rich iconography and themed assets for a better visual experience.

---

## 📜 License

MIT License

---