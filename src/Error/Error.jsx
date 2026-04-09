import React from 'react';

const Error = () => {
  return (
    <div className="min-h-screen bg-[#08080a] flex items-center justify-center p-6 font-mono overflow-hidden">
      
      {/* Background Decor: Cyber Grid & Glow */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f2937_1px,transparent_1px),linear-gradient(to_bottom,#1f2937_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20" />
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-500/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-purple-500/10 blur-[120px] rounded-full" />
      </div>

      <div className="relative z-10 max-w-4xl w-full">
        {/* Terminal Header */}
        <div className="bg-[#161b22]/80 backdrop-blur-md border border-white/10 rounded-t-2xl p-4 flex items-center justify-between shadow-2xl">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500/50 border border-red-500/20" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/50 border border-yellow-500/20" />
            <div className="w-3 h-3 rounded-full bg-green-500/50 border border-green-500/20" />
          </div>
          <div className="text-[10px] uppercase tracking-widest text-neutral-500 font-bold">
            System_Core_v4.0.4.exe
          </div>
        </div>

        {/* Main Content Window */}
        <div className="bg-black/40 backdrop-blur-xl border-x border-b border-white/10 rounded-b-2xl p-8 md:p-12 shadow-2xl relative overflow-hidden">
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            
            {/* Left: Code Side */}
            <div className="space-y-4 text-sm sm:text-base border-r border-white/5 pr-8 hidden md:block">
              <div className="flex gap-4">
                <span className="text-neutral-600">01</span>
                <p className="text-blue-400">const <span className="text-purple-400">CurrentState</span> = <span className="text-orange-300">'LOST'</span>;</p>
              </div>
              <div className="flex gap-4">
                <span className="text-neutral-600">02</span>
                <p className="text-blue-400">function <span className="text-yellow-300">findPath</span>() {'{'}</p>
              </div>
              <div className="flex gap-4">
                <span className="text-neutral-600">03</span>
                <p className="pl-4 text-neutral-400">if (location === <span className="text-red-400">null</span>) {'{'}</p>
              </div>
              <div className="flex gap-4 bg-red-500/10">
                <span className="text-red-500 font-bold">04</span>
                <p className="pl-8 text-red-400 italic font-semibold">// Error: Reality.js line 404</p>
              </div>
              <div className="flex gap-4">
                <span className="text-neutral-600">05</span>
                <p className="pl-4 text-neutral-400">{'}'}</p>
              </div>
              <div className="flex gap-4">
                <span className="text-neutral-600">06</span>
                <p className="text-blue-400">{'}'}</p>
              </div>
            </div>

            {/* Right: Action Side */}
            <div className="text-center md:text-left">
              <h1 className="text-7xl font-black text-white mb-2 tracking-tighter italic">
                404<span className="text-blue-500 animate-pulse">_</span>
              </h1>
              <h2 className="text-xl text-neutral-200 font-semibold mb-4 uppercase tracking-tight">
                Neural Link Broken
              </h2>
              <p className="text-neutral-400 text-sm leading-relaxed mb-8 italic">
                The requested memory address is corrupted or does not exist in this simulation. Re-routing required.
              </p>

              {/* THE MAIN BUTTON - GO HOME */}
              <a 
                href="/" 
                className="group relative inline-flex items-center justify-center px-8 py-4 font-bold text-white transition-all duration-200 bg-blue-600 font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 shadow-[0_0_20px_rgba(37,99,235,0.4)] hover:shadow-[0_0_35px_rgba(37,99,235,0.6)] active:scale-95"
              >
                <span className="relative flex items-center gap-2">
                  <span className="text-lg">{'>>'}</span>
                  RESTORE_SYSTEM (HOME)
                </span>
              </a>

              {/* Status Indicator */}
              <div className="mt-8 flex items-center justify-center md:justify-start gap-4">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-red-500 rounded-full animate-ping" />
                  <span className="text-[10px] text-neutral-500 uppercase">Packet_Loss: 100%</span>
                </div>
                <div className="w-[1px] h-3 bg-neutral-800" />
                <div className="text-[10px] text-neutral-500 uppercase font-bold tracking-widest">
                  AI_CORE: IDLE
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Bottom Decorative Label */}
        <div className="mt-4 text-center">
          <p className="text-[10px] text-neutral-700 tracking-[0.5em] uppercase">
            Unauthorized access to this node is strictly logged
          </p>
        </div>
      </div>
    </div>
  );
};

export default Error;