import { useParams, Link, useNavigate } from "react-router-dom";
import { items } from "../data/items";

export default function Category() {
  const { id } = useParams();
  const navigate = useNavigate();

  const category = items.find((c) => c.id === id);

  if (!category) return <div>Not found</div>;

  return (
    <div>
      <button onClick={() => navigate(-1)}>← Back</button>

      {category.subcategories.map((sub) => (
        <div className="subcategory" key={sub.name}>
          <h1>{sub.name}</h1>

          {sub.items.map((item) => (
            <Link key={item.id} to={`/anatomy/${item.id}`}>
              <div>{item.name}</div>
            </Link>
          ))}
        </div>
      ))}
    </div>
  );
}