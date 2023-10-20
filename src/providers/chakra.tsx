'use client';

import {
  ChakraProvider,
  type ThemeConfig,
  extendTheme,
} from '@chakra-ui/react';

function Chakra(props: { children: React.ReactNode }) {
  const theme: ThemeConfig = extendTheme({
    initialColorMode: 'dark',
    useSystemColorMode: false,
    components: {
      Button: {
        defaultProps: {
          colorScheme: 'purple',
        },
      },
      Container: {
        baseStyle: {
          maxW: 'container.lg',
        },
      },
    },
  });

  return <ChakraProvider theme={theme}>{props.children}</ChakraProvider>;
}

export default Chakra;
