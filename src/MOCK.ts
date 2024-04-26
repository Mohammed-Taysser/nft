import product1 from '@/assets/images/products/image-01.svg';
import product2 from '@/assets/images/products/image-02.svg';
import product3 from '@/assets/images/products/image-03.svg';
import product4 from '@/assets/images/products/image-04.svg';
import product5 from '@/assets/images/products/image-05.svg';
import product6 from '@/assets/images/products/image-06.svg';
import product7 from '@/assets/images/products/image-07.svg';
import product8 from '@/assets/images/products/image-08.svg';
import product9 from '@/assets/images/products/image-09.svg';
import product10 from '@/assets/images/products/image-10.svg';
import product11 from '@/assets/images/products/image-11.svg';

import auction1 from '@/assets/images/auctions/image-01.png';
import auction2 from '@/assets/images/auctions/image-02.png';
import auction3 from '@/assets/images/auctions/image-03.png';
import auction4 from '@/assets/images/auctions/image-04.png';
import auction5 from '@/assets/images/auctions/image-05.png';
import auction6 from '@/assets/images/auctions/image-06.png';
import auction7 from '@/assets/images/auctions/image-07.png';
import auction8 from '@/assets/images/auctions/image-08.png';
import auction9 from '@/assets/images/auctions/image-09.png';

import creator1 from '@/assets/images/creators/image-01.png';
import creator2 from '@/assets/images/creators/image-02.png';
import creator3 from '@/assets/images/creators/image-03.png';
import creator4 from '@/assets/images/creators/image-04.png';
import creator5 from '@/assets/images/creators/image-05.png';
import creator6 from '@/assets/images/creators/image-06.png';
import creator7 from '@/assets/images/creators/image-07.png';
import creator8 from '@/assets/images/creators/image-08.png';

import artist1 from '@/assets/images/artists/image-01.png';
import artist2 from '@/assets/images/artists/image-02.png';
import artist3 from '@/assets/images/artists/image-03.png';
import artist4 from '@/assets/images/artists/image-04.png';

import wallet1 from '@/assets/images/wallet/image-01.svg';
import wallet2 from '@/assets/images/wallet/image-02.svg';
import wallet3 from '@/assets/images/wallet/image-03.svg';
import wallet4 from '@/assets/images/wallet/image-04.svg';
import wallet5 from '@/assets/images/wallet/image-05.svg';
import wallet6 from '@/assets/images/wallet/image-06.svg';
import wallet7 from '@/assets/images/wallet/image-07.svg';
import wallet8 from '@/assets/images/wallet/image-08.svg';

import { AiOutlineAppstoreAdd } from 'react-icons/ai';
import { BsCoin, BsStars } from 'react-icons/bs';
import { IoCheckmarkDone, IoWalletOutline } from 'react-icons/io5';
import { LuSettings2 } from 'react-icons/lu';
import { addTimeToDate } from './helpers/date';

