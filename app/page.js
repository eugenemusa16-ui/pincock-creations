export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white flex flex-col items-center justify-center relative overflow-hidden font-sans">
      
      {/* Background Gradient Effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#1a1a1a] via-[#0a0a0a] to-black opacity-80 z-0"></div>
      
      {/* Main Content */}
      <div className="z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="text-6xl md:text-8xl font-extrabold tracking-tighter mb-4 bg-clip-text text-transparent bg-gradient-to-r from-gray-100 to-gray-500">
          PINCOCK <br className="md:hidden" /> CREATIONS
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-400 mb-8 font-light tracking-wide">
          Stories Worth Watching.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
          <button className="px-8 py-3 bg-white text-black font-semibold rounded-md hover:bg-gray-200 transition-colors duration-300">
            Watch Now
          </button>
          <button className="px-8 py-3 bg-gray-800/50 border border-gray-600 text-white font-semibold rounded-md hover:bg-gray-700/50 transition-colors duration-300 backdrop-blur-sm">
            More Details
          </button>
        </div>
      </div>

      {/* Footer note */}
      <div className="absolute bottom-8 text-sm text-gray-600 z-10">
        © 2026 Pincock Creations. All rights reserved.
      </div>

    </main>
  );
}