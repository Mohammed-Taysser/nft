import { Avatar } from '@chakra-ui/react';

function SingleWallet(props: { wallet: Wallet }) {
  return (
    <div className='single-wallet'>
      <Avatar size='lg' src={props.wallet.image.src} className='avatar' />
      <div className='title'>{props.wallet.title}</div>
      <div className='info'>{props.wallet.info}</div>
    </div>
  );
}

export default SingleWallet;
