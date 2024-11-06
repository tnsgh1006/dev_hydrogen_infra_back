const express = require("express");
const { getAllUsers } = require("../../models/user");

const router = express.Router();

// 모든 사용자 정보 가져오기
router.get("/", async (req, res) => {
  try {
    const users = await getAllUsers();
    res.json(users); // 사용자 정보 응답
  } catch (error) {
    res.status(500).json({ message: "서버 오류: " + error.message });
  }
});

module.exports = router;
