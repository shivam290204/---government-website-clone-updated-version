import React, { useState } from 'react';
import { FileText, Download, Building2, Briefcase, Bookmark } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Mmuy = () => {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState('tab1');

  // Using raw data arrays to quickly simulate the long table
  const projects = [
    "Oil Mill/ Spice Production (तेल मिल/मसाला उत्पादन)",
    "Oil Mill (तेल मिल)",
    "Honey Processing (शहद प्रसंस्करण)",
    "Poha/Chura Manufacturing (पोहा/चूरा निर्माण)",
    "Jam/Jelly/Sauce Manufacturing/ Fruit Juice (जैम/जेली/सॉस निर्माण/फलों का रस)",
    "Makhana Processing (मखाना प्रसंस्करण)",
    "Mini rice Mill (मिनी चावल मिल)",
    "Pulse Mill (Dall Manufacturing) (दाल चक्की (दाल निर्माण)",
    "Corn Flakes Manucatruing (कॉर्न फ्लेक्स निर्माण)",
    "Corn Flakes Manufacturing/Corn Puff Mfg. (कॉर्न फ्लेक्स निर्माण/कॉर्न पफ निर्माण)",
    "Soya Product (सोया उत्पाद)",
    "Ice Cream Manufacturing & Dairy Products (आइसक्रीम निर्माण और डेयरी उत्पाद)",
    "Bakery Products (Bread, Biscuits, Rusk etc) (बेकरी उत्पाद (ब्रेड, बिस्कुट, रस्क आदि)",
    "Spice Production (मसाला उत्पादन)",
    "Sattu Manufacturing (सत्तू निर्माण)",
    "Aata, Besan Manufacturing (With Pulvarizer machine) (आटा, बेसन निर्माण (पल्वराइज़र मशीन के साथ)",
    "Aata/ Besan /Sattu/ Masala Manufacturing (आटा/बेसन/सत्तू/मसाला निर्माण)",
    "Hotel/ Restuarant/ Dhaba (होटल/रेस्तरां/ढाबा)",
    "Carpentry & Wood Furniture Workshop (With CNC Router) (बढ़ईगीरी और लकड़ी के फर्नीचर की कार्यशाला (सीएनसी राउटर सहित)",
    "Carpentry & Wood Furniture Workshop / Bee Box Mfg. (बढ़ईगीरी और लकड़ी के फर्नीचर की कार्यशाला / मधुमक्खी पालन बॉक्स निर्माण)",
    "Manufacturing of Steel Furniture, Almirah, Box / Trunk / Racks (इस्पात के फर्नीचर, अलमारी, बक्से/ट्रंक/रैक का निर्माण)",
    "Agriculture Equipment Gate grill Fabrication Unit / Welding Unit /Hospital Bed / Trolleys/ Light Commercial Vehicle Body / Rolling Shutters Manufacturing Units (कृषि उपकरण गेट ग्रिल निर्माण इकाई / वेल्डिंग इकाई अस्पताल बिस्तर / ट्रॉली / हल्के वाणिज्यिक वाहन बॉडी / रोलिंग शटर निर्माण इकाइयाँ)",
    "Nail/Kanti Manufacturing (कील/काटी निर्माण)",
    "Iron ring for Construction work (निर्माण कार्य के लिए लोहे का छल्ला)",
    "Rolling Shutters Mfg. (रोलिंग शटर निर्माण)",
    "Light Commercial Vehicle Body Mfg. (हल्के वाणिज्यिक वाहन बॉडी निर्माण)",
    "Cooler Manufacturing, Fan & Heater Assembling (कूलर निर्माण, पंखे और हीटर असेंबलिंग)",
    "LED Bulb Mfg. (एलईडी बल्ब निर्माण)",
    "Electric Switch/Socket/Electric Switch Board Mfg. (इलेक्ट्रिक स्विच/सॉकेट/इलेक्ट्रिक स्विच बोर्ड निर्माण)",
    "Electric Vehicle Assembling Unit (इलेक्ट्रिक वाहन असेंबलिंग इकाई)",
    "Cattle Feed Manufacturing (पशु आहार निर्माण)",
    "Poultry Feed (कुक्कुट आहार)",
    "Cattle Feed / Poultry Feed Manufacturing (पशु आहार / कुक्कुट आहार निर्माण)",
    "Note Book/Copy/File/Folder Manufacturing (Without square Machine) (नोटबुक/कॉपी/फाइल/फोल्डर निर्माण (बिना एज मशीन के)",
    "Note Book/Copy/File/Folder Manufacturing (With Edge square Machine) (नोटबुक/कॉपी/फाइल/फोल्डर निर्माण (एज स्क्वायर मशीन के साथ)",
    "Dry Cleaning (शुष्क सफाई)",
    "Sanitary Napkins / disposal dyper Mfg. (सैनिटरी नैपकिन/डिस्पोजेबल डायपर निर्माता)",
    "Detergent Powder Mfg. (डिटर्जेंट पाउडर निर्माण)",
    "Plastic Items / Boxes / Bottles Manufacturing (प्लास्टिक की वस्तुओं/बक्सों/बोतलों का निर्माण)",
    "Cement Jali, Doors, Windows Etc/ Paver Block & Tiles Manufacturing (सीमेंट की जाली, दरवाजे, खिड़कियां आदि/ पेवर ब्लॉक और टाइल्स का निर्माता)",
    "Paver Block & Tiles Manufacturing (पेवर ब्लॉक और टाइल्स निर्माता)",
    "Fly Ash Bricks (फ्लाइ्र ऐश ब्रिक्स)",
    "Fly Ash Bricks/R.C.C Spun Hume Pipe (फ्लाइ्र ऐश ब्रिक्स/आर.सी.सी. स्पन ह्यूम पाइप)",
    "Powerloom Unit (पावरलूम इकाई)",
    "Medical Diagnostic Centre (चिकित्सा निदान केंद्र)",
    "Cyber Café / IT Business Centre (साइबर कैफे/आईटी बिजनेस सेंटर)",
    "Auto/Bike Garage (ऑटो/बाइक गैराज)",
    "Paper Bag Manufacturing (पेपर बैग निर्माण)",
    "Paper Plate Manufacturing (पेपर प्लेट निर्माण)",
    "Flex Printing (फ्लेक्स प्रिंटिंग)",
    "Jute based Product Manufacturing (जूट आधारित उत्पाद निर्माण)",
    "Manufacturing of Leather and Rexin Products. (चमड़े और रेक्सिन उत्पादों का निर्माण)",
    "Sports Shoes/PVC Footwear Manufacturing (खेल के जूते/पीवीसी जूते निर्माण)",
    "Sports Shoes Manufacturing (खेल के जूते निर्माण)",
    "Readymade garments: Knitting/Hosiry (तैयार वस्त्र: बुनाई/होजरी)",
    "Banana Fiber Unit (केला फाइबर इकाई)",
    "Bamboo Article / Cane Furniture Manufacturing unit (बांस के सामान/बेंत के फर्नीचर निर्माण इकाई)",
    "Agriculture Drone As a Service (कृषि ड्रोन सेवा के रूप में)",
    "Madhubani Painting Unit (मधुबनी पेंटिंग इकाई)",
    "Metal Craft Unit (धातु शिल्प इकाई)",
    "Sikki Craft Unit (सिक्की शिल्प इकाई)",
    "Bamboo Craft unit (बांस शिल्प इकाई)",
    "Stone Craft unit (पत्थर शिल्प इकाई)",
    "Embroidery /Zardozi Unit (कढ़ाई/ज़रदोज़ी इकाई)",
    "Doll Making Unit (गुड़िया बनाने की इकाई)",
    "Lac Craft Unit (लाह क्राफ्ट इकाई)",
    "Ceramics Unit (चीनी मिट्टी की वस्तु की इकाई)",
    "Sea Shell Craft Unit (समुद्री सीप क्राफ्ट इकाई)",
    "Bawan Buti Unit (बावन बूटी इकाई)",
    "Silver Fish (Silver Jewellery) Unit (सिल्वर फिश (चांदी के आभूषण) इकाई)",
    "Carpet Weaving Unit (कालीन बुनाई इकाई)",
    "Fabric Dyeing unit (कपड़ा रंगाई इकाई)",
    "Fabric Printing unit (कपड़ा मुद्रण इकाई)",
    "Fabric Finishing & Calendering unit (कपड़ा फ़िनिशिंग और कैलेंडरिंग इकाई)"
  ];

  return (
    <div className="page-wrapper animate-fade-in-up">
      <section className="dashboard-section container py-12">
        <div className="mmuy-header text-center mb-8">
          <h1 className="gradient-text" style={{ fontSize: '2.5rem', fontWeight: 800 }}>{t('mmuyBluy.mmuyTitle')}</h1>
          <p className="text-muted mt-2">{t('mmuyBluy.mmuySubtitle')}</p>
        </div>

        {/* Custom Tab Navigation */}
        <div className="tab-navigation flex-center mb-8">
          <div className="tab-capsule">
            <button 
              className={`tab-btn ${activeTab === 'tab1' ? 'active' : ''}`}
              onClick={() => setActiveTab('tab1')}
            >
              <Bookmark size={18} />
              {t('mmuyBluy.tab1')}
            </button>
            <button 
              className={`tab-btn ${activeTab === 'tab2' ? 'active' : ''}`}
              onClick={() => setActiveTab('tab2')}
            >
              <Briefcase size={18} />
              {t('mmuyBluy.tab2')}
            </button>
            <button 
              className={`tab-btn ${activeTab === 'tab3' ? 'active' : ''}`}
              onClick={() => setActiveTab('tab3')}
            >
              <Building2 size={18} />
              {t('mmuyBluy.tab3')}
            </button>
          </div>
        </div>

        {/* Tab Content Areas */}
        <div className="tab-content-wrapper">
          
          {/* TAB 1: Sankalp Cards */}
          {activeTab === 'tab1' && (
            <div className="card-grid animate-fade-in-up">
              <div className="glass-panel text-center download-card">
                <FileText size={40} className="text-primary" />
                <h3 className="font-semibold">{t('mmuyBluy.scstSankalp')}</h3>
                <a href="https://udyami.bihar.gov.in/pdf/CMSCST.PDF" target="_blank" rel="noreferrer" className="btn btn-primary sankalp-btn">
                  <Download size={16} /> {t('mmuyBluy.btnDownload')}
                </a>
              </div>
              
              <div className="glass-panel text-center download-card">
                <FileText size={40} className="text-primary" />
                <h3 className="font-semibold">{t('mmuyBluy.ebcSankalp')}</h3>
                <a href="https://udyami.bihar.gov.in/pdf/CMEBC.PDF" target="_blank" rel="noreferrer" className="btn btn-primary sankalp-btn">
                  <Download size={16} /> {t('mmuyBluy.btnDownload')}
                </a>
              </div>

              <div className="glass-panel text-center download-card">
                <FileText size={40} className="text-primary" />
                <h3 className="font-semibold">{t('mmuyBluy.jointSankalp')}</h3>
                <a href="https://udyami.bihar.gov.in/pdf/1036-Sankalp-for-SCSTEBC.pdf" target="_blank" rel="noreferrer" className="btn btn-primary sankalp-btn">
                  <Download size={16} /> {t('mmuyBluy.btnDownload')}
                </a>
              </div>

              <div className="glass-panel text-center download-card">
                <FileText size={40} className="text-primary" />
                <h3 className="font-semibold">{t('mmuyBluy.mahilaSankalp')}</h3>
                <a href="https://udyami.bihar.gov.in/pdf/1037-Sankalp-for-Mahila-Udyami-Yojna.pdf" target="_blank" rel="noreferrer" className="btn btn-primary sankalp-btn">
                  <Download size={16} /> {t('mmuyBluy.btnDownload')}
                </a>
              </div>

              <div className="glass-panel text-center download-card">
                <FileText size={40} className="text-primary" />
                <h3 className="font-semibold">{t('mmuyBluy.yuvaSankalp')}</h3>
                <a href="https://udyami.bihar.gov.in/pdf/1038-Sankalp-for-Yuva-udyami-yojna.pdf" target="_blank" rel="noreferrer" className="btn btn-primary sankalp-btn">
                  <Download size={16} /> {t('mmuyBluy.btnDownload')}
                </a>
              </div>

              <div className="glass-panel text-center download-card">
                <FileText size={40} className="text-primary" />
                <h3 className="font-semibold">{t('mmuyBluy.minoritySankalp')}</h3>
                <a href="https://udyami.bihar.gov.in/pdf/circular-gov-2858-dtd-26-09-23.pdf" target="_blank" rel="noreferrer" className="btn btn-primary sankalp-btn">
                  <Download size={16} /> {t('mmuyBluy.btnDownload')}
                </a>
              </div>
            </div>
          )}

          {/* TAB 2: Projects List */}
          {activeTab === 'tab2' && (
            <div className="glass-panel data-table-wrapper animate-fade-in-up">
              <table className="premium-table">
                <thead>
                  <tr>
                    <th width="80">{t('mmuyBluy.tableSno')}</th>
                    <th>{t('mmuyBluy.tableProjectName')}</th>
                  </tr>
                </thead>
                <tbody>
                  {projects.map((project, index) => (
                    <tr key={index}>
                      <td className="font-semibold text-primary">{index + 1}.</td>
                      <td>{project}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {/* TAB 3: Resources */}
          {activeTab === 'tab3' && (
            <div className="glass-panel data-table-wrapper animate-fade-in-up">
              <table className="premium-table">
                <thead>
                  <tr>
                    <th width="80">{t('mmuyBluy.tableSno')}</th>
                    <th>{t('mmuyBluy.tableResourceName')}</th>
                    <th width="150" className="text-center">{t('mmuyBluy.tableAction')}</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="font-semibold text-primary">1.</td>
                    <td>2nd phase training Schedule</td>
                    <td className="text-center">
                      <a href="/pdf/Training Module_2nd Phase.pdf" className="btn btn-secondary btn-sm" target="_blank" rel="noreferrer">
                        <Download size={14} /> {t('mmuyBluy.btnDownload')}
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td className="font-semibold text-primary">2.</td>
                    <td>1st phase training Schedule</td>
                    <td className="text-center">
                      <a href="/pdf/Training Schedule MMUY 2024-25-1.pdf" className="btn btn-secondary btn-sm" target="_blank" rel="noreferrer">
                        <Download size={14} /> {t('mmuyBluy.btnDownload')}
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          )}

        </div>
      </section>
    </div>
  );
};

export default Mmuy;
