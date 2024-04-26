import { Button } from '@chakra-ui/react';
import Link from 'next/link';
import { Children } from 'react';

function SectionTitle(props: SectionTitleProps) {
  const { title, url } = props;

  return (
    <div className='section-title'>
      <div className='wrapper'>
        <div className='title'>{title}</div>

        <div className=''>
          {Children.count(props.children) > 0
            ? props.children
            : url && (
                <Button as={Link} href={url}>
                  View All
                </Button>
              )}
        </div>
      </div>
    </div>
  );
}

export default SectionTitle;
