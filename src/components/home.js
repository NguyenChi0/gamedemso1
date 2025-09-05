import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");

  // Danh sách game trong /public/games (id phải khớp với GameViewer)
  const localGames = [
    { id: 1, name: "Đếm số", fileName: "demso.html" },
    { id: 2, name: "Phi hành gia trốn thoát", fileName: "phihanhgiatronthoat.html" },
    { id: 3, name: "Quản lý đoàn tàu", fileName: "quanlydoantau.html" },
    { id: 4, name: "Phi hành gia nhặt xu", fileName: "tenluanhatxu.html" },
    { id: 5, name: "Vượt chướng ngại vật", fileName: "vuotchuongngaivat.html" },
  ];

  useEffect(() => {
    const savedUser = localStorage.getItem("username");
    if (savedUser) setUsername(savedUser);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("username");
    setUsername("");
  };

  return (
    <div style={{ textAlign: "center", marginTop: "30px" }}>
      <h1>🌟 Chào mừng bạn đến với Website</h1>

      {/* Nếu có username thì chào và cho logout */}
      {username ? (
        <>
          <h2>Xin chào, {username} 👋</h2>
          <button onClick={handleLogout}>Đăng xuất</button>
        </>
      ) : (
        <>
          <button onClick={() => navigate("/register")}>Đăng ký</button>
          <button
            onClick={() => navigate("/login")}
            style={{ marginLeft: "10px" }}
          >
            Đăng nhập
          </button>
        </>
      )}

      {/* Danh sách game */}
      <h3 style={{ marginTop: "30px" }}>🎮 Danh sách trò chơi:</h3>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {localGames.map((game) => (
          <li key={game.id} style={{ margin: "10px" }}>
            <button
              onClick={() => navigate(`/game/${game.id}`)}
              style={{
                textDecoration: "none",
                padding: "10px 20px",
                border: "1px solid #ccc",
                borderRadius: "8px",
                background: "#eee",
                cursor: "pointer",
              }}
            >
              {game.name}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home;
