import classes from "./TypeItem.module.scss";
import Image from "../../../../components/Image";
import { Link } from "react-router-dom";

const TypeItem = ({ name, img, id }) => {
  return (
    <Image className={classes.background} url={img}>
      <Link to={"/type/" + id}>
        <div className={classes.typeItem}>
          <div className={classes.label}>{name}</div>
        </div>
      </Link>
    </Image>
  );
};

export default TypeItem;
