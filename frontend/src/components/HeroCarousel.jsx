import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { heroSlides } from '../mockData';
import { Button } from './ui/button';

const HeroCarousel = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
    };

    return (
        <div className="relative h-screen w-full overflow-hidden">
            {heroSlides.map((slide, index) => (
                <div
                    key={slide.id}
                    className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100' : 'opacity-0'
                        }`}
                >
                    {/* Background Image with Overlay */}
                    <div
                        className="absolute inset-0 bg-cover bg-center"
                        style={{ backgroundImage: `url(${slide.image})` }}
                    >
                        <div className="absolute inset-0 bg-black/40"></div>
                    </div>

                    {/* Content */}
                    <div className="relative h-full flex items-center">
                        <div className="max-w-7xl mx-auto px-6 w-full">
                            <div className="max-w-2xl">
                                <p className="text-yellow-500 font-bold text-sm tracking-wider mb-4">
                                    {slide.tag}
                                </p>
                                <h1 className="text-white text-5xl md:text-6xl font-bold mb-6 leading-tight">
                                    {slide.title}
                                </h1>
                                <p className="text-white/90 text-xl mb-8">{slide.subtitle}</p>
                                <div className="flex space-x-4">
                                    <Button className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-semibold px-8 py-3 rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105">
                                        Learn More
                                    </Button>
                                    <Button
                                        variant="outline"
                                        className="border-2 border-white text-white hover:bg-white hover:text-gray-900 font-semibold px-8 py-3 rounded-lg transition-all duration-300"
                                    >
                                        Contact Us
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}

            {/* Navigation Arrows */}
            <button
                onClick={prevSlide}
                className="absolute left-6 top-1/2 -translate-y-1/2 text-white hover:text-yellow-500 transition-colors z-10 outline-none focus:outline-none"
                aria-label="Previous slide"
            >
                <ChevronLeft className="w-12 h-12" />
            </button>
            <button
                onClick={nextSlide}
                className="absolute right-6 top-1/2 -translate-y-1/2 text-white hover:text-yellow-500 transition-colors z-10 outline-none focus:outline-none"
                aria-label="Next slide"
            >
                <ChevronRight className="w-12 h-12" />
            </button>

            {/* Slide Indicators */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-2 z-10">
                {heroSlides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${index === currentSlide ? 'bg-yellow-500 w-8' : 'bg-white/50'
                            }`}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    );
};

export default HeroCarousel;