import { Container, Input, SimpleGrid } from '@chakra-ui/react';
import Image from 'next/image';
import Link from 'next/link';
import { FormEvent, useState } from 'react';
import { BiLogoFacebook } from 'react-icons/bi';
import { BsInstagram, BsSend, BsTwitter } from 'react-icons/bs';
import { FaLinkedinIn } from 'react-icons/fa6';
import favicon from '../../public/images/icons/logo.svg';

function Footer() {
  const [email, setEmail] = useState('');

  const onFormSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    console.log(email);
  };

  return (
    <footer className='footer'>
      <Container>
        <SimpleGrid
          columns={{ sm: 2, md: 4 }}
          spacing={10}
          justifyContent='center'
        >
          <div className='about col'>
            <Link href='/' className='favicon'>
              <Image src={favicon} alt='favicon' width={100} height={35} />
            </Link>

            <div className='info'>
              Lorem ipsum dolor amet consectetur adipiscing elit do eiusmod
              tempor incididunt ut labore et dolore.
            </div>

            <ul className='social-media'>
              <li>
                <a href='#' title='facebook'>
                  <BiLogoFacebook />
                </a>
              </li>
              <li>
                <a href='#' title='twitter'>
                  <BsTwitter />
                </a>
              </li>
              <li>
                <a href='#' title='instagram'>
                  <BsInstagram />
                </a>
              </li>
              <li>
                <a href='#' title='LinkedinIn'>
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </div>
          <div className='col'>
            <div className='col-title'>Company</div>
            <ul className='sitemap'>
              <li>
                <a href='#'> About company </a>
              </li>
              <li>
                <a href='#'> Company services </a>
              </li>
              <li>
                <a href='#'> Job opportunities </a>
              </li>
              <li>
                <a href='#'> Contact us </a>
              </li>
            </ul>
          </div>

          <div className='col'>
            <div className='col-title'>Customer</div>
            <ul className='sitemap'>
              <li>
                <a href='#'> Client support </a>
              </li>
              <li>
                <a href='#'> Latest news </a>
              </li>
              <li>
                <a href='#'> Company Details </a>
              </li>
              <li>
                <a href='#'>Who we are </a>
              </li>
            </ul>
          </div>
          <div className='col subscribe'>
            <div className='col-title'> Subscribe Now </div>
            <div className='info'>
              Enter your email address for receiving valuable newsletters.
            </div>

            <form onSubmit={onFormSubmit}>
              <Input
                variant='unstyled'
                type='email'
                value={email}
                onChange={(evt) => setEmail(evt.target.value)}
                placeholder='Enter your email address'
              />
              <button type='submit' title='send'>
                <BsSend />
              </button>
            </form>
          </div>
        </SimpleGrid>
      </Container>
    </footer>
  );
}

export default Footer;
