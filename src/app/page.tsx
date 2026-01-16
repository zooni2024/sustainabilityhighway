import Link from 'next/link';
import { getAllPosts } from '@/lib/mdx';
import GuideCard from '@/components/GuideCard';
import MostadamSection from '@/components/MostadamSection';
import { ArrowRight, Building2, Leaf, Globe, Award, TrendingUp, Users } from 'lucide-react';

// Icon component for the target/goal icon
function TargetIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="6" />
      <circle cx="12" cy="12" r="2" />
    </svg>
  )
}

export default function Home() {
  const allPosts = getAllPosts();
  const featuredPosts = allPosts.slice(0, 3);

  return (
    <>
      {/* Hero Section - Cinematic Video Sustainability Style */}
      <section className="relative h-screen min-h-[100dvh] flex items-center justify-center overflow-hidden text-white">
        {/* YouTube Video Background */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          <iframe
            className="absolute top-1/2 left-1/2 w-[115%] h-[115%] -translate-x-1/2 -translate-y-1/2 aspect-video min-w-full min-h-full object-cover scale-[1.3]"
            src="https://www.youtube.com/embed/OUZXLCBmixg?autoplay=1&mute=1&controls=0&loop=1&playlist=OUZXLCBmixg&showinfo=0&rel=0&iv_load_policy=3"
            allow="autoplay; encrypted-media"
            frameBorder="0"
          ></iframe>
        </div>

        {/* Gradient Overlays */}
        <div className="absolute inset-0 z-1 bg-gradient-to-b from-ksa-green-950/80 via-ksa-green-900/60 to-ksa-green-950/90" />
        <div className="absolute inset-0 z-2 opacity-40 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-ksa-gold-500/20 via-transparent to-transparent" />

        <div className="relative z-10 container mx-auto px-4 text-center mt-10">
          <div className="mb-8 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-ksa-gold-500/30 bg-ksa-green-950/50 backdrop-blur-md mb-6 hover:bg-ksa-green-950/80 transition-colors cursor-default">
              <span className="w-2 h-2 rounded-full bg-ksa-gold-500 animate-pulse"></span>
              <span className="text-ksa-gold-400 text-xs md:text-sm font-bold uppercase tracking-widest">
                Kingdom of Saudi Arabia
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tight text-white drop-shadow-2xl leading-none">
              Sustainability <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-ksa-gold-400 via-yellow-200 to-ksa-gold-500">
                Highway
              </span>
            </h1>
          </div>

          <p className="text-lg md:text-2xl text-gray-200 mb-12 max-w-3xl mx-auto font-light leading-relaxed drop-shadow-md">
            The definitive knowledge hub for <span className="text-white font-semibold">Mostadam</span>, <span className="text-white font-semibold">LEED</span>, and the <span className="text-white font-semibold">Circular Economy</span>.
            Building a greener future for Vision 2030.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link
              href="/library"
              className="group relative px-8 py-4 bg-ksa-gold-500 text-ksa-green-950 font-bold text-lg rounded overflow-hidden transition-all hover:scale-105 shadow-[0_0_40px_rgba(197,160,89,0.3)]"
            >
              <span className="relative z-10 flex items-center">
                Explore The Library
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
            </Link>
            <Link
              href="/frameworks"
              className="px-8 py-4 border border-white/30 text-white font-bold text-lg rounded hover:bg-white/10 transition-all backdrop-blur-sm"
            >
              Our Frameworks
            </Link>
          </div>
        </div>

        {/* Floating Stats Bar - Hidden on mobile, visible on desktop */}
        <div className="absolute bottom-0 w-full border-t border-white/10 bg-black/20 backdrop-blur-lg hidden md:block">
          <div className="container mx-auto grid grid-cols-4 divide-x divide-white/10 py-6">
            {[
              { label: 'Vision 2030', value: 'Aligned' },
              { label: 'Mostadam', value: 'Certified' },
              { label: 'Green Initiative', value: 'Partner' },
              { label: 'Net Zero', value: '2060' }
            ].map((stat, i) => (
              <div key={i} className="text-center group cursor-default">
                <div className="text-ksa-gold-400 font-bold text-xl group-hover:text-white transition-colors">{stat.value}</div>
                <div className="text-white/60 text-xs uppercase tracking-widest">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Intro / Vision Match Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="absolute -inset-4 bg-ksa-gold-500/20 rounded-2xl -rotate-2 transform transition-transform hover:rotate-0 duration-500"></div>
            <div className="relative bg-ksa-green-950 rounded-xl p-8 sm:p-12 overflow-hidden text-white shadow-2xl">
              <Leaf className="w-64 h-64 text-ksa-green-800/20 absolute -bottom-10 -right-10 rotate-12" />
              <h3 className="text-2xl font-bold mb-4 text-ksa-gold-400">Why Sustainability Highway?</h3>
              <p className="text-lg leading-relaxed text-gray-300">
                As the Kingdom embarks on ambitious giga-projects, the need for standardized, accessible, and localized sustainability knowledge has never been greater. We bridge the gap between global standards and local application.
              </p>
            </div>
          </div>
          <div>
            <span className="text-ksa-gold-600 font-bold tracking-widest uppercase mb-2 block">Our Purpose</span>
            <h2 className="text-4xl md:text-5xl font-black text-ksa-green-900 mb-6 leading-tight">
              Driving the <span className="text-ksa-nature-600">Green Transition</span> in Construction
            </h2>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              We provide engineers, architects, and developers with the tools to navigate the complex landscape of environmental certifications, ensuring every project contributes to a sustainable legacy.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-ksa-nature-100 rounded-lg text-ksa-nature-600">
                  <TargetIcon className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-ksa-green-900">Compliance</h4>
                  <p className="text-sm text-gray-500">Navigating complex regulations</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="p-3 bg-ksa-gold-100 rounded-lg text-ksa-gold-600">
                  <Users className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-ksa-green-900">Community</h4>
                  <p className="text-sm text-gray-500">Connecting professionals</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Pillars Section - Enhanced */}
      <section className="py-24 bg-ksa-nature-50 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-20">
            <span className="text-ksa-nature-700 font-bold tracking-widest uppercase mb-2 block">Our Core Pillars</span>
            <h2 className="text-3xl md:text-5xl font-black text-ksa-green-900">Holistic Sustainability</h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-ksa-nature-500 to-ksa-gold-500 mx-auto rounded-full mt-6"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 text-center">
            {/* Pillar 1 */}
            <div className="group relative p-10 bg-white rounded-2xl transition-all duration-500 shadow-xl hover:-translate-y-2 hover:shadow-2xl overflow-hidden border border-transparent hover:border-ksa-gold-400/30">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <Building2 className="w-32 h-32 text-ksa-green-900 rotate-12" />
              </div>
              <div className="bg-gradient-to-br from-ksa-green-900 to-ksa-green-800 w-16 h-16 mx-auto rounded-xl flex items-center justify-center mb-8 shadow-lg group-hover:scale-110 transition-transform duration-500">
                <Building2 className="w-8 h-8 text-ksa-gold-400" />
              </div>
              <h3 className="text-2xl font-bold text-ksa-green-900 mb-4">Regulatory Guides</h3>
              <p className="text-gray-600 leading-relaxed mb-8">
                Master the requirements of Mostadam, LEED, and WELL. Your roadmap to certification success in the Kingdom.
              </p>
              <Link href="/frameworks" className="text-ksa-nature-600 font-bold uppercase text-sm tracking-wider hover:text-ksa-gold-600 transition-colors inline-flex items-center group-hover:underline decoration-2 underline-offset-4">
                Access Guides <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>

            {/* Pillar 2 */}
            <div className="group relative p-10 bg-white rounded-2xl transition-all duration-500 shadow-xl hover:-translate-y-2 hover:shadow-2xl overflow-hidden border border-transparent hover:border-ksa-gold-400/30">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <Leaf className="w-32 h-32 text-ksa-green-900 rotate-12" />
              </div>
              <div className="bg-gradient-to-br from-ksa-green-900 to-ksa-green-800 w-16 h-16 mx-auto rounded-xl flex items-center justify-center mb-8 shadow-lg group-hover:scale-110 transition-transform duration-500">
                <Leaf className="w-8 h-8 text-ksa-gold-400" />
              </div>
              <h3 className="text-2xl font-bold text-ksa-green-900 mb-4">Technical Data</h3>
              <p className="text-gray-600 leading-relaxed mb-8">
                In-depth analysis of water recycling, HVAC efficiency, and sustainable material procurement strategies.
              </p>
              <Link href="/topics" className="text-ksa-nature-600 font-bold uppercase text-sm tracking-wider hover:text-ksa-gold-600 transition-colors inline-flex items-center group-hover:underline decoration-2 underline-offset-4">
                View Data <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>

            {/* Pillar 3 */}
            <div className="group relative p-10 bg-white rounded-2xl transition-all duration-500 shadow-xl hover:-translate-y-2 hover:shadow-2xl overflow-hidden border border-transparent hover:border-ksa-gold-400/30">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <Globe className="w-32 h-32 text-ksa-green-900 rotate-12" />
              </div>
              <div className="bg-gradient-to-br from-ksa-green-900 to-ksa-green-800 w-16 h-16 mx-auto rounded-xl flex items-center justify-center mb-8 shadow-lg group-hover:scale-110 transition-transform duration-500">
                <Globe className="w-8 h-8 text-ksa-gold-400" />
              </div>
              <h3 className="text-2xl font-bold text-ksa-green-900 mb-4">Strategic Vision</h3>
              <p className="text-gray-600 leading-relaxed mb-8">
                Stay aligned with the Saudi Green Initiative and the Kingdom's roadmap to a Net Zero 2060 future.
              </p>
              <Link href="/library" className="text-ksa-nature-600 font-bold uppercase text-sm tracking-wider hover:text-ksa-gold-600 transition-colors inline-flex items-center group-hover:underline decoration-2 underline-offset-4">
                Learn More <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Standards & Trust Ticker */}
      <section className="py-12 bg-white border-y border-ksa-nature-100">
        <div className="container mx-auto px-4">
          <p className="text-center text-sm font-bold text-gray-400 uppercase tracking-[0.2em] mb-8">Aligned With Global Standards</p>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
            {/* Text Placeholders for Logos until images are provided - SEO friendly text */}
            <div className="text-2xl font-black text-gray-300 hover:text-ksa-green-900 cursor-default">VISION 2030</div>
            <div className="text-2xl font-black text-gray-300 hover:text-ksa-green-900 cursor-default">MOSTADAM</div>
            <div className="text-2xl font-black text-gray-300 hover:text-ksa-green-900 cursor-default">LEED</div>
            <div className="text-2xl font-black text-gray-300 hover:text-ksa-green-900 cursor-default">SGI</div>
            <div className="text-2xl font-black text-gray-300 hover:text-ksa-green-900 cursor-default">USGBC</div>
          </div>
        </div>
      </section>

      {/* Target Audience / "Who is this for?" - SEO Content Block */}
      <section className="py-24 bg-ksa-nature-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-ksa-green-900 mb-4">Empowering The Construction Ecosystem</h2>
            <p className="text-gray-600 text-lg">Whether you are designing, building, or managing, Sustainability Highway provides the specific tools you need.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow border-t-4 border-ksa-nature-500">
              <h3 className="text-xl font-bold text-ksa-green-900 mb-3">Architects & Designers</h3>
              <p className="text-gray-600 mb-4 text-sm">Integrate passive design strategies and specify sustainable materials from the start.</p>
              <ul className="space-y-2">
                <li className="text-xs font-bold text-ksa-nature-600 uppercase tracking-wider">• Design Guides</li>
                <li className="text-xs font-bold text-ksa-nature-600 uppercase tracking-wider">• Material Specs</li>
              </ul>
            </div>

            {/* Card 2 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow border-t-4 border-ksa-gold-500">
              <h3 className="text-xl font-bold text-ksa-green-900 mb-3">Contractors & Developers</h3>
              <p className="text-gray-600 mb-4 text-sm">Ensure site compliance, waste management, and streamlined certification processes.</p>
              <ul className="space-y-2">
                <li className="text-xs font-bold text-ksa-gold-600 uppercase tracking-wider">• Construction Checklists</li>
                <li className="text-xs font-bold text-ksa-gold-600 uppercase tracking-wider">• Compliance Docs</li>
              </ul>
            </div>

            {/* Card 3 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow border-t-4 border-blue-500">
              <h3 className="text-xl font-bold text-ksa-green-900 mb-3">Facility Managers</h3>
              <p className="text-gray-600 mb-4 text-sm">Optimize operational energy, water usage, and indoor environmental quality.</p>
              <ul className="space-y-2">
                <li className="text-xs font-bold text-blue-600 uppercase tracking-wider">• Performance Tracking</li>
                <li className="text-xs font-bold text-blue-600 uppercase tracking-wider">• Maintenance Logs</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Stats / Impact Section - Dark */}
      <section className="py-20 bg-ksa-green-950 text-white relative isolate overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-10 bg-[radial-gradient(#ffffff33_1px,transparent_1px)] [background-size:20px_20px]"></div>
        <div className="absolute -left-20 top-1/2 w-64 h-64 bg-ksa-gold-500/20 rounded-full blur-[100px]"></div>
        <div className="absolute -right-20 bottom-0 w-64 h-64 bg-ksa-nature-500/20 rounded-full blur-[100px]"></div>

        <div className="container mx-auto px-4 relative z-10 grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x-0 md:divide-x divide-white/10">
          {[
            { icon: TrendingUp, val: '20+', label: 'Frameworks' },
            { icon: Users, val: '500+', label: 'Professionals' },
            { icon: Leaf, val: '100%', label: 'Commitment' },
            { icon: Award, val: '#1', label: 'Knowledge Hub' },
          ].map((stat, i) => (
            <div key={i} className="flex flex-col items-center group p-4">
              <stat.icon className="w-10 h-10 text-ksa-gold-500 mb-4 group-hover:scale-110 transition-transform duration-300" />
              <div className="text-4xl md:text-5xl font-black mb-2 text-white">{stat.val}</div>
              <div className="text-sm text-gray-400 uppercase tracking-widest font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Latest Updates - Clean Light */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div>
              <span className="text-ksa-gold-600 font-bold tracking-widest uppercase mb-2 block">Insights</span>
              <h2 className="text-3xl md:text-5xl font-black text-ksa-green-900 max-w-lg leading-tight">Latest Sustainable Guidance</h2>
            </div>
            <Link href="/library" className="hidden md:flex items-center px-6 py-3 border border-ksa-green-900/10 rounded-full hover:bg-ksa-green-900 hover:text-white transition-all group font-medium">
              View All Guides <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredPosts.map(post => (
              <GuideCard key={post.slug} post={post} />
            ))}
          </div>

          <div className="mt-12 text-center md:hidden">
            <Link href="/library" className="inline-block px-8 py-3 bg-ksa-green-900 text-white font-bold rounded hover:bg-ksa-green-800 transition-colors">
              View All Guides
            </Link>
          </div>
        </div>
      </section>

      <MostadamSection />
    </>
  );
}
