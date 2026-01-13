import Link from 'next/link';
import { getAllPosts } from '@/lib/mdx';
import GuideCard from '@/components/GuideCard';
import { ArrowRight, Building2, Leaf, Globe } from 'lucide-react';

export default function Home() {
  const allPosts = getAllPosts();
  const featuredPosts = allPosts.slice(0, 3); // Vision 2030 usually shows just a few top items

  return (
    <>
      {/* Hero Section - Cinematic Video Sustainability Style */}
      <section className="relative h-[85vh] flex items-center justify-center overflow-hidden text-white">
        {/* YouTube Video Background */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          <iframe
            className="absolute top-1/2 left-1/2 w-[115%] h-[115%] -translate-x-1/2 -translate-y-1/2 aspect-video min-w-full min-h-full object-cover scale-[1.3]"
            src="https://www.youtube.com/embed/OUZXLCBmixg?autoplay=1&mute=1&controls=0&loop=1&playlist=OUZXLCBmixg&showinfo=0&rel=0&iv_load_policy=3"
            allow="autoplay; encrypted-media"
            frameBorder="0"
          ></iframe>
        </div>

        {/* Dark Green Overlay for readability - keeping the nature vibe */}
        <div className="absolute inset-0 z-1 opacity-70 bg-ksa-green-950" />

        {/* Abstract Gradient Overlay - giving it a premium 'pulse' */}
        <div className="absolute inset-0 z-2 opacity-30 mix-blend-overlay"
          style={{
            backgroundImage: 'radial-gradient(circle at center, var(--color-ksa-nature-500) 0%, transparent 70%)',
          }}
        />

        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="mb-6 animate-fade-in-up">
            <span className="text-ksa-nature-100 tracking-[0.2em] text-sm md:text-base font-bold uppercase block mb-2 transition-all hover:tracking-[0.3em] duration-700 drop-shadow-sm">
              Kingdom of Saudi Arabia
            </span>
            <div className="w-16 h-1 bg-ksa-nature-500 mx-auto rounded-full mb-8"></div>
          </div>

          <h1 className="text-[28px] font-black mb-6 tracking-tight uppercase text-white drop-shadow-md">
            Sustainability Highway
          </h1>

          <p className="text-xl md:text-3xl text-ksa-nature-100 mb-12 max-w-4xl mx-auto font-light leading-relaxed drop-shadow-md">
            Cultivating a greener future for the Kingdom. <br className="hidden md:block" />
            The definitive knowledge hub for Mostadam, LEED, and Circular Economics.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link
              href="/library"
              className="group px-8 py-4 bg-ksa-nature-600 text-white rounded-none font-bold text-lg hover:bg-ksa-nature-700 transition-all flex items-center shadow-[0_0_20px_rgba(76,175,80,0.3)] hover:shadow-[0_0_30px_rgba(76,175,80,0.5)]"
            >
              Explore The Library
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/frameworks"
              className="px-8 py-4 border border-ksa-nature-500 text-ksa-nature-500 font-bold text-lg hover:bg-ksa-nature-500 hover:text-white transition-all backdrop-blur-sm"
            >
              Our Frameworks
            </Link>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-ksa-nature-500 hover:text-white transition-colors">
          <div className="w-px h-12 bg-gradient-to-b from-ksa-nature-500 to-transparent mx-auto"></div>
        </div>
      </section>

      {/* Strategic Pillars Section - Nature Themed */}
      <section className="py-24 bg-ksa-nature-100 relative overflow-hidden">
        {/* Subtle Decorative Elements */}
        <div className="absolute -left-20 top-0 opacity-5 pointer-events-none">
          <Leaf className="w-96 h-96 text-ksa-nature-600 rotate-12" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <span className="text-ksa-nature-700 font-bold tracking-widest uppercase mb-2 block">Our Mission</span>
            <h2 className="text-3xl md:text-5xl font-black text-ksa-green-900 mb-4">Strategic Pillars</h2>
            <div className="w-24 h-2 bg-ksa-nature-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 text-center">
            {/* Pillar 1 */}
            <div className="group p-8 border border-ksa-nature-200 hover:border-ksa-nature-500 transition-all duration-500 bg-white/80 backdrop-blur-md shadow-sm hover:shadow-2xl hover:-translate-y-2">
              <div className="bg-ksa-green-900 w-20 h-20 mx-auto rounded-none flex items-center justify-center mb-6 shadow-lg group-hover:bg-ksa-nature-600 transition-colors duration-500 rotate-45">
                <Building2 className="w-10 h-10 text-white -rotate-45" />
              </div>
              <h3 className="text-2xl font-bold text-ksa-green-900 mb-4">Regulatory Guides</h3>
              <p className="text-ksa-green-700 leading-relaxed mb-6">
                Deep-dives into Mostadam, LEED, and WELL requirements for the Saudi construction sector.
              </p>
              <Link href="/frameworks" className="text-ksa-nature-700 font-bold uppercase text-sm tracking-wider hover:text-ksa-nature-500 transition-colors inline-flex items-center">
                Read Archive <ArrowRight className="ml-1 w-4 h-4" />
              </Link>
            </div>

            {/* Pillar 2 */}
            <div className="group p-8 border border-ksa-nature-200 hover:border-ksa-nature-500 transition-all duration-500 bg-white/80 backdrop-blur-md shadow-sm hover:shadow-2xl hover:-translate-y-2">
              <div className="bg-ksa-green-900 w-20 h-20 mx-auto rounded-none flex items-center justify-center mb-6 shadow-lg group-hover:bg-ksa-nature-600 transition-colors duration-500 rotate-45">
                <Leaf className="w-10 h-10 text-white -rotate-45" />
              </div>
              <h3 className="text-2xl font-bold text-ksa-green-900 mb-4">Technical Analysis</h3>
              <p className="text-ksa-green-700 leading-relaxed mb-6">
                Latest data and research on water recycling, energy optimization, and local material efficiency.
              </p>
              <Link href="/topics" className="text-ksa-nature-700 font-bold uppercase text-sm tracking-wider hover:text-ksa-nature-500 transition-colors inline-flex items-center">
                Explore Topics <ArrowRight className="ml-1 w-4 h-4" />
              </Link>
            </div>

            {/* Pillar 3 */}
            <div className="group p-8 border border-ksa-nature-200 hover:border-ksa-nature-500 transition-all duration-500 bg-white/80 backdrop-blur-md shadow-sm hover:shadow-2xl hover:-translate-y-2">
              <div className="bg-ksa-green-900 w-20 h-20 mx-auto rounded-none flex items-center justify-center mb-6 shadow-lg group-hover:bg-ksa-nature-600 transition-colors duration-500 rotate-45">
                <Globe className="w-10 h-10 text-white -rotate-45" />
              </div>
              <h3 className="text-2xl font-bold text-ksa-green-900 mb-4">Strategic Vision</h3>
              <p className="text-ksa-green-700 leading-relaxed mb-6">
                Editorial coverage of the Saudi Green Initiative and the Kingdom's journey to Net Zero 2060.
              </p>
              <Link href="/library" className="text-ksa-nature-700 font-bold uppercase text-sm tracking-wider hover:text-ksa-nature-500 transition-colors inline-flex items-center">
                View Editorial <ArrowRight className="ml-1 w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Updates - Nature Background */}
      <section className="py-24 bg-ksa-nature-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div>
              <span className="text-ksa-nature-600 font-bold tracking-widest uppercase mb-2 block">Knowledge Hub</span>
              <h2 className="text-3xl md:text-5xl font-black text-ksa-green-900">Latest Guidance</h2>
            </div>
            <Link href="/library" className="hidden md:flex items-center text-ksa-nature-700 font-bold hover:text-ksa-nature-500 transition-colors mt-4 md:mt-0 group">
              View All Guides <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredPosts.map(post => (
              <GuideCard key={post.slug} post={post} />
            ))}
          </div>

          <div className="mt-12 text-center md:hidden">
            <Link href="/library" className="inline-block px-8 py-3 bg-white border border-ksa-nature-200 text-ksa-nature-700 font-bold rounded hover:border-ksa-nature-500 transition-colors">
              View All Guides
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action - Earthy Forest */}
      <section className="py-24 bg-ksa-green-900 text-center relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h20L0 20z' fill='%234CAF50' fill-opacity='0.4'/%3E%3C/svg%3E")`
          }}
        />
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-4xl md:text-6xl font-black text-white mb-8 mb-12 uppercase tracking-tight">Ready to <span className="text-ksa-nature-500">elevate</span> your project?</h2>
          <Link
            href="/contact"
            className="inline-block px-12 py-5 bg-ksa-nature-600 text-white font-bold text-xl hover:bg-ksa-nature-700 transition-all shadow-[0_4px_30px_rgba(76,175,80,0.4)] hover:shadow-[0_4px_50px_rgba(76,175,80,0.6)]"
          >
            Suggest a Topic
          </Link>
        </div>
      </section>
    </>
  );
}
