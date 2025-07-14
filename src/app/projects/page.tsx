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
                Solo Development. Complete game.<br />
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

        {/* ElectroNexus */}
        <li>
          <h3 className="text-2xl font-semibold">ElectroNexus (WIP)</h3>
          <p className="text-gray-300">
            A VR action-adventure RPG in early development using Unreal Engine 5.6, Blender, and Ableton. 
          </p>
          <br></br>

          {/* VFX */}
          <h5 className="font-semibold">VFX</h5>
          <p>The staff executes modular subroutines, each functioning like a magic spell within the game world. Changing the orb attached to the staff dynamically switches which subroutine is active, allowing for flexible combat strategies.</p>
          <br></br>
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '2rem',
            alignItems: 'center',
            margin: '2rem 0'
          }}>
            {/* Fire */}
            <div style={{ textAlign: 'center' }}>
              <p>Subroutine: ProtoFire</p>
              <br></br>
              <ul>
                <li>Magma orb integrated into staff</li>
                <li>Releases blast from the orb’s core</li>
                <li>Stylized fireball projectile</li>
                <li>Impact burst</li>
                <li>Applies DoT fire effect to enemy mesh</li>
              </ul>
            </div>

            <div>
              <img
                src="/FullFireball.gif"
                alt="Fireball VFX"
                style={{ width: '100%', height: 'auto', display: 'block' }}
              />
            </div>

            {/* Void */}
            <div style={{ textAlign: 'center' }}>
              <p>Subroutine: NullPulse</p>
              <br></br>
              <ul>
                <li>Void orb integrated into staff</li>
                <li>Multi-projectile spread via complex Niagara system</li>
                <li>Chained projectile reactions using emitter death events</li>
                <li>Multi-stage impact behavior</li>
              </ul>
            </div>

            <div>
              <img
                src="/FullVoid.gif"
                alt="Void VFX"
                style={{ width: '100%', height: 'auto', display: 'block' }}
              />
            </div>
          </div>
          <br></br>

          {/* Systems */}
          <h5 className="font-semibold">Systems</h5>
          <p>All core gameplay systems have been implemented with a focus on immersion, smooth pacing, and tactile VR feedback. The goal is to deliver satisfying moment-to-moment play, whether navigating or fighting.</p>
          <br></br>
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '2rem',
            alignItems: 'center',
            margin: '2rem 0'
          }}>

            {/* Subroutine Menu */}
            <div style={{ textAlign: 'center' }}>
              <p>Dynamic Subroutine Radial Menu</p>
              <br></br>
              <p>
                A responsive radial menu built using trigonometry allows unlocked subroutines to automatically populate a circular interface. The menu anchors to the player’s staff-hand, providing intuitive, quick-swapping access to available abilities.
              </p>
            </div>
            <div>
              <img
                src="/MenuSwitch.gif"
                alt="Dynamic Subroutine Radial Menu in action"
                style={{ width: '100%', height: 'auto', display: 'block' }}
              />
            </div>

            {/* Run & Melee */}
            <div style={{ textAlign: 'center' }}>
              <p>Locomotion & Melee</p>
              <br></br>
              <p>
                Players move using full joystick-based locomotion—forward/backward movement and strafing on the left stick, turning on the right. The system is tuned to reduce motion sickness while supporting intense melee combat.
              </p>
            </div>
            <div>
              <img
                src="/SwordandRun.gif"
                alt="Locomotion and melee demonstration"
                style={{ width: '100%', height: 'auto', display: 'block' }}
              />
            </div>

            {/* Subroutine targeting */}
            <div style={{ textAlign: 'center' }}>
              <p>
                Subroutine Targeting System
              </p>
              <br></br>
              <p>
                Players can focus their staff on enemies to lock targets. When locked, enemies display a pulsing outline and persistent orb above their heads, indicating health and status. This enables precise ranged casting while freely using melee against others.
              </p>
            </div>
            <div>
              <img
                src="/TargetingEnemies.gif"
                alt="Targeting demonstration"
                style={{ width: '100%', height: 'auto', display: 'block' }}
              />
            </div>
          </div>

          {/* Environment */}
          <h5 className="font-semibold">Environment</h5>
          <p>
            ElectroNexus takes place on an alien world where multiple colony ships have crash-landed. The setting fuses sci-fi utopia with mysterious alien ruins, creating a surreal world to explore and reclaim.
          </p>
          <br></br>
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '2rem',
            alignItems: 'center',
            margin: '2rem 0'
          }}>

            {/* ClubView */}
            <div style={{ textAlign: 'center' }}>
              <p>
                ElectroNexus Hub
              </p>
              <br></br>
              <p>
                The player’s home base is the entertainment sector of their crashed colony ship. This space is fully customizable, gradually upgraded using materials and drops earned through gameplay. A personal sanctuary within the chaos.
              </p>
            </div>
            <div>
              <img
                src="/ClubView.gif"
                alt="A view of the club environment that serves as their home base."
                style={{ width: '100%', height: 'auto', display: 'block' }}
              />
            </div>
          </div>

          {/* Assets */}
          <h5 className="font-semibold">Assets</h5>
          <p>
            Assets are handbuilt by me using AI references and lots of time in Blender.
          </p>
          <br></br>
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '2rem',
            alignItems: 'center',
            margin: '2rem 0'
          }}>

            {/* Pipeline */}
            <div style={{ textAlign: 'center' }}>
              <p>
                My Asset Creation Pipeline
              </p>
              <br></br>
              <p>
                Every asset is handcrafted by me in Blender, with AI accelerating the reference and ideation process. I begin by prompting ChatGPT with a concept, generate visuals, then run them through Meshy for mesh extraction. From there, I shape, sculpt, and refine in Blender—dialing in the silhouette, topology, and materials. The final polish happens across both Blender and Unreal Engine.
              </p>
            </div>
            <div>
              <img
                src="Pipeline.jpg"
                alt="AI Workflow to asset creation diagram"
                style={{ width: '100%', height: 'auto', display: 'block' }}
              />
            </div>

            {/* SpeakerBot */}
            <div style={{ textAlign: 'center' }}>
              <p>
                The SpeakerBot
              </p>
              <br></br>
              <p>
                My first fully rigged skeletal mesh. Optimized and game-ready. Currently in the animation phase.
              </p>
            </div>
            <div>
              <img
                src="/zSpeakerBotFinal.png"
                alt="SpeakerBot enemy mesh"
                style={{ width: '100%', height: 'auto', display: 'block' }}
              />
            </div>

            {/* Pendant */}
            <div style={{ textAlign: 'center' }}>
              <p>
                The Pendant Speaker Stack
              </p>
              <br></br>
              <p>
                This ceiling-mounted speaker stack allows for vertical stage design and dramatic silhouettes. It's my first asset and defines the cyberpunk tone I’m building toward.
              </p>
            </div>
            <div>
              <img
                src="/zPendantFinal.png"
                alt="Hanging pendant party speaker asset"
                style={{ width: '100%', height: 'auto', display: 'block' }}
              />
            </div>

            {/* Monolith */}
            <div style={{ textAlign: 'center' }}>
              <p>
                The Monolith Floor Speaker Stack
              </p>
              <br></br>
              <p>
                A custom floor speaker built for maximum presence. A centerpiece for the party world I’m constructing.
              </p>
            </div>
            <div>
              <img
                src="/zMonolithFinal.png"
                alt="Monolith floor standing speaker stack asset"
                style={{ width: '100%', height: 'auto', display: 'block' }}
              />
            </div>

            {/* Staff */}
            <div style={{ textAlign: 'center' }}>
              <p>
                Staff
              </p>
              <br></br>
              <p>
                My first weapon asset, built to embody the peak of sci-fi cyberpunk aesthetic. It serves as the foundation for my spellcasting system.
              </p>
            </div>
            <div>
              <img
                src="zStaffFinal.png"
                alt="Staff asset"
                style={{ width: '100%', height: 'auto', display: 'block' }}
              />
            </div>

            {/* Sword */}
            <div style={{ textAlign: 'center' }}>
              <p>
                Sword
              </p>
              <br></br>
              <p>
                The counterpart to the staff and part of a modular weapon theme. Players will craft weapons using resources collected throughout gameplay.
              </p>
            </div>
            <div>
              <img
                src="zSwordFinal.png"
                alt="Sword asset"
                style={{ width: '100%', height: 'auto', display: 'block' }}
              />
            </div>
          </div>
        </li>
      </ul>
    </main>
    <footer className="flex justify-center items-center">
      <img src="/Aksiologo.png" alt="Aksiomatix Logo" className="h-64 w-auto opacity-80" />
    </footer>
    </div>
  );
}