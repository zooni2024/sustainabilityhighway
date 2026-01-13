import Link from 'next/link';
import { getAllPosts } from '@/lib/mdx';
import GuideCard from '@/components/GuideCard';
import { ArrowRight, Building2, Leaf, Globe } from 'lucide-react';

export default function Home() {
  const allPosts = getAllPosts();
  const featuredPosts = allPosts.slice(0, 3); // Vision 2030 usually shows just a few top items

  return (
    <>
      {/* Hero Section - Vision 2030 Style */}
      <section className="relative h-[85vh] flex items-center justify-center overflow-hidden bg-ksa-green-900 text-white">
        {/* Abstract Background Pattern - evoking the 'Vision' pulse */}
        <div className="absolute inset-0 z-0 opacity-20"
          style={{
            backgroundImage: 'radial-gradient(circle at center, #2C7A7B 0%, #0B2B24 70%)',
          }}
        />
        <div className="absolute inset-0 z-0 opacity-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23C5A059' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zzM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}
        />

        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="mb-6 animate-fade-in-up">
            <span className="text-ksa-gold-500 tracking-[0.2em] text-sm md:text-base font-bold uppercase block mb-2">
              Kingdom of Saudi Arabia
            </span>
            <div className="w-16 h-1 bg-ksa-gold-500 mx-auto rounded-full mb-8"></div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight leading-tight">
            Sustainability<span className="text-ksa-gold-500">Highway</span>
          </h1>

          <p className="text-xl md:text-2xl text-ksa-sand-200 mb-12 max-w-3xl mx-auto font-light leading-relaxed">
            Constructing a sustainable future for the Nation. <br className="hidden md:block" />
            The central hub for Mostadam, LEED, and Green Compliance.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link
              href="/library"
              className="group px-8 py-4 bg-ksa-gold-500 text-white rounded-none font-bold text-lg hover:bg-ksa-gold-600 transition-all flex items-center"
            >
              Explore The Library
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/frameworks"
              className="px-8 py-4 border border-white text-white font-bold text-lg hover:bg-white hover:text-ksa-green-900 transition-all"
            >
              Our Frameworks
            </Link>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-white/50">
          <div className="w-px h-12 bg-gradient-to-b from-white to-transparent mx-auto"></div>
        </div>
      </section>

      {/* Strategic Pillars Section - The "Three Circles/Cards" typical of Vision layout */}
      <section className="py-24 bg-white relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-ksa-green-900 mb-4">Strategic Pillars</h2>
            <div className="w-24 h-1 bg-ksa-gold-500 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 text-center">
            {/* Pillar 1 */}
            <div className="group p-8 border border-ksa-sand-300 hover:border-ksa-gold-500 transition-colors duration-300 bg-ksa-sand-100/50">
              <div className="bg-ksa-green-800 w-20 h-20 mx-auto rounded-full flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                <Building2 className="w-10 h-10 text-ksa-gold-500" />
              </div>
              <h3 className="text-2xl font-bold text-ksa-green-900 mb-4">Framework Compliance</h3>
              <p className="text-ksa-green-700 leading-relaxed mb-6">
                Navigating Mostadam, LEED, and WELL to ensure certification success across all project stages.
              </p>
              <Link href="/frameworks" className="text-ksa-gold-600 font-bold uppercase text-sm tracking-wider hover:text-ksa-green-900 transition-colors inline-flex items-center">
                Learn More <ArrowRight className="ml-1 w-4 h-4" />
              </Link>
            </div>

            {/* Pillar 2 */}
            <div className="group p-8 border border-ksa-sand-300 hover:border-ksa-gold-500 transition-colors duration-300 bg-ksa-sand-100/50">
              <div className="bg-ksa-green-800 w-20 h-20 mx-auto rounded-full flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                <Leaf className="w-10 h-10 text-ksa-gold-500" />
              </div>
              <h3 className="text-2xl font-bold text-ksa-green-900 mb-4">Resource Efficiency</h3>
              <p className="text-ksa-green-700 leading-relaxed mb-6">
                Optimizing energy, water, and materials to meet the rigorous demands of the KSA climate.
              </p>
              <Link href="/topics" className="text-ksa-gold-600 font-bold uppercase text-sm tracking-wider hover:text-ksa-green-900 transition-colors inline-flex items-center">
                Learn More <ArrowRight className="ml-1 w-4 h-4" />
              </Link>
            </div>

            {/* Pillar 3 */}
            <div className="group p-8 border border-ksa-sand-300 hover:border-ksa-gold-500 transition-colors duration-300 bg-ksa-sand-100/50">
              <div className="bg-ksa-green-800 w-20 h-20 mx-auto rounded-full flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                <Globe className="w-10 h-10 text-ksa-gold-500" />
              </div>
              <h3 className="text-2xl font-bold text-ksa-green-900 mb-4">Vision 2060</h3>
              <p className="text-ksa-green-700 leading-relaxed mb-6">
                Aligning construction practices with the Saudi Green Initiative and Net Zero ambitions.
              </p>
              <Link href="/library" className="text-ksa-gold-600 font-bold uppercase text-sm tracking-wider hover:text-ksa-green-900 transition-colors inline-flex items-center">
                Learn More <ArrowRight className="ml-1 w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Updates - Grid Layout */}
      <section className="py-24 bg-ksa-sand-100">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div>
              <span className="text-ksa-gold-600 font-bold tracking-widest uppercase mb-2 block">Knowledge Hub</span>
              <h2 className="text-3xl md:text-4xl font-bold text-ksa-green-900">Latest Guidance</h2>
            </div>
            <Link href="/library" className="hidden md:flex items-center text-ksa-green-900 font-bold hover:text-ksa-gold-600 transition-colors mt-4 md:mt-0">
              View All Guides <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredPosts.map(post => (
              <GuideCard key={post.slug} post={post} />
            ))}
          </div>

          <div className="mt-12 text-center md:hidden">
            <Link href="/library" className="inline-block px-8 py-3 bg-white border border-ksa-sand-300 text-ksa-green-900 font-bold rounded hover:border-ksa-gold-500 transition-colors">
              View All Guides
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action - Minimalist */}
      <section className="py-20 bg-ksa-green-900 text-center relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">Ready to elevate your project?</h2>
          <Link
            href="/contact"
            className="inline-block px-10 py-4 bg-ksa-gold-500 text-white font-bold text-lg hover:bg-ksa-gold-600 transition-colors"
          >
            Suggest a Topic
          </Link>
        </div>
      </section>
    </>
  );
}
