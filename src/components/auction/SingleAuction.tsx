import { formateNumber } from '@/helpers/millify';
import { Avatar, Box, Button } from '@chakra-ui/react';
import Image from 'next/image';
import Link from 'next/link';
import Likes from '../Likes';
import Timer from './Timer';

function SingleAuction(props: { auction: Auction }) {
  const { auction } = props;

  return (
    <Box className='single-auction' key={auction.id}>
      <div className='image'>
        <Image
          src={auction.image}
          width={300}
          height={220}
          alt={auction.title}
        />
        <Likes count={auction.rating.count} />
      </div>

      <div className='info'>
        <Button
          className='title'
          variant='link'
          as={Link}
          href={`/products/${auction.id}`}
        >
          {auction.title}
        </Button>

        <div className='avatar-col'>
          <div className='avatar-container'>
            <div className=''>
              <Avatar
                size='sm'
                src={auction.user.avatar.src}
                name={auction.user.name}
              />
            </div>
            <div className=''>
              <div className='name'>{auction.user.name}</div>
              <div className='job'>{auction.user.job}</div>
            </div>
          </div>

          <div className='price-container'>
            <div className='price'>{formateNumber(auction.price)} ETH</div>
            <div className='bit'>Current Bit</div>
          </div>
        </div>

        <div className='timer'>
          <Timer timeout={auction.timeout} />
        </div>
      </div>
    </Box>
  );
}

export default SingleAuction;
