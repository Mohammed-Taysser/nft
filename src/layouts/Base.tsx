'use client';

import Chakra from '@/providers/chakra';
import Footer from './Footer';
import Navbar from './Navbar';
import { ColorModeScript } from '@chakra-ui/react';

function Base(props: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <ColorModeScript initialColorMode='dark' />

      <Chakra>
        <Navbar />
        {props.children}
        <Footer />
      </Chakra>
    </>
  );
}

export default Base;
