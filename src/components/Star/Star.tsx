// eslint-disable-next-line import/default
import PropTypes from 'prop-types';
import { BsStarFill, BsStarHalf, BsStar } from 'react-icons/bs';
import styles from './Star.module.scss';

interface StarProps {
  stars: number;
  count: number;
}

const Star = ({ stars, count }: StarProps) => {
  const ratingStar = Array.from({ length: 5 }, (_, index) => {
    return (
      <span key={index}>
        {stars >= index + 1 ? <BsStarFill /> : stars >= index + 0.5 ? <BsStarHalf /> : <BsStar />}
      </span>
    );
  });
  return (
    <div className={`${styles.star_rating}`}>
      {ratingStar}
      <span className={styles.star}>{stars} </span>
      <span className={styles.count}>Count:({count})</span>
    </div>
  );
};

Star.propTypes = {
  // eslint-disable-next-line import/no-named-as-default-member
  stars: PropTypes.number,
  // eslint-disable-next-line import/no-named-as-default-member
  count: PropTypes.number,
};
export { Star };
