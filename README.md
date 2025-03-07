# Express.js Server

This is a simple and well-structured **Express.js** server with basic configurations including routing, middleware, and security.

## 🚀 Features

- Express.js framework
- Environment variable management using **dotenv**
- CORS enabled for cross-origin requests
- Helmet for security headers
- Morgan for request logging
- Modular routing
- Nodemon for development mode

## 📂 Project Structure

```
/express-server
│-- server.js        # Main entry point
│-- routes.js        # API route handling
│-- package.json     # Project metadata and dependencies
│-- README.md        # Project documentation
```

## 🛠 Installation

1. **Clone the Repository**

   ```sh
   git clone https://github.com/rahyanakil/learnakil.git
   cd learnakil
   ```

2. **Install Dependencies**

   ```sh
   npm install
   ```

3. **Create a `.env` File** (if not present) and add:
   ```env
   PORT=5000
   NODE_ENV=development
   ```

## ▶️ Usage

### Start the Server

- Run in normal mode:
  ```sh
  npm start
  ```
- Run in development mode (auto-restart on changes):
  ```sh
  npm run dev
  ```

### API Endpoints

- **GET /** → `Welcome to Express Server`
- **GET /api/hello** → `{ "message": "Hello from Express API" }`

## 📦 Dependencies

```json
{
  "express": "^4.18.2",
  "dotenv": "^16.0.3",
  "cors": "^2.8.5",
  "helmet": "^7.0.0",
  "morgan": "^1.10.0"
}
```

## 🤝 Contributing

Feel free to contribute! Fork the repository, make your changes, and submit a pull request.

## 📜 License

This project is licensed under the **MIT License**.

---

Made with ❤️ using Express.js
