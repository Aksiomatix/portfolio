import Navbar from "../../components/Navbar";

export default function Projects() {
  return (
    <div className="max-w-7xl mx-auto">
    <main className="min-h-screen bg-black text-white p-10">
      <Navbar />
      <br/>
      <br/>
      <h2 className="text-4xl font-bold mb-6 justify-center text-center">Projects</h2>
      <br/>
      <ul className="space-y-6">
        <li className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            {/* LEFT: Text */}
            <div>
                <h3 className="text-2xl font-semibold">Neon Onslaught</h3>
                <p className="text-gray-300">
                Solo Development.<br />
                A cyberpunk survival game built in UE5.5 with original music, custom VFX, custom UI, and scripted trap systems.
                </p>
                <br />
                <h5 className="font-semibold">Tech Stack:</h5>
                <ul className="list-disc ml-6 text-gray-300">
                <li>Unreal Engine 5.5</li>
                <li>Blueprints</li>
                <li>Niagara VFX</li>
                <li>Metasounds</li>
                <li>Blender</li>
                <li>Ableton</li>
                <li>Plugins - Serum, Omnisphere 2, Massive, Battery 4, etc.</li>
                </ul>
                <br />
                <div className="flex justify-center">
                    <a
                        href="https://aksiomatix.itch.io/neononslaught"
                        target="_blank"
                        className="inline-block px-4 py-2 mt-4 mb-6 bg-white text-black font-semibold rounded shadow hover:bg-gray-200 transition button-accent-hover"
                    >
                        Play on Itch.io
                    </a>
                </div>
            </div>

            {/* RIGHT: Media */}
            <div className="flex justify-center">
                <iframe
                width="100%"
                height="380"
                src="https://www.youtube.com/embed/oNpZ9mF60zs?si=a1Ic1vnGpUNF2nQJ"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                className="rounded-lg shadow-lg max-w-xl w-full"
                ></iframe>
            </div>
            </li>
        <br/>
        <li>
          <h3 className="text-2xl font-semibold">ElectroNexus (WIP)</h3>
          <p className="text-gray-300">
            A VR-powered immersive music world exploring rhythm-based combat, VFX synthesis, and glitch reality.
          </p>
        </li>
      </ul>
    </main>
    <footer className="flex justify-center items-center">
      <img src="/Aksiologo.png" alt="Aksiomatix Logo" className="h-64 w-auto opacity-80" />
    </footer>
    </div>
  );
}