import { useFetchData } from '../hooks/useFetchData';
import { GridItem } from '../components/GridItem';

export const Grid = ({ search }) => {
  const { datos: images, loading } = useFetchData(search);

  return (
    <div className='container'>
      {loading && <p>Loading...</p>}

      {images.map((value) => {
        const {
          id,
          title,
          images: {
            downsized_medium: { url },
          },
        } = value;

        return <GridItem id={id} title={title} url={url} key={id} />;
      })}
    </div>
  );
};
