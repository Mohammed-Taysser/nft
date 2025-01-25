import { Box } from '@chakra-ui/react';
import React from 'react';

interface OverlaySectionProps {
  children: React.ReactNode;
  className?: string | undefined;
}

function OverlaySection(props: Readonly<OverlaySectionProps>) {
  return (
    <Box
      className={`border-2 rounded-md border-solid border-[#4d4c5a] bg-[#2c2c39] p-5 ${
        props.className ?? ''
      }`}
    >
      {props.children}
    </Box>
  );
}

export default OverlaySection;
