export const metadata = {
    title: 'Terms of Use - SustainabilityHighway',
};

export default function TermsPage() {
    return (
        <div className="container mx-auto px-4 py-12 max-w-3xl prose prose-ksa-green">
            <h1>Terms of Use</h1>
            <p>Last updated: {new Date().toLocaleDateString()}</p>
            <p>By using SustainabilityHighway, you agree to these terms.</p>

            <h2>Content Validity</h2>
            <p>While we strive for accuracy, regulations in KSA change frequently. Always consult official Mostadam/LEED documentation for project compliance.</p>

            <h2>Intellectual Property</h2>
            <p>All content is copyright of SustainabilityHighway unless otherwise noted.</p>
        </div>
    );
}
