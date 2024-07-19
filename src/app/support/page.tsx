import Banner from '@/components/Banner';
import ContactForm from '@/components/support/ContactForm';
import { Box, Container, Flex, Text } from '@chakra-ui/react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Support',
};

function Support() {
  const bannerItems: BannerItem[] = [
    {
      label: 'Home',
      url: '/',
    },
    {
      label: 'Support',
      url: '/support',
    },
  ];

  return (
    <>
      <Banner items={bannerItems} />

      <Container>
        <Flex className='!block lg:!flex' color='white'>
          <Box
            flex='1'
            bg='purple'
            className='lg:rounded-l-lg text-right text-white relative'
            p={5}
          >
            <Text fontSize='4xl' className='mt-12'>
              Contact Info
            </Text>

            <Text className='mt-3 mb-40'>
              Lorem ipsum dolor sit amet, consectetur. In non dui aliquet,
              pellentesque
            </Text>

            <Text fontSize='xl'> info@yourmail.com </Text>
            <Text fontSize='xl'> +24 968 0572 </Text>
            <Text fontSize='xl'> Open from Mo. Till Fri. </Text>
            <Text fontSize='xl'> 09.00 - 17.00 </Text>

            <span className='left-[25%] bottom-[50%] absolute'>
              <svg
                width='38'
                height='43'
                viewBox='0 0 38 43'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  opacity='0.2'
                  fill-rule='evenodd'
                  clip-rule='evenodd'
                  d='M0.603113 42.934L0.0175629 0.151691L37.9464 22.0499L0.603113 42.934ZM8.06121 30.0162L7.83208 13.2753L22.6738 21.8442L8.06121 30.0162Z'
                  fill='white'
                ></path>
              </svg>
            </span>

            <span className='right-0 bottom-[50%] absolute'>
              <svg
                width='42'
                height='84'
                viewBox='0 0 42 84'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  opacity='0.2'
                  fill-rule='evenodd'
                  clip-rule='evenodd'
                  d='M41.6701 65.7105C54.9472 65.7105 65.7105 54.9472 65.7105 41.6701C65.7105 28.3929 54.9472 17.6296 41.6701 17.6296C28.3929 17.6296 17.6296 28.3929 17.6296 41.6701C17.6296 54.9472 28.3929 65.7105 41.6701 65.7105ZM41.6701 83.3401C64.6838 83.3401 83.3401 64.6838 83.3401 41.6701C83.3401 18.6563 64.6838 0 41.6701 0C18.6563 0 0 18.6563 0 41.6701C0 64.6838 18.6563 83.3401 41.6701 83.3401Z'
                  fill='white'
                ></path>
              </svg>
            </span>

            <span className='left-[1rem] bottom-[25%] absolute'>
              <svg
                width='45'
                height='25'
                viewBox='0 0 45 25'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  opacity='0.2'
                  fill-rule='evenodd'
                  clip-rule='evenodd'
                  d='M13.8491 0.752473L17.349 11.5414L28.2503 7.5717L32.1815 19.8781L41.4238 16.1193C42.3861 15.7279 43.4836 16.1907 43.8749 17.1531C44.2663 18.1154 43.8035 19.2128 42.8411 19.6042L29.8343 24.8941L25.8581 12.4467L14.9733 16.4104L11.4934 5.68309L2.63079 9.07682C1.6606 9.44833 0.572928 8.96301 0.201416 7.99281C-0.170096 7.02262 0.315231 5.93495 1.28543 5.56344L13.8491 0.752473Z'
                  fill='white'
                ></path>
              </svg>
            </span>

            <span className='left-[1.5rem] bottom-[1.5rem] absolute'>
              <svg
                width='52'
                height='52'
                viewBox='0 0 52 52'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <g opacity='0.2'>
                  <circle
                    cx='49.4072'
                    cy='49.1352'
                    r='2.3604'
                    transform='rotate(180 49.4072 49.1352)'
                    fill='white'
                  ></circle>
                  <circle
                    cx='49.4072'
                    cy='33.5439'
                    r='2.3604'
                    transform='rotate(180 49.4072 33.5439)'
                    fill='white'
                  ></circle>
                  <circle
                    cx='49.4072'
                    cy='17.9521'
                    r='2.3604'
                    transform='rotate(180 49.4072 17.9521)'
                    fill='white'
                  ></circle>
                  <circle
                    cx='49.4072'
                    cy='2.36054'
                    r='2.3604'
                    transform='rotate(180 49.4072 2.36054)'
                    fill='white'
                  ></circle>
                  <circle
                    cx='33.8154'
                    cy='49.1352'
                    r='2.3604'
                    transform='rotate(180 33.8154 49.1352)'
                    fill='white'
                  ></circle>
                  <circle
                    cx='33.8154'
                    cy='33.5439'
                    r='2.3604'
                    transform='rotate(180 33.8154 33.5439)'
                    fill='white'
                  ></circle>
                  <circle
                    cx='33.8154'
                    cy='17.9521'
                    r='2.3604'
                    transform='rotate(180 33.8154 17.9521)'
                    fill='white'
                  ></circle>
                  <circle
                    cx='33.8154'
                    cy='2.36054'
                    r='2.3604'
                    transform='rotate(180 33.8154 2.36054)'
                    fill='white'
                  ></circle>
                  <circle
                    cx='18.2246'
                    cy='49.1352'
                    r='2.3604'
                    transform='rotate(180 18.2246 49.1352)'
                    fill='white'
                  ></circle>
                  <circle
                    cx='18.2246'
                    cy='33.5439'
                    r='2.3604'
                    transform='rotate(180 18.2246 33.5439)'
                    fill='white'
                  ></circle>
                  <circle
                    cx='18.2246'
                    cy='17.9521'
                    r='2.3604'
                    transform='rotate(180 18.2246 17.9521)'
                    fill='white'
                  ></circle>
                  <circle
                    cx='18.2246'
                    cy='2.36054'
                    r='2.3604'
                    transform='rotate(180 18.2246 2.36054)'
                    fill='white'
                  ></circle>
                  <circle
                    cx='2.63178'
                    cy='49.1352'
                    r='2.3604'
                    transform='rotate(180 2.63178 49.1352)'
                    fill='white'
                  ></circle>
                  <circle
                    cx='2.63178'
                    cy='33.5439'
                    r='2.3604'
                    transform='rotate(180 2.63178 33.5439)'
                    fill='white'
                  ></circle>
                  <circle
                    cx='2.63178'
                    cy='17.9521'
                    r='2.3604'
                    transform='rotate(180 2.63178 17.9521)'
                    fill='white'
                  ></circle>
                  <circle
                    cx='2.63178'
                    cy='2.36054'
                    r='2.3604'
                    transform='rotate(180 2.63178 2.36054)'
                    fill='white'
                  ></circle>
                </g>
              </svg>
            </span>
          </Box>

          <Box flex='2' bg='#2c2c39' className='lg:rounded-r-lg' p={5}>
            <div className='my-12'>
              <Text fontSize='4xl'> Get in touch </Text>

              <Text className='lg:max-w-[60%] mt-3 text-[gray]'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In non
                dui aliquet, pellentesque tellus ac, faucibus ex.
              </Text>

              <ContactForm />
            </div>
          </Box>
        </Flex>
      </Container>
    </>
  );
}

export default Support;
