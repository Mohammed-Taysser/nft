import { Avatar } from '@chakra-ui/react';

function SingleFeature(props: { feature: Feature }) {
  return (
    <div className='single-feature'>
      <Avatar
        size='lg'
        icon={<props.feature.icon />}
        bg={`${props.feature.color}.50`}
        color={props.feature.color}
        className='avatar'
      />
      <div className='title'>{props.feature.title}</div>
      <div className='info'>{props.feature.info}</div>
    </div>
  );
}

export default SingleFeature;
