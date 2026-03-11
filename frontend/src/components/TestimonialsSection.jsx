import React from 'react';
import { testimonials } from '../mockData';
import { Card, CardContent } from './ui/card';
import { Quote } from 'lucide-react';

const TestimonialsSection = () => {
    return (
        <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
            <div className="max-w-7xl mx-auto px-6">
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                        What Our Clients Say
                    </h2>
                    <p className="text-xl text-gray-600">
                        Trusted by businesses across industries
                    </p>
                </div>

                {/* Testimonials Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial) => (
                        <Card
                            key={testimonial.id}
                            className="border-none shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-white"
                        >
                            <CardContent className="pt-6">
                                <div className="mb-6">
                                    <Quote className="w-10 h-10 text-yellow-500 mb-4" />
                                    <p className="text-gray-700 leading-relaxed italic">
                                        "{testimonial.quote}"
                                    </p>
                                </div>
                                <div className="flex items-center space-x-4 pt-4 border-t border-gray-200">
                                    <div className="w-14 h-14 rounded-full bg-yellow-100 text-yellow-700 font-bold text-xl flex items-center justify-center">
                                        {testimonial.name
                                            .split(' ')
                                            .map((n) => n[0])
                                            .join('')
                                            .substring(0, 2)
                                            .toUpperCase()}
                                    </div>
                                    <div>
                                        <p className="font-bold text-gray-900">{testimonial.name}</p>
                                        <p className="text-sm text-gray-600">{testimonial.title}</p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TestimonialsSection;