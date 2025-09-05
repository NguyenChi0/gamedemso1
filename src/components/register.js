import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

function Register() {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = () => {
    // Không gọi API, chỉ redirect sang login
    alert("Đăng ký thành công, mời bạn đăng nhập!");
    navigate('/login');
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
        style={{
          marginTop: "10px",
          padding: "8px 16px",
          borderRadius: "6px",
          border: "1px solid #ccc",
          background: "#4CAF50",
          color: "white",
          cursor: "pointer"
        }}
      >
        Đăng ký
      </button>
      <p style={{ marginTop: "15px" }}>
        Đã có tài khoản? <Link to="/login">Đăng nhập</Link>
      </p>
    </div>
  );
}

export default Register;
