import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

function Register() {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleRegister = () => {
    setLoading(true);
    setTimeout(() => {
      navigate('/login');
    }, 1000); // đợi 1 giây
  };

  return (
    <div style={{ textAlign: "center", marginTop: "30px" }}>
      <h2>📝 Đăng ký</h2>
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
        onClick={handleRegister}
        disabled={loading}
        style={{
          marginTop: "10px",
          padding: "8px 16px",
          borderRadius: "6px",
          border: "1px solid #ccc",
          background: loading ? "#aaa" : "#4CAF50",
          color: "white",
          cursor: loading ? "not-allowed" : "pointer"
        }}
      >
        {loading ? "Đang xử lý..." : "Đăng ký"}
      </button>
      <p style={{ marginTop: "15px" }}>
        Đã có tài khoản? <Link to="/login">Đăng nhập</Link>
      </p>
    </div>
  );
}

export default Register;
