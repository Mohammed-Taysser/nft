import ItemDetailsContent from '@/content/ItemDetails';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Item Details',
};

async function ItemDetails(props: Readonly<{ params: { id: string } }>) {
  const { params } = props;

  return <ItemDetailsContent id={params.id} />;
}

export default ItemDetails;
