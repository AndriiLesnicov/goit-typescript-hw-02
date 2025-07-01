import css from "./LoadMoreBtn.module.css";

interface LoadMoreBtnProps {
  onClick: () => void;
}

const LoadMoreBtn: React.FC<LoadMoreBtnProps> = ({ onClick }) => {
  return (
    <div className={css.wrapper}>
      <button onClick={onClick} className={css.button}>
        Load More
      </button>
    </div>
  );
};

export default LoadMoreBtn;
