export const metadata = {
    title: 'Contact - SustainabilityHighway',
};

export default function ContactPage() {
    return (
        <div className="container mx-auto px-4 py-12 max-w-2xl">
            <h1 className="text-3xl font-bold text-ksa-green-900 mb-6">Suggest a Topic</h1>
            <p className="text-ksa-green-700 mb-8">
                Have a question about a specific credit or regulation? Let us know what you'd like to see covered next.
            </p>

            <form className="space-y-6">
                <div>
                    <label className="block text-sm font-medium text-ksa-green-900 mb-1">Name</label>
                    <input type="text" className="w-full border border-ksa-sand-300 rounded p-2 focus:ring-2 focus:ring-ksa-teal-500 outline-none" placeholder="Your Name" />
                </div>
                <div>
                    <label className="block text-sm font-medium text-ksa-green-900 mb-1">Email</label>
                    <input type="email" className="w-full border border-ksa-sand-300 rounded p-2 focus:ring-2 focus:ring-ksa-teal-500 outline-none" placeholder="you@example.com" />
                </div>
                <div>
                    <label className="block text-sm font-medium text-ksa-green-900 mb-1">Suggestion</label>
                    <textarea className="w-full border border-ksa-sand-300 rounded p-2 focus:ring-2 focus:ring-ksa-teal-500 outline-none h-32" placeholder="I'd like a guide on..."></textarea>
                </div>
                <button type="button" className="bg-ksa-teal-600 text-white px-6 py-2 rounded hover:bg-ksa-teal-700 transition-colors">
                    Send Suggestion
                </button>
            </form>
        </div>
    );
}
