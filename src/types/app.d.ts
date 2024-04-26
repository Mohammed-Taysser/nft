interface Product {
  id: string;
  title: string;
  price: number;
  description: string;
  image: StaticImageData;
  rating: { rate: number; count: number };
  user: {
    name: string;
    job: string;
    avatar: StaticImageData;
  };
}

interface Auction {
  id: string;
  title: string;
  price: number;
  description: string;
  image: StaticImageData;
  rating: { rate: number; count: number };
  timeout: Date;
  user: {
    name: string;
    job: string;
    avatar: StaticImageData;
  };
}

interface Artist {
  id: string;
  name: string;
  avatar: StaticImageData;
  earn: number;
}

interface SectionTitleProps {
  url?: string;
  title: string;
  children?: ReactNode;
}

interface AddTimeToDateParams {
  months?: number;
  days?: number;
  hours?: number;
  minutes?: number;
  seconds?: number;
  milliseconds?: number;
}

interface Feature {
  id: string;
  title: string;
  info: string;
  icon: IconType;
  color: string;
}

interface BannerItem {
  label: string;
  url: string;
}

interface GradientTitleProps {
  title: string
  subtitle: string
}
