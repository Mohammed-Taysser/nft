import { formateNumber } from '@/helpers/millify';
import { Avatar } from '@chakra-ui/react';

function SingleArtist(props: { artist: Artist }) {
  return (
    <div className='single-artist'>
      <div className='wrapper'>
        <div className=''>
          <Avatar
            size='lg'
            name={props.artist.name}
            src={props.artist.avatar.src}
          />
        </div>
        <div className=''>
          <div className='name'>{props.artist.name}</div>
          <div className='earn'>{formateNumber(props.artist.earn)} ETH</div>
        </div>
      </div>
    </div>
  );
}

export default SingleArtist;
