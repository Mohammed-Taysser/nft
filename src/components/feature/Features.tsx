import { FEATURES } from '@/MOCK';
import { SimpleGrid } from '@chakra-ui/react';
import SingleFeature from './SingleFeature';

function Features() {
  return (
    <div className='features'>
      <div className='features-title'>
        <div className='title'> Core Features </div>
        <div className='subtitle'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam a
          lacinia dolor, in pretium nunc. Morbi mollis arcu eget.
        </div>
      </div>

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
