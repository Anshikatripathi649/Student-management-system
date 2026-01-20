# 🎓 Student Management System

A fully functional **CRUD (Create, Read, Update, Delete)** application built with **React.js**. This project allows users to manage student records efficiently with a modern, responsive user interface.
<img width="861" height="803" alt="image" src="https://github.com/user-attachments/assets/369f2d30-8f4c-429c-87e6-979395270795" />

## 🚀 Features

* **Create:** Add new students with details (Name, Roll No, Class, etc.).
* **Read:** View a dynamic list of all students.
* **Update:** Edit existing student details instantly.
* **Delete:** Remove records from the system.
* **🔍 Search & Filter:** Real-time search by Name or Roll Number.
* **💾 Data Persistence:** Uses **LocalStorage** so data isn't lost on page reload.
* **Responsive Design:** Styled with **Bootstrap 5** for mobile and desktop support.

## 🛠️ Tech Stack

* **Frontend:** React.js (Hooks: `useState`, `useEffect`)
* **Styling:** Bootstrap 5
* **Data Storage:** Browser LocalStorage API
* **Version Control:** Git & GitHub

## 📂 Project Structure

This project follows a component-based architecture:

* **`App.js`**: The "Boss" component. Holds the Master State and manages data logic (Lifting State Up).
* **`StudentForm`**: Handles adding and updating student records.
* **`StudentList`**: A display component that renders the table of students.
* **`SearchBar`**: A controlled component for filtering the student list.

## ⚙️ How to Run Locally

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/Anshikatripathi649/student-management-system.git](https://github.com/Anshikatripathi649/student-management-system.git)
    ```

2.  **Navigate to the project folder:**
    ```bash
    cd student-management-system
    ```

3.  **Install dependencies:**
    ```bash
    npm install
    ```

4.  **Start the application:**
    ```bash
    npm start
    # OR if using Vite
    npm run dev
    ```

## 🧠 Key Learnings

Building this project helped me master:
* **React State Management:** Handling complex state logic and passing props between siblings via the parent.
* **Derived State:** Implementing search filters without mutating the original data.
* **Component Lifecycle:** Using `useEffect` to sync data with LocalStorage.

## 🔮 Future Improvements

* Add Form Validation (prevent empty submissions).
* Connect to a real Backend (Node.js/Express) instead of LocalStorage.
* Add sorting functionality (e.g., sort by Class or Name).

---

Made with ❤️ by Anshika Tripathi

