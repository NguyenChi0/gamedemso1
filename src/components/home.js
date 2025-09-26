import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");

  // Danh sách game trong /public/games (id phải khớp với GameViewer)
  const localGames = [
    { id: 1, name: "Đếm số", fileName: "demso.html", icon: "🔢", category: "Toán học", difficulty: "Dễ" },
    { id: 2, name: "Phi hành gia trốn thoát", fileName: "phihanhgiatronthoat.html", icon: "🚀", category: "Phiêu lưu", difficulty: "Khó" },
    { id: 3, name: "Quản lý đoàn tàu", fileName: "quanlydoantau.html", icon: "🚂", category: "Quản lý", difficulty: "Trung bình" },
    { id: 4, name: "Phi hành gia nhặt xu", fileName: "tenluanhatxu.html", icon: "🪙", category: "Hành động", difficulty: "Dễ" },
    { id: 5, name: "Vượt chướng ngại vật", fileName: "vuotchuongngaivat.html", icon: "🏃", category: "Hành động", difficulty: "Khó" },
    { id: 6, name: "Nông dân chăm chỉ", fileName: "nongdanchamchi.html", icon: "🌾", category: "Mô phỏng", difficulty: "Trung bình" },
    { id: 7, name: "Tài xế giỏi giang", fileName: "taixegioigiang.html", icon: "🚗", category: "Đua xe", difficulty: "Khó" },
    { id: 8, name: "Sắp xếp đồ chơi", fileName: "xepbong.html", icon: "🧩", category: "Trí tuệ", difficulty: "Trung bình" },
    { id: 9, name: "Open World", fileName: "openworld.html", icon: "🌍", category: "Thế giới mở", difficulty: "Khó" },
    { id: 10, name: "Phù thủy đại tài", fileName: "phuthuydaitai.html", icon: "🧙", category: "Ma thuật", difficulty: "Trung bình" },
    { id: 11, name: "Câu cá đỉnh cao", fileName: "canthutainang.html", icon: "🎣", category: "Thư giãn", difficulty: "Dễ" },
    { id: 12, name: "Máy gắp gấu", fileName: "maygapgau.html", icon: "🧸", category: "Kỹ năng", difficulty: "Trung bình" },
    { id: 13, name: "Horror Game", fileName: "horrorgame.html", icon: "💀", category: "Thế giới mở", difficulty: "Trung bình" },
    { id: 14, name: "Bảo vệ thành trì", fileName: "baovethanhtri.html", icon: "🏰", category: "Trí tuệ", difficulty: "Trung bình" },
  ];

  useEffect(() => {
    const savedUser = localStorage.getItem("username");
    if (savedUser) setUsername(savedUser);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("username");
    setUsername("");
  };

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case "Dễ": return "difficulty-easy";
      case "Trung bình": return "difficulty-medium";
      case "Khó": return "difficulty-hard";
      default: return "difficulty-default";
    }
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800;900&display=swap');
        
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        .home-container {
          min-height: 100vh;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          position: relative;
          font-family: 'Nunito', sans-serif;
          overflow-x: hidden;
        }

        .background-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: 
            radial-gradient(circle at 20% 50%, rgba(120, 119, 198, 0.3) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(255, 119, 198, 0.3) 0%, transparent 50%),
            radial-gradient(circle at 40% 80%, rgba(120, 219, 226, 0.3) 0%, transparent 50%);
          animation: backgroundShift 10s ease-in-out infinite;
        }

        @keyframes backgroundShift {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.8; }
        }

        .stars {
          position: absolute;
          width: 100%;
          height: 100%;
          z-index: 1;
        }

        .star {
          position: absolute;
          width: 2px;
          height: 2px;
          background: white;
          border-radius: 50%;
          animation: twinkle 3s infinite;
        }

        @keyframes twinkle {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.2); }
        }

        .content {
          position: relative;
          z-index: 2;
          padding: 2rem;
          max-width: 1400px;
          margin: 0 auto;
        }

        .header {
          text-align: center;
          margin-bottom: 4rem;
        }

        .logo {
          display: inline-block;
          width: 80px;
          height: 80px;
          background: linear-gradient(45deg, #FFD700, #FFA500);
          border-radius: 50%;
          margin-bottom: 2rem;
          position: relative;
          animation: bounce 2s infinite;
          box-shadow: 0 10px 30px rgba(255, 215, 0, 0.4);
        }

        .logo::before {
          content: '✨';
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          font-size: 2rem;
        }

        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
          40% { transform: translateY(-10px); }
          60% { transform: translateY(-5px); }
        }

        .main-title {
          font-size: 4rem;
          font-weight: 900;
          background: linear-gradient(45deg, #FFD700, #FF6B6B, #4ECDC4, #45B7D1);
          background-size: 300% 300%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: gradientShift 4s ease-in-out infinite;
          margin-bottom: 1rem;
          text-shadow: 0 4px 8px rgba(0,0,0,0.3);
        }

        @keyframes gradientShift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }

        .subtitle {
          font-size: 1.2rem;
          color: rgba(255, 255, 255, 0.9);
          max-width: 600px;
          margin: 0 auto;
          line-height: 1.6;
        }

        .user-section {
          display: flex;
          justify-content: center;
          margin-bottom: 4rem;
        }

        .user-card {
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 20px;
          padding: 2rem;
          text-align: center;
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
          transition: all 0.3s ease;
        }

        .user-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 40px rgba(0, 0, 0, 0.2);
        }

        .user-avatar {
          width: 60px;
          height: 60px;
          border-radius: 50%;
          background: linear-gradient(45deg, #36D1DC, #5B86E5);
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 1rem;
          font-size: 1.5rem;
          animation: pulse 2s infinite;
        }

        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.1); }
        }

        .welcome-text {
          font-size: 1.5rem;
          font-weight: 700;
          color: white;
          margin-bottom: 1rem;
        }

        .username {
          color: #FFD700;
        }

        .button {
          padding: 0.8rem 2rem;
          border: none;
          border-radius: 15px;
          font-weight: 600;
          font-size: 1rem;
          cursor: pointer;
          transition: all 0.3s ease;
          margin: 0.5rem;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
        }

        .button:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
        }

        .btn-logout {
          background: linear-gradient(45deg, #FF416C, #FF4B2B);
          color: white;
        }

        .btn-register {
          background: linear-gradient(45deg, #11998E, #38EF7D);
          color: white;
        }

        .btn-login {
          background: linear-gradient(45deg, #667eea, #764ba2);
          color: white;
        }

        .games-section {
          margin-bottom: 4rem;
        }

        .section-header {
          text-align: center;
          margin-bottom: 3rem;
        }

        .section-title {
          font-size: 3rem;
          font-weight: 800;
          color: white;
          margin-bottom: 1rem;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 1rem;
        }

        .games-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: 2rem;
          padding: 1rem 0;
        }

        .game-card {
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 20px;
          padding: 2rem;
          text-align: center;
          transition: all 0.4s ease;
          position: relative;
          overflow: hidden;
          animation: fadeInUp 0.6s ease-out forwards;
          opacity: 0;
          transform: translateY(30px);
        }

        .game-card:hover {
          transform: translateY(-10px) scale(1.02);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
          background: rgba(255, 255, 255, 0.15);
        }

        .game-icon {
          font-size: 4rem;
          margin-bottom: 1rem;
          display: block;
          transition: all 0.3s ease;
        }

        .game-card:hover .game-icon {
          transform: scale(1.2) rotate(10deg);
        }

        .game-name {
          font-size: 1.3rem;
          font-weight: 700;
          color: white;
          margin-bottom: 0.5rem;
          transition: color 0.3s ease;
        }

        .game-card:hover .game-name {
          color: #FFD700;
        }

        .game-category {
          font-size: 0.9rem;
          color: rgba(255, 255, 255, 0.7);
          margin-bottom: 1rem;
        }

        .difficulty-badge {
          display: inline-block;
          padding: 0.3rem 1rem;
          border-radius: 20px;
          font-size: 0.8rem;
          font-weight: 600;
          margin-bottom: 1rem;
        }

        .difficulty-easy {
          background: rgba(34, 197, 94, 0.2);
          color: #22c55e;
          border: 1px solid #22c55e;
        }

        .difficulty-medium {
          background: rgba(251, 191, 36, 0.2);
          color: #fbbf24;
          border: 1px solid #fbbf24;
        }

        .difficulty-hard {
          background: rgba(239, 68, 68, 0.2);
          color: #ef4444;
          border: 1px solid #ef4444;
        }

        .btn-play {
          background: linear-gradient(45deg, #667eea, #764ba2);
          color: white;
          width: 100%;
          padding: 1rem;
          border: none;
          border-radius: 15px;
          font-weight: 600;
          font-size: 1rem;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 4px 15px rgba(102, 126, 234, 0.4);
        }

        .btn-play:hover {
          background: linear-gradient(45deg, #764ba2, #667eea);
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(102, 126, 234, 0.6);
        }

        .stats-section {
          text-align: center;
          margin-top: 4rem;
        }

        .stats-card {
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 20px;
          padding: 2rem;
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 2rem;
        }

        .stat-item {
          text-align: center;
        }

        .stat-icon {
          width: 60px;
          height: 60px;
          border-radius: 50%;
          background: linear-gradient(45deg, #FFD700, #FFA500);
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 1rem;
          font-size: 1.5rem;
          animation: pulse 2s infinite;
        }

        .stat-number {
          font-size: 2rem;
          font-weight: 800;
          color: white;
        }

        .stat-label {
          color: rgba(255, 255, 255, 0.7);
        }

        .footer {
          text-align: center;
          margin-top: 4rem;
          color: rgba(255, 255, 255, 0.6);
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* Responsive Design */
        @media (max-width: 768px) {
          .main-title {
            font-size: 2.5rem;
          }
          
          .section-title {
            font-size: 2rem;
          }
          
          .games-grid {
            grid-template-columns: 1fr;
          }
          
          .content {
            padding: 1rem;
          }
        }
      `}</style>

      <div className="home-container">
        <div className="background-overlay"></div>
        
        {/* Stars Background */}
        <div className="stars">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="star"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 2}s`
              }}
            />
          ))}
        </div>

        <div className="content">
          {/* Header */}
          <div className="header">
            <div className="logo"></div>
            <h1 className="main-title">Game Center</h1>
            <p className="subtitle">
              Khám phá thế giới game tuyệt vời với hàng chục trò chơi thú vị đang chờ bạn!
            </p>
          </div>

          {/* User Section */}
          <div className="user-section">
            <div className="user-card">
              {username ? (
                <>
                  <div className="user-avatar">👤</div>
                  <h2 className="welcome-text">
                    Chào mừng, <span className="username">{username}</span> 👋
                  </h2>
                  <button
                    onClick={handleLogout}
                    className="button btn-logout"
                  >
                    🚪 Đăng xuất
                  </button>
                </>
              ) : (
                <>
                  <div className="user-avatar">🔒</div>
                  <h2 className="welcome-text">Bạn chưa đăng nhập</h2>
                  <div>
                    <button
                      onClick={() => navigate("/register")}
                      className="button btn-register"
                    >
                      ✨ Đăng ký
                    </button>
                    <button
                      onClick={() => navigate("/login")}
                      className="button btn-login"
                    >
                      🔑 Đăng nhập
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>

          {/* Games Section */}
          <div className="games-section">
            <div className="section-header">
              <h3 className="section-title">
                🎮 Danh sách trò chơi
              </h3>
              <p className="subtitle">
                {localGames.length} trò chơi tuyệt vời đang chờ bạn khám phá
              </p>
            </div>

            <div className="games-grid">
              {localGames.map((game, index) => (
                <div
                  key={game.id}
                  className="game-card"
                  style={{
                    animationDelay: `${index * 0.1}s`
                  }}
                >
                  <span className="game-icon">{game.icon}</span>
                  <h4 className="game-name">{game.name}</h4>
                  <p className="game-category">{game.category}</p>
                  <div className={`difficulty-badge ${getDifficultyColor(game.difficulty)}`}>
                    ⭐ {game.difficulty}
                  </div>
                  <button
                    onClick={() => navigate(`/game/${game.id}`)}
                    className="btn-play"
                  >
                    ▶️ Chơi ngay
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Stats Section */}
          <div className="stats-section">
            <div className="stats-card">
              <div className="stats-grid">
                <div className="stat-item">
                  <div className="stat-icon">🏆</div>
                  <h4 className="stat-number">{localGames.length}</h4>
                  <p className="stat-label">Trò chơi</p>
                </div>
                <div className="stat-item">
                  <div className="stat-icon">🎮</div>
                  <h4 className="stat-number">∞</h4>
                  <p className="stat-label">Giờ vui chơi</p>
                </div>
                <div className="stat-item">
                  <div className="stat-icon">⭐</div>
                  <h4 className="stat-number">5★</h4>
                  <p className="stat-label">Đánh giá</p>
                </div>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="footer">
            <p>© 2024 Game Center. Made with ❤️ for gamers</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;