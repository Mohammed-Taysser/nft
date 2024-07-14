import Banner from '@/components/Banner';
import ExploreProducts from '@/content/ExploreProducts';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Explore',
};

function Explore() {
  const bannerItems: BannerItem[] = [
    {
      label: 'Home',
      url: '/',
    },
    {
      label: 'Explore Items',
      url: '/explore',
    },
  ];

  return (
    <>
      <Banner items={bannerItems} />

      <ExploreProducts />
    </>
  );
}

export default Explore;
