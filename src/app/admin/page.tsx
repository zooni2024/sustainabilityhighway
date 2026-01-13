import { FileText, Users, Eye, TrendingUp, Clock, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function AdminDashboard() {
    const stats = [
        { label: 'Total Posts', value: '12', icon: FileText, color: 'text-blue-600', bg: 'bg-blue-50' },
        { label: 'Total Views', value: '2.4k', icon: Eye, color: 'text-ksa-nature-600', bg: 'bg-ksa-nature-50' },
        { label: 'Avg. Reading Time', value: '6m', icon: Clock, color: 'text-purple-600', bg: 'bg-purple-50' },
        { label: 'Engagement', value: '+14%', icon: TrendingUp, color: 'text-green-600', bg: 'bg-green-50' },
    ];

    return (
        <div className="space-y-8">
            <div>
                <h1 className="text-3xl font-black text-ksa-green-900 uppercase tracking-tight">Dashboard Overview</h1>
                <p className="text-ksa-green-700 font-medium">Welcome back, Admin. Here's what's happening on the highway.</p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map((stat, i) => (
                    <div key={i} className="bg-white p-6 border border-ksa-nature-200 shadow-sm hover:shadow-md transition-shadow">
                        <div className="flex justify-between items-start mb-4">
                            <div className={`${stat.bg} p-3 rounded-none`}>
                                <stat.icon size={24} className={stat.color} />
                            </div>
                        </div>
                        <div className="text-2xl font-black text-ksa-green-900 leading-none mb-1">{stat.value}</div>
                        <div className="text-xs font-bold uppercase tracking-widest text-ksa-nature-600">{stat.label}</div>
                    </div>
                ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Recent Posts */}
                <div className="lg:col-span-2 space-y-4">
                    <div className="flex justify-between items-center">
                        <h3 className="text-xl font-black text-ksa-green-900 uppercase">Recent Guidance Posts</h3>
                        <Link href="/admin/posts" className="text-xs font-bold uppercase text-ksa-nature-600 hover:text-ksa-nature-800 flex items-center">
                            View All <ArrowRight size={14} className="ml-1" />
                        </Link>
                    </div>

                    <div className="bg-white border border-ksa-nature-200 overflow-hidden">
                        <table className="w-full text-left">
                            <thead>
                                <tr className="bg-ksa-nature-50 border-b border-ksa-nature-200">
                                    <th className="px-6 py-4 text-xs font-black uppercase tracking-widest text-ksa-nature-700">Title</th>
                                    <th className="px-6 py-4 text-xs font-black uppercase tracking-widest text-ksa-nature-700">Framework</th>
                                    <th className="px-6 py-4 text-xs font-black uppercase tracking-widest text-ksa-nature-700">Views</th>
                                    <th className="px-6 py-4 text-xs font-black uppercase tracking-widest text-ksa-nature-700 text-right">Action</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-ksa-nature-100">
                                {[1, 2, 3, 4, 5].map((_, i) => (
                                    <tr key={i} className="hover:bg-ksa-nature-50 transition-colors group">
                                        <td className="px-6 py-4">
                                            <div className="text-sm font-bold text-ksa-green-900 truncate max-w-xs transition-colors group-hover:text-ksa-nature-600">
                                                Circular Economy in Saudi Giga-Projects
                                            </div>
                                            <div className="text-[10px] text-ksa-nature-500 font-medium tracking-tight">Updated 2 hours ago</div>
                                        </td>
                                        <td className="px-6 py-4">
                                            <span className="text-[10px] font-black uppercase bg-ksa-nature-100 px-2 py-0.5 text-ksa-nature-700">Mostadam</span>
                                        </td>
                                        <td className="px-6 py-4 text-sm font-bold text-ksa-green-700">142</td>
                                        <td className="px-6 py-4 text-right">
                                            <button className="text-xs font-bold uppercase text-ksa-nature-600 hover:underline">Edit</button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Quick Tips / Saudi context */}
                <div className="space-y-4">
                    <h3 className="text-xl font-black text-ksa-green-900 uppercase">Sustainability Pulse</h3>
                    <div className="bg-ksa-green-950 p-6 text-white space-y-6">
                        <div className="space-y-2 border-l-2 border-ksa-nature-500 pl-4">
                            <h4 className="text-xs font-black uppercase tracking-widest text-ksa-nature-500">Vision 2030 Alert</h4>
                            <p className="text-sm font-light text-ksa-nature-100 leading-relaxed uppercase">New Mostadam residential directives pending for Al-Ula region.</p>
                        </div>
                        <div className="space-y-2 border-l-2 border-ksa-nature-500 pl-4">
                            <h4 className="text-xs font-black uppercase tracking-widest text-ksa-nature-500">Resource Tip</h4>
                            <p className="text-sm font-light text-ksa-nature-100 leading-relaxed uppercase">Average water recycling efficiency across Riyadh giga-projects hit 84% last month.</p>
                        </div>
                        <Link
                            href="/admin/posts/new"
                            className="block w-full py-4 bg-ksa-nature-600 hover:bg-ksa-nature-700 text-white text-center font-black uppercase tracking-widest text-sm transition-colors"
                        >
                            Draft New Guidance
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
