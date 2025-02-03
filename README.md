# Number Classification API

## 📋 **Project Description**

This API classifies a given number based on interesting mathematical properties such as whether it is prime, perfect, or an Armstrong number. Additionally, it provides the sum of its digits and a fun fact fetched from the Numbers API.

The API also includes a basic root endpoint returning personal information

---

## 🚀 **Live API URL**

- [Deployed API URL](your-deployment-url) _(Replace with actual URL after deployment)_

---

## ⚙️ **Technology Stack**

- **Backend:** Node.js (Express)
- **External API:** Numbers API
- **HTTP Client:** Axios

---

## 🗂️ **Project Structure**

```
number-classification-api/
├── index.js       # Main server and API logic
├── utils.js       # Helper functions (prime check, Armstrong, etc.)
├── package.json   # Project dependencies
├── .gitignore     # Git ignore file
└── README.md      # Documentation
```

---

## 🌐 **API Endpoints**

### 1️⃣ **Root Endpoint**

**`GET /`**  
Returns basic personal information.

#### ✅ Response (200 OK):

```json
{
  "email": "ebubenwanze@gmail.com",
  "current_datetime": "2025-02-03T12:00:00Z",
  "github_url": "https://github.com/Poeticrow/hng12-stage-0-backend-task"
}
```

---

### 2️⃣ **Number Classification API**

**`GET /api/classify-number?number=<your-number>`**  
Classifies the provided number and returns its mathematical properties.

#### ✅ Response (200 OK):

```json
{
  "number": 264,
  "is_prime": false,
  "is_perfect": false,
  "properties": ["even"],
  "digit_sum": 12,
  "fun_fact": "264 is the largest known number whose square is undulating."
}
```

#### ❌ Response (400 Bad Request):

```json
{
  "number": "abc",
  "error": true
}
```

#### ❌ Response (404 Not Found):

```json
{
  "error": "Route not found"
}
```

---

## 🔍 **Number Properties Explained**

- **`is_prime`**: Checks if the number is a prime number.
- **`is_perfect`**: Determines if the number is perfect (sum of proper divisors equals the number).
- **`properties`**: Lists if the number is `armstrong`, `even`, or `odd`.
- **`digit_sum`**: Returns the sum of all digits in the number.
- **`fun_fact`**: A fun mathematical fact fetched from the [Numbers API](http://numbersapi.com/).

---

## ⚡ **Setup Instructions**

### 1️⃣ **Clone the Repository**

```bash
git clone https://github.com/Poeticrow/hng12-stage-0-backend-task.git
cd hng12-stage-0-backend-task
```

### 2️⃣ **Install Dependencies**

```bash
npm install
```

### 3️⃣ **Run the Server Locally**

```bash
node index.js
# or for development
npx nodemon index.js
```

The server will start on `http://localhost:3002` (or your specified port).

---

## 🚀 **Deployment**

The API is deployed to a publicly accessible endpoint. _(Replace `<your-deployment-url>` above with your actual URL after deployment to Render or any other platform.)_

---

## 💡 **Additional Resources**

- [Numbers API Documentation](http://numbersapi.com/#42)
- [Parity (Mathematics) - Wikipedia](<https://en.wikipedia.org/wiki/Parity_(mathematics)>)
- [Hire Node.js Developers](https://hng.tech/hire/nodejs-developers)

---

## 👨‍💻 **Author**

- **Name:** Ebube Nwanze
- **GitHub:** [Poeticrow](https://github.com/Poeticrow)

---

## 📜 **License**

This project is licensed under the MIT License.
