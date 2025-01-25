import {
  Button,
  Container,
  Flex,
  IconButton,
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
import { HiOutlineMenu } from 'react-icons/hi';
import { useEffect, useState } from 'react';

function Navbar() {
  const pathname = usePathname();

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    });
  }, []);

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <Container>
        <Flex minWidth='max-content' alignItems='center' gap='2'>
          <Link href='/' className='favicon'>
            <Image src={favicon} alt='favicon' width={100} height={35} />
          </Link>

          <Spacer />

          <div className='sitemap hidden md:block'>
            <ul>
              <li>
                <Link className={pathname === '/' ? 'active' : ''} href='/'>
                  Homepage
                </Link>
              </li>

              <li>
                <Link
                  className={pathname === '/explore' ? 'active' : ''}
                  href='/explore'
                >
                  Explore
                </Link>
              </li>

              <li>
                <Link
                  className={pathname === '/support' ? 'active' : ''}
                  href='/support'
                >
                  Support
                </Link>
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
                    <MenuItem as={Link} href='/login'>
                      Login
                    </MenuItem>
                    <MenuItem as={Link} href='/register'>
                      Register
                    </MenuItem>
                    <MenuItem as={Link} href='/forget-password'>
                      Forget Password
                    </MenuItem>
                    <MenuItem as={Link} href='/explore'>
                      Explore
                    </MenuItem>
                    <MenuItem as={Link} href='/explore/1'>
                      Explore Item
                    </MenuItem>
                  </MenuList>
                </Menu>
              </li>
            </ul>
          </div>

          <Spacer />

          <Link href='/connect-wallet'>
            <Button leftIcon={<IoWalletOutline />}>Wallet Connect</Button>
          </Link>

          <Menu>
            <MenuButton
              as={IconButton}
              icon={<HiOutlineMenu size={20} />}
              variant='ghost'
              className='md:!hidden'
            >
              Actions
            </MenuButton>
            <MenuList className='dropdown'>
              <MenuItem as={Link} href='/'>
                Homepage
              </MenuItem>
              <MenuItem as={Link} href='/support'>
                Support
              </MenuItem>
              <MenuItem as={Link} href='/login'>
                Login
              </MenuItem>
              <MenuItem as={Link} href='/register'>
                Register
              </MenuItem>
              <MenuItem as={Link} href='/forget-password'>
                Forget Password
              </MenuItem>
              <MenuItem as={Link} href='/explore'>
                Explore
              </MenuItem>
              <MenuItem as={Link} href='/explore/1'>
                Explore Item
              </MenuItem>
            </MenuList>
          </Menu>
        </Flex>
      </Container>
    </nav>
  );
}

export default Navbar;
