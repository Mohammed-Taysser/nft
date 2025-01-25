import { formateNumber } from '@/helpers/millify';
import { Avatar, Box, Button, Text } from '@chakra-ui/react';
import Image from 'next/image';
import Link from 'next/link';
import Likes from '../Likes';

function SingleProduct(props: Readonly<{ product: Product }>) {
  const { product } = props;

  return (
    <Box className='single-product' key={product.id}>
      <div className='image'>
        <Image
          src={product.image}
          width={300}
          loading='lazy'
          height={220}
          alt={product.title}
        />

        <div className='likes-wrapper'>
          <Likes count={product.rating.count} />
        </div>
      </div>

      <div className='info'>
        <Button
          className='title'
          variant='link'
          as={Link}
          href={`/explore/${product.id}`}
        >
          {product.title}
        </Button>

        <div className='avatar-col'>
          <div className='avatar-container'>
            <div className=''>
              <Avatar
                size='sm'
                src={product.user.avatar.src}
                name={product.user.name}
              />
            </div>
            <div className=''>
              <Text fontSize='xs' as='b'>
                {product.user.name}
              </Text>

              <Text fontSize='xs' className='text-[#a1a0ae]'>
                {product.user.job}
              </Text>
            </div>
          </div>

          <div className='price-container'>
            <div className='price'>{formateNumber(product.price)} ETH</div>
            <div className='bit'>Current Bit</div>
          </div>
        </div>

        <div className='btn-container'>
          <Button as={Link} href={`/explore/${product.id}`}>
            Place Bid
          </Button>

          <Button
            colorScheme='white'
            variant='link'
            as={Link}
            href={`/explore/${product.id}`}
          >
            View History
          </Button>
        </div>
      </div>
    </Box>
  );
}

export default SingleProduct;
