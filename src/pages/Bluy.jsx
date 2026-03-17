import React, { useState } from 'react';
import { FileText, Download, Bookmark, Briefcase } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Bluy = () => {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState('tab1');

  const projects = [
    "आटा, सत्तु एवं बेसन उत्पादन (Atta, Sattu & Besan Manufacturing)",
    "मसाला उत्पादन (Spice Production)",
    "नमकीन उत्पादन (Namkeen Production)",
    "जैम/जेली/सॉस उत्पादन (Jam/Jelly/Sauce Manufacturing)",
    "नूडल्स उत्पादन (Noodles Manufacturing)",
    "पापड़ एवं बड़ी उत्पादन (Papad & Bari Manufacturing Unit)",
    "आचार, मुरब्बा उत्पादन (Pickles Manufacturing Unit)",
    "फलों के जूस की इकाई (Fruit Juice)",
    "मिठाई उत्पादन (Sweets Production)",
    "बढ़ईगिरी (Carpentry)",
    "बाँस का सामान, फर्निचर उत्पादन इकाई (Bamboo Article and Furniture Manufacturing unit)",
    "नाव निर्माण (Boat Maker)",
    "बढई गिरी एवं लकड़ी के फर्निचर (Carpentry & Wood Furniture Workshop)",
    "बेंत का फर्निचर निर्माण (Cane Furniture Manufacturing)",
    "सीमेन्ट का जाली, दरवाजा एवं खिड़की इत्यादि (Cement Jalli, Doors, windows etc.)",
    "प्लास्टर ऑफ़ पेरिस का सामान (Plaster of Paris Item)",
    "डिटर्जेन्ट पाउडर, साबुन एवं शैम्पु (Detergent Powder, Soap & Shampoo)",
    "बिन्दी एव मेहंदी उत्पादन इकाई (Bindi&Mehandi Manufacturing Unit)",
    "मोमबत्ती उत्पादन (Candle Manufacturing)",
    "कृषि यंत्र निर्माण (Agri Equipment Manufacturing Unit)",
    "गेटग्रिल निर्माण एवं वेल्डिंग इकाई (Gate grill Fabrication Unit / Welding Unit)",
    "मधुमक्खी का बक्सा निर्माण (Bee-Box Manufacturing)",
    "आभूषण निर्माण वर्कशॉप (Gold Manufacturing Workshop)",
    "स्टील का बॉक्स/ट्रंक/रैक निर्माण (Steel Box / Trunk / Racks Manufacturing Unit)",
    "स्टील का अलमीरा निर्माण (Steel Almirah Manufacturing)",
    "लोहार/हथौड़ा और टुल किट निर्माण (Blacksmitch/Hammer and Tool Kit Maker)",
    "बिजली पंखा एसेम्बलिंग (Electrical Fan assembling)",
    "स्टेबिलाइजर/इनवर्टर/यू0पी0एस0/सी0वी0टी0 एसैम्बलिंग (Stabilizer / Inverter / UPS / CVT assembling)",
    "आई0 टी0 बिजनेस केन्द्र (IT Business Centre)",
    "मोबाईल एवं चार्जर रिपेयरिंग (Mobile Repairing & Mobile Charger Making)",
    "ऑटो गैरेज (Auto Garage)",
    "एयर कंडिसन रिपेयरिंग (Air Conditioner repair Service)",
    "टू-व्हीलर रिपेयरिंग (Two Wheeler Repairing Shop)",
    "टायर रिट्रेडिग (Tyre Vulcanizing / Retread)",
    "डीजल इंजन एवं पम्प रिपेयरिंग (Repair of Diesel Engines & Pump Sets)",
    "बिजली मोटर बाइडिंग (Motor Winding)",
    "ताला/चाभी की मरम्मति (Key Maker/Locksmith)",
    "सैलून (Barber Shop (Saloon)",
    "ब्यूटीपार्लर (Beauty Parlour)",
    "ढ़ाबा/होटल/रेस्टोरेन्ट/फुड ऑन व्हील्स (Establishment of Dhaba/ Hotel/Restaurant/Food on Wheels)",
    "ड्राईक्लीनिंग/लॉन्ड्री (Dry Cleaning/Laundry)",
    "राजमिस्त्री (Mason)",
    "सोना/चाँदी जेवर निर्माण (Gold/Silver Jewellery making Unit)",
    "केला रेशा निर्माण (Banana Fibre)",
    "फूल का माला/सजावटी माला निर्माण (Garland Maker)",
    "रेडिमेड वस्त्र निर्माण (Readymade garments)",
    "कसीदाकारी (Knitting Machines & Garments)",
    "बेडसीड, तकिया कवर निर्माण (Bed Sheet with Pillow Covers Set)",
    "मच्छरदानी/मछली पकड़ने का जाल निर्माण (Mosquito Net/Fishing Net Manufacturing)",
    "चमड़े के जैकेटस निर्माण (Leather Garments)",
    "चमड़े के जूता निर्माण (Leather Shoes)",
    "चमड़े के बैग, बेल्टस, वालेट एव ग्लोब्स आदि निर्माण (Leather Accessories like Bags, Belts, Wallets & Gloves etc.)",
    "चमडे़ एवं रेक्सीन का सीट कवर निर्माण (Leather and Rexin Sheets Cover for Vehicles)",
    "पीतल/ब्रास नक्कासी (Brass / Bronze Craft)",
    "काष्ठ कला आधारित उद्योग (Wood based Craft Industries)",
    "पत्थर की मूर्ति निर्माण (Stone based)",
    "जूट आधारित क्राफ्ट (Jute based)",
    "लाह चूड़ी निर्माण (Lac Bangles)",
    "गुड़िया और खिलौना निर्माण (Doll and Toy Maker)",
    "टोकड़ी/चटाइ/झाड़ू का निर्माण (Basket/Mat/Broom Maker/Coir Weaver)",
    "कुम्हार (मिट्टी का बर्तन/खिलौना निर्माण) (Potter)"
  ];

  return (
    <div className="page-wrapper animate-fade-in-up">
      <section className="dashboard-section container py-12">
        <div className="mmuy-header text-center mb-8">
          <h1 className="gradient-text" style={{ fontSize: '2.5rem', fontWeight: 800 }}>{t('mmuyBluy.bluyTitle')}</h1>
          <p className="text-muted mt-2">{t('mmuyBluy.bluySubtitle')}</p>
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
          </div>
        </div>

        {/* Tab Content Areas */}
        <div className="tab-content-wrapper">
          
          {/* TAB 1: Sankalp Cards - Empty in HTML but struct provided */}
          {activeTab === 'tab1' && (
            <div className="card-grid animate-fade-in-up">
               {/* As per provided HTML, the card container for Tab 1 was empty. 
                   Creating a generic placeholder to match the layout. */}
              <div className="glass-panel text-center download-card">
                <FileText size={40} className="text-primary" />
                <h3 className="font-semibold">{t('mmuyBluy.bluySankalp')}</h3>
                <a href="#" className="btn btn-primary sankalp-btn">
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

        </div>
      </section>
    </div>
  );
};

export default Bluy;
