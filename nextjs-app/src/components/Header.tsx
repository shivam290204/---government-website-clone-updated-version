'use client';

import Image from 'next/image';
import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useTranslation } from 'react-i18next';
import TopStrip from './TopStrip';
import { Search, ChevronDown, Menu, Play, Pause } from 'lucide-react';
import { useAuth, useClerk } from '@clerk/nextjs';

const Header = () => {
  const { t } = useTranslation();
  const router = useRouter();
  const { isSignedIn } = useAuth();
  const { openSignIn } = useClerk();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchCategory, setSearchCategory] = useState('');

  const closeMobileMenu = () => setMobileMenuOpen(false);

  const handleProtectedClick = (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>, path?: string) => {
    if (!isSignedIn) {
      e.preventDefault();
      openSignIn({ forceRedirectUrl: path });
    }
  };

  const handleSearch = () => {
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery)}&category=${encodeURIComponent(searchCategory)}`);
    }
  };
  
  const handleSearchKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') handleSearch();
  };

  return (
    <header className="sticky top-0 z-50 w-full font-sans bg-white shadow-md flex flex-col items-center">
      <TopStrip />

      <div className="w-full flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4 px-4 sm:px-6 py-4 lg:py-0 bg-white lg:h-[90px] border-b border-gray-200">
        <div className="flex items-center justify-center lg:justify-start gap-4 text-center lg:text-left">
          <Image src="/logo.png" alt="Business Support Portal Logo" width={64} height={64} className="h-[64px] w-[64px] rounded-xl object-cover" priority />
          <div className="flex flex-col min-w-0">
            <span className="text-[#1a2b5f] text-xl sm:text-2xl font-bold font-serif leading-tight break-words">{t('header.brandTitle')}</span>
            <span className="text-gray-700 text-xs sm:text-sm font-medium break-words">{t('header.brandSubtitle')}</span>
          </div>
        </div>

        <div className="flex items-center border-2 border-[#1a2b5f] rounded w-full lg:max-w-md xl:max-w-xl h-[40px] overflow-hidden lg:flex flex-1 lg:mx-8 order-3 lg:order-none">
          <input 
            type="text" 
            placeholder={t('header.searchPlaceholder')} 
            className="w-full flex items-center px-3 h-full outline-none"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyDown={handleSearchKeyDown}
          />
          <div className="w-[1px] h-full bg-gray-300"></div>
          <select 
            className="h-full flex items-center px-2 bg-gray-100 text-sm outline-none cursor-pointer"
            value={searchCategory}
            onChange={(e) => setSearchCategory(e.target.value)}
          >
            <option value="">{t('header.allCategories')}</option>
            <option value="schemes">Schemes</option>
            <option value="resources">Resources</option>
            <option value="guidelines">Guidelines</option>
          </select>
          <button 
            type="button"
            onClick={handleSearch}
            className="h-full w-12 flex items-center justify-center bg-red-600 text-white hover:bg-red-700 transition"
          >
            <Search size={18} />
          </button>
        </div>

        <div className="items-center gap-4 hidden xl:flex">
          <div className="flex flex-col items-center px-3 py-2">
            <Image src="/india-flag.png" alt="Indian Flag" width={48} height={32} className="h-8 w-12 object-cover rounded-sm shadow-sm" />
            <span className="text-[#1a2b5f] text-xs font-bold mt-1 tracking-widest uppercase">Jai Hind</span>
          </div>
        </div>
      </div>



      <div className="w-full flex items-stretch justify-start px-4 sm:px-6 bg-[#1a3a6b] h-[46px] text-white text-sm font-semibold">
        <div className="flex items-center md:hidden">
          <button type="button" className="flex items-center gap-2 py-3" onClick={() => setMobileMenuOpen((value) => !value)}><Menu size={20} /> {t('header.menu')}</button>
        </div>
        <div className="hidden md:flex items-stretch h-full gap-4 md:gap-6">
          <Link href="/" className="flex items-center h-full px-3 hover:bg-[#f5a623] hover:text-[#1a3a6b] transition-colors">{t('header.home')}</Link>
          <div className="group relative flex items-stretch h-full">
            <button className="flex items-center gap-1 h-full px-3 hover:bg-[#f5a623] hover:text-[#1a3a6b] transition-colors" onClick={(e) => handleProtectedClick(e)}>
              {t('header.aboutUs')} <ChevronDown size={14} />
            </button>
            <div className="hidden group-hover:block absolute top-full left-0 bg-white text-[#1a2b5f] shadow-md border-t-2 border-orange-500 min-w-[200px] z-50">
              <Link href="/about-us" className="flex items-center w-full px-4 py-3 hover:bg-gray-100 border-b border-gray-100" onClick={(e) => handleProtectedClick(e, "/about-us")}>{t('header.overview')}</Link>
              <Link href="/about-us" className="flex items-center w-full px-4 py-3 hover:bg-gray-100" onClick={(e) => handleProtectedClick(e, "/about-us")}>{t('header.leadership')}</Link>
            </div>
          </div>
          <div className="group relative flex items-stretch h-full">
            <button className="flex items-center gap-1 h-full px-3 hover:bg-[#f5a623] hover:text-[#1a3a6b] transition-colors" onClick={(e) => handleProtectedClick(e)}>
              MMUY <ChevronDown size={14} />
            </button>
            <div className="hidden group-hover:block absolute top-full left-0 bg-white text-[#1a2b5f] shadow-md border-t-2 border-orange-500 min-w-[200px] z-50">
              <Link href="/mmuy" className="flex items-center w-full px-4 py-3 hover:bg-gray-100" onClick={(e) => handleProtectedClick(e, "/mmuy")}>{t('header.details')}</Link>
            </div>
          </div>
          <div className="group relative flex items-stretch h-full">
            <button className="flex items-center gap-1 h-full px-3 hover:bg-[#f5a623] hover:text-[#1a3a6b] transition-colors" onClick={(e) => handleProtectedClick(e)}>
              BLUY <ChevronDown size={14} />
            </button>
            <div className="hidden group-hover:block absolute top-full left-0 bg-white text-[#1a2b5f] shadow-md border-t-2 border-orange-500 min-w-[200px] z-50">
              <Link href="/bluy" className="flex items-center w-full px-4 py-3 hover:bg-gray-100" onClick={(e) => handleProtectedClick(e, "/bluy")}>{t('header.details')}</Link>
            </div>
          </div>
          <Link href="/success-stories" className="flex items-center h-full px-3 hover:bg-[#f5a623] hover:text-[#1a3a6b] transition-colors" onClick={(e) => handleProtectedClick(e, "/success-stories")}>{t('header.successStories')}</Link>
          <Link href="/resources" className="flex items-center h-full px-3 hover:bg-[#f5a623] hover:text-[#1a3a6b] transition-colors" onClick={(e) => handleProtectedClick(e, "/resources")}>{t('header.resources')}</Link>
          <Link href="/contact-us" className="flex items-center h-full px-3 hover:bg-[#f5a623] hover:text-[#1a3a6b] transition-colors" onClick={(e) => handleProtectedClick(e, "/contact-us")}>{t('header.contactUs')}</Link>
          <Link href="/chat" className="flex items-center h-full px-3 text-yellow-400 hover:bg-[#f5a623] hover:text-[#1a3a6b] transition-colors" onClick={(e) => handleProtectedClick(e, "/chat")}>{t('header.aiChatBot')}</Link>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden w-full bg-white border-b border-gray-200 shadow-sm">
          <div className="px-4 py-4 flex flex-col gap-2 text-[#1a2b5f]">
            <Link href="/" onClick={closeMobileMenu} className="px-3 py-3 rounded-lg bg-[#f8fafc] font-semibold">{t('header.home')}</Link>
            <Link href="/about-us" onClick={(e) => { handleProtectedClick(e, "/about-us"); closeMobileMenu(); }} className="px-3 py-3 rounded-lg bg-[#f8fafc] font-semibold">{t('header.aboutUs')}</Link>
            <Link href="/mmuy" onClick={(e) => { handleProtectedClick(e, "/mmuy"); closeMobileMenu(); }} className="px-3 py-3 rounded-lg bg-[#f8fafc] font-semibold">MMUY</Link>
            <Link href="/bluy" onClick={(e) => { handleProtectedClick(e, "/bluy"); closeMobileMenu(); }} className="px-3 py-3 rounded-lg bg-[#f8fafc] font-semibold">BLUY</Link>
            <Link href="/success-stories" onClick={(e) => { handleProtectedClick(e, "/success-stories"); closeMobileMenu(); }} className="px-3 py-3 rounded-lg bg-[#f8fafc] font-semibold">{t('header.successStories')}</Link>
            <Link href="/resources" onClick={(e) => { handleProtectedClick(e, "/resources"); closeMobileMenu(); }} className="px-3 py-3 rounded-lg bg-[#f8fafc] font-semibold">{t('header.resources')}</Link>
            <Link href="/contact-us" onClick={(e) => { handleProtectedClick(e, "/contact-us"); closeMobileMenu(); }} className="px-3 py-3 rounded-lg bg-[#f8fafc] font-semibold">{t('header.contactUs')}</Link>
            <Link href="/chat" onClick={(e) => { handleProtectedClick(e, "/chat"); closeMobileMenu(); }} className="px-3 py-3 rounded-lg bg-[#fff7ed] text-[#d97706] font-semibold">{t('header.aiChatBot')}</Link>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2">
              <Link href="/login/mmuy" onClick={closeMobileMenu} className="px-3 py-3 rounded-lg border border-[#3600a0]/20 font-semibold text-[#3600a0]">{t('header.mmuyLogin')}</Link>
              <Link href="/login/bluy" onClick={closeMobileMenu} className="px-3 py-3 rounded-lg border border-[#3600a0]/20 font-semibold text-[#3600a0]">{t('header.bluyLogin')}</Link>
            </div>
          </div>
        </div>
      )}

      <div className="hidden md:flex w-full items-stretch justify-center bg-[#eef2ff] h-[36px] border-b border-gray-200">
        <div className="group relative flex items-stretch h-full">
          <button type="button" className="flex items-center justify-center gap-2 text-[#1a3a6b] font-bold text-sm h-full px-4 hover:bg-white transition-colors border-x border-transparent hover:border-gray-200">
            <span className="text-orange-500 text-lg leading-none">{'->'}</span> {t('header.loginRegistration')} <ChevronDown size={14} />
          </button>
          <div className="hidden group-hover:block absolute top-full left-1/2 -translate-x-1/2 bg-white shadow-lg border-t-2 border-[#3600a0] min-w-[220px] z-50">
            <Link href="/login/mmuy" className="flex items-center w-full px-4 py-3 hover:bg-gray-100 text-sm font-semibold text-[#3600a0] border-b border-gray-100">{t('header.mmuyLogin')}</Link>
            <Link href="/login/bluy" className="flex items-center w-full px-4 py-3 hover:bg-gray-100 text-sm font-semibold text-[#3600a0]">{t('header.bluyLogin')}</Link>
          </div>
        </div>
      </div>

      <div className="w-full flex items-center bg-white min-h-[38px] border-b border-gray-300 relative overflow-hidden">
        <div
          className="hidden sm:flex items-center self-stretch bg-[#f5a623] text-[#1a3a6b] font-bold px-4 text-sm z-10 whitespace-nowrap"
          style={{ clipPath: 'polygon(0 0, 90% 0, 100% 50%, 90% 100%, 0 100%)', minWidth: '120px' }}
        >
          {t('header.latestNews')}
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

        <div className="flex-1 overflow-hidden ticker-wrap flex items-center min-h-[38px] relative">
          <div className="ticker-move text-xs sm:text-sm font-semibold text-[#1a3a6b] px-3 sm:px-4 gap-3 sm:gap-4">
            <span className="flex items-center">{t('header.ticker1')}</span>
            <span className="text-orange-500 font-bold flex items-center">|</span>
            <span className="flex items-center">{t('header.ticker2')}</span>
            <span className="text-orange-500 font-bold flex items-center">|</span>
            <span className="flex items-center">{t('header.ticker3')}</span>
          </div>
        </div>

        <div className="flex items-center justify-center gap-1 sm:gap-2 w-12 sm:w-16 self-stretch border-l border-gray-200 z-10 bg-white shrink-0">
          <button type="button" className="flex items-center justify-center text-gray-500 hover:text-green-600 p-1" onClick={() => {
            const el = document.querySelector('.ticker-move');
            if (el) (el as HTMLElement).style.animationPlayState = 'running';
          }}>
            <Play size={14} fill="currentColor" />
          </button>
          <button type="button" className="flex items-center justify-center text-gray-500 hover:text-red-600 p-1" onClick={() => {
            const el = document.querySelector('.ticker-move');
            if (el) (el as HTMLElement).style.animationPlayState = 'paused';
          }}>
            <Pause size={14} fill="currentColor" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;

