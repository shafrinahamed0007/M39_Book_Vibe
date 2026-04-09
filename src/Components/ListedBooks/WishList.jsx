import React, { useContext } from "react";
import { BookContext } from "../../Context/BookContext";
import BookCard from "../../UI/BookCard";

const WishList = () => {
  const { wishList } = useContext(BookContext);

  if (wishList.length === 0) {
    return (
      <div className="min-h-[70vh] flex items-center justify-center p-6">
        <div className="relative w-full max-w-xl group">
          {/* Neon Glow Background */}
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
          
          <div className="relative bg-[#0d1117]/90 backdrop-blur-xl border border-white/10 rounded-3xl p-12 text-center shadow-2xl">
            {/* Visual Header: Animated Empty Brackets */}
            <div className="mb-8 relative inline-block">
               <div className="text-7xl font-mono font-bold text-white/5 tracking-tighter">
                [ <span className="text-blue-500/40 animate-pulse">null</span> ]
               </div>
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full">
                  <span className="text-xs font-mono tracking-[0.5em] text-cyan-400 uppercase">Empty_Stack</span>
               </div>
            </div>

            {/* Main Message */}
            <div className="space-y-4">
              <h2 className="text-3xl font-bold text-white tracking-tight">
                Wishlist <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Not Found</span>
              </h2>
              <p className="text-neutral-400 text-sm font-mono italic max-w-xs mx-auto leading-relaxed">
                "System scan complete. Error 0x004: No intellectual assets found in your neural storage."
              </p>
            </div>

            {/* Pseudo-Code Divider */}
            <div className="my-8 py-3 px-4 bg-black/40 rounded-xl border border-white/5 text-[11px] font-mono text-left">
              <p className="text-gray-500">// Auto-generated system log</p>
              <p className="text-purple-400 italic">
                status: <span className="text-amber-200">"awaiting_data"</span>,
              </p>
              <p className="text-purple-400 italic">
                action: <span className="text-cyan-400 underline cursor-pointer" onClick={() => window.location.href='/'}>"navigate_to_library"</span>
              </p>
            </div>

            {/* Action Button */}
            <a 
              href="/"
              className="inline-flex items-center gap-3 bg-white text-black px-10 py-4 rounded-2xl font-black text-xs uppercase tracking-[0.2em] hover:bg-cyan-400 hover:scale-105 transition-all duration-300 shadow-[0_10px_30px_rgba(255,255,255,0.1)]"
            >
              <span>+</span> Feed the AI (Add Books)
            </a>
          </div>

          {/* Bottom Floating Status */}
          <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 bg-[#161b22] px-4 py-1.5 rounded-full border border-white/10 shadow-xl">
            <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
            <span className="text-[10px] text-neutral-500 font-mono tracking-widest uppercase">System: Online</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-10">
      <div className="flex items-center gap-4 mb-10">
        <h2 className="text-3xl font-bold text-white tracking-tight">Your Wishlist</h2>
        <div className="h-[1px] flex-grow bg-gradient-to-r from-white/20 to-transparent" />
        <span className="text-xs font-mono text-neutral-500 uppercase tracking-widest">
            {wishList.length} items_stored
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {wishList.map((book, index) => (
          <BookCard key={index} book={book} />
        ))}
      </div>
    </div>
  );
};

export default WishList;