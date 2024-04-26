import { SimpleGrid } from '@chakra-ui/react';
import GradientTitle from '../GradientTitle';
import Collection1 from './Collection1';
import Collection2 from './Collection2';

function Collections() {
  return (
    <div className='collections mt-20'>
      <GradientTitle
        title='Popular Collection'
        subtitle='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam a
          lacinia dolor, in pretium nunc. Morbi mollis arcu eget.'
      />

      <SimpleGrid columns={{ md: 2 }} spacing={10} justifyContent='center'>
        <Collection1 />

        <Collection2 />
      </SimpleGrid>
    </div>
  );
}

export default Collections;
