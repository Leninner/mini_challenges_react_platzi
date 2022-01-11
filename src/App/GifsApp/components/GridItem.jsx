export const GridItem = ({ id, title, url }) => {
  return (
    <div>
      <h1>{title}</h1>
      <img src={url} alt={id} />
    </div>
  );
};
