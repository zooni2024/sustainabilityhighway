export const metadata = {
    title: 'Privacy Policy - SustainabilityHighway',
};

export default function PrivacyPage() {
    return (
        <div className="container mx-auto px-4 py-12 max-w-3xl prose prose-ksa-green">
            <h1>Privacy Policy</h1>
            <p>Last updated: {new Date().toLocaleDateString()}</p>
            <p>Your privacy is important to us. This privacy policy explains how we collect and use your data.</p>

            <h2>Data Collection</h2>
            <p>We do not collect personal data unless you voluntarily provide it (e.g., via our contact form).</p>

            <h2>Cookies</h2>
            <p>We use essential cookies to ensure the website functions properly.</p>
        </div>
    );
}
