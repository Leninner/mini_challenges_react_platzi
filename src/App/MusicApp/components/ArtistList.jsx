import { ArtistItem } from './ArtistItem';

export const ArtistList = () => {
  return (
    <>
      {[1, 2, 3, 4, 5].map((i) => (
        <ArtistItem key={i}>{i}</ArtistItem>
      ))}
    </>
  );
};
