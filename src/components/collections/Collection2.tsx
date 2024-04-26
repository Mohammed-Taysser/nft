import { formateNumber } from '@/helpers/millify';
import { Avatar, Box, Button, Flex } from '@chakra-ui/react';
import Image from 'next/image';
import Link from 'next/link';
import { AiFillHeart } from 'react-icons/ai';

import avatar from '@/assets/images/collections/collection-2-avatar.png';
import image1 from '@/assets/images/collections/collection-2-image-01.svg';
import image2 from '@/assets/images/collections/collection-2-image-02.svg';
import image3 from '@/assets/images/collections/collection-2-image-03.svg';
import image4 from '@/assets/images/collections/collection-2-image-04.svg';

function Collection2() {
  return (
    <Box className='single-collection'>
      <Flex gap={4}>
        <Box flex={1}>
          <Image src={image1} alt='image-01' />
        </Box>

        <Box flex={2}>
          <Flex gap={4}>
            <Box flex={1}>
              <Image src={image2} alt='image-02' />
            </Box>

            <Box flex={1}>
              <Image src={image3} alt='image-03' />
            </Box>
          </Flex>

          <Image src={image4} className='mt-4' alt='image-04' />
        </Box>
      </Flex>

      <div className='info mt-6'>
        <Flex justify='space-between' align='center'>
          <Button
            className='title'
            variant='link'
            as={Link}
            href={`/products/${1}`}
          >
            Modern illustration
          </Button>

          <span className='likes'>
            <AiFillHeart />
            {formateNumber(961297)}
          </span>
        </Flex>

        <div className='avatar-col'>
          <div className='avatar-container'>
            <div className=''>
              <Avatar size='sm' src={avatar.src} name='Avatar-1' />
            </div>
            <div className=''>
              <div className='name'>Devid_Miller</div>
              <div className='job'>Creator</div>
            </div>
          </div>
        </div>
      </div>
    </Box>
  );
}

export default Collection2;
