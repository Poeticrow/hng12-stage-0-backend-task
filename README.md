# HNG12 Backend Task – Public API

This is a **public API** developed using **Node.js (Express.js)** that returns:

- Your registered **HNG12 email**
- The **current datetime** in **ISO 8601 (UTC) format**
- The **GitHub repository URL** of this project

The API is deployed to a **publicly accessible endpoint** and includes proper **CORS handling**, **error handling**, and adheres to **RESTful principles**.

---

## 🚀 Features

✅ Returns a JSON response with **email, timestamp, and GitHub URL**  
✅ Handles **CORS (Cross-Origin Resource Sharing)**  
✅ Uses **ISO 8601 (UTC) timestamp**  
✅ Proper **HTTP status codes (200, 404, 500)**  
✅ Includes **error handling**

---

## 📌 API Endpoint

### **GET /**

Returns basic information in JSON format.

### ✅ Response Format (200 OK)

```json
{
  "email": "ebubenwanze@gmail.com",
  "current_datetime": "2025-01-30T09:30:00Z",
  "github_url": "https://github.com/Poeticrow/hng12-stage-0-backend-task"
}
```

### ❌ Error Responses

| **Scenario**                      | **Status Code**             | **Response**                           |
| --------------------------------- | --------------------------- | -------------------------------------- |
| Invalid route (`GET /random`)     | `404 Not Found`             | `{ "error": "Route not found" }`       |
| Server error (unexpected failure) | `500 Internal Server Error` | `{ "error": "Internal Server Error" }` |

---

## 💻 Installation & Setup

### 1️⃣ Clone the Repository

```sh
git clone https://github.com/Poeticrow/hng12-stage-0-backend-task.git
cd your-repo
```

### 2️⃣ Install Dependencies

```sh
npm install
```

### 3️⃣ Start the Server

- **Production Mode:**
  ```sh
  npm start
  ```
- **Development Mode (Auto-restart with nodemon):**
  ```sh
  npm run dev
  ```

### 4️⃣ Access the API

Open your browser or use a tool like **Postman** to test:

```
http://localhost:3002/
```

---

## 🌍 Deployment

This API is **deployed** to a publicly accessible endpoint:  
🔗 **Live URL:** `[https://hng12-stage-0-backend-task.onrender.com]`

---

## 📖 Resources

- **HNG12 Internship:** [https://hng.tech](https://hng.tech)
- **Hire Node.js Developers:** [https://hng.tech/hire/nodejs-developers](https://hng.tech/hire/nodejs-developers)

---

## 📜 License

This project is licensed under the **MIT License**.

---

### 🎯 Contributors

👤 **Ebube Nwanze** – [GitHub](https://github.com/Poeticrow)
