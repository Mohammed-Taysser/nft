'use client';

import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import SingleArtist from './SingleArtist';

import 'swiper/css';
import 'swiper/css/navigation';

function Artists(props: { artists: Artist[] }) {
  return (
    <div className='artists'>
      <Swiper
        spaceBetween={10}
        slidesPerView={4}
        breakpoints={{
          320: {
            slidesPerView: 1,
          },
          480: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 4,
          },
        }}
        loop={true}
        autoplay={{ delay: 3000 }}
        modules={[Navigation]}
        navigation={{
          prevEl: '.artist-prev-btn',
          nextEl: '.artist-next-btn',
        }}
      >
        {props.artists.map((artist) => (
          <SwiperSlide key={artist.id}>
            <SingleArtist artist={artist} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Artists;
