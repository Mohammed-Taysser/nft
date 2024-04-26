import { FEATURES } from '@/MOCK';
import { SimpleGrid } from '@chakra-ui/react';
import GradientTitle from '../GradientTitle';
import SingleFeature from './SingleFeature';

function Features() {
  return (
    <div className='features'>
      <GradientTitle
        title='Features'
        subtitle='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam a
          lacinia dolor, in pretium nunc. Morbi mollis arcu eget.'
      />

      <SimpleGrid
        columns={{ sm: 2, md: 3 }}
        spacing={10}
        justifyContent='center'
      >
        {FEATURES.map((feature) => (
          <SingleFeature key={feature.id} feature={feature} />
        ))}
      </SimpleGrid>
    </div>
  );
}

export default Features;
