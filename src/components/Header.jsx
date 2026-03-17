import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import TopStrip from './TopStrip';
import { Search, ChevronDown, Menu, Play, Pause } from 'lucide-react';

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full font-sans bg-white shadow-md flex flex-col items-center">
      {/* ROW 1 — TopStrip */}
      <TopStrip />

      {/* ROW 2 — Branding Bar */}
      <div className="w-full flex items-center justify-between px-6 bg-white h-[90px] border-b border-gray-200">
        {/* LEFT */}
        <div className="flex items-center gap-4">
          <img src="/assets/images/emblem-dark.png" alt="National Emblem" className="h-[70px] w-auto" />
          <div className="flex flex-col">
            <span className="text-[#1a2b5f] text-2xl font-bold font-serif">Department of Industries</span>
            <span className="text-gray-700 text-sm font-medium">Government of Bihar | उद्योग विभाग</span>
          </div>
        </div>

        {/* CENTER */}
        <div className="flex items-center border-2 border-[#1a2b5f] rounded max-w-md h-[40px] overflow-hidden hidden lg:flex flex-1 mx-8">
          <input type="text" placeholder="Search..." className="w-full flex items-center px-3 h-full outline-none" />
          <div className="w-[1px] h-full bg-gray-300"></div>
          <select className="h-full flex items-center px-2 bg-gray-100 text-sm outline-none cursor-pointer">
            <option>All Categories</option>
          </select>
          <button className="h-full w-12 flex items-center justify-center bg-red-600 text-white hover:bg-red-700">
            <Search size={18} />
          </button>
        </div>

        {/* RIGHT */}
        <div className="flex items-center gap-4 hidden xl:flex">
          <div className="flex flex-col items-center justify-center">
            <img src="/assets/images/india-flag-1.jpg" alt="National Emblem" className="h-[45px] w-[67px] object-cover" />
            <span className="text-orange-500 font-bold text-sm leading-tight mt-0.5">Digital India</span>
            <span className="text-green-600 font-bold text-[7px] tracking-widest">Power To Empower</span>
          </div>
        </div>
      </div>

      {/* ROW 3 — Scheme Strip */}
      <div className="w-full flex items-center justify-between px-6 bg-[#f0f4ff] h-[52px] border-t-[3px] border-[#1a2b5f]">
        <div className="flex flex-col">
          <span className="text-orange-500 font-bold text-lg leading-tight">मुख्यमंत्री उद्यमी योजना</span>
          <span className="text-[#1a2b5f] text-xs font-semibold">Mukhyamantri Udyami Yojana</span>
        </div>
        <div className="flex flex-col items-center justify-center">
          <span className="text-[#1a2b5f] font-bold text-base">Department of Industries</span>
          <span className="text-gray-500 text-xs italic">Government of Bihar</span>
        </div>
        <div className="flex flex-col text-right">
          <span className="text-orange-500 font-bold text-lg leading-tight">बिहार लघु उद्यमी योजना</span>
          <span className="text-[#1a2b5f] text-xs font-semibold">Bihar Laghu Udyami Yojana</span>
        </div>
      </div>

      {/* ROW 4 — Nav Bar */}
      <div className="w-full flex items-center justify-between px-6 bg-[#1a3a6b] h-[46px] text-white text-sm font-semibold">
        <button className="md:hidden flex items-center gap-2"><Menu size={20} /> Menu</button>
        <div className="hidden md:flex items-center h-full gap-1">
          <Link to="/" className="flex items-center h-full px-3 hover:bg-[#f5a623] hover:text-[#1a3a6b] transition-colors">Home</Link>
          <div className="group relative flex items-center h-full">
            <button className="flex items-center gap-1 h-full px-3 hover:bg-[#f5a623] hover:text-[#1a3a6b] transition-colors">
              About Us <ChevronDown size={14} />
            </button>
            <div className="hidden group-hover:block absolute top-[46px] left-0 bg-white text-[#1a2b5f] shadow-md border-t-2 border-orange-500 min-w-[200px] z-50">
              <Link to="/about-us" className="flex items-center w-full px-4 py-3 hover:bg-gray-100 border-b border-gray-100">Overview</Link>
              <Link to="/about-us" className="flex items-center w-full px-4 py-3 hover:bg-gray-100">Leadership</Link>
            </div>
          </div>
          <div className="group relative flex items-center h-full">
            <button className="flex items-center gap-1 h-full px-3 hover:bg-[#f5a623] hover:text-[#1a3a6b] transition-colors">
              MMUY <ChevronDown size={14} />
            </button>
            <div className="hidden group-hover:block absolute top-[46px] left-0 bg-white text-[#1a2b5f] shadow-md border-t-2 border-orange-500 min-w-[200px] z-50">
              <Link to="/mmuy" className="flex items-center w-full px-4 py-3 hover:bg-gray-100">Details</Link>
            </div>
          </div>
          <div className="group relative flex items-center h-full">
            <button className="flex items-center gap-1 h-full px-3 hover:bg-[#f5a623] hover:text-[#1a3a6b] transition-colors">
              BLUY <ChevronDown size={14} />
            </button>
            <div className="hidden group-hover:block absolute top-[46px] left-0 bg-white text-[#1a2b5f] shadow-md border-t-2 border-orange-500 min-w-[200px] z-50">
              <Link to="/bluy" className="flex items-center w-full px-4 py-3 hover:bg-gray-100">Details</Link>
            </div>
          </div>
          <Link to="/success-stories" className="flex items-center h-full px-3 hover:bg-[#f5a623] hover:text-[#1a3a6b] transition-colors">Success Stories</Link>
          <Link to="/resources" className="flex items-center h-full px-3 hover:bg-[#f5a623] hover:text-[#1a3a6b] transition-colors">Resources</Link>
          <Link to="/contact-us" className="flex items-center h-full px-3 hover:bg-[#f5a623] hover:text-[#1a3a6b] transition-colors">Contact Us</Link>
          <Link to="/chat" className="flex items-center h-full px-3 text-yellow-400 hover:bg-[#f5a623] hover:text-[#1a3a6b] transition-colors">Udyami AI Chat Bot</Link>
        </div>
        <div className="flex items-center border border-white rounded-full px-3 py-1 bg-transparent hidden sm:flex">
          <input type="text" placeholder="Search..." className="bg-transparent outline-none text-white placeholder-white opacity-80 text-xs w-32" />
        </div>
      </div>

      {/* ROW 5 — Login Bar */}
      <div className="w-full flex items-center justify-center bg-[#eef2ff] h-[36px] border-b border-gray-200">
        <div className="group relative flex items-center h-full">
          <button className="flex items-center justify-center gap-2 text-[#1a3a6b] font-bold text-sm h-full px-4 hover:bg-white transition-colors border-x border-transparent hover:border-gray-200">
            <span className="text-orange-500 text-lg leading-none">→</span> लॉग इन / पंजीकरण <ChevronDown size={14} />
          </button>
          <div className="hidden group-hover:block absolute top-[36px] left-1/2 -translate-x-1/2 bg-white shadow-lg border-t-2 border-[#3600a0] min-w-[220px] z-50">
            <Link to="/login/mmuy" className="flex items-center w-full px-4 py-3 hover:bg-gray-100 text-sm font-semibold text-[#3600a0] border-b border-gray-100">MMUY</Link>
            <Link to="/login/bluy" className="flex items-center w-full px-4 py-3 hover:bg-gray-100 text-sm font-semibold text-[#3600a0]">BLUY</Link>
          </div>
        </div>
      </div>

      {/* ROW 6 — News Ticker */}
      <div className="w-full flex items-center bg-white h-[38px] border-b border-gray-300 relative overflow-hidden">
        <div 
          className="flex items-center h-full bg-[#f5a623] text-[#1a3a6b] font-bold px-4 text-sm z-10 whitespace-nowrap" 
          style={{ clipPath: 'polygon(0 0, 90% 0, 100% 50%, 90% 100%, 0 100%)', minWidth: '120px' }}
        >
          Latest News
        </div>
        
        <style>{`
          @keyframes ticker { 
            from { transform: translateX(100%) }
            to   { transform: translateX(-100%) }
          }
          .ticker-move { 
            animation: ticker 30s linear infinite;
            white-space: nowrap;
            display: flex;
            align-items: center;
          }
          .ticker-wrap:hover .ticker-move {
            animation-play-state: paused;
          }
        `}</style>
        
        <div className="flex-1 overflow-hidden ticker-wrap flex items-center h-full relative">
          <div className="ticker-move text-sm font-semibold text-[#1a3a6b] px-4 gap-4">
            <span className="flex items-center">Applications for STUMB Portal Phase 1 roll out will commence next month.</span>
            <span className="text-orange-500 font-bold flex items-center">|</span>
            <span className="flex items-center">Document verification for BLUY selected candidates extended till 30.08.2025.</span>
            <span className="text-orange-500 font-bold flex items-center">|</span>
            <span className="flex items-center">DigiLocker integration is now live for automatic document fetching.</span>
          </div>
        </div>
        
        <div className="flex items-center justify-center gap-2 w-16 h-full border-l border-gray-200 z-10 bg-white shrink-0">
          <button className="flex items-center justify-center text-gray-500 hover:text-green-600 p-1" onClick={() => {
            const el = document.querySelector('.ticker-move');
            if(el) el.style.animationPlayState = 'running';
          }}>
            <Play size={14} fill="currentColor" />
          </button>
          <button className="flex items-center justify-center text-gray-500 hover:text-red-600 p-1" onClick={() => {
            const el = document.querySelector('.ticker-move');
            if(el) el.style.animationPlayState = 'paused';
          }}>
            <Pause size={14} fill="currentColor" />
          </button>
        </div>
      </div>

    </header>
  );
};

export default Header;
