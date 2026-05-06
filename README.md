# RootPromptNext Demo App

A full‑stack CRUD application built with **Spring Boot (Java)** for the backend and **React (Node.js)** for the frontend.  
This demo manages a list of books with Create, Read, Update, and Delete functionality.

---

## Backend Setup (Spring Boot)

### Install Maven & JDK 21
```bash
sudo apt update && sudo apt -y install maven openjdk-21-jdk
```

### Verify Installation
```bash
java -version
mvn -version
```

### Build & Run
```bash
cd full-stack-app1/backend
mvn clean package
java -jar target/sreapp-0.0.1-SNAPSHOT.jar
```

Backend will start on **http://localhost:9090**

---

## Test CRUD Endpoints

### Create a Book
```bash
curl -X POST http://localhost:9090/api/books \
  -H "Content-Type: application/json" \
  -d '{"title":"SRE Handbook","author":"Google","year":2020}'
```

### Get All Books
```bash
curl http://localhost:9090/api/books
```

### Get Book by ID
```bash
curl http://localhost:9090/api/books/1
```

### Update a Book
```bash
curl -X PUT http://localhost:9090/api/books/1 \
 -H "Content-Type: application/json" \
 -d '{"title":"SRE Handbook Updated","author":"Google","year":2021}'
```

### Delete a Book
```bash
curl -X DELETE http://localhost:9090/api/books/1
```

---

## Frontend Setup (React)

### Install Node.js & npm
```bash
cd ~/full-stack-app1/frontend

sudo apt update && sudo apt install -y curl
curl -fsSL https://deb.nodesource.com/setup_22.x | sudo -E bash -
sudo apt install -y nodejs
```

### Verify Installation
```bash
node -v
npm -v
```

### Run Frontend
```bash
cd ~/full-stack-app1/frontend
npm install
npm start
```

Frontend will start on **http://localhost:3000**

---

## Project Structure

```
full-stack-app1/
├── backend/        # Spring Boot backend (Java, Maven)
│   ├── src/main/java/com/example/sreapp/
│   ├── src/main/resources/
│   └── pom.xml
└── frontend/       # React frontend (Node.js, npm)
    ├── src/
    └── package.json
```

---

## ⚡ Features
- Full CRUD API with Spring Boot (Books resource).
- React frontend.
- REST endpoints tested via `curl`.
- Clean separation of backend and frontend.

---

## License
Demo project for learning purposes.  
© RootPromptNext — [learning.rootpromtpnext.com](https://learning.rootpromtpnext.com)
```
