'use client';

import { Button, Input, SimpleGrid, Text, Textarea } from '@chakra-ui/react';
import { ChangeEvent, FormEvent, useState } from 'react';

function ContactForm() {
  const [formInfo, setFormInfo] = useState({
    name: '',
    email: '',
    message: '',
  });

  const onInputChange = (
    evt: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const name = evt.target.name as keyof typeof formInfo;

    setFormInfo((prev) => ({ ...prev, [name]: evt.target.value }));
  };

  const onFormSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    console.log(formInfo);
  };

  return (
    <form onSubmit={onFormSubmit} className='my-12'>
      <SimpleGrid columns={{ sm: 1, md: 2 }} gap={5} mb={5}>
        <div>
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
        </div>

        <div>
          <Text mb='8px'>Name</Text>

          <Input
            type='name'
            name='name'
            required
            value={formInfo.name}
            variant='filled'
            onChange={onInputChange}
            placeholder='Enter your name'
          />
        </div>
      </SimpleGrid>

      <div>
        <Text mb='8px'>Message</Text>

        <Textarea
          placeholder='Please enter your message'
          variant='filled'
          required
          name='message'
          value={formInfo.message}
          onChange={onInputChange}
        />
      </div>

      <Button mt={10} type='submit'>
        Send Message
      </Button>
    </form>
  );
}

export default ContactForm;
