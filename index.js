const express = require("express");
const cors = require("cors"); // CORS 모듈 추가
const app = express();
const db = require("./db");
const PORT = process.env.PORT || 3001;

// 미들웨어 설정
app.use(cors()); // CORS 미들웨어 사용
app.use(express.json());

// 기본 라우트 설정
app.get("/", (req, res) => {
  res.send("Backend is running");
});

// 모든 사용자 조회
app.get("/users", (req, res) => {
  db.query("SELECT * FROM sample_users", (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(results);
  });
});

// 사용자 추가
app.post("/users", (req, res) => {
  const { name, email } = req.body;
  db.query(
    "INSERT INTO users (name, email) VALUES (?, ?)",
    [name, email],
    (err, results) => {
      if (err) {
        return res.status(500).json({ error: err.message });
      }
      res.json({ id: results.insertId, name, email });
    }
  );
});

// 사용자 삭제
app.delete("/users/:id", (req, res) => {
  const { id } = req.params;
  db.query("DELETE FROM users WHERE id = ?", [id], (err) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json({ message: "User deleted" });
  });
});

// 서버 시작
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
