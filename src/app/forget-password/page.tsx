import ForgetPasswordForm from '@/components/auth/ForgetPasswordForm';
import { Box, Container, Divider, Flex, Heading, Text } from '@chakra-ui/react';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Forget Password',
};

function ForgetPassword() {
  return (
    <Container my={100}>
      <Flex justifyContent='center'>
        <Box className='lg:w-[50%] bg-[#2c2c39] border border-solid border-[#4d4c5a]  rounded-lg px-5 lg:px-20 py-20'>
          <div className='text-center'>
            <Heading as='h3' size='lg'>
              Forget Password
            </Heading>

            <Text mt={3} color='gray'>
              Enter your email address to reset your password
            </Text>
          </div>

          <ForgetPasswordForm />

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

export default ForgetPassword;
