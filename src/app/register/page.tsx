import RegisterForm from '@/components/auth/RegisterForm';
import {
  AbsoluteCenter,
  Box,
  Container,
  Divider,
  Flex,
  Heading,
  Text,
} from '@chakra-ui/react';
import { Metadata } from 'next';
import Link from 'next/link';
import { FaFacebookF, FaGoogle, FaTwitter } from 'react-icons/fa';

export const metadata: Metadata = {
  title: 'Register',
};

function Register() {
  return (
    <Container my={100}>
      <Flex justifyContent='center'>
        <Box className='lg:w-[50%] bg-[#2c2c39] border border-solid border-[#4d4c5a]  rounded-lg px-5 lg:px-20 py-20'>
          <div className='text-center'>
            <Heading as='h3' size='lg'>
              Register Now
            </Heading>

            <Text mt={3} color='gray'>
              Create an account for a faster checkout.
            </Text>

            <Flex gap={5} mt={8} mb={5} justify='center'>
              <div className='bg-[#353444] border border-solid border-[#4d4c5a] w-10 h-10 rounded flex items-center justify-center text-xl cursor-pointer hover:bg-white hover:text-black   duration-500'>
                <FaTwitter />
              </div>

              <div className='bg-[#353444] border border-solid border-[#4d4c5a] w-10 h-10 rounded flex items-center justify-center text-xl cursor-pointer hover:bg-white hover:text-black   duration-500'>
                <FaFacebookF />
              </div>

              <div className='bg-[#353444] border border-solid border-[#4d4c5a] w-10 h-10 rounded flex items-center justify-center text-xl cursor-pointer hover:bg-white hover:text-black   duration-500'>
                <FaGoogle />
              </div>
            </Flex>

            <Box position='relative' py='10'>
              <Divider />
              <AbsoluteCenter bg='#2c2c39' px='4'>
                Or, sign up with your email
              </AbsoluteCenter>
            </Box>
          </div>

          <RegisterForm />

          <Divider mt={10} mb={5} />

          <div className='text-center text-[gray]'>
            Already have have an account?{' '}
            <Link href='/register' className='hover:text-white duration-300'>
              Sign In
            </Link>
          </div>
        </Box>
      </Flex>
    </Container>
  );
}

export default Register;
