import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = () => {
    setLoading(true);

    // Giả vờ đang xử lý (sau 1.5 giây nhảy ra trang chủ)
    setTimeout(() => {
      localStorage.setItem("username", username); // lưu tạm để Home chào tên
      navigate('/');
    }, 1500);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "30px" }}>
      <h2>🔑 Đăng nhập</h2>
      <input
        placeholder="Tài khoản"
        value={username}
        onChange={e => setUsername(e.target.value)}
        style={{ display: "block", margin: "10px auto", padding: "8px" }}
      />
      <input
        type="password"
        placeholder="Mật khẩu"
        value={password}
        onChange={e => setPassword(e.target.value)}
        style={{ display: "block", margin: "10px auto", padding: "8px" }}
      />
      <button
        onClick={handleLogin}
        disabled={loading}
        style={{
          marginTop: "10px",
          padding: "8px 16px",
          borderRadius: "6px",
          border: "1px solid #ccc",
          background: loading ? "#aaa" : "#2196F3",
          color: "white",
          cursor: loading ? "not-allowed" : "pointer"
        }}
      >
        {loading ? "Đang đăng nhập..." : "Đăng nhập"}
      </button>
      <p style={{ marginTop: "15px" }}>
        Chưa có tài khoản? <Link to="/register">Đăng ký</Link>
      </p>
    </div>
  );
}

export default Login;
