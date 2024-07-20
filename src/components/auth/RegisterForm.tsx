'use client';

import { Button, Input, Text } from '@chakra-ui/react';
import { ChangeEvent, FormEvent, useState } from 'react';

function RegisterForm() {
  const [formInfo, setFormInfo] = useState({
    email: '',
    password: '',
  });

  const onInputChange = (evt: ChangeEvent<HTMLInputElement>) => {
    const name = evt.target.name as keyof typeof formInfo;

    setFormInfo((prev) => ({ ...prev, [name]: evt.target.value }));
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

      <Button mt={10} type='submit' className='w-full'>
        Sign Up
      </Button>
    </form>
  );
}

export default RegisterForm;
