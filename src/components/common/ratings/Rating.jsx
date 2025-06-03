import { IoIosStarOutline, IoIosStar } from "react-icons/io";
import './Rating.scss';

const Rating = (props) => {
  return (
    <div className="rating" title={props.rating}>
      {[...Array(5)].map((_, i) =>
        i + 1 < props.rating ? (
          <span key={i} className="stars-fill"><IoIosStar /></span>
        ) : (
          <span key={i} className="stars-outline"><IoIosStarOutline /></span>
        )
      )}
    </div>
  );
} 

export default Rating;