import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const gamesMap = {
  1: "demso.html",
  2: "phihanhgiatronthoat.html",
  3: "quanlydoantau.html",
  4: "tenluanhatxu.html",
  5: "vuotchuongngaivat.html",
  6: "nongdanchamchi.html",
  7: "taixegioigiang.html",
  8: "xepbong.html",
  9: "openworld.html",
  10: "phuthuydaitai.html",
  11: "canthutainang.html",
  12: "maygapgau.html",
};


const GameViewer = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [fileName, setFileName] = useState(null);

  useEffect(() => {
    setFileName(gamesMap[id]);
  }, [id]);

  if (!fileName) return <div>❌ Không tìm thấy game với ID {id}</div>;

  return (
    <div style={{ height: "100vh", display: "flex", flexDirection: "column" }}>
      {/* Nút Back Home */}
      <div style={{ padding: "10px", background: "#f0f0f0" }}>
        <button
          onClick={() => navigate("/")}
          style={{
            padding: "8px 16px",
            border: "none",
            borderRadius: "6px",
            background: "#007bff",
            color: "white",
            cursor: "pointer",
          }}
        >
          ⬅️ Back Home
        </button>
      </div>

      {/* Game iframe */}
      <div style={{ flex: 1 }}>
        <iframe
          src={`${process.env.PUBLIC_URL}/games/${fileName}`}
          title={fileName}
          width="100%"
          height="100%"
          frameBorder="0"
          style={{ border: "none" }}
        />
      </div>
    </div>
  );
};

export default GameViewer;
