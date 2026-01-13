import fs from 'fs';
import path from 'path';

export const metadata = {
    title: 'Glossary - SustainabilityHighway',
    description: 'Definitions of key sustainability terms and acronyms.'
};

type Term = { term: string; definition: string };

export default function GlossaryPage() {
    const glossaryPath = path.join(process.cwd(), 'content/data/glossary.json');
    const terms: Term[] = JSON.parse(fs.readFileSync(glossaryPath, 'utf8'));

    // Group by first letter
    const grouped = terms.reduce((acc, curr) => {
        const letter = curr.term[0].toUpperCase();
        if (!acc[letter]) acc[letter] = [];
        acc[letter].push(curr);
        return acc;
    }, {} as Record<string, Term[]>);

    const letters = Object.keys(grouped).sort();

    return (
        <div className="container mx-auto px-4 py-12">
            <h1 className="text-3xl font-bold text-ksa-green-900 mb-8">Glossary of Terms</h1>

            {/* Anchor Nav */}
            <div className="flex flex-wrap gap-2 mb-12 sticky top-20 bg-ksa-sand-100 py-4 z-10 border-b border-ksa-sand-300">
                {letters.map(letter => (
                    <a key={letter} href={`#${letter}`} className="w-8 h-8 flex items-center justify-center rounded-full bg-white text-ksa-green-800 font-bold hover:bg-ksa-teal-500 hover:text-white transition-colors border border-ksa-sand-300">
                        {letter}
                    </a>
                ))}
            </div>

            <div className="space-y-12">
                {letters.map(letter => (
                    <div key={letter} id={letter} className="scroll-mt-32">
                        <h2 className="text-2xl font-bold text-ksa-teal-600 mb-6 border-b border-ksa-sand-300 pb-2">{letter}</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
                            {grouped[letter].map((item) => (
                                <div key={item.term}>
                                    <h3 className="text-lg font-bold text-ksa-green-900 mb-2">{item.term}</h3>
                                    <p className="text-ksa-green-700 leading-relaxed">{item.definition}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
