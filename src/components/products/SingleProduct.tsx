import { formateNumber } from '@/helpers/millify';
import { Avatar, Box, Button } from '@chakra-ui/react';
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

        <Likes count={product.rating.count} />
      </div>

      <div className='info'>
        <Button
          className='title'
          variant='link'
          as={Link}
          href={`/products/${product.id}`}
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
              <div className='name'>{product.user.name}</div>
              <div className='job'>{product.user.job}</div>
            </div>
          </div>

          <div className='price-container'>
            <div className='price'>{formateNumber(product.price)} ETH</div>
            <div className='bit'>Current Bit</div>
          </div>
        </div>

        <div className='btn-container'>
          <Button as={Link} href={`/products/${product.id}`}>
            Place Bid
          </Button>

          <Button
            colorScheme='white'
            variant='link'
            as={Link}
            href={`/products/${product.id}`}
          >
            View History
          </Button>
        </div>
      </div>
    </Box>
  );
}

export default SingleProduct;
