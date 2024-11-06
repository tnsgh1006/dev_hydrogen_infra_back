const connection = require("../../config/db"); // 경로 수정

// 모든 사용자 정보를 가져오는 함수
const getAllUsers = async () => {
  return new Promise((resolve, reject) => {
    connection.query("SELECT * FROM sample_users", (error, results) => {
      if (error) {
        return reject(new Error("Error retrieving users: " + error.message));
      }
      resolve(results);
    });
  });
};

module.exports = { getAllUsers };
