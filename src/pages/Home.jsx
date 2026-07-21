import { Link } from "react-router-dom";
import { items } from "../data/items";

export default function Home() {
  return (
    <div>
      <h1 className="home-title">X-Ray Positioning</h1>

      {items.map((cat) => (
        <Link key={cat.id} to={`/category/${cat.id}`}>
          <div>{cat.name}</div>
        </Link>
      ))}
    </div>
  );
}