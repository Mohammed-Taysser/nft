'use client';

import { Button, Checkbox, Flex, Input, Text } from '@chakra-ui/react';
import Link from 'next/link';
import { ChangeEvent, FormEvent, useState } from 'react';

function LoginForm() {
  const [formInfo, setFormInfo] = useState({
    email: '',
    password: '',
    keepMeSignIn: false,
  });

  const onInputChange = (evt: ChangeEvent<HTMLInputElement>) => {
    const name = evt.target.name as keyof typeof formInfo;

    setFormInfo((prev) => ({ ...prev, [name]: evt.target.value }));
  };

  const onCheckboxChange = (evt: ChangeEvent<HTMLInputElement>) => {
    const name = evt.target.name as keyof typeof formInfo;

    setFormInfo((prev) => ({ ...prev, [name]: evt.target.checked }));
  };

  const onFormSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    console.log(formInfo);
  };

  return (
    <form onSubmit={onFormSubmit} className='mt-12'>
      <Text mb='8px'>Email address</Text>

      <Input
        type='email'
        name='email'
        required
        value={formInfo.email}
        variant='filled'
        onChange={onInputChange}
        placeholder='Enter your email address'
      />

      <Text mt={8} mb='8px'>
        Password
      </Text>

      <Input
        type='password'
        name='password'
        required
        value={formInfo.password}
        variant='filled'
        onChange={onInputChange}
        placeholder='Enter your password'
      />

      <Flex mt={5} justifyContent='space-between'>
        <Checkbox
          className='text-[gray]'
          name='keepMeSignIn'
          checked={formInfo.keepMeSignIn}
          onChange={onCheckboxChange}
        >
          Keep me signed in
        </Checkbox>

        <Link href='/forget-password' className='text-[gray]'>
          Forgot Password?
        </Link>
      </Flex>

      <Button mt={10} type='submit' className='w-full'>
        Send Message
      </Button>
    </form>
  );
}

export default LoginForm;
