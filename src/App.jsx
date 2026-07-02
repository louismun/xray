import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Category from "./pages/Category";
import Anatomy from "./pages/Anatomy";
import { items } from "./data/items";

export default function App() {
  useEffect(() => {
    const allImages = items.flatMap((c) =>
      c.subcategories.flatMap((sub) =>
        sub.items.flatMap((item) => item.images)
      )
    );

    allImages.forEach((src) => {
      const img = new Image();
      img.src = src;
      img.fetchPriority = "high";
    });
  }, []);

  return (
    <div
      style={{
        minHeight: "100dvh",
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#0e1116",
        color: "#e5e7eb",
      }}
    >
      <main style={{ flex: 1, overflowY: "auto" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/category/:id" element={<Category />} />
          <Route path="/anatomy/:id" element={<Anatomy />} />
        </Routes>
      </main>

      <footer
        style={{
          textAlign: "center",
          fontSize: "12px",
          opacity: 0.4,
          padding: "12px 0",
          borderTop: "1px solid rgba(255,255,255,0.08)",
        }}
      >
        Built by Louis Mun
      </footer>
    </div>
  );
}