const PRODUCTS: Product[] = [
  {
    id: '6504978efc13ae5553fd5412',
    title: 'Avamm',
    price: 109.95,
    description:
      'Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday',
    image: product1,
    rating: { rate: 3.9, count: 912620 },
    user: {
      avatar: creator1,
      name: 'Simmonds Snelling',
      job: 'Registered Nurse',
    },
  },
  {
    id: '65049853fc13ae5622fd5479',
    title: 'Dynava',
    price: 22.3,
    description:
      'Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.',
    image: product2,
    rating: { rate: 4.1, count: 226959 },
    user: {
      avatar: creator2,
      name: 'Britni Van Der Hoog',
      job: 'Pharmacist',
    },
  },
  {
    id: '65049853fc13ae5622fd547a',
    title: 'Izio',
    price: 55.99,
    description:
      'great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.',
    image: product3,
    rating: { rate: 4.7, count: 542600 },
    user: {
      avatar: creator3,
      name: 'Jacki Adamczewski',
      job: 'Editor',
    },
  },
  {
    id: '65049853fc13ae5622fd547b',
    title: 'Agivu',
    price: 15.99,
    description:
      'The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.',
    image: product4,
    rating: { rate: 2.1, count: 424630 },
    user: {
      avatar: creator4,
      name: 'Reade Espinel',
      job: 'Research Nurse',
    },
  },
  {
    id: '65049902fc13ae568bfd5412',
    title: 'Thoughtstorm',
    price: 695,
    description:
      "From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.",
    image: product5,
    rating: { rate: 4.6, count: 426040 },
    user: {
      avatar: creator5,
      name: 'Justine Donovin',
      job: 'Operator',
    },
  },
  {
    id: '65049902fc13ae568bfd5414',
    title: 'Voonte',
    price: 168,
    description:
      'Satisfaction Guaranteed. Return or exchange any order within 30 days.Designed and sold by Hafeez Center in the United States. Satisfaction Guaranteed. Return or exchange any order within 30 days.',
    image: product6,
    rating: { rate: 3.9, count: 72360 },
    user: {
      avatar: creator6,
      name: 'Johnathon Hexter',
      job: 'Junior Executive',
    },
  },
  {
    id: '65049902fc13ae568bfd541c',
    title: 'Fivechat',
    price: 9.99,
    description:
      "Classic Created Wedding Engagement Solitaire Diamond Promise Ring for Her. Gifts to spoil your love more for Engagement, Wedding, Anniversary, Valentine's Day...",
    image: product7,
    rating: { rate: 3, count: 426300 },
    user: {
      avatar: creator7,
      name: 'Sky Kerbler',
      job: 'Assistant Professor',
    },
  },
  {
    id: '65049902fc13ae568bfd5420',
    title: 'Skippad',
    price: 10.99,
    description:
      'Rose Gold Plated Double Flared Tunnel Plug Earrings. Made of 316L Stainless Steel',
    image: product8,
    rating: { rate: 1.9, count: 412600 },
    user: {
      avatar: creator8,
      name: 'Meaghan Fritter',
      job: 'Speech Pathologist',
    },
  },
  {
    id: '65049902fc13ae568bfd5423',
    title: 'JumpXS',
    price: 64,
    description:
      "USB 3.0 and USB 2.0 Compatibility Fast data transfers Improve PC Performance High Capacity; Compatibility Formatted NTFS for Windows 10, Windows 8.1, Windows 7; Reformatting may be required for other operating systems; Compatibility may vary depending on user's hardware configuration and operating system",
    image: product9,
    rating: { rate: 3.3, count: 22603 },
    user: {
      avatar: creator1,
      name: 'Jenine Catonnet',
      job: 'Project Manager',
    },
  },
  {
    id: '65049902fc13ae568bfd5424',
    title: 'Realbridge',
    price: 109,
    description:
      '3D NAND flash are applied to deliver high transfer speeds Remarkable transfer speeds that enable faster bootup and improved overall system performance. The advanced SLC Cache Technology allows performance boost and longer lifespan 7mm slim design suitable for Ultrabooks and Ultra-slim notebooks. Supports TRIM command, Garbage Collection technology, RAID, and ECC (Error Checking & Correction) to provide the optimized performance and enhanced reliability.',
    image: product10,
    rating: { rate: 4.8, count: 32619 },
    user: {
      avatar: creator2,
      name: 'Denyse Borrowman',
      job: 'Structural Engineer',
    },
  },
  {
    id: '65049902fc13ae568bfd542d',
    title: 'Skajo',
    price: 114,
    description:
      "Expand your PS4 gaming experience, Play anywhere Fast and easy, setup Sleek design with high capacity, 3-year manufacturer's limited warranty",
    image: product11,
    rating: { rate: 4.8, count: 42600 },
    user: {
      avatar: creator3,
      name: 'Cross Dahlman',
      job: 'Data Coordinator',
    },
  },
];

