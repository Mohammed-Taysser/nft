'use client';

import { Button, Input, Text } from '@chakra-ui/react';
import { ChangeEvent, FormEvent, useState } from 'react';

function ForgetPasswordForm() {
  const [formInfo, setFormInfo] = useState({
    email: '',
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

      <Button mt={10} type='submit' className='w-full'>
        Submit
      </Button>
    </form>
  );
}

export default ForgetPasswordForm;
