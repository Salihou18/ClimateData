export default function Home() {
    return (
        <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold mb-8">A SITE MADE BY DEV-FUTURE!</h1>
            <p className="text-xl mb-4">
                ProjetUa3BaseDeDonnees.ca provides high-resolution climate data
                to help decision makers build a more resilient Canada.
            </p>
            <p className="text-xl">
                New to climate data?{" "}
                <a
                    href="https://www.statcan.gc.ca/fr/debut"
                    className="text-blue-600 underline hover:text-blue-800"
                >
                    Click here to learn more
                </a>
            </p>
        </div>
    );
}