const AUCTIONS: Auction[] = [
  {
    id: '6504978efc13ae5553fd5412',
    title: 'Avamm',
    price: 109.95,
    description:
      'Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday',
    image: auction1,
    timeout: addTimeToDate({ days: 16, minutes: 3 }),
    rating: { rate: 3.9, count: 912620 },
    user: {
      avatar: creator1,
      name: 'Simmonds Snelling',
      job: 'Registered Nurse',
    },
  },
  {
    id: '65049853fc13ae5622fd5479',
    title: 'Dynava',
    price: 22.3,
    description:
      'Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.',
    image: auction2,
    timeout: addTimeToDate({ days: 15, hours: 9, minutes: 23 }),
    rating: { rate: 4.1, count: 226959 },
    user: {
      avatar: creator2,
      name: 'Britni Van Der Hoog',
      job: 'Pharmacist',
    },
  },
  {
    id: '65049853fc13ae5622fd547a',
    title: 'Izio',
    price: 55.99,
    description:
      'great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.',
    image: auction3,
    timeout: addTimeToDate({ days: 10, minutes: 23, seconds: 45 }),
    rating: { rate: 4.7, count: 542600 },
    user: {
      avatar: creator3,
      name: 'Jacki Adamczewski',
      job: 'Editor',
    },
  },
  {
    id: '65049853fc13ae5622fd547b',
    title: 'Agivu',
    price: 15.99,
    description:
      'The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.',
    image: auction4,
    timeout: addTimeToDate({ days: 20, hours: 9, minutes: 29 }),
    rating: { rate: 2.1, count: 424630 },
    user: {
      avatar: creator4,
      name: 'Reade Espinel',
      job: 'Research Nurse',
    },
  },
  {
    id: '65049902fc13ae568bfd5412',
    title: 'Thoughtstorm',
    price: 695,
    description:
      "From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.",
    image: auction5,
    timeout: addTimeToDate({ days: 19, minutes: 2, seconds: 7 }),
    rating: { rate: 4.6, count: 426040 },
    user: {
      avatar: creator5,
      name: 'Justine Donovin',
      job: 'Operator',
    },
  },
  {
    id: '65049902fc13ae568bfd5414',
    title: 'Voonte',
    price: 168,
    description:
      'Satisfaction Guaranteed. Return or exchange any order within 30 days.Designed and sold by Hafeez Center in the United States. Satisfaction Guaranteed. Return or exchange any order within 30 days.',
    image: auction6,
    timeout: addTimeToDate({ days: 15, hours: 6, minutes: 53 }),
    rating: { rate: 3.9, count: 72360 },
    user: {
      avatar: creator6,
      name: 'Johnathon Hexter',
      job: 'Junior Executive',
    },
  },
  {
    id: '65049902fc13ae568bfd541c',
    title: 'Fivechat',
    price: 9.99,
    description:
      "Classic Created Wedding Engagement Solitaire Diamond Promise Ring for Her. Gifts to spoil your love more for Engagement, Wedding, Anniversary, Valentine's Day...",
    image: auction7,
    timeout: addTimeToDate({ days: 9, minutes: 17, hours: 7 }),
    rating: { rate: 3, count: 426300 },
    user: {
      avatar: creator7,
      name: 'Sky Kerbler',
      job: 'Assistant Professor',
    },
  },
  {
    id: '65049902fc13ae568bfd5420',
    title: 'Skippad',
    price: 10.99,
    description:
      'Rose Gold Plated Double Flared Tunnel Plug Earrings. Made of 316L Stainless Steel',
    image: auction8,
    timeout: addTimeToDate({ days: 1, minutes: 2, seconds: 41 }),
    rating: { rate: 1.9, count: 412600 },
    user: {
      avatar: creator8,
      name: 'Meaghan Fritter',
      job: 'Speech Pathologist',
    },
  },
  {
    id: '65049902fc13ae568bfd5423',
    title: 'JumpXS',
    price: 64,
    description:
      "USB 3.0 and USB 2.0 Compatibility Fast data transfers Improve PC Performance High Capacity; Compatibility Formatted NTFS for Windows 10, Windows 8.1, Windows 7; Reformatting may be required for other operating systems; Compatibility may vary depending on user's hardware configuration and operating system",
    image: auction9,
    timeout: addTimeToDate({ days: 19, hours: 7, seconds: 4, minutes: 23 }),
    rating: { rate: 3.3, count: 22603 },
    user: {
      avatar: creator1,
      name: 'Jenine Catonnet',
      job: 'Project Manager',
    },
  },
];

