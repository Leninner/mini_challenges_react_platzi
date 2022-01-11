import { useFetchData } from '../hooks/useFetchData';
import { GridItem } from '../components/GridItem';

export const Grid = ({ search }) => {
  const { datos: images, loading, error } = useFetchData(search);

  return (
    <div className='container m-auto md:grid md:grid-cols-3'>
      {!images.length && !loading && !error && (
        <h1 className='feedback'>
          Search for cute <span className='text-3xl font-bold text-red-500'>gifs</span>
        </h1>
      )}
      {loading && <p className='feedback'>Loading...</p>}

      {error && <p className='feedback'>Oops ocurrió un error</p>}

      {!loading &&
        images.map((value) => {
          const {
            id,
            title,
            images: {
              downsized_medium: { url },
            },
            rating,
          } = value;

          return <GridItem id={id} title={title} url={url} key={id} rating={rating} />;
        })}
    </div>
  );
};
