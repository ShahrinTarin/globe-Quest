import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import { EffectCoverflow, Autoplay} from 'swiper/modules';
import './Banner.css';

const Banner = () => {
    const [bannerData, setBannerData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    
    useEffect(() => {
        setLoading(true);
        fetch('/BannerData.json')
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Failed to fetch banner data');
                }
                return response.json();
            })
            .then((data) => {
                setBannerData(data);
            })
            .catch((err) => {
                setError(err.message);
            })
            .finally(() => {
                setLoading(false);
            });
    }, []);

    if (loading) return <span className="loading loading-dots loading-xl m-40 md:m-50 lg:m-70 "></span>;
    if (error) return <p>Error: {error}</p>;

    return (
        <div className="drop-shadow-lg backdrop-blur-2xl banner rounded-xl mb-12">
            <Swiper
                modules={[EffectCoverflow, Autoplay]}
                slidesPerView={2}
                spaceBetween={10}
                centeredSlides={true}
                loop={true}
                effect="coverflow"
                coverflowEffect={{
                    rotate: 10,
                    stretch: 0,
                    depth: 50,
                    modifier: 2,
                    slideShadows: false,
                }}


                grabCursor={true}
                autoplay={{ delay: 2000, disableOnInteraction: false }}
                breakpoints={{
                    0: { 
                        slidesPerView: 1,
                        spaceBetween: 5,
                    },
                    361: {
                        slidesPerView: 2,
                        spaceBetween: 10,
                    },
                    641: { 
                        slidesPerView: 2,
                        spaceBetween: 15,
                    },
                    1025: { 
                        slidesPerView: 3,
                        spaceBetween: 10,
                    },
                    1281: {
                        slidesPerView: 3,
                        spaceBetween: 10,
                    },
                }}
            >
                {bannerData.map((item) => (
                    <SwiperSlide key={item.id}>
                        <img className='shadow-2xl'
                            src={item.img}
                            alt={item.title}
                            style={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover',
                                borderRadius: '10px',
                            }}
                        />
                        <div className="banner-content">
                            <h3>{item.title}</h3>
                            <p>{item.description}</p>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default Banner;