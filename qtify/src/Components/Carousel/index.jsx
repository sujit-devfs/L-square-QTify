import { Virtual, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import "./carousel.css";
import Card from "../Card";

function Carousel({ navId, data }) {

  // console.log(data,"carousel");
  // console.log(typeof data.songs,"carousel");

  return (
    <div className='carousel-container'>
    <Swiper
        modules={[Virtual, Navigation, Pagination]}
        // onSwiper={setSwiperRef}
        slidesPerView={8}
        // centeredSlides={true}
        spaceBetween={30}
        // pagination={{
        //   type: 'fraction',
        // }}
        // navigation={true}
        navigation={{nextEl: `.arrow-left-${navId}`, prevEl: `.arrow-right-${navId}`}}
        virtual
      >
        
        
        {data.map(cardData => <SwiperSlide key={cardData.id}><Card
                    imgSrc={cardData.image}
                    label={cardData.title}
                    followersCount={cardData.follows}
                    songCount={cardData.length}
                /></SwiperSlide>
                )}  
        
      </Swiper>

      <div className={`arrow-left-${navId} arrow-left arrow`}><img src="left-icon.png" /></div>
      <div className={`arrow-right-${navId} arrow-right arrow`}><img src="right-icon.png" /></div>
      </div>

  )
}

export default Carousel;