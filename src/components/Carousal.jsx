import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Carousal = ({ slides }) => {
    return (
        <div className="relative sm:max-w-xl sm:max-h-fit mx-auto z-0">
            <Swiper
                navigation={true}
                pagination={{ clickable: true }}
                autoplay={{ delay: 3000 }}
                modules={[Navigation, Pagination, Autoplay]}
                className="bg-white dark:bg-gray-600 dark:text-white border-3 border-blue-100 rounded-lg"
            >
                {slides.map((slide, index) => (
                    <SwiperSlide key={index}>
                        <div className="flex justify-center items-center">
                            <img
                                src={slide.certificate}
                                alt={slide.alt}
                                className={`min-w-20 p-2 ${index===0 || index===1 || index===2 || index===3 || index===4 || index===5 || index===7 ?"h-[350px] sm:w-[600px]":"max-h-[400px]"}`}
                            />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default Carousal;
