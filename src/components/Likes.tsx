import { formateNumber } from '@/helpers/millify';
import { AiFillHeart } from 'react-icons/ai';

function Likes(props: Readonly<LikesProps>) {
  return (
    <span className={`likes ${props.className ?? ''}`}>
      <AiFillHeart />
      {formateNumber(props.count)}
    </span>
  );
}

export default Likes;
