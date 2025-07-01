import Modal from "react-modal";
import css from "./ImageModal.module.css";

interface ImageModalProps {
  image: {
    urls: {
      regular: string;
    };
    alt_description: string;
    user: {
      name: string;
    };
    likes: number;
    description: string | null;
  };
  onClose: () => void;
}

Modal.setAppElement("#root");

const ImageModal: React.FC<ImageModalProps> = ({ image, onClose }) => {
  return (
    <Modal
      isOpen={true}
      onRequestClose={onClose}
      className={css.modal}
      overlayClassName={css.overlay}
    >
      <img src={image.urls.regular} alt={image.alt_description} />
      <p>Author: {image.user.name}</p>
      <p>Likes: {image.likes}</p>
      <p>Description: {image.description || "No description"}</p>
    </Modal>
  );
};

export default ImageModal;
