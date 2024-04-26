import favicon from '@/assets/images/icons/favicon.ico';
import '@/assets/scss/globals.scss';
import Base from '@/layouts/Base';
import { Metadata } from 'next';

export const metadata:Metadata = {
  title: {
    template: 'NFT | %s',
    default: 'NFT Marketplace',
  },
  description : "Discover a digital realm where creativity meets blockchain on our NFT website. Immerse yourself in a vibrant marketplace where artists tokenize their unique works, transforming art into one-of-a-kind digital assets. From stunning visuals to rare collectibles, our platform bridges the gap between creators and collectors. Dive into a decentralized ecosystem where authenticity is guaranteed through blockchain technology, ensuring each NFT is a testament to the artist's genius. Whether you're an artist seeking to showcase your talent or a collector in search of exclusive digital treasures, our NFT website is your gateway to a dynamic, secure, and limitless world of digital art ownership.",
};
function RootLayout(props: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <link rel='icon' href={favicon.src} />

      <body>
        <Base>{props.children}</Base>
      </body>
    </html>
  );
}

export default RootLayout;
