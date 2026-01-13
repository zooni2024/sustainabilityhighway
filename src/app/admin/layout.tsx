import Link from 'next/link';
import { LayoutDashboard, FileText, Settings, LogOut, Leaf, PlusCircle } from 'lucide-react';

export default function AdminLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="flex min-h-screen bg-ksa-nature-50">
            {/* Sidebar */}
            <aside className="w-64 bg-ksa-green-950 text-white flex flex-col sticky top-0 h-screen">
                <div className="p-6 border-b border-white/10">
                    <Link href="/admin" className="flex items-center space-x-2 group">
                        <Leaf className="h-6 w-6 text-ksa-nature-500" />
                        <span className="font-black text-lg uppercase tracking-tighter">
                            Admin<span className="text-ksa-nature-500">Hub</span>
                        </span>
                    </Link>
                </div>

                <nav className="flex-grow p-4 space-y-2 mt-4">
                    <Link
                        href="/admin"
                        className="flex items-center space-x-3 px-4 py-3 rounded-none hover:bg-white/5 transition-colors text-ksa-nature-100 font-bold uppercase text-xs tracking-widest"
                    >
                        <LayoutDashboard size={18} className="text-ksa-nature-500" />
                        <span>Dashboard</span>
                    </Link>
                    <Link
                        href="/admin/posts"
                        className="flex items-center space-x-3 px-4 py-3 rounded-none hover:bg-white/5 transition-colors text-white font-bold uppercase text-xs tracking-widest bg-white/5 border-l-2 border-ksa-nature-500"
                    >
                        <FileText size={18} className="text-ksa-nature-500" />
                        <span>Manage Posts</span>
                    </Link>
                    <Link
                        href="/admin/posts/new"
                        className="flex items-center space-x-3 px-4 py-3 rounded-none hover:bg-white/5 transition-colors text-ksa-nature-100 font-bold uppercase text-xs tracking-widest"
                    >
                        <PlusCircle size={18} className="text-ksa-nature-500" />
                        <span>New Post</span>
                    </Link>
                    <Link
                        href="/admin/settings"
                        className="flex items-center space-x-3 px-4 py-3 rounded-none hover:bg-white/5 transition-colors text-ksa-nature-100 font-bold uppercase text-xs tracking-widest"
                    >
                        <Settings size={18} className="text-ksa-nature-500" />
                        <span>Settings</span>
                    </Link>
                </nav>

                <div className="p-4 border-t border-white/10">
                    <Link
                        href="/"
                        className="flex items-center space-x-3 px-4 py-3 rounded-none hover:bg-red-500/10 transition-colors text-red-400 font-bold uppercase text-xs tracking-widest"
                    >
                        <LogOut size={18} />
                        <span>View Site</span>
                    </Link>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-grow overflow-x-hidden">
                <header className="h-20 bg-white border-b border-ksa-nature-200 flex items-center justify-between px-8 sticky top-0 z-10">
                    <h2 className="text-xl font-black uppercase text-ksa-green-900 tracking-tight">
                        Sustainability Highway <span className="text-ksa-nature-600">Admin</span>
                    </h2>
                    <div className="flex items-center space-x-4">
                        <span className="text-xs font-bold uppercase text-ksa-nature-600 bg-ksa-nature-100 px-3 py-1">Saudi Base Content</span>
                        <div className="w-10 h-10 bg-ksa-nature-500 rounded-none flex items-center justify-center text-white font-black">A</div>
                    </div>
                </header>

                <div className="p-8">
                    {children}
                </div>
            </main>
        </div>
    );
}
