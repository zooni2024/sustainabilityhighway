export const metadata = {
    title: 'About Us - SustainabilityHighway',
};

export default function AboutPage() {
    return (
        <div className="container mx-auto px-4 py-12 max-w-3xl">
            <h1 className="text-3xl font-bold text-ksa-green-900 mb-6">About SustainabilityHighway</h1>
            <div className="prose prose-lg text-ksa-green-700">
                <p>
                    SustainabilityHighway is an independent knowledge hub dedicated to advancing sustainable building practices in Saudi Arabia (KSA).
                </p>
                <p>
                    As the Kingdom moves towards Vision 2030 and the Net Zero 2060 goals, the construction industry faces new requirements, from the Mostadam rating system to rigorous energy codes.
                </p>
                <p>
                    Our mission is to simplify these complex frameworks into actionable, easy-to-understand guides for engineers, architects, and project managers.
                </p>
                <h3>Disclaimer</h3>
                <p>
                    We are an educational resource and are not affiliated with any government entity or certification body (such as GBCI or Mostadam). All information is provided for general guidance only.
                </p>
            </div>
        </div>
    );
}
