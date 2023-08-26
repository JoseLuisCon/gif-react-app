import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifItem } from "./GifItem";

export const GifGrid = ({ category }) => {
  const { images, isLoading } = useFetchGifs(category);

  return (
    <>
      <h3>{category}</h3>
      <div className="card-grid">
        {isLoading && <p>Cargando...</p>}
        {images && images.map((image) => <GifItem key={image.id} {...image} />)}
      </div>
    </>
  );
};
