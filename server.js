const express = require("express");
const cors = require("cors"); // CORS 패키지 가져오기
const routes = require("./src/routes/index"); // 라우터 가져오기

const app = express();
const PORT = process.env.PORT || 3001;

// CORS 미들웨어 사용
app.use(cors()); // 모든 출처에 대해 CORS 허용
app.use(express.json());
app.use("/api", routes); // API 라우터 등록

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
