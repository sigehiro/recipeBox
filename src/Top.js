import React, { useEffect } from 'react'
import './Top.css'
// import 'bootstrap/dist/css/bootstrap.min.css'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, EffectFade } from 'swiper/modules'
import 'swiper/swiper-bundle.css'

const Top = () => {
    useEffect(() => {
        const swiperInstance = document.querySelector('.mySwiper')?.swiper

        if (swiperInstance) {
            swiperInstance.on('slideChange', function (sld) {
                document.body.setAttribute('data-sld', sld.realIndex)
            })
        }
    }, [])

    const slides = [
        {
            title: 'Beach',
            subtitle: '€39,90',
            content: 'In 20 years, there could be more plastic in our oceans than fish.',
            subcontent:
                'Plastic pollution injures more than 100.000 marine animals every year. It takes around 450 years for one plastic bottle to decompose.',
            imgBg: 'https://images.unsplash.com/photo-1505118380757-91f5f5632de0?q=80&w=2902&auto=format&fit=crop&ixlib=rb-4',
            img: 'https://www.designforfinland.com/product-images/Closca_Bottle_Wave_Antarctica_450ml_Close.png/2083089000004207012/1100x1100',
        },
        {
            title: 'Savanna',
            subtitle: '€19,90',
            content: 'The Earth’s area affected by desertification is approx 11 times India’s size.',
            subcontent:
                'Coral reefs are essential to humans, as they protect the shorelines and are a source of nutrients and habitat for thousands of marine species.',
            imgBg: 'https://images.unsplash.com/photo-1613109526778-27605f1f27d2?ixlib=rb-1&auto=format&fit=crop&w=2340&q=80',
            img: 'https://fnac.sa/cdn/shop/files/Closca_Bottle_Wave_Sahara_600ml_Close.png?v=1703675684',
        },
        {
            title: 'Glacier',
            subtitle: '€49,90',
            content: 'Glaciers contain 75% of the World’s freshwater.',
            subcontent:
                'The effects of melting ice glaciers are biodiversity loss, the rising of the sea level and the deficiency of freshwater, among others.',
            imgBg: 'https://www.discover-the-world.com/app/uploads/2018/05/chile-patagonia-calving-glacier-is-1150x863-c-default.jpg',
            img: 'https://gomagcdn.ro/domains/alty.ro/files/product/original/sticla-reutilizabila-apa-closca-glacier-copie-848-7049.png',
        },
        {
            title: 'Coral',
            subtitle: '€80,90',
            content: 'We will have lost 60% of our coral reefs by 2030.',
            subcontent:
                'Coral reefs are essential to humans, as they protect the shorelines and are a source of nutrients and habitat for thousands of marine species.',
            imgBg: 'https://images.unsplash.com/photo-1546500840-ae38253aba9b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=3260&q=80',
            img: 'https://fnac.sa/cdn/shop/files/Closca_Bottle_Wave_Arizona_600ml_Close.png?v=1703675684&width=1946',
        },
    ]

    return (
        <div className="container">
            <div className="header">
                <img className="logo" src={`${process.env.PUBLIC_URL}/logo.png`} alt="Logo" />
                <div className="header-menu">
                    <a href="#">Mask</a>
                    <a href="#">Helmet</a>
                    <a href="#">Bottle</a>
                    <a href="#">Accessories</a>
                </div>
                <div className="header-icons">
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                        />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                        <path d="M437.02 330.98c-27.883-27.882-61.071-48.523-97.281-61.018C378.521 243.251 404 198.548 404 148 404 66.393 337.607 0 256 0S108 66.393 108 148c0 50.548 25.479 95.251 64.262 121.962-36.21 12.495-69.398 33.136-97.281 61.018C26.629 379.333 0 443.62 0 512h40c0-119.103 96.897-216 216-216s216 96.897 216 216h40c0-68.38-26.629-132.667-74.98-181.02zM256 256c-59.551 0-108-48.448-108-108S196.449 40 256 40s108 48.448 108 108-48.449 108-108 108z" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 208.955 208.955">
                        <path d="M190.85 200.227L178.135 58.626a7.5 7.5 0 00-7.47-6.829h-26.221V39.971c0-22.04-17.93-39.971-39.969-39.971-22.038 0-39.966 17.931-39.966 39.971v11.826H38.27a7.5 7.5 0 00-7.47 6.829L18.035 200.784a7.5 7.5 0 007.47 8.17h157.946a7.5 7.5 0 007.399-8.727zM79.509 39.971c0-13.769 11.2-24.971 24.967-24.971 13.768 0 24.969 11.202 24.969 24.971v11.826H79.509V39.971zm-45.8 153.984L45.127 66.797h19.382v13.412a7.5 7.5 0 007.5 7.5 7.5 7.5 0 007.5-7.5V66.797h49.936v13.412a7.5 7.5 0 007.5 7.5 7.5 7.5 0 007.5-7.5V66.797h19.364l11.418 127.158H33.709z" />
                    </svg>
                </div>
            </div>
            <div>
                <Swiper
                    className="mySwiper"
                    spaceBetween={50}
                    slidesPerView={1}
                    navigation={{
                        nextEl: '.swiper-next-button',
                        prevEl: '.swiper-prev-button',
                    }}
                    effect="fade"
                    loop={true}
                    pagination={{ el: '.swiper-pagination', type: 'fraction' }}
                    modules={[Navigation, Pagination, EffectFade]}
                >
                    {slides.map((slide, index) => (
                        <SwiperSlide key={index}>
                            <div className="main">
                                <div className="left-side">
                                    <div className="main-wrapper">
                                        <h3 className="main-header">Closca Bottle</h3>
                                        <h1 className="main-title">{slide.title}</h1>
                                        <h2 className="main-subtitle">{slide.subtitle}</h2>
                                    </div>
                                    <div className="main-content">
                                        <div className="main-content__title">{slide.content}</div>
                                        {/* TODO subtitle を取得してくる */}
                                        <div className="main-content__subtitle">{slide.subcontent}</div>
                                        <div className="more-menu">
                                            Shop Now
                                            <svg
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                                xmlns="http:www.w3.org/2000/svg"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="1.2"
                                                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                                                />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                                <div className="center">
                                    <img className="bottle-bg" src={slide.imgBg} alt="" />
                                    <img className="bottle-img" src={slide.img} alt="" />
                                </div>
                                {/* <div className="button-wrapper">
                                    <div className="swiper-button swiper-prev-button">
                                        <svg
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                            xmlns="http:www.w3.org/2000/svg"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="1.2"
                                                d="M17 8l4 4m0 0l-4 4m4-4H3"
                                            />
                                        </svg>
                                    </div>
                                    <div className="swiper-button swiper-next-button">
                                        <svg
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                            xmlns="http:www.w3.org/2000/svg"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="1.2"
                                                d="M17 8l4 4m0 0l-4 4m4-4H3"
                                            />
                                        </svg>
                                    </div>
                                </div> */}
                                <div className="right-side">
                                    <div className="button-wrapper">
                                        <div className="swiper-button swiper-prev-button">
                                            <svg
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                                xmlns="http:www.w3.org/2000/svg"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="1.2"
                                                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                                                />
                                            </svg>
                                        </div>
                                        <div className="swiper-button swiper-next-button">
                                            <svg
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                                xmlns="http:www.w3.org/2000/svg"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="1.2"
                                                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                                                />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* //ここに入れてみる */}
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    )
}

export default Top
