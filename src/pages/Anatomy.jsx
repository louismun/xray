import { useParams, useNavigate } from "react-router-dom";
import { items } from "../data/items";

export default function Anatomy() {
  const { id } = useParams();
  const navigate = useNavigate();

  const item = items
    .flatMap((c) => c.subcategories)
    .flatMap((sub) => sub.items)
    .find((i) => i.id === id);

  if (!item) return <div>Not found</div>;

  return (
    <div className="anatomy-page">
      <button onClick={() => navigate(-1)}>← Back</button>
      <h1>{item.name}</h1>
      <div className="image-row">
        {item.images.map((img, i) => (
          <img key={i} src={img} alt={item.name} />
        ))}
      </div>
      <div className="bottom-content">
        <p>{item.description}</p>
      </div>
    </div>
  );
}