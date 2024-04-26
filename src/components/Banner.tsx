import { Container } from '@chakra-ui/react';
import Link from 'next/link';
import { useMemo } from 'react';

function Banner(props: { items: BannerItem[] }) {
  const items = useMemo(
    () => props.items?.slice(0, props.items.length - 1),
    [props.items]
  );
  const lastItem = useMemo(
    () => props.items[props.items.length - 1],
    [props.items]
  );

  return (
    <Container>
      <ul className='banner-breadcrumb'>
        {items.map((item) => (
          <li key={item.url}>
            <Link href={item.url}>{item.label}</Link>
          </li>
        ))}

        <li>{lastItem.label}</li>
      </ul>
    </Container>
  );
}

export default Banner;
