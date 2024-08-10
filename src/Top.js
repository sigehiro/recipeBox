import React, { useEffect, useState } from 'react'
import './Top.css'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, EffectFade } from 'swiper/modules'
import 'swiper/swiper-bundle.css'
import Header from './Header'

const Top = () => {
    useEffect(() => {
        const swiperInstance = document.querySelector('.mySwiper')?.swiper

        if (swiperInstance) {
            swiperInstance.on('slideChange', function (sld) {
                document.body.setAttribute('data-sld', sld.realIndex)
            })
        }
    }, [])

    //slider data
    const slides = [
        {
            title: 'Energy Boost',
            subtitle: '590Kcal',
            content: 'Feel your best this summer with our energy - boosting dishes.',
            subcontent:
                'Revitalize your body with meals designed to keep you cool and full of energy, perfect for overcoming summer fatigue.',
            imgBg: 'https://images.unsplash.com/photo-1505118380757-91f5f5632de0?q=80&w=2902&auto=format&fit=crop&ixlib=rb-4',
            //TODO 元画像なので、一時保管→最終的には削除する
            // img: 'https://www.designforfinland.com/product-images/Closca_Bottle_Wave_Antarctica_450ml_Close.png/2083089000004207012/1100x1100',
            img: process.env.PUBLIC_URL + '/summer-energy-boost.jpg',
        },
        {
            title: 'Detox',
            subtitle: '1190Kcal',
            content: 'Feel your best this summer with our energy - boosting dishes.',
            subcontent:
                'Coral reefs are essential to humans, as they protect the shorelines and are a source of nutrients and habitat for thousands of marine species.',
            imgBg: 'https://images.unsplash.com/photo-1613109526778-27605f1f27d2?ixlib=rb-1&auto=format&fit=crop&w=2340&q=80',
            img: process.env.PUBLIC_URL + '/detox.jpg',
        },
        {
            title: 'Vegan',
            subtitle: '720Kcal',
            content: 'Feel your best this summer with our energy - boosting dishes.',
            subcontent:
                'The effects of melting ice glaciers are biodiversity loss, the rising of the sea level and the deficiency of freshwater, among others.',
            imgBg: 'https://www.discover-the-world.com/app/uploads/2018/05/chile-patagonia-calving-glacier-is-1150x863-c-default.jpg',
            img: process.env.PUBLIC_URL + '/vegan.jpg',
        },
        {
            title: 'High Protein',
            subtitle: '270Kcal',
            content: 'Feel your best this summer with our energy - boosting dishes.',
            subcontent:
                'Coral reefs are essential to humans, as they protect the shorelines and are a source of nutrients and habitat for thousands of marine species.',
            imgBg: 'https://images.unsplash.com/photo-1546500840-ae38253aba9b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=3260&q=80',
            img: process.env.PUBLIC_URL + '/protein.jpg',
        },
        {
            title: 'Gluten Free',
            subtitle: '1190Kcal',
            content: 'Feel your best this summer with our energy - boosting dishes.',
            subcontent:
                'Coral reefs are essential to humans, as they protect the shorelines and are a source of nutrients and habitat for thousands of marine species.',
            imgBg: 'https://images.unsplash.com/photo-1613109526778-27605f1f27d2?ixlib=rb-1&auto=format&fit=crop&w=2340&q=80',
            img: process.env.PUBLIC_URL + '/glten-free.jpg',
        },
        {
            title: 'Quick Easy',
            subtitle: '720Kcal',
            content: 'Feel your best this summer with our energy - boosting dishes.',
            subcontent:
                'The effects of melting ice glaciers are biodiversity loss, the rising of the sea level and the deficiency of freshwater, among others.',
            imgBg: 'https://www.discover-the-world.com/app/uploads/2018/05/chile-patagonia-calving-glacier-is-1150x863-c-default.jpg',
            img: process.env.PUBLIC_URL + '/quick-food.jpg',
        },
    ]

    return (
        <div className="container">
            {/* call Header.js */}
            {/* <Header isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} /> */}

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
                                        <h3 className="main-header">Trend menu</h3>
                                        <h1 className="main-title">{slide.title}</h1>
                                        <h2 className="main-subtitle">{slide.subtitle}</h2>
                                    </div>
                                    <div className="main-content">
                                        <div className="main-content__title">{slide.content}</div>
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
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    )
}

export default Top