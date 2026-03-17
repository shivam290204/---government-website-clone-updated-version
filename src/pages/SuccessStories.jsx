import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';

import { projects, gallery } from '../data/successStoriesData';

const SuccessStories = () => {
  return (
    <div className="page-wrapper animate-fade-in-up">
      <section className="dashboard-section container py-12">
        <div className="mb-12">
          <h1 className="mb-8 text-center w-full gradient-text" style={{ fontSize: '2.2rem', fontWeight: 800 }}>परियोजना</h1>          
          <div className="main-swiper-wrapper">
            <Swiper
              modules={[Autoplay, Pagination]}
              spaceBetween={20}
              slidesPerView={1}
              breakpoints={{
                640: { slidesPerView: 2 },
                768: { slidesPerView: 3 },
                1024: { slidesPerView: 4 },
              }}
              loop={true}
              pagination={{ clickable: true, dynamicBullets: true }}
              autoplay={{ delay: 3000, disableOnInteraction: false }}
              className="projects-swiper pb-12"
            >
              {projects.map((project, index) => (
                <SwiperSlide key={index}>
                  <div className="project-slide-card">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="project-slide-img"
                    />
                    <div className="project-slide-overlay">
                      <div className="project-slide-content">
                        <span className="project-slide-number">{project.id}</span>
                        <p className="project-slide-title">{project.title}</p>
                        <div className="project-slide-bar"></div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>

        <div className="mb-8 mt-12">
          <h2 className="text-2xl font-bold mb-4 text-center text-primary" style={{ fontSize: '1.75rem' }}>सफलता की कहानियां गैलरी</h2>
          
          <div className="gallery-swiper-wrapper">
            <Swiper
              modules={[Autoplay]}
              spaceBetween={30}
              slidesPerView={2}
              breakpoints={{
                640: { slidesPerView: 3 },
                768: { slidesPerView: 4 },
                1024: { slidesPerView: 5 },
              }}
              loop={true}
              autoplay={{ delay: 3500, disableOnInteraction: false }}
              className="gallery-swiper py-6"
            >
              {gallery.map((img, index) => (
                <SwiperSlide key={index}>
                  <div className="gallery-slide-card hover-lift">
                    <img
                      src={img}
                      alt={`Gallery Item ${index + 1}`}
                      className="gallery-slide-img"
                      onError={(e) => { e.target.src = '/images/300px-Melissa_Askew_2015-08-08_(Unsplash).jpg' }} // Fallback if API image fails
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SuccessStories;
