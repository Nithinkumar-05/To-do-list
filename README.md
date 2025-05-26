# 📝 To-Do List Application

A modern, full-stack **To-Do List** application built with **Spring Boot** and **React**. This application provides a clean, intuitive interface for managing daily tasks with complete CRUD functionality and real-time updates.

---

## ✨ Features

- 🆕 **Add Tasks** - Create new tasks with ease
- 📖 **View Tasks** - Display all tasks in a clean interface
- ✏️ **Edit Tasks** - Modify existing task details
- ✅ **Toggle Status** - Mark tasks as complete or incomplete
- 🗑️ **Delete Tasks** - Remove individual tasks
- 🧹 **Bulk Actions** - Clear all completed tasks at once
- 🔍 **Filter System** - View tasks by status (All, Active, Completed)
- 💾 **Persistent Storage** - Data stored in H2 database

---

## 🛠️ Technology Stack

### Frontend
| Technology | Purpose |
|------------|---------|
| **React** | UI library for building interactive components |
| **Vite** | Fast build tool and development server |
| **Axios** | HTTP client for API communication |
| **CSS3** | Styling and responsive design |

### Backend
| Technology | Purpose |
|------------|---------|
| **Spring Boot** | Java framework for REST API development |
| **Spring Data JPA** | Database abstraction layer |
| **H2 Database** | In-memory database for development |
| **Spring Web** | Web layer and RESTful services |

---

## 📁 Project Structure

```
to-do-list/
│
├── 🔧 backend/
│   └── src/main/java/com/nithin/demo/
│       ├── 🎮 controllers/
│       │   └── LoginController.java
│       ├── 📊 models/
│       │   └── LoginModel.java
│       ├── 🗃️ repositories/
│       │   └── LoginRepo.java
│       ├── ⚙️ services/
│       │   └── LoginService.java
│       └── 🚀 DemoApplication.java
│
├── 🎨 frontend/
│   ├── src/
│   │   ├── 📱 App.jsx
│   │   ├── 🏠 pages/
│   │   │   └── Home.jsx
│   │   └── 🧩 components/
│   │       └── Navbar.jsx
│   └── 📄 index.html
│
└── 📖 README.md
```

---

## 🚀 Getting Started

### Prerequisites
- **Java 11+** ☕
- **Node.js 16+** 🟢
- **npm or yarn** 📦

### Installation & Setup

#### 🔧 Backend Setup
```bash
# Navigate to backend directory
cd backend

# Run the Spring Boot application
./mvnw spring-boot:run

# The API will be available at http://localhost:8080
```

#### 🎨 Frontend Setup
```bash
# Navigate to frontend directory
cd frontend

# Install dependencies
npm install

# Start the development server
npm run dev

# The app will be available at http://localhost:5173
```

---

## 🌐 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/api/tasks` | Retrieve all tasks |
| `POST` | `/api/tasks` | Create a new task |
| `PUT` | `/api/tasks/{id}` | Update a specific task |
| `DELETE` | `/api/tasks/{id}` | Delete a specific task |
| `DELETE` | `/api/tasks/completed` | Delete all completed tasks |

---

## 🎯 Usage

1. **Add a Task**: Enter your task in the input field and click "Add"
2. **Complete a Task**: Click the checkbox next to any task
3. **Edit a Task**: Click the edit button and modify the text
4. **Delete a Task**: Click the delete button (🗑️) next to any task
5. **Filter Tasks**: Use the filter buttons to show All, Active, or Completed tasks
6. **Clear Completed**: Remove all completed tasks with one click

---

