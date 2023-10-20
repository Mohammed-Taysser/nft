import { SimpleGrid } from '@chakra-ui/react';
import SingleAuction from './SingleAuction';

function Auctions(props: { auctions: Auction[] }) {
  const { auctions } = props;

  return (
    <SimpleGrid columns={{ sm: 2, md: 3 }} spacing={10} className='auctions'>
      {auctions.map((auction) => (
        <SingleAuction key={auction.id} auction={auction} />
      ))}
    </SimpleGrid>
  );
}

export default Auctions;
