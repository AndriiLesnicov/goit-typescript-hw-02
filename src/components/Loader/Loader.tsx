import { PuffLoader } from "react-spinners";
import css from "./Loader.module.css";

const Loader: React.FC = () => (
  <div className={css.loader}>
    <PuffLoader color="#36d7b7" />
  </div>
);

export default Loader;
