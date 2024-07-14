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
    id: 1,
    title: 'Flexidy',
    price: 1569.47,
    description:
      'Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.\n\nNullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.',
    image: '/products/product-1.png',
    rating: { rate: 1.0, count: 759313 },
    user: {
      avatar: '/authors/1.png',
      name: 'Josephina Steers',
      job: 'Software Engineer I',
    },
  },
  {
    id: 2,
    title: 'Ronstring',
    price: 551.38,
    description:
      'Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.\n\nIn congue. Etiam justo. Etiam pretium iaculis justo.',
    image: '/products/product-2.png',
    rating: { rate: 2.9, count: 230381 },
    user: { avatar: '/authors/2.png', name: 'Rip Linskill', job: 'Engineer I' },
  },
  {
    id: 3,
    title: 'Lotstring',
    price: 879.7,
    description:
      'In congue. Etiam justo. Etiam pretium iaculis justo.\n\nIn hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.',
    image: '/products/product-3.png',
    rating: { rate: 0.5, count: 661703 },
    user: {
      avatar: '/authors/3.png',
      name: 'Rob Skillington',
      job: 'Senior Developer',
    },
  },
  {
    id: 4,
    title: 'Prodder',
    price: 1460.89,
    description:
      'Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.\n\nCras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.\n\nProin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.',
    image: '/products/product-4.png',
    rating: { rate: 3.0, count: 90474 },
    user: {
      avatar: '/authors/4.png',
      name: 'Sophi Conochie',
      job: 'Librarian',
    },
  },
  {
    id: 5,
    title: 'Fixflex',
    price: 534.16,
    description: 'In congue. Etiam justo. Etiam pretium iaculis justo.',
    image: '/products/product-5.png',
    rating: { rate: 1.9, count: 637194 },
    user: {
      avatar: '/authors/5.png',
      name: 'Noelle Gajewski',
      job: 'Assistant Professor',
    },
  },
  {
    id: 6,
    title: 'Keylex',
    price: 449.34,
    description:
      'Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.',
    image: '/products/product-6.png',
    rating: { rate: 3.9, count: 226482 },
    user: {
      avatar: '/authors/6.png',
      name: 'Dennis Lukash',
      job: 'Web Developer II',
    },
  },
  {
    id: 7,
    title: 'Cookley',
    price: 1937.79,
    description:
      'Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.\n\nPhasellus in felis. Donec semper sapien a libero. Nam dui.\n\nProin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.',
    image: '/products/product-7.png',
    rating: { rate: 1.9, count: 903070 },
    user: {
      avatar: '/authors/7.png',
      name: 'Tremaine Ablett',
      job: 'Associate Professor',
    },
  },
  {
    id: 8,
    title: 'Bitwolf',
    price: 305.58,
    description:
      'Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.\n\nMauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.\n\nNullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.',
    image: '/products/product-8.png',
    rating: { rate: 1.2, count: 304707 },
    user: {
      avatar: '/authors/8.png',
      name: 'Cordy Brock',
      job: 'Information Systems Manager',
    },
  },
  {
    id: 9,
    title: 'Cookley',
    price: 754.83,
    description:
      'Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.\n\nPhasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.',
    image: '/products/product-9.png',
    rating: { rate: 3.1, count: 676425 },
    user: {
      avatar: '/authors/9.png',
      name: 'Rory Sowten',
      job: 'Clinical Specialist',
    },
  },
  {
    id: 10,
    title: 'Cookley',
    price: 79.96,
    description:
      'Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.\n\nPhasellus in felis. Donec semper sapien a libero. Nam dui.\n\nProin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.',
    image: '/products/product-10.png',
    rating: { rate: 4.9, count: 665125 },
    user: {
      avatar: '/authors/10.png',
      name: 'Reggi Coulthurst',
      job: 'Account Executive',
    },
  },
  {
    id: 11,
    title: 'Konklux',
    price: 163.25,
    description:
      'Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.\n\nNullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.\n\nMorbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.',
    image: '/products/product-11.png',
    rating: { rate: 4.5, count: 591283 },
    user: {
      avatar: '/authors/11.png',
      name: 'Remington Monery',
      job: 'Junior Executive',
    },
  },
  {
    id: 12,
    title: 'Redhold',
    price: 1029.7,
    description:
      'In congue. Etiam justo. Etiam pretium iaculis justo.\n\nIn hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.\n\nNulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.',
    image: '/products/product-12.png',
    rating: { rate: 2.3, count: 848914 },
    user: {
      avatar: '/authors/12.png',
      name: 'Wain Gasnell',
      job: 'Human Resources Assistant III',
    },
  },
  {
    id: 13,
    title: 'Mat Lam Tam',
    price: 1929.46,
    description:
      'Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.',
    image: '/products/product-13.png',
    rating: { rate: 3.1, count: 131603 },
    user: {
      avatar: '/authors/13.png',
      name: 'Shelba Gluyas',
      job: 'Executive Secretary',
    },
  },
  {
    id: 14,
    title: 'Pannier',
    price: 1745.12,
    description:
      'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.',
    image: '/products/product-14.png',
    rating: { rate: 3.5, count: 181977 },
    user: {
      avatar: '/authors/14.png',
      name: 'Bernardine Fattorini',
      job: 'Environmental Specialist',
    },
  },
  {
    id: 15,
    title: 'Voltsillam',
    price: 1734.12,
    description:
      'Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.\n\nPraesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.',
    image: '/products/product-15.png',
    rating: { rate: 1.9, count: 541520 },
    user: {
      avatar: '/authors/15.png',
      name: 'Kippy Egell',
      job: 'Financial Analyst',
    },
  },
  {
    id: 16,
    title: 'Wrapsafe',
    price: 1142.39,
    description:
      'Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.\n\nIn quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.\n\nMaecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.',
    image: '/products/product-16.png',
    rating: { rate: 1.7, count: 258297 },
    user: {
      avatar: '/authors/16.png',
      name: 'Dionisio Essberger',
      job: 'Office Assistant III',
    },
  },
  {
    id: 17,
    title: 'Subin',
    price: 1340.41,
    description:
      'Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.\n\nMorbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.',
    image: '/products/product-17.png',
    rating: { rate: 3.6, count: 64194 },
    user: {
      avatar: '/authors/17.png',
      name: 'Helen-elizabeth Pappin',
      job: 'Environmental Tech',
    },
  },
  {
    id: 18,
    title: 'Zaam-Dox',
    price: 472.7,
    description:
      'Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.',
    image: '/products/product-18.png',
    rating: { rate: 1.5, count: 110245 },
    user: {
      avatar: '/authors/18.png',
      name: 'Odey Franzewitch',
      job: 'Speech Pathologist',
    },
  },
  {
    id: 19,
    title: 'Opela',
    price: 1709.57,
    description:
      'In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.\n\nAliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.',
    image: '/products/product-19.png',
    rating: { rate: 1.8, count: 851218 },
    user: {
      avatar: '/authors/19.png',
      name: 'Merill Flescher',
      job: 'Staff Scientist',
    },
  },
  {
    id: 20,
    title: 'Tres-Zap',
    price: 1862.91,
    description:
      'Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.',
    image: '/products/product-20.png',
    rating: { rate: 0.2, count: 544382 },
    user: {
      avatar: '/authors/20.png',
      name: 'Marjie Hutcheon',
      job: 'Food Chemist',
    },
  },
  {
    id: 21,
    title: 'Asoka',
    price: 732.69,
    description:
      'Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.',
    image: '/products/product-21.png',
    rating: { rate: 4.4, count: 469334 },
    user: {
      avatar: '/authors/21.png',
      name: 'Faye Petersen',
      job: 'Analyst Programmer',
    },
  },
  {
    id: 22,
    title: 'Sub-Ex',
    price: 1673.97,
    description:
      'Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.',
    image: '/products/product-22.png',
    rating: { rate: 1.3, count: 77778 },
    user: {
      avatar: '/authors/22.png',
      name: 'Brianna McGhie',
      job: 'Occupational Therapist',
    },
  },
  {
    id: 23,
    title: 'Y-find',
    price: 364.4,
    description:
      'Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.\n\nDonec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.\n\nDuis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.',
    image: '/products/product-23.png',
    rating: { rate: 3.2, count: 847295 },
    user: {
      avatar: '/authors/23.png',
      name: 'Uta Methringham',
      job: 'Community Outreach Specialist',
    },
  },
  {
    id: 24,
    title: 'Fixflex',
    price: 1244.75,
    description:
      'Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.',
    image: '/products/product-24.png',
    rating: { rate: 0.9, count: 931828 },
    user: {
      avatar: '/authors/24.png',
      name: 'Valerie Severs',
      job: 'Accountant III',
    },
  },
  {
    id: 25,
    title: 'Transcof',
    price: 764.51,
    description:
      'Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.\n\nFusce consequat. Nulla nisl. Nunc nisl.',
    image: '/products/product-25.png',
    rating: { rate: 3.6, count: 431304 },
    user: {
      avatar: '/authors/25.png',
      name: 'Bernie Mazin',
      job: 'Account Executive',
    },
  },
  {
    id: 26,
    title: 'Job',
    price: 300.71,
    description:
      'Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.\n\nVestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.\n\nIn congue. Etiam justo. Etiam pretium iaculis justo.',
    image: '/products/product-26.png',
    rating: { rate: 2.0, count: 542288 },
    user: {
      avatar: '/authors/26.png',
      name: 'Katlin MacKeller',
      job: 'Tax Accountant',
    },
  },
  {
    id: 27,
    title: 'Tampflex',
    price: 1579.71,
    description:
      'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.\n\nCurabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.',
    image: '/products/product-27.png',
    rating: { rate: 0.2, count: 969982 },
    user: {
      avatar: '/authors/27.png',
      name: 'Gil Mazzeo',
      job: 'Community Outreach Specialist',
    },
  },
  {
    id: 28,
    title: 'Temp',
    price: 1924.69,
    description:
      'Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.\n\nPhasellus in felis. Donec semper sapien a libero. Nam dui.',
    image: '/products/product-28.png',
    rating: { rate: 0.1, count: 120342 },
    user: {
      avatar: '/authors/28.png',
      name: 'Oswell Gibke',
      job: 'Geologist I',
    },
  },
  {
    id: 29,
    title: 'Span',
    price: 197.6,
    description:
      'Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.\n\nSed ante. Vivamus tortor. Duis mattis egestas metus.\n\nAenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.',
    image: '/products/product-29.png',
    rating: { rate: 4.1, count: 568206 },
    user: {
      avatar: '/authors/29.png',
      name: 'Gaultiero Middlehurst',
      job: 'Programmer Analyst I',
    },
  },
  {
    id: 30,
    title: 'Trippledex',
    price: 525.99,
    description:
      'Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.\n\nMorbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.\n\nFusce consequat. Nulla nisl. Nunc nisl.',
    image: '/products/product-30.png',
    rating: { rate: 1.6, count: 694613 },
    user: {
      avatar: '/authors/30.png',
      name: 'Iorgo Francescozzi',
      job: 'Analog Circuit Design manager',
    },
  },
  {
    id: 31,
    title: 'Bytecard',
    price: 342.74,
    description:
      'Fusce consequat. Nulla nisl. Nunc nisl.\n\nDuis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.',
    image: '/products/product-31.png',
    rating: { rate: 2.7, count: 764638 },
    user: {
      avatar: '/authors/31.png',
      name: 'Terrie Cashley',
      job: 'Account Representative I',
    },
  },
  {
    id: 32,
    title: 'Transcof',
    price: 1284.15,
    description:
      'Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.\n\nSed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.\n\nPellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.',
    image: '/products/product-32.png',
    rating: { rate: 2.0, count: 463045 },
    user: {
      avatar: '/authors/32.png',
      name: 'Gelya Gardener',
      job: 'Systems Administrator II',
    },
  },
  {
    id: 33,
    title: 'Opela',
    price: 693.43,
    description:
      'Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.\n\nQuisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.',
    image: '/products/product-33.png',
    rating: { rate: 3.8, count: 623553 },
    user: {
      avatar: '/authors/33.png',
      name: 'Thor Burgoine',
      job: 'Graphic Designer',
    },
  },
  {
    id: 34,
    title: 'Bamity',
    price: 192.11,
    description: 'In congue. Etiam justo. Etiam pretium iaculis justo.',
    image: '/products/product-34.png',
    rating: { rate: 1.1, count: 999238 },
    user: {
      avatar: '/authors/34.png',
      name: 'Almire Ohrt',
      job: 'VP Quality Control',
    },
  },
  {
    id: 35,
    title: 'Zathin',
    price: 1363.6,
    description:
      'Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.\n\nNam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.\n\nCurabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.',
    image: '/products/product-35.png',
    rating: { rate: 0.3, count: 47697 },
    user: {
      avatar: '/authors/35.png',
      name: 'Gunther Diggins',
      job: 'Teacher',
    },
  },
  {
    id: 36,
    title: 'Zathin',
    price: 430.79,
    description:
      'Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.\n\nPhasellus in felis. Donec semper sapien a libero. Nam dui.\n\nProin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.',
    image: '/products/product-36.png',
    rating: { rate: 3.5, count: 784007 },
    user: {
      avatar: '/authors/36.png',
      name: 'Natka Graben',
      job: 'Social Worker',
    },
  },
  {
    id: 37,
    title: 'Regrant',
    price: 1933.17,
    description:
      'Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.\n\nPraesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.\n\nCras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
    image: '/products/product-37.png',
    rating: { rate: 4.8, count: 148441 },
    user: { avatar: '/authors/37.png', name: 'Liam Guerner', job: 'Operator' },
  },
  {
    id: 38,
    title: 'Wrapsafe',
    price: 205.94,
    description:
      'Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.\n\nInteger tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.\n\nPraesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.',
    image: '/products/product-38.png',
    rating: { rate: 4.3, count: 615203 },
    user: {
      avatar: '/authors/38.png',
      name: 'Grenville Trevna',
      job: 'General Manager',
    },
  },
  {
    id: 39,
    title: 'Pannier',
    price: 1273.19,
    description:
      'Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.',
    image: '/products/product-39.png',
    rating: { rate: 3.8, count: 562559 },
    user: {
      avatar: '/authors/39.png',
      name: 'Marina Elgie',
      job: 'Budget/Accounting Analyst IV',
    },
  },
  {
    id: 40,
    title: 'Y-find',
    price: 1825.99,
    description:
      'Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.\n\nPhasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.\n\nProin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.',
    image: '/products/product-40.png',
    rating: { rate: 4.4, count: 537625 },
    user: {
      avatar: '/authors/40.png',
      name: 'Paten Gulliver',
      job: 'Staff Accountant I',
    },
  },
  {
    id: 41,
    title: 'Rank',
    price: 806.74,
    description:
      'Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.\n\nQuisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.\n\nPhasellus in felis. Donec semper sapien a libero. Nam dui.',
    image: '/products/product-41.png',
    rating: { rate: 3.0, count: 54766 },
    user: {
      avatar: '/authors/41.png',
      name: 'Jacintha Hellens',
      job: 'Automation Specialist III',
    },
  },
  {
    id: 42,
    title: 'Stringtough',
    price: 1458.57,
    description:
      'Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.\n\nFusce consequat. Nulla nisl. Nunc nisl.',
    image: '/products/product-42.png',
    rating: { rate: 1.8, count: 665404 },
    user: {
      avatar: '/authors/42.png',
      name: 'Vinita Fulk',
      job: 'Payment Adjustment Coordinator',
    },
  },
  {
    id: 43,
    title: 'Aerified',
    price: 1432.97,
    description:
      'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.\n\nDuis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.\n\nIn sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.',
    image: '/products/product-43.png',
    rating: { rate: 1.5, count: 452814 },
    user: {
      avatar: '/authors/43.png',
      name: 'Tailor Rogan',
      job: 'Internal Auditor',
    },
  },
  {
    id: 44,
    title: 'Vagram',
    price: 88.09,
    description:
      'Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.\n\nDonec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.',
    image: '/products/product-44.png',
    rating: { rate: 0.3, count: 646386 },
    user: {
      avatar: '/authors/44.png',
      name: 'Barron Clayill',
      job: 'Help Desk Operator',
    },
  },
  {
    id: 45,
    title: 'Overhold',
    price: 1052.59,
    description:
      'Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.',
    image: '/products/product-45.png',
    rating: { rate: 2.6, count: 404191 },
    user: {
      avatar: '/authors/45.png',
      name: 'Myrwyn Aylesbury',
      job: 'Senior Quality Engineer',
    },
  },
  {
    id: 46,
    title: 'Sonsing',
    price: 825.03,
    description:
      'Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.\n\nFusce consequat. Nulla nisl. Nunc nisl.',
    image: '/products/product-46.png',
    rating: { rate: 4.9, count: 408973 },
    user: {
      avatar: '/authors/46.png',
      name: 'Ham Pock',
      job: 'Biostatistician IV',
    },
  },
  {
    id: 47,
    title: 'Sub-Ex',
    price: 433.06,
    description:
      'Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.\n\nVestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.\n\nIn congue. Etiam justo. Etiam pretium iaculis justo.',
    image: '/products/product-47.png',
    rating: { rate: 0.0, count: 487863 },
    user: {
      avatar: '/authors/47.png',
      name: 'Niles Semper',
      job: 'VP Product Management',
    },
  },
  {
    id: 48,
    title: 'Quo Lux',
    price: 1265.78,
    description:
      'Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.',
    image: '/products/product-48.png',
    rating: { rate: 2.3, count: 210000 },
    user: {
      avatar: '/authors/48.png',
      name: 'Gardy Soot',
      job: 'Assistant Media Planner',
    },
  },
  {
    id: 49,
    title: 'Holdlamis',
    price: 665.69,
    description:
      'Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.\n\nPraesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.',
    image: '/products/product-49.png',
    rating: { rate: 2.1, count: 631270 },
    user: {
      avatar: '/authors/49.png',
      name: 'Lurline Langtry',
      job: 'Project Manager',
    },
  },
  {
    id: 50,
    title: 'Fintone',
    price: 1538.3,
    description:
      'Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.',
    image: '/products/product-50.png',
    rating: { rate: 2.2, count: 290850 },
    user: {
      avatar: '/authors/50.png',
      name: 'Leone Gibbens',
      job: 'Account Coordinator',
    },
  },
  {
    id: 51,
    title: 'Veribet',
    price: 1125.61,
    description:
      'Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.\n\nMaecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.',
    image: '/products/product-51.png',
    rating: { rate: 1.7, count: 1924 },
    user: {
      avatar: '/authors/51.png',
      name: 'Ronny Hacaud',
      job: 'Staff Accountant III',
    },
  },
  {
    id: 52,
    title: 'Solarbreeze',
    price: 1577.39,
    description:
      'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.\n\nCurabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.\n\nInteger tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.',
    image: '/products/product-52.png',
    rating: { rate: 1.2, count: 495003 },
    user: {
      avatar: '/authors/52.png',
      name: 'Dolli Simondson',
      job: 'Database Administrator II',
    },
  },
  {
    id: 53,
    title: 'Flowdesk',
    price: 1849.59,
    description:
      'Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.',
    image: '/products/product-53.png',
    rating: { rate: 3.9, count: 482258 },
    user: { avatar: '/authors/53.png', name: 'Pete Pohlke', job: 'Actuary' },
  },
  {
    id: 54,
    title: 'Otcom',
    price: 520.74,
    description:
      'Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.\n\nInteger tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.',
    image: '/products/product-54.png',
    rating: { rate: 4.1, count: 610054 },
    user: {
      avatar: '/authors/54.png',
      name: 'Kristyn Wilcocke',
      job: 'Director of Sales',
    },
  },
  {
    id: 55,
    title: 'Ronstring',
    price: 219.92,
    description:
      'Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.\n\nVestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.\n\nIn congue. Etiam justo. Etiam pretium iaculis justo.',
    image: '/products/product-55.png',
    rating: { rate: 2.4, count: 858235 },
    user: {
      avatar: '/authors/55.png',
      name: 'Melvyn Waything',
      job: 'Dental Hygienist',
    },
  },
  {
    id: 56,
    title: 'Otcom',
    price: 359.94,
    description:
      'Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.\n\nIn congue. Etiam justo. Etiam pretium iaculis justo.',
    image: '/products/product-56.png',
    rating: { rate: 4.2, count: 9225 },
    user: {
      avatar: '/authors/56.png',
      name: 'Juana Horsfield',
      job: 'Software Test Engineer III',
    },
  },
  {
    id: 57,
    title: 'Fixflex',
    price: 262.46,
    description:
      'Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.\n\nMaecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.',
    image: '/products/product-57.png',
    rating: { rate: 4.3, count: 267579 },
    user: {
      avatar: '/authors/57.png',
      name: 'Sayers Visick',
      job: 'Automation Specialist II',
    },
  },
  {
    id: 58,
    title: 'Mat Lam Tam',
    price: 1989.01,
    description:
      'Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.\n\nProin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.\n\nAenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.',
    image: '/products/product-58.png',
    rating: { rate: 3.8, count: 945163 },
    user: {
      avatar: '/authors/58.png',
      name: 'Grace Margerison',
      job: 'Assistant Media Planner',
    },
  },
  {
    id: 59,
    title: 'Fintone',
    price: 1265.15,
    description:
      'In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.\n\nSuspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.\n\nMaecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.',
    image: '/products/product-59.png',
    rating: { rate: 1.5, count: 890999 },
    user: {
      avatar: '/authors/59.png',
      name: 'Teodora Uc',
      job: 'Electrical Engineer',
    },
  },
  {
    id: 60,
    title: 'Job',
    price: 812.13,
    description:
      'Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.\n\nQuisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.',
    image: '/products/product-60.png',
    rating: { rate: 2.6, count: 679377 },
    user: {
      avatar: '/authors/60.png',
      name: 'Perceval Kundert',
      job: 'Account Coordinator',
    },
  },
  {
    id: 61,
    title: 'Zathin',
    price: 1878.67,
    description:
      'Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.\n\nPraesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.\n\nMorbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.',
    image: '/products/product-61.png',
    rating: { rate: 1.3, count: 189787 },
    user: {
      avatar: '/authors/61.png',
      name: 'Page Storm',
      job: 'Compensation Analyst',
    },
  },
  {
    id: 62,
    title: 'Treeflex',
    price: 1265.29,
    description:
      'Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.',
    image: '/products/product-62.png',
    rating: { rate: 1.4, count: 438610 },
    user: {
      avatar: '/authors/62.png',
      name: 'Elisha Matthewson',
      job: 'Nurse',
    },
  },
  {
    id: 63,
    title: 'Viva',
    price: 660.96,
    description:
      'In congue. Etiam justo. Etiam pretium iaculis justo.\n\nIn hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.',
    image: '/products/product-63.png',
    rating: { rate: 0.0, count: 179468 },
    user: {
      avatar: '/authors/63.png',
      name: 'Brandais Drinkel',
      job: 'Assistant Professor',
    },
  },
  {
    id: 64,
    title: 'Konklux',
    price: 1443.49,
    description:
      'Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.\n\nIn quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.\n\nMaecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.',
    image: '/products/product-64.png',
    rating: { rate: 2.5, count: 86565 },
    user: {
      avatar: '/authors/64.png',
      name: 'Netty Rozenbaum',
      job: 'Cost Accountant',
    },
  },
  {
    id: 65,
    title: 'Flowdesk',
    price: 885.1,
    description:
      'Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.\n\nCras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
    image: '/products/product-65.png',
    rating: { rate: 0.9, count: 713935 },
    user: {
      avatar: '/authors/65.png',
      name: 'Brocky Marjanovic',
      job: 'Desktop Support Technician',
    },
  },
  {
    id: 66,
    title: 'Fix San',
    price: 190.92,
    description:
      'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
    image: '/products/product-66.png',
    rating: { rate: 3.9, count: 593755 },
    user: {
      avatar: '/authors/66.png',
      name: 'Cordey Creaser',
      job: 'Speech Pathologist',
    },
  },
  {
    id: 67,
    title: 'Alpha',
    price: 667.34,
    description:
      'Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.\n\nMorbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.',
    image: '/products/product-67.png',
    rating: { rate: 4.1, count: 635625 },
    user: {
      avatar: '/authors/67.png',
      name: 'Rois Clash',
      job: 'Junior Executive',
    },
  },
  {
    id: 68,
    title: 'Domainer',
    price: 41.73,
    description:
      'Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.',
    image: '/products/product-68.png',
    rating: { rate: 0.2, count: 59750 },
    user: {
      avatar: '/authors/68.png',
      name: 'Crystie Denzey',
      job: 'Staff Scientist',
    },
  },
  {
    id: 69,
    title: 'Voyatouch',
    price: 1138.78,
    description:
      'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.\n\nCurabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.',
    image: '/products/product-69.png',
    rating: { rate: 0.8, count: 168874 },
    user: {
      avatar: '/authors/69.png',
      name: 'Irina Burl',
      job: 'Structural Engineer',
    },
  },
  {
    id: 70,
    title: 'Konklux',
    price: 1035.38,
    description:
      'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.\n\nEtiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.',
    image: '/products/product-70.png',
    rating: { rate: 4.4, count: 819289 },
    user: {
      avatar: '/authors/70.png',
      name: "Camille O' Mahony",
      job: 'Recruiting Manager',
    },
  },
  {
    id: 71,
    title: 'Matsoft',
    price: 78.78,
    description:
      'Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.\n\nVestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.\n\nIn congue. Etiam justo. Etiam pretium iaculis justo.',
    image: '/products/product-71.png',
    rating: { rate: 1.5, count: 419015 },
    user: {
      avatar: '/authors/71.png',
      name: 'Cthrine Moyle',
      job: 'Account Representative IV',
    },
  },
  {
    id: 72,
    title: 'Vagram',
    price: 1138.48,
    description:
      'Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.\n\nIn hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.\n\nAliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.',
    image: '/products/product-72.png',
    rating: { rate: 0.6, count: 555497 },
    user: {
      avatar: '/authors/72.png',
      name: 'Zonda Bunson',
      job: 'Marketing Assistant',
    },
  },
  {
    id: 73,
    title: 'Lotstring',
    price: 398.17,
    description:
      'Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.\n\nPraesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.\n\nCras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
    image: '/products/product-73.png',
    rating: { rate: 4.0, count: 994727 },
    user: {
      avatar: '/authors/73.png',
      name: 'Anderea Widd',
      job: 'Computer Systems Analyst III',
    },
  },
  {
    id: 74,
    title: 'Quo Lux',
    price: 1443.08,
    description:
      'Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.',
    image: '/products/product-74.png',
    rating: { rate: 5.0, count: 504955 },
    user: { avatar: '/authors/74.png', name: 'Garry Pendre', job: 'Librarian' },
  },
  {
    id: 75,
    title: 'Bitwolf',
    price: 714.96,
    description: 'In congue. Etiam justo. Etiam pretium iaculis justo.',
    image: '/products/product-75.png',
    rating: { rate: 0.7, count: 423420 },
    user: {
      avatar: '/authors/75.png',
      name: 'Templeton Gerold',
      job: 'Food Chemist',
    },
  },
  {
    id: 76,
    title: 'Zamit',
    price: 975.92,
    description:
      'Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.\n\nProin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.',
    image: '/products/product-76.png',
    rating: { rate: 4.0, count: 56661 },
    user: {
      avatar: '/authors/76.png',
      name: 'Christin Blanking',
      job: 'Administrative Assistant II',
    },
  },
  {
    id: 77,
    title: 'Treeflex',
    price: 1930.95,
    description:
      'Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.\n\nDuis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.\n\nDonec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.',
    image: '/products/product-77.png',
    rating: { rate: 1.7, count: 794557 },
    user: {
      avatar: '/authors/77.png',
      name: 'Paolina Lakes',
      job: 'Software Engineer III',
    },
  },
  {
    id: 78,
    title: 'Overhold',
    price: 1101.53,
    description:
      'Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.',
    image: '/products/product-78.png',
    rating: { rate: 1.3, count: 527233 },
    user: {
      avatar: '/authors/78.png',
      name: 'August Cornthwaite',
      job: 'Junior Executive',
    },
  },
  {
    id: 79,
    title: 'Bigtax',
    price: 863.37,
    description:
      'Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.',
    image: '/products/product-79.png',
    rating: { rate: 0.8, count: 447326 },
    user: {
      avatar: '/authors/79.png',
      name: 'Pearle McKibbin',
      job: 'Structural Engineer',
    },
  },
  {
    id: 80,
    title: 'Tin',
    price: 1087.15,
    description:
      'Fusce consequat. Nulla nisl. Nunc nisl.\n\nDuis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.',
    image: '/products/product-80.png',
    rating: { rate: 3.1, count: 66428 },
    user: {
      avatar: '/authors/80.png',
      name: 'Gil Gullane',
      job: 'General Manager',
    },
  },
  {
    id: 81,
    title: 'Fintone',
    price: 857.78,
    description:
      'Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.\n\nMorbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.\n\nFusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.',
    image: '/products/product-81.png',
    rating: { rate: 4.6, count: 262114 },
    user: {
      avatar: '/authors/81.png',
      name: 'Ronnica Vanezis',
      job: 'Electrical Engineer',
    },
  },
  {
    id: 82,
    title: 'Matsoft',
    price: 141.91,
    description:
      'Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.\n\nAenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.',
    image: '/products/product-82.png',
    rating: { rate: 3.7, count: 659124 },
    user: {
      avatar: '/authors/82.png',
      name: 'Sibelle Scorton',
      job: 'Paralegal',
    },
  },
  {
    id: 83,
    title: 'Voyatouch',
    price: 1056.15,
    description:
      'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.\n\nCurabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.\n\nInteger tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.',
    image: '/products/product-83.png',
    rating: { rate: 0.1, count: 965183 },
    user: {
      avatar: '/authors/83.png',
      name: 'Galven Schwand',
      job: 'Web Designer II',
    },
  },
  {
    id: 84,
    title: 'Alphazap',
    price: 1548.53,
    description:
      'Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.',
    image: '/products/product-84.png',
    rating: { rate: 2.1, count: 385174 },
    user: {
      avatar: '/authors/84.png',
      name: 'Pamelina Nuscha',
      job: 'Speech Pathologist',
    },
  },
  {
    id: 85,
    title: 'Domainer',
    price: 1630.33,
    description:
      'Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.\n\nProin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.',
    image: '/products/product-85.png',
    rating: { rate: 2.1, count: 909386 },
    user: {
      avatar: '/authors/85.png',
      name: 'Birgit Tewelson',
      job: 'Senior Cost Accountant',
    },
  },
  {
    id: 86,
    title: 'Zoolab',
    price: 1277.72,
    description:
      'Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.',
    image: '/products/product-86.png',
    rating: { rate: 1.5, count: 337136 },
    user: {
      avatar: '/authors/86.png',
      name: 'Bernadine Gerrad',
      job: 'Clinical Specialist',
    },
  },
  {
    id: 87,
    title: 'Ventosanzap',
    price: 71.84,
    description:
      'Fusce consequat. Nulla nisl. Nunc nisl.\n\nDuis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.\n\nIn hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.',
    image: '/products/product-87.png',
    rating: { rate: 2.5, count: 427886 },
    user: {
      avatar: '/authors/87.png',
      name: 'Bartolomeo Curtoys',
      job: 'Recruiting Manager',
    },
  },
  {
    id: 88,
    title: 'Alpha',
    price: 857.64,
    description:
      'Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.',
    image: '/products/product-88.png',
    rating: { rate: 1.4, count: 500146 },
    user: {
      avatar: '/authors/88.png',
      name: 'Ulick Weinham',
      job: 'Registered Nurse',
    },
  },
  {
    id: 89,
    title: 'Veribet',
    price: 1565.91,
    description:
      'Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.\n\nIn hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.',
    image: '/products/product-89.png',
    rating: { rate: 1.3, count: 992731 },
    user: {
      avatar: '/authors/89.png',
      name: 'Edwina Wardall',
      job: 'Recruiting Manager',
    },
  },
  {
    id: 90,
    title: 'Tampflex',
    price: 1141.96,
    description:
      'In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.',
    image: '/products/product-90.png',
    rating: { rate: 0.5, count: 634990 },
    user: {
      avatar: '/authors/90.png',
      name: 'Ringo Auden',
      job: 'Senior Financial Analyst',
    },
  },
  {
    id: 91,
    title: 'Opela',
    price: 455.56,
    description:
      'Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.\n\nFusce consequat. Nulla nisl. Nunc nisl.\n\nDuis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.',
    image: '/products/product-91.png',
    rating: { rate: 3.8, count: 862126 },
    user: {
      avatar: '/authors/91.png',
      name: 'Raven Lothlorien',
      job: 'Nurse Practicioner',
    },
  },
  {
    id: 92,
    title: 'Zamit',
    price: 927.99,
    description:
      'Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.\n\nDonec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.',
    image: '/products/product-92.png',
    rating: { rate: 3.5, count: 534629 },
    user: {
      avatar: '/authors/92.png',
      name: 'Elane Rowlson',
      job: 'Payment Adjustment Coordinator',
    },
  },
  {
    id: 93,
    title: 'Wrapsafe',
    price: 1614.54,
    description:
      'In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.\n\nAliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.\n\nSed ante. Vivamus tortor. Duis mattis egestas metus.',
    image: '/products/product-93.png',
    rating: { rate: 3.6, count: 375078 },
    user: { avatar: '/authors/93.png', name: 'Floria Khoter', job: 'Editor' },
  },
  {
    id: 94,
    title: 'Andalax',
    price: 1533.98,
    description:
      'Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.\n\nVestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.\n\nIn congue. Etiam justo. Etiam pretium iaculis justo.',
    image: '/products/product-94.png',
    rating: { rate: 1.1, count: 900604 },
    user: {
      avatar: '/authors/94.png',
      name: 'Charisse Sparrowe',
      job: 'Physical Therapy Assistant',
    },
  },
  {
    id: 95,
    title: 'Job',
    price: 40.48,
    description:
      'Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.\n\nNullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.',
    image: '/products/product-95.png',
    rating: { rate: 3.3, count: 639735 },
    user: {
      avatar: '/authors/95.png',
      name: 'Vitoria Rohfsen',
      job: 'Payment Adjustment Coordinator',
    },
  },
  {
    id: 96,
    title: 'Konklab',
    price: 992.67,
    description:
      'Sed ante. Vivamus tortor. Duis mattis egestas metus.\n\nAenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.',
    image: '/products/product-96.png',
    rating: { rate: 3.0, count: 754109 },
    user: {
      avatar: '/authors/96.png',
      name: 'Helenka Flahive',
      job: 'VP Accounting',
    },
  },
  {
    id: 97,
    title: 'Sub-Ex',
    price: 795.82,
    description:
      'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.\n\nEtiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.\n\nPraesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.',
    image: '/products/product-97.png',
    rating: { rate: 1.5, count: 757087 },
    user: {
      avatar: '/authors/97.png',
      name: 'Bettine Marjoribanks',
      job: 'Nurse',
    },
  },
  {
    id: 98,
    title: 'Biodex',
    price: 1624.53,
    description:
      'Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.',
    image: '/products/product-98.png',
    rating: { rate: 3.0, count: 380727 },
    user: {
      avatar: '/authors/98.png',
      name: 'Merwin Downey',
      job: 'Account Coordinator',
    },
  },
  {
    id: 99,
    title: 'Zathin',
    price: 1664.13,
    description:
      'Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.\n\nDonec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.',
    image: '/products/product-99.png',
    rating: { rate: 0.6, count: 125845 },
    user: {
      avatar: '/authors/99.png',
      name: 'David Grew',
      job: 'Community Outreach Specialist',
    },
  },
  {
    id: 100,
    title: 'Cardguard',
    price: 1805.41,
    description:
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.',
    image: '/products/product-100.png',
    rating: { rate: 4.0, count: 89022 },
    user: {
      avatar: '/authors/100.png',
      name: 'Jennie Ariss',
      job: 'Research Nurse',
    },
  },
  {
    id: 101,
    title: 'Matsoft',
    price: 462.04,
    description:
      'Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.',
    image: '/products/product-101.png',
    rating: { rate: 0.0, count: 137542 },
    user: {
      avatar: '/authors/101.png',
      name: 'Abigail Wisam',
      job: 'Safety Technician I',
    },
  },
  {
    id: 102,
    title: 'Zoolab',
    price: 219.93,
    description:
      'Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.',
    image: '/products/product-102.png',
    rating: { rate: 1.8, count: 409234 },
    user: {
      avatar: '/authors/102.png',
      name: 'Rebbecca Edelheit',
      job: 'Nuclear Power Engineer',
    },
  },
  {
    id: 103,
    title: 'Aerified',
    price: 1718.46,
    description:
      'In congue. Etiam justo. Etiam pretium iaculis justo.\n\nIn hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.',
    image: '/products/product-103.png',
    rating: { rate: 1.7, count: 318592 },
    user: {
      avatar: '/authors/103.png',
      name: 'Valencia Spittle',
      job: 'Physical Therapy Assistant',
    },
  },
  {
    id: 104,
    title: 'Home Ing',
    price: 1199.85,
    description:
      'Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.\n\nPellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.\n\nCum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
    image: '/products/product-104.png',
    rating: { rate: 4.1, count: 379035 },
    user: {
      avatar: '/authors/104.png',
      name: 'Rainer Balnave',
      job: 'Web Developer III',
    },
  },
  {
    id: 105,
    title: 'Fixflex',
    price: 383.13,
    description:
      'Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.',
    image: '/products/product-105.png',
    rating: { rate: 3.1, count: 250010 },
    user: {
      avatar: '/authors/105.png',
      name: 'Leona Craigheid',
      job: 'Analyst Programmer',
    },
  },
  {
    id: 106,
    title: 'Cookley',
    price: 1508.77,
    description:
      'Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.',
    image: '/products/product-106.png',
    rating: { rate: 3.1, count: 768152 },
    user: {
      avatar: '/authors/106.png',
      name: 'Judye Cothey',
      job: 'Software Engineer IV',
    },
  },
  {
    id: 107,
    title: 'Biodex',
    price: 1415.43,
    description:
      'Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.',
    image: '/products/product-107.png',
    rating: { rate: 4.9, count: 819718 },
    user: {
      avatar: '/authors/107.png',
      name: 'Rosaleen Dmisek',
      job: 'Associate Professor',
    },
  },
  {
    id: 108,
    title: 'Solarbreeze',
    price: 253.08,
    description:
      'In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.\n\nSuspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.\n\nMaecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.',
    image: '/products/product-108.png',
    rating: { rate: 2.5, count: 484438 },
    user: {
      avatar: '/authors/108.png',
      name: 'Eugen Turban',
      job: 'Programmer Analyst I',
    },
  },
  {
    id: 109,
    title: 'Job',
    price: 633.61,
    description:
      'Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.',
    image: '/products/product-109.png',
    rating: { rate: 2.1, count: 125917 },
    user: {
      avatar: '/authors/109.png',
      name: 'Noni Lillie',
      job: 'Payment Adjustment Coordinator',
    },
  },
  {
    id: 110,
    title: 'Solarbreeze',
    price: 116.06,
    description:
      'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.\n\nDuis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.',
    image: '/products/product-110.png',
    rating: { rate: 4.8, count: 34502 },
    user: {
      avatar: '/authors/110.png',
      name: 'Lorin Pogue',
      job: 'Recruiting Manager',
    },
  },
  {
    id: 111,
    title: 'Tres-Zap',
    price: 459.21,
    description:
      'In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.\n\nNulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.',
    image: '/products/product-111.png',
    rating: { rate: 1.7, count: 498719 },
    user: {
      avatar: '/authors/111.png',
      name: 'Jacqueline Demonge',
      job: 'Account Representative III',
    },
  },
  {
    id: 112,
    title: 'Job',
    price: 230.78,
    description:
      'Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.\n\nIn quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.',
    image: '/products/product-112.png',
    rating: { rate: 0.8, count: 38986 },
    user: {
      avatar: '/authors/112.png',
      name: 'Regine Pellitt',
      job: 'Marketing Manager',
    },
  },
  {
    id: 113,
    title: 'Konklux',
    price: 906.73,
    description:
      'Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.\n\nProin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.\n\nAenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.',
    image: '/products/product-113.png',
    rating: { rate: 2.4, count: 780598 },
    user: {
      avatar: '/authors/113.png',
      name: 'Dion Cannam',
      job: 'Administrative Officer',
    },
  },
  {
    id: 114,
    title: 'Flowdesk',
    price: 386.09,
    description:
      'Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.',
    image: '/products/product-114.png',
    rating: { rate: 3.6, count: 636499 },
    user: {
      avatar: '/authors/114.png',
      name: 'Robbert Hugh',
      job: 'Graphic Designer',
    },
  },
  {
    id: 115,
    title: 'Viva',
    price: 267.03,
    description:
      'In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.\n\nNulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.\n\nCras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.',
    image: '/products/product-115.png',
    rating: { rate: 3.9, count: 458431 },
    user: {
      avatar: '/authors/115.png',
      name: 'Velvet Meckiff',
      job: 'Senior Developer',
    },
  },
  {
    id: 116,
    title: 'Rank',
    price: 453.71,
    description:
      'Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.\n\nMorbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.',
    image: '/products/product-116.png',
    rating: { rate: 2.8, count: 632815 },
    user: {
      avatar: '/authors/116.png',
      name: 'Vincenz Buggy',
      job: 'Help Desk Operator',
    },
  },
  {
    id: 117,
    title: 'Span',
    price: 1420.13,
    description:
      'Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.\n\nSed ante. Vivamus tortor. Duis mattis egestas metus.\n\nAenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.',
    image: '/products/product-117.png',
    rating: { rate: 0.0, count: 409483 },
    user: {
      avatar: '/authors/117.png',
      name: 'Klaus McFee',
      job: 'Accountant I',
    },
  },
  {
    id: 118,
    title: 'Fintone',
    price: 496.18,
    description:
      'Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.',
    image: '/products/product-118.png',
    rating: { rate: 2.2, count: 13327 },
    user: {
      avatar: '/authors/118.png',
      name: 'Victor Goding',
      job: 'Senior Developer',
    },
  },
  {
    id: 119,
    title: 'Kanlam',
    price: 1240.51,
    description:
      'In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.',
    image: '/products/product-119.png',
    rating: { rate: 4.3, count: 74141 },
    user: {
      avatar: '/authors/119.png',
      name: 'Gibb Wrate',
      job: 'Chemical Engineer',
    },
  },
  {
    id: 120,
    title: 'Matsoft',
    price: 890.9,
    description:
      'Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.',
    image: '/products/product-120.png',
    rating: { rate: 4.3, count: 553637 },
    user: { avatar: '/authors/120.png', name: 'Karoly Done', job: 'Editor' },
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
