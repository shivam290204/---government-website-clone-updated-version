import React from 'react';
import HeroSection from '../components/HeroSection';
import ImportantNotices from '../components/ImportantNotices';
import LatestUpdates from '../components/LatestUpdates';
import QuickLinks from '../components/QuickLinks';
import Schemes from '../components/Schemes';

const Home = () => {
  return (
    <div className="page-wrapper animate-fade-in-up">
      <HeroSection />
        
        <section className="dashboard-section container py-12">
          {/* Main Content Grid */}
          <div className="dashboard-grid">
            
            {/* Left Column */}
            <div className="dashboard-col-left">
              <ImportantNotices />
              <div className="mt-8">
                <QuickLinks />
              </div>
            </div>
            
            {/* Right Column */}
            <div className="dashboard-col-right">
              <LatestUpdates />
              <div className="mt-8">
                <Schemes />
              </div>
            </div>
            
          </div>
        </section>
    </div>
  );
};

export default Home;
