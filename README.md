# 📝 To-do List Application

A simple and efficient **To-do List** application built using **Spring Boot** for the backend and **Vite + React** for the frontend. The app allows users to create, update, complete, and delete tasks. Data is stored using an **H2 in-memory database**, making it easy to test and deploy without external DB setup.

---

## 🔧 Technologies Used

### 🖥️ Frontend
- [Vite](https://vitejs.dev/)
- [React](https://reactjs.org/)
- [Axios](https://axios-http.com/) for API communication
- CSS for basic styling

### 🚀 Backend
- [Spring Boot](https://spring.io/projects/spring-boot)
- [H2 Database](https://www.h2database.com/) (in-memory)
- Spring Web
- Spring Data JPA

---

## 📂 Project Structure

To-do-list/
├── backend/
│ └── src/
│ └── main/
│ └── java/
│ └── com.nithin.demo/
│ ├── controllers/
|   └── LoginController.java
│ ├── models/
|   └── LoginModel.java
│ ├── repositories/
|   └── LoginRepo.java
│ └── services/
|   └── LoginService.java
│ ├── DemoApplication.java -- runnable java classfile
├── frontend/
│ ├── src/
│ │ ├── App.jsx
│ └── index.html
│ ├── pages/
|   └── Home.jsx
│ ├── components/
|   └── Navbar.jsx
└── README.md


---

## 🧪 Features

- ✅ Add a new task
- 📋 View all tasks
- ✏️ Edit a task
- 🔁 Mark task as complete/incomplete
- 🗑️ Delete individual tasks
- 🧹 Clear all completed tasks
- 🔍 Filter tasks by status (All, Active, Completed)

---

