import Navbar from "../../components/Navbar";

export default function Resume() {
  return (
    <div className="max-w-2xl mx-auto">
    <main className="min-h-screen bg-black text-white p-10">
      <Navbar />
      <br/>
      <br/>
      <h2 className="text-4xl font-bold mb-6 justify-center text-center">Resume - Unreal / VR Dev</h2>
      <div className="flex flex-wrap justify-center gap-20 mt-0">
        <img src="/badges/unreal.png" className="h-12 badge" alt="Unreal Engine" />
        <img src="/badges/blender.png" className="h-12 badge" alt="Blender" />
        <img src="/badges/ableton.png" className="h-12 badge" alt="Ableton" />
      </div>
      <section className="mb-6">
        <br/>
        <h3 className="text-2xl font-semibold">Skills</h3>
        <ul className="list-disc ml-6 text-gray-300">
          <li>Unreal Engine 5.5 / 5.6 – Blueprints, Niagara VFX, MetaSounds</li>
          <li>VR Development – Cross-platform best practices</li>
          <li>Asset creation - AI generation, Blender</li>
          <li>Game Design – Environmental storytelling & interaction</li>
          <li>Audio Production – Ableton, FMOD, MetaSounds</li>
          <li>C++ (beginner), JavaScript/React (intermediate)</li>
        </ul>
      </section>
      <section className="mb-6">
        <h3 className="text-2xl font-semibold">Experience</h3>
        <ul className="list-disc ml-6 text-gray-300">
          <li>Helpdesk Technician – NJUHSD (2023–2025)</li>
          <li>Freelance Developer – Aksiomatix (2024–ongoing)</li>
        </ul>
      </section>
      <section className="mb-6">
        <h3 className="text-2xl font-semibold">Education</h3>
        <ul className="list-disc ml-6 text-gray-300">
          <li>Sierra College (Graduating Dec 2025)</li>
          <li>Self-taught full-stack Unreal/VR Dev</li>
          <li>Self-taught music producer with many years of experience</li>
        </ul>
      </section>
      <section className="mb-6">
        <h3 className="text-2xl font-semibold">Certs / Dev Communities</h3>
        <ul className="list-disc ml-6 text-gray-300">
            <li>Unreal Sensei Masterclass (in progress)</li>
            <li>Active in Unreal Source and Prismatic Dev discord channels</li>
        </ul>
      </section>
      <div className="flex justify-center">
        <a
            href="/resume.pdf"
            download
            className="inline-block px-4 py-2 mt-4 mb-6 bg-white text-black font-semibold rounded shadow hover:bg-gray-200 transition button-accent-hover"
        >
            Download PDF Resume
        </a>
        </div>
      <div className="mt-10 flex justify-center">
        <img src="/images/rig.jpg" alt="Rig Setup" className="max-w-full rounded-lg shadow-lg" />
      </div>
    </main>
    <footer className="flex justify-center items-center">
      <img src="/Aksiologo.png" alt="Aksiomatix Logo" className="h-64 w-auto opacity-80" />
    </footer>
    </div>
  );
}