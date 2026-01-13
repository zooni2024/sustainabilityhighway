'use client';

import { useState } from 'react';
import { Save, Eye, X, Send } from 'lucide-react';
import Link from 'next/link';

export default function NewPostPage() {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [content, setContent] = useState('');

    return (
        <div className="space-y-8 animate-fade-in">
            <div className="flex justify-between items-end">
                <div>
                    <h1 className="text-3xl font-black text-ksa-green-900 uppercase tracking-tight">Draft New Guidance</h1>
                    <p className="text-ksa-green-700 font-medium italic">Contributing to the Saudi Green Initiative.</p>
                </div>
                <div className="flex space-x-3">
                    <button className="px-6 py-2 border border-ksa-nature-200 text-ksa-nature-600 font-bold uppercase text-xs tracking-widest hover:bg-white transition-colors flex items-center">
                        <Eye size={16} className="mr-2" /> Preview
                    </button>
                    <button className="px-8 py-2 bg-ksa-nature-600 text-white font-black uppercase text-sm tracking-widest hover:bg-ksa-nature-700 transition-shadow shadow-[0_4px_15px_rgba(76,175,80,0.3)] flex items-center">
                        <Send size={16} className="mr-2" /> Publish Now
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Editor Area */}
                <div className="lg:col-span-2 space-y-6">
                    <div className="bg-white p-8 border border-ksa-nature-200">
                        <div className="space-y-6">
                            <div className="space-y-2">
                                <label className="text-xs font-black uppercase tracking-widest text-ksa-nature-600 block">Guidance Title</label>
                                <input
                                    type="text"
                                    placeholder="e.g. LEED v4.1 Implementation for Riyadh District Cooling"
                                    className="w-full text-2xl font-black text-ksa-green-900 border-b border-ksa-nature-100 focus:border-ksa-nature-500 outline-none pb-2 transition-colors placeholder:text-ksa-nature-100"
                                    value={title}
                                    onChange={(e) => setTitle(e.target.value)}
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs font-black uppercase tracking-widest text-ksa-nature-600 block">Short Summary</label>
                                <textarea
                                    rows={2}
                                    placeholder="A brief overview of the guidance for the library cards..."
                                    className="w-full text-lg font-light text-ksa-green-700/80 border-b border-ksa-nature-100 focus:border-ksa-nature-500 outline-none py-2 transition-colors resize-none placeholder:text-ksa-nature-100 italic"
                                    value={description}
                                    onChange={(e) => setDescription(e.target.value)}
                                />
                            </div>

                            <div className="space-y-2 pt-6">
                                <label className="text-xs font-black uppercase tracking-widest text-ksa-nature-600 block mb-4">Content Editor (MDX)</label>
                                <div className="bg-ksa-nature-50 p-4 border border-ksa-nature-100 min-h-[400px]">
                                    <textarea
                                        className="w-full h-full min-h-[400px] bg-transparent outline-none font-mono text-sm leading-relaxed text-ksa-green-900"
                                        placeholder="# Start writing your professional guidance...

Use Markdown for formatting:
- Lists
- **Bold text**
- [Links](https://sustainabilityhighway.com)
"
                                        value={content}
                                        onChange={(e) => setContent(e.target.value)}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Sidebar Settings */}
                <div className="space-y-6">
                    <div className="bg-white p-6 border border-ksa-nature-200 space-y-6">
                        <h3 className="text-sm font-black uppercase tracking-widest border-b border-ksa-nature-100 pb-2">Post Meta</h3>

                        <div className="space-y-4">
                            <div className="space-y-1">
                                <label className="text-[10px] font-black uppercase tracking-[0.2em] text-ksa-nature-600">Framework</label>
                                <select className="w-full p-2 bg-ksa-nature-50 border border-ksa-nature-100 text-sm font-bold text-ksa-green-900 outline-none">
                                    <option>Mostadam</option>
                                    <option>LEED</option>
                                    <option>WELL</option>
                                    <option>GSAS</option>
                                    <option>Other</option>
                                </select>
                            </div>

                            <div className="space-y-1">
                                <label className="text-[10px] font-black uppercase tracking-[0.2em] text-ksa-nature-600">Primary Topic</label>
                                <select className="w-full p-2 bg-ksa-nature-50 border border-ksa-nature-100 text-sm font-bold text-ksa-green-900 outline-none">
                                    <option>Circular Economy</option>
                                    <option>Water Efficiency</option>
                                    <option>Energy Optimization</option>
                                    <option>Material Selection</option>
                                    <option>Governance</option>
                                </select>
                            </div>

                            <div className="space-y-1">
                                <label className="text-[10px] font-black uppercase tracking-[0.2em] text-ksa-nature-600">Difficulty Scale</label>
                                <div className="flex space-x-2">
                                    {['Beginner', 'Intermediate', 'Advanced'].map((level) => (
                                        <button key={level} className="flex-grow py-1 border border-ksa-nature-200 text-[9px] font-black uppercase hover:bg-ksa-nature-500 hover:text-white transition-colors">
                                            {level}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="pt-4 space-y-2">
                            <button className="w-full h-10 border-2 border-dashed border-ksa-nature-200 text-ksa-nature-400 font-bold uppercase text-xs flex items-center justify-center hover:bg-ksa-nature-50 transition-colors">
                                + Add Cover Image
                            </button>
                            <p className="text-[10px] text-center text-ksa-nature-400 font-medium">Recommended: 16:9 Aspect Ratio</p>
                        </div>
                    </div>

                    <div className="bg-ksa-nature-100 p-6 border border-ksa-nature-200">
                        <h3 className="text-xs font-black uppercase tracking-widest text-ksa-nature-700 mb-4">Admin Notes</h3>
                        <textarea
                            className="w-full bg-transparent outline-none text-xs leading-relaxed text-ksa-nature-700 font-medium border-l border-ksa-nature-300 pl-4 h-32"
                            placeholder="Keep track of internal data sources for this post..."
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
