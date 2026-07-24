function BulletList({ title, items }) {
  if (!items?.length) return null;

  return (
    <>
      <h4>{title}</h4>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </>
  );
}

export default BulletList;