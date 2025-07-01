import { UnsplashImage } from "../../services/unsplash-api";
import css from "./ImageCard.module.css";

interface ImageCardProps {
  image: UnsplashImage;
  onClick: (image: UnsplashImage) => void;
}

const ImageCard: React.FC<ImageCardProps> = ({ image, onClick }) => {
  return (
    <img
      className={css.image}
      src={image.urls.small}
      alt={image.alt_description || "Image"}
      onClick={() => onClick(image)}
    />
  );
};

export default ImageCard;
