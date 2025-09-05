import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { updateScore, updateRecord } from "../api";

const gamesMap = {
  1: "demso.html",
  2: "phihanhgiatronthoat.html",
  3: "quanlydoantau.html",
  4: "tenluanhatxu.html",
  5: "vuotchuongngaivat.html",
};

const GameViewer = () => {
  const { id } = useParams();
  const [fileName, setFileName] = useState(null);

  useEffect(() => {
    setFileName(gamesMap[id]);
  }, [id]);

  useEffect(() => {
    const handleMessage = (event) => {
      if (event.data.score !== undefined) {
        const { score, time } = event.data;
        const userId = localStorage.getItem("userId");
        const username = localStorage.getItem("username");

        if (!userId || !username) {
          console.error("⚠️ Chưa có userId/username trong localStorage");
          return;
        }

        updateScore(Number(userId), score).catch(err =>
          console.error("❌ Lỗi lưu điểm:", err)
        );

        updateRecord(Number(id), Number(userId), username, score, time).catch(err =>
          console.error("❌ Lỗi updateRecord:", err)
        );
      }
    };

    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, [id]);

  if (!fileName) return <div>Đang tải game...</div>;

  return (
    <div style={{ height: "100vh" }}>
      <iframe
        src={`/games/${fileName}`}
        title={fileName}
        width="100%"
        height="100%"
        frameBorder="0"
      />
    </div>
  );
};

export default GameViewer;
