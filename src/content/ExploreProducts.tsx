'use client';

import Products from '@/components/products/Products';
import { PRODUCTS } from '@/MOCK';
import { Button, Container, Stack } from '@chakra-ui/react';
import { useState } from 'react';

function ExploreProducts() {
  const [products, setProducts] = useState(PRODUCTS.slice(0, 12));
  const [isLoading, setIsLoading] = useState(false);

  const onLoadMoreBtnClick = () => {
    setIsLoading(true);
    const newProductsLength = products.length + 12;

    if (newProductsLength < PRODUCTS.length) {
      setTimeout(() => {
        setProducts([
          ...products,
          ...PRODUCTS.slice(products.length, newProductsLength),
        ]);
        setIsLoading(false);
      }, 2000);
    }
  };

  return (
    <Container>
      <Products products={products} />

      {products.length < PRODUCTS.length && (
        <Stack direction='row' mt={10} justifyContent='center'>
          <Button
            isLoading={isLoading}
            onClick={onLoadMoreBtnClick}
            loadingText='Loading'
          >
            Load More
          </Button>
        </Stack>
      )}
    </Container>
  );
}

export default ExploreProducts;
