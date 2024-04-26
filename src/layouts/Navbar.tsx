import {
  Button,
  Container,
  Flex,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Spacer,
} from '@chakra-ui/react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import favicon from '@/assets/images/icons/logo.svg';
import { BsChevronDown } from 'react-icons/bs';
import { IoWalletOutline } from 'react-icons/io5';

function Navbar() {
  const pathname = usePathname();

  return (
    <nav className='navbar'>
      <Container>
        <Flex minWidth='max-content' alignItems='center' gap='2'>
          <Link href='/' className='favicon'>
            <Image src={favicon} alt='favicon' width={100} height={35} />
          </Link>

          <Spacer />
          <div className='sitemap'>
            <ul>
              <li>
                <Link href='/'>Homepage</Link>
              </li>

              <li>
                <Link href='/'>explore</Link>
              </li>

              <li>
                <Link href='/'>Community</Link>
              </li>

              <li>
                <Menu>
                  <MenuButton
                    as={Button}
                    color='white'
                    variant='link'
                    rightIcon={<BsChevronDown />}
                  >
                    Pages
                  </MenuButton>
                  <MenuList className='dropdown'>
                    <MenuItem as={Link} href='/'>
                      Download
                    </MenuItem>
                    <MenuItem as={Link} href='/'>
                      Create a Copy
                    </MenuItem>
                    <MenuItem as={Link} href='/'>
                      Mark as Draft
                    </MenuItem>
                    <MenuItem as={Link} href='/'>
                      Delete
                    </MenuItem>
                    <MenuItem as={Link} href='/'>
                      Attend a Workshop
                    </MenuItem>
                  </MenuList>
                </Menu>
              </li>

              <li>
                <Link href='/'>Support</Link>
              </li>
            </ul>
          </div>

          <Spacer />

          <Button leftIcon={<IoWalletOutline />}>Wallet Connect</Button>
        </Flex>
      </Container>
    </nav>
  );
}

export default Navbar;
