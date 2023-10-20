import { SimpleGrid } from '@chakra-ui/react';
import SingleProduct from './SingleProduct';

function Products(props: { products: Product[] }) {
  const { products } = props;

  return (
    <SimpleGrid columns={{ sm: 2, md: 3 }} spacing={10} className='products'>
      {products.map((product) => (
        <SingleProduct key={product.id} product={product} />
      ))}
    </SimpleGrid>
  );
}

export default Products;
