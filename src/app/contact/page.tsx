import Navbar from "../../components/Navbar";

export default function Contact() {
  return (
    <div className="max-w-2xl mx-auto">
    <main className="min-h-screen bg-black text-white p-10 items-center justify-center text-center">
      <Navbar />
      <br/>
      <br/>
      <h2 className="text-4xl font-bold mb-6">Contact</h2>
      <br/>
      <p className="text-gray-300 mb-4">
        I’m currently open to opportunities and collaborations. Reach out any time!
      </p>
      <br/>
      <div className="flex justify-center">
        <a
            href="mailto:axel@aksiomatix.com"
            className="inline-block px-4 py-2 mt-4 mb-6 bg-white text-black font-semibold rounded shadow hover:bg-gray-200 transition button-accent-hover"
        >
            axel@aksiomatix.com
        </a>
      </div>
      <div className="flex justify-center">
        <a
            href="http://www.linkedin.com/in/c-axel-jorgensen"
            target="_blank"
            className="inline-block px-4 py-2 mt-4 mb-6 bg-white text-black font-semibold rounded shadow hover:bg-gray-200 transition button-accent-hover"
        >
            LinkedIn Profile
        </a>
      </div>
      <div className="flex justify-center">
        <a
            href="https://x.com/aksiomatix"
            target="_blank"
            className="inline-block px-4 py-2 mt-4 mb-6 bg-white text-black font-semibold rounded shadow hover:bg-gray-200 transition button-accent-hover"
        >
            Twitter (X)
        </a>
      </div>
      <br/><br/><br/>
      <p>Let’s build the future of immersive interaction.</p>
    </main>
    <footer className="flex justify-center items-center">
      <img src="/Aksiologo.png" alt="Aksiomatix Logo" className="h-64 w-auto opacity-80" />
    </footer>
    </div>
  );
}