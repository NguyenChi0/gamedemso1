import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

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

  if (!fileName) return <div>Đang tải game...</div>;

  return (
    <div style={{ height: "100vh" }}>
      <iframe
        src={`${process.env.PUBLIC_URL}/games/${fileName}`}
        title={fileName}
        width="100%"
        height="100%"
        frameBorder="0"
        style={{ border: "none" }}
      />
    </div>
  );
};

export default GameViewer;
