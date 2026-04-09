import React, { useContext } from "react";
import { BookContext } from "../../Context/BookContext";
import BookCard from "../../UI/BookCard";

const ReadList = () => {
  const { storedBooks } = useContext(BookContext);

  // Empty State Logic
  if (!storedBooks || storedBooks.length === 0) {
    return (
      <div className="min-h-[70vh] flex items-center justify-center p-6 bg-[#050505]">
        <div className="relative group max-w-lg w-full">
          {/* Futuristic Border Glow */}
          <div className="absolute -inset-0.5 bg-gradient-to-r from-emerald-500 to-cyan-600 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
          
          <div className="relative bg-[#0d1117] border border-white/5 rounded-2xl p-10 text-center">
            {/* AI Scanning Animation Icon */}
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 border-2 border-emerald-500/20 rounded-full flex items-center justify-center relative">
                <div className="absolute inset-0 border-t-2 border-emerald-500 rounded-full animate-spin"></div>
                <span className="text-3xl">💾</span>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-white mb-3 tracking-tight">
              Knowledge Base <span className="text-emerald-500 italic">Empty</span>
            </h2>
            
            <p className="text-neutral-500 text-sm font-mono mb-8 italic">
              "No completed logs found in your neural drive. Start processing books to build your intelligence database."
            </p>

            <a 
              href="/"
              className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white px-8 py-3 rounded-lg font-bold text-xs uppercase tracking-widest transition-all active:scale-95 shadow-[0_0_20px_rgba(16,185,129,0.2)]"
            >
              INITIATE_READING_PROTOCOL
            </a>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-6 py-12 min-h-screen">
      {/* Sleek Header Section */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12 border-b border-white/5 pb-8">
        <div>
          <div className="flex items-center gap-2 text-emerald-500 text-[10px] font-mono tracking-[0.4em] uppercase mb-2">
            <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
            Verified_Reader_Profile
          </div>
          <h2 className="text-4xl font-black text-white tracking-tighter">
            READING<span className="text-emerald-500">_LOGS</span>
          </h2>
        </div>
        
        <div className="flex items-center gap-6 text-sm font-mono">
          <div className="text-neutral-500">
            COMPLETED: <span className="text-white font-bold">{storedBooks.length}</span>
          </div>
          <div className="h-4 w-[1px] bg-neutral-800" />
          <div className="text-neutral-500 italic uppercase text-[10px]">
            Storage: <span className="text-emerald-500">Optimized</span>
          </div>
        </div>
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {storedBooks.map((book, index) => (
          <div key={index} className="hover:-translate-y-2 transition-transform duration-300">
             <BookCard book={book} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReadList;