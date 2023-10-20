import HomepageContent from '@/content/Homepage.content';
import SEO from '@/helpers/seo';

export const metadata = {
  ...SEO.homepage,
};

function Homepage() {
  return <HomepageContent />;
}

export default Homepage;
