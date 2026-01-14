import Link from 'next/link';
import { Leaf, ArrowRight } from 'lucide-react';

export default function MostadamSection() {
    return (
        <section className="py-24 bg-white overflow-hidden relative">
            <div className="container mx-auto px-4 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-16">

                    {/* Left Content */}
                    <div className="lg:w-1/2">
                        <span className="inline-block px-3 py-1 mb-4 text-xs font-bold tracking-widest text-ksa-gold-600 uppercase bg-ksa-gold-500/10 rounded-full">
                            Vision 2030 Aligned
                        </span>
                        <h2 className="text-4xl md:text-5xl font-black text-ksa-green-900 mb-6 leading-tight">
                            The Benefits Of <span className="text-ksa-nature-600">Mostadam</span>
                        </h2>
                        <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                            <strong className="text-ksa-green-900">Mostadam</strong> specifically works to promote energy and water conservation, improve waste management, and reduce the environmental impact of construction practices.
                        </p>

                        <p className="text-gray-700 mb-6 font-medium">
                            Vision 2030 prioritizes three areas – <span className="text-ksa-gold-600">Ambitious Nation</span>, <span className="text-ksa-gold-600">Vibrant Society</span>, and <span className="text-ksa-gold-600">Thriving Economy</span>. These priority areas focus on several benefits:
                        </p>

                        <div className="ml-4 border-l-2 border-ksa-nature-200 pl-6 space-y-3 mb-10">
                            {[
                                'Protecting vital resources.',
                                'Using resources with consideration for future generations.',
                                'Healthy living.',
                                'An empowering society.',
                                'Achieving environmental sustainability.',
                                'Developing cities.',
                                'Increasing the energy sector’s competitiveness.',
                                'Improving the renewable energy market.'
                            ].map((item, i) => (
                                <div key={i} className="flex items-start text-gray-600">
                                    <div className="w-1.5 h-1.5 mt-2.5 mr-3 rounded-full bg-ksa-nature-500 flex-shrink-0"></div>
                                    {item}
                                </div>
                            ))}
                        </div>

                        <p className="text-sm text-gray-500 italic border-l-4 border-ksa-gold-400 pl-4 py-2 bg-ksa-gold-50/50">
                            As a national rating system, it also helps create jobs and contributes to the GDP.
                        </p>
                    </div>

                    {/* Right Image - Infographic Style */}
                    <div className="lg:w-1/2 relative">
                        <div className="absolute -inset-4 bg-ksa-nature-50 rounded-full blur-3xl opacity-50 z-0"></div>
                        <div className="relative z-10 p-2 border-2 border-dashed border-ksa-gold-400/30 rounded-2xl bg-white/50 backdrop-blur-sm group cursor-pointer hover:shadow-2xl transition-shadow duration-300">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                                src="/images/mostadam_benefits.png"
                                alt="Benefits of Mostadam Infographic"
                                className="w-full h-auto rounded-xl shadow-lg"
                            />

                            {/* Enlarge Prompt Overlay */}
                            <div className="absolute inset-0 flex items-center justify-center bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-xl">
                                <span className="bg-white/90 text-ksa-green-950 px-4 py-2 rounded-full text-sm font-bold shadow-lg">Click to enlarge</span>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
