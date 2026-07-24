import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { items } from "../data/items";
import BulletList from "../components/BulletList";

export default function Anatomy() {
  const { id } = useParams();
  const navigate = useNavigate();

  const item = items
    .flatMap((c) => c.subcategories)
    .flatMap((sub) => sub.items)
    .find((i) => i.id === id);

  const [loaded, setLoaded] = useState({});

  useEffect(() => {
    if (!item) return;

    item.images.forEach((src) => {
      const img = new Image();
      img.src = src;
      img.fetchPriority = "high";
    });
  }, [item]);

  if (!item) return <div>Not found</div>;

  return (
    <div className="anatomy-page">
      <button onClick={() => navigate(-1)}>← Back</button>

      <h1>{item.name}</h1>

      <div className="image-row">
        {item.images.map((img, i) => (
          <img
            key={i}
            src={img}
            alt={item.name}
            loading="eager"
            decoding="async"
            fetchPriority="high"
            onLoad={() =>
              setLoaded((prev) => ({ ...prev, [i]: true }))
            }
            style={{
              opacity: loaded[i] ? 1 : 0,
              transition: "opacity 0.15s ease",
              maxWidth: "100%",
              height: "auto",
              display: "block",
            }}
          />
        ))}
      </div>

      <div className="bottom-content">
        <BulletList 
          title="Patient Position" 
          items={item.patient_position} 
        />

        <BulletList 
          title="Part Position" 
          items={item.part_position} 
        />

        <BulletList 
          title="Respiration" 
          items={item.respiration} 
        />

        <BulletList 
          title="Central Ray" 
          items={item.central_ray} 
        />

        {item.kVp && <p>kVp: {item.kVp}</p>}
        {item.mAs && <p>mAs: {item.mAs}</p>}
        {item.sid && <p>SID: {item.sid}</p>}
        
      </div>
    </div>
  );
}