const ARTISTS: Artist[] = [
  {
    id: '65056243fc13ae27edfd5476',
    name: 'Maddie Grayling',
    avatar: artist1,
    earn: 156583,
  },
  {
    id: '65056243fc13ae27edfd5477',
    name: 'Maddi Hairesnape',
    avatar: artist2,
    earn: 858440,
  },
  {
    id: '65056243fc13ae27edfd5478',
    name: 'Tyrus Gawen',
    avatar: artist3,
    earn: 761570,
  },
  {
    id: '65056243fc13ae27edfd5479',
    name: 'Allix Birkhead',
    avatar: artist4,
    earn: 215427,
  },
  {
    id: '65056243fc13ae27edfd547a',
    name: 'Maddie Grayling',
    avatar: artist1,
    earn: 156583,
  },
  {
    id: '65056243fc13ae27edfd547b',
    name: 'Maddi Hairesnape',
    avatar: artist2,
    earn: 858440,
  },
  {
    id: '65056243fc13ae27edfd5481',
    name: 'Tyrus Gawen',
    avatar: artist3,
    earn: 761570,
  },
  {
    id: '65056243fc13ae27edfd5485',
    name: 'Allix Birkhead',
    avatar: artist4,
    earn: 215427,
  },
];

const FEATURES: Feature[] = [
  {
    id: '65056243fc13ae27edfd5481',
    title: 'Set Up Your Wallet',
    icon: LuSettings2,
    info: 'The first step is to create the digital content that you want to tokenize as an NFT. This content can be anything digital',
    color: 'teal',
  },
  {
    id: '65058512fc13ae6bebfd5416',
    title: 'Make Your Collection ',
    icon: IoWalletOutline,
    info: 'in-game items, and more. Ensure that you own the rights to this content or have the necessary permissions to tokenize it.',
    color: 'red',
  },
  {
    id: '65058512fc13ae6bebfd5417',
    title: 'Add Your NFTs ',
    icon: AiOutlineAppstoreAdd,
    info: 'Minting an NFT means creating a unique token on the blockchain that represents your digital content. The exact process may vary depending on the platform ',
    color: 'cyan',
  },
  {
    id: '65058512fc13ae6bebfd541c',
    title: 'List Them For Sale',
    icon: BsCoin,
    info: 'Set any optional properties, such as royalties (a percentage of future sales that goes to the creator) and limited editions (if applicable).',
    color: 'orange',
  },
  {
    id: '65058512fc13ae6bebfd5429',
    title: 'Promote Your NFT',
    icon: BsStars,
    info: "To attract buyers and increase the value of your NFT, it's important to promote it. This may involve sharing it on social media, collaborating with influencers",
    color: 'blue',
  },
  {
    id: '65058516fc13ae6bebfd5429',
    title: 'List and Sell the NFT',
    icon: IoCheckmarkDone,
    info: 'keep in mind, such as copyright and environmental concerns (due to the energy consumption of some blockchain networks)',
    color: 'purple',
  },
];

const WALLET: Wallet[] = [
  {
    id: '65056243fc13ae27edfd5481',
    title: 'Meta Mask',
    info: ' Lorem ipsum dolor sit amet consectetur smit. ',
    image: wallet1,
  },
  {
    id: '65058512fc13ae6bebfd5416',
    title: 'Bitski',
    info: ' Lorem ipsum dolor sit amet consectetur smit. ',
    image: wallet2,
  },
  {
    id: '65058512fc13ae6bebfd5417',
    title: 'Fortmatic',
    info: ' Lorem ipsum dolor sit amet consectetur smit. ',
    image: wallet3,
  },
  {
    id: '65058512fc13ae6bebfd541c',
    title: 'Wallet Connect ',
    info: ' Lorem ipsum dolor sit amet consectetur smit. ',
    image: wallet4,
  },
  {
    id: '65058512fc13ae6bebfd5429',
    title: 'Coinbase Wallet ',
    info: ' Lorem ipsum dolor sit amet consectetur smit. ',
    image: wallet5,
  },
  {
    id: '65058516fc13ae6bebfd5429',
    title: 'Authereum',
    info: ' Lorem ipsum dolor sit amet consectetur smit. ',
    image: wallet6,
  },
  {
    id: '65058516fc13ae6bebfd5429',
    title: 'Kaikas ',
    info: ' Lorem ipsum dolor sit amet consectetur smit. ',
    image: wallet7,
  },
  {
    id: '65058516fc13ae6bebfd5429',
    title: 'Torus',
    info: ' Lorem ipsum dolor sit amet consectetur smit. ',
    image: wallet8,
  },
];

export { ARTISTS, AUCTIONS, FEATURES, PRODUCTS, WALLET };

