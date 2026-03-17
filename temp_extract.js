const fs = require('fs');

const html = `
<div class="success_stories_container">
	<div class="success_stories_content">
		<p class="main_head">परियोजना</p>
		<div class="main_swiper_container">
			<swiper-container
				class="mySwiper"
				loop="true"
				pagination-clickable="true"
				pagination="true"
				slides-per-view="4"
				space-between="20"
				autoplay-delay="3000"
				autoplay-disable-on-interaction="false"
			>
				
				<swiper-slide class="slide">
					<a class="card_wrapper" href="/success-stories/126">
						<div class="slide_card">
							<img
								class="slide_img"
								src="/images/300px-Melissa_Askew_2015-08-08_(Unsplash).jpg"
								alt="img"
							/>
							<div class="background">
								<div class="background_container">
									<p class="serial_number">1</p>
									<p class="bottom_text">आटा, बेसन उत्पादन (पलवराइजर मशीन के साथ)</p>
									<div class="bottom_bar"></div>
								</div>
							</div>
						</div>
					</a>
				</swiper-slide>
				
				<swiper-slide class="slide">
					<a class="card_wrapper" href="/success-stories/160">
						<div class="slide_card">
							<img
								class="slide_img"
								src="/images/300px-Melissa_Askew_2015-08-08_(Unsplash).jpg"
								alt="img"
							/>
							<div class="background">
								<div class="background_container">
									<p class="serial_number">2</p>
									<p class="bottom_text">रेडिमेड गार्मेन्ट्स होजियरी (टी-सर्ट लेगिंस ट्रैक सूट कैफ्री टाॅप्स हार्फ पैंट इत्यादि)</p>
									<div class="bottom_bar"></div>
								</div>
							</div>
						</div>
					</a>
				</swiper-slide>
				
				<swiper-slide class="slide">
					<a class="card_wrapper" href="/success-stories/153">
						<div class="slide_card">
							<img
								class="slide_img"
								src="/images/300px-Melissa_Askew_2015-08-08_(Unsplash).jpg"
								alt="img"
							/>
							<div class="background">
								<div class="background_container">
									<p class="serial_number">3</p>
									<p class="bottom_text">बुक/काॅपी/फाईल/फोल्डर मैन्युफैक्चरिंग (एज स्क्वायर मशीन के साथ)</p>
									<div class="bottom_bar"></div>
								</div>
							</div>
						</div>
					</a>
				</swiper-slide>
				
				<swiper-slide class="slide">
					<a class="card_wrapper" href="/success-stories/139">
						<div class="slide_card">
							<img
								class="slide_img"
								src="/images/300px-Melissa_Askew_2015-08-08_(Unsplash).jpg"
								alt="img"
							/>
							<div class="background">
								<div class="background_container">
									<p class="serial_number">4</p>
									<p class="bottom_text">होटल/रेस्टुरेन्ट/ढ़ाबा</p>
									<div class="bottom_bar"></div>
								</div>
							</div>
						</div>
					</a>
				</swiper-slide>
				
				<swiper-slide class="slide">
					<a class="card_wrapper" href="/success-stories/161">
						<div class="slide_card">
							<img
								class="slide_img"
								src="/images/300px-Melissa_Askew_2015-08-08_(Unsplash).jpg"
								alt="img"
							/>
							<div class="background">
								<div class="background_container">
									<p class="serial_number">5</p>
									<p class="bottom_text">रेडिमेड गारमेन्ट्स (शर्ट फ्राॅक पजामा कुरता कुरती नाइटी इत्यादि)</p>
									<div class="bottom_bar"></div>
								</div>
							</div>
						</div>
					</a>
				</swiper-slide>
				
				<swiper-slide class="slide">
					<a class="card_wrapper" href="/success-stories/156">
						<div class="slide_card">
							<img
								class="slide_img"
								src="/images/300px-Melissa_Askew_2015-08-08_(Unsplash).jpg"
								alt="img"
							/>
							<div class="background">
								<div class="background_container">
									<p class="serial_number">6</p>
									<p class="bottom_text">डिटर्जेंट पाउडर/केक का उत्पादन</p>
									<div class="bottom_bar"></div>
								</div>
							</div>
						</div>
					</a>
				</swiper-slide>
				
				<swiper-slide class="slide">
					<a class="card_wrapper" href="/success-stories/170">
						<div class="slide_card">
							<img
								class="slide_img"
								src="/images/300px-Melissa_Askew_2015-08-08_(Unsplash).jpg"
								alt="img"
							/>
							<div class="background">
								<div class="background_container">
									<p class="serial_number">7</p>
									<p class="bottom_text">बढ़ईगिरी एवं लकड़ी के फर्निचर का वर्कशाॅप (सी0एन0सी0 राउटर के साथ)</p>
									<div class="bottom_bar"></div>
								</div>
							</div>
						</div>
					</a>
				</swiper-slide>
				
				<swiper-slide class="slide">
					<a class="card_wrapper" href="/success-stories/141">
						<div class="slide_card">
							<img
								class="slide_img"
								src="/images/300px-Melissa_Askew_2015-08-08_(Unsplash).jpg"
								alt="img"
							/>
							<div class="background">
								<div class="background_container">
									<p class="serial_number">8</p>
									<p class="bottom_text">फ्लैक्स प्रिंटिंग</p>
									<div class="bottom_bar"></div>
								</div>
							</div>
						</div>
					</a>
				</swiper-slide>
				
				<swiper-slide class="slide">
					<a class="card_wrapper" href="/success-stories/128">
						<div class="slide_card">
							<img
								class="slide_img"
								src="/images/300px-Melissa_Askew_2015-08-08_(Unsplash).jpg"
								alt="img"
							/>
							<div class="background">
								<div class="background_container">
									<p class="serial_number">9</p>
									<p class="bottom_text">मशाला उत्पादन</p>
									<div class="bottom_bar"></div>
								</div>
							</div>
						</div>
					</a>
				</swiper-slide>
				
				<swiper-slide class="slide">
					<a class="card_wrapper" href="/success-stories/124">
						<div class="slide_card">
							<img
								class="slide_img"
								src="/images/300px-Melissa_Askew_2015-08-08_(Unsplash).jpg"
								alt="img"
							/>
							<div class="background">
								<div class="background_container">
									<p class="serial_number">10</p>
									<p class="bottom_text">बेकरी उत्पाद (ब्रेड बिस्कुट रस्क इत्यादि)</p>
									<div class="bottom_bar"></div>
								</div>
							</div>
						</div>
					</a>
				</swiper-slide>
				
				<swiper-slide class="slide">
					<a class="card_wrapper" href="/success-stories/125">
						<div class="slide_card">
							<img
								class="slide_img"
								src="/images/300px-Melissa_Askew_2015-08-08_(Unsplash).jpg"
								alt="img"
							/>
							<div class="background">
								<div class="background_container">
									<p class="serial_number">11</p>
									<p class="bottom_text">आटा, बेसन उत्पादन (पलवराइजर मशीन को छोड़कर)</p>
									<div class="bottom_bar"></div>
								</div>
							</div>
						</div>
					</a>
				</swiper-slide>
				
				<swiper-slide class="slide">
					<a class="card_wrapper" href="/success-stories/152">
						<div class="slide_card">
							<img
								class="slide_img"
								src="/images/300px-Melissa_Askew_2015-08-08_(Unsplash).jpg"
								alt="img"
							/>
							<div class="background">
								<div class="background_container">
									<p class="serial_number">12</p>
									<p class="bottom_text">सेनेटरी नैपकिन उत्पादन</p>
									<div class="bottom_bar"></div>
								</div>
							</div>
						</div>
					</a>
				</swiper-slide>
				
				<swiper-slide class="slide">
					<a class="card_wrapper" href="/success-stories/143">
						<div class="slide_card">
							<img
								class="slide_img"
								src="/images/300px-Melissa_Askew_2015-08-08_(Unsplash).jpg"
								alt="img"
							/>
							<div class="background">
								<div class="background_container">
									<p class="serial_number">13</p>
									<p class="bottom_text">ऑटो गैरेज</p>
									<div class="bottom_bar"></div>
								</div>
							</div>
						</div>
					</a>
				</swiper-slide>
				
				<swiper-slide class="slide">
					<a class="card_wrapper" href="/success-stories/154">
						<div class="slide_card">
							<img
								class="slide_img"
								src="/images/300px-Melissa_Askew_2015-08-08_(Unsplash).jpg"
								alt="img"
							/>
							<div class="background">
								<div class="background_container">
									<p class="serial_number">14</p>
									<p class="bottom_text">बुक/काॅपी/फाईल/फोल्डर मैन्युफैक्चरिंग (एज स्क्वायर मशीन को छोड़कर)</p>
									<div class="bottom_bar"></div>
								</div>
							</div>
						</div>
					</a>
				</swiper-slide>
				
				<swiper-slide class="slide">
					<a class="card_wrapper" href="/success-stories/151">
						<div class="slide_card">
							<img
								class="slide_img"
								src="/images/300px-Melissa_Askew_2015-08-08_(Unsplash).jpg"
								alt="img"
							/>
							<div class="background">
								<div class="background_container">
									<p class="serial_number">15</p>
									<p class="bottom_text">ड्राई क्लिनिंग</p>
									<div class="bottom_bar"></div>
								</div>
							</div>
						</div>
					</a>
				</swiper-slide>
				
				<swiper-slide class="slide">
					<a class="card_wrapper" href="/success-stories/123">
						<div class="slide_card">
							<img
								class="slide_img"
								src="/images/300px-Melissa_Askew_2015-08-08_(Unsplash).jpg"
								alt="img"
							/>
							<div class="background">
								<div class="background_container">
									<p class="serial_number">16</p>
									<p class="bottom_text">मखाना प्रोसेसिंग</p>
									<div class="bottom_bar"></div>
								</div>
							</div>
						</div>
					</a>
				</swiper-slide>
				
				<swiper-slide class="slide">
					<a class="card_wrapper" href="/success-stories/169">
						<div class="slide_card">
							<img
								class="slide_img"
								src="/images/300px-Melissa_Askew_2015-08-08_(Unsplash).jpg"
								alt="img"
							/>
							<div class="background">
								<div class="background_container">
									<p class="serial_number">17</p>
									<p class="bottom_text">बढ़ईगिरी एवं लकड़ी के फर्निचर का निर्माण इकाई मधुमक्खी का बक्सा निर्माण (सी0एन0सी0 राउटर के बिना)</p>
									<div class="bottom_bar"></div>
								</div>
							</div>
						</div>
					</a>
				</swiper-slide>
				
				<swiper-slide class="slide">
					<a class="card_wrapper" href="/success-stories/166">
						<div class="slide_card">
							<img
								class="slide_img"
								src="/images/300px-Melissa_Askew_2015-08-08_(Unsplash).jpg"
								alt="img"
							/>
							<div class="background">
								<div class="background_container">
									<p class="serial_number">18</p>
									<p class="bottom_text">स्टील फर्नीचर अलमीरा बाॅक्स ट्रंक रैक निर्माण इकाई</p>
									<div class="bottom_bar"></div>
								</div>
							</div>
						</div>
					</a>
				</swiper-slide>
				
				<swiper-slide class="slide">
					<a class="card_wrapper" href="/success-stories/149">
						<div class="slide_card">
							<img
								class="slide_img"
								src="/images/300px-Melissa_Askew_2015-08-08_(Unsplash).jpg"
								alt="img"
							/>
							<div class="background">
								<div class="background_container">
									<p class="serial_number">19</p>
									<p class="bottom_text">पी0भी0सी0 फुटवियर</p>
									<div class="bottom_bar"></div>
								</div>
							</div>
						</div>
					</a>
				</swiper-slide>
				
				<swiper-slide class="slide">
					<a class="card_wrapper" href="/success-stories/127">
						<div class="slide_card">
							<img
								class="slide_img"
								src="/images/300px-Melissa_Askew_2015-08-08_(Unsplash).jpg"
								alt="img"
							/>
							<div class="background">
								<div class="background_container">
									<p class="serial_number">20</p>
									<p class="bottom_text">तेल मिल</p>
									<div class="bottom_bar"></div>
								</div>
							</div>
						</div>
					</a>
				</swiper-slide>
				
				<swiper-slide class="slide">
					<a class="card_wrapper" href="/success-stories/173">
						<div class="slide_card">
							<img
								class="slide_img"
								src="/images/300px-Melissa_Askew_2015-08-08_(Unsplash).jpg"
								alt="img"
							/>
							<div class="background">
								<div class="background_container">
									<p class="serial_number">21</p>
									<p class="bottom_text">पेपर कप एण्ड प्लेट का निर्माण</p>
									<div class="bottom_bar"></div>
								</div>
							</div>
						</div>
					</a>
				</swiper-slide>
				
				<swiper-slide class="slide">
					<a class="card_wrapper" href="/success-stories/140">
						<div class="slide_card">
							<img
								class="slide_img"
								src="/images/300px-Melissa_Askew_2015-08-08_(Unsplash).jpg"
								alt="img"
							/>
							<div class="background">
								<div class="background_container">
									<p class="serial_number">22</p>
									<p class="bottom_text">कुलर निर्माण</p>
									<div class="bottom_bar"></div>
								</div>
							</div>
						</div>
					</a>
				</swiper-slide>
				
				<swiper-slide class="slide">
					<a class="card_wrapper" href="/success-stories/222">
						<div class="slide_card">
							<img
								class="slide_img"
								src="/images/300px-Melissa_Askew_2015-08-08_(Unsplash).jpg"
								alt="img"
							/>
							<div class="background">
								<div class="background_container">
									<p class="serial_number">23</p>
									<p class="bottom_text">तेल मिल</p>
									<div class="bottom_bar"></div>
								</div>
							</div>
						</div>
					</a>
				</swiper-slide>
				
				<swiper-slide class="slide">
					<a class="card_wrapper" href="/success-stories/228">
						<div class="slide_card">
							<img
								class="slide_img"
								src="/images/300px-Melissa_Askew_2015-08-08_(Unsplash).jpg"
								alt="img"
							/>
							<div class="background">
								<div class="background_container">
									<p class="serial_number">24</p>
									<p class="bottom_text">मेडिकल जाँच घर</p>
									<div class="bottom_bar"></div>
								</div>
							</div>
						</div>
					</a>
				</swiper-slide>
				
				<swiper-slide class="slide">
					<a class="card_wrapper" href="/success-stories/235">
						<div class="slide_card">
							<img
								class="slide_img"
								src="/images/300px-Melissa_Askew_2015-08-08_(Unsplash).jpg"
								alt="img"
							/>
							<div class="background">
								<div class="background_container">
									<p class="serial_number">25</p>
									<p class="bottom_text">आईस्क्रीम उत्पादन/डेयरी प्रोडक्ट्स</p>
									<div class="bottom_bar"></div>
								</div>
							</div>
						</div>
					</a>
				</swiper-slide>
				
				<swiper-slide class="slide">
					<a class="card_wrapper" href="/success-stories/237">
						<div class="slide_card">
							<img
								class="slide_img"
								src="/images/300px-Melissa_Askew_2015-08-08_(Unsplash).jpg"
								alt="img"
							/>
							<div class="background">
								<div class="background_container">
									<p class="serial_number">26</p>
									<p class="bottom_text">बढ़ईगिरी एवं मधुमक्खी का बक्सा निर्माण</p>
									<div class="bottom_bar"></div>
								</div>
							</div>
						</div>
					</a>
				</swiper-slide>
				
				<swiper-slide class="slide">
					<a class="card_wrapper" href="/success-stories/233">
						<div class="slide_card">
							<img
								class="slide_img"
								src="/images/300px-Melissa_Askew_2015-08-08_(Unsplash).jpg"
								alt="img"
							/>
							<div class="background">
								<div class="background_container">
									<p class="serial_number">27</p>
									<p class="bottom_text">जैम/जेली/सॉस/फ्रुट जूस उत्पादन</p>
									<div class="bottom_bar"></div>
								</div>
							</div>
						</div>
					</a>
				</swiper-slide>
				
				<swiper-slide class="slide">
					<a class="card_wrapper" href="/success-stories/239">
						<div class="slide_card">
							<img
								class="slide_img"
								src="/images/300px-Melissa_Askew_2015-08-08_(Unsplash).jpg"
								alt="img"
							/>
							<div class="background">
								<div class="background_container">
									<p class="serial_number">28</p>
									<p class="bottom_text">कृषि यंत्र/ गेट ग्रिल/वेल्डिंग/ हॉस्पीटल बेड/ट्रॉली/हल्के वाणिज्यिक वाहन का बॉडी/रॉलिंग शटर निर्माण</p>
									<div class="bottom_bar"></div>
								</div>
							</div>
						</div>
					</a>
				</swiper-slide>
				
				<swiper-slide class="slide">
					<a class="card_wrapper" href="/success-stories/227">
						<div class="slide_card">
							<img
								class="slide_img"
								src="/images/300px-Melissa_Askew_2015-08-08_(Unsplash).jpg"
								alt="img"
							/>
							<div class="background">
								<div class="background_container">
									<p class="serial_number">29</p>
									<p class="bottom_text">नोट बुक/कॉपी/फाईल/फोल्डर मैन्युफैक्चरिंग (एज स्क्वायर मशीन को छोड़कर)</p>
									<div class="bottom_bar"></div>
								</div>
							</div>
						</div>
					</a>
				</swiper-slide>
				
				<swiper-slide class="slide">
					<a class="card_wrapper" href="/success-stories/225">
						<div class="slide_card">
							<img
								class="slide_img"
								src="/images/300px-Melissa_Askew_2015-08-08_(Unsplash).jpg"
								alt="img"
							/>
							<div class="background">
								<div class="background_container">
									<p class="serial_number">30</p>
									<p class="bottom_text">आटा, बेसन उत्पादन (पलवराइजर मशीन के साथ)</p>
									<div class="bottom_bar"></div>
								</div>
							</div>
						</div>
					</a>
				</swiper-slide>
				
				<swiper-slide class="slide">
					<a class="card_wrapper" href="/success-stories/243">
						<div class="slide_card">
							<img
								class="slide_img"
								src="/images/300px-Melissa_Askew_2015-08-08_(Unsplash).jpg"
								alt="img"
							/>
							<div class="background">
								<div class="background_container">
									<p class="serial_number">31</p>
									<p class="bottom_text">स्पोर्ट्स सूज/पी0भी0सी0 फूटवेयर</p>
									<div class="bottom_bar"></div>
								</div>
							</div>
						</div>
					</a>
				</swiper-slide>
				
				<swiper-slide class="slide">
					<a class="card_wrapper" href="/success-stories/223">
						<div class="slide_card">
							<img
								class="slide_img"
								src="/images/300px-Melissa_Askew_2015-08-08_(Unsplash).jpg"
								alt="img"
							/>
							<div class="background">
								<div class="background_container">
									<p class="serial_number">32</p>
									<p class="bottom_text">बेकरी उत्पाद (ब्रेड, बिस्कीट, रस्क इत्यादि)</p>
									<div class="bottom_bar"></div>
								</div>
							</div>
						</div>
					</a>
				</swiper-slide>
				
				<swiper-slide class="slide">
					<a class="card_wrapper" href="/success-stories/231">
						<div class="slide_card">
							<img
								class="slide_img"
								src="/images/300px-Melissa_Askew_2015-08-08_(Unsplash).jpg"
								alt="img"
							/>
							<div class="background">
								<div class="background_container">
									<p class="serial_number">33</p>
									<p class="bottom_text">फ्लैक्स प्रिन्टिग</p>
									<div class="bottom_bar"></div>
								</div>
							</div>
						</div>
					</a>
				</swiper-slide>
				
				<swiper-slide class="slide">
					<a class="card_wrapper" href="/success-stories/229">
						<div class="slide_card">
							<img
								class="slide_img"
								src="/images/300px-Melissa_Askew_2015-08-08_(Unsplash).jpg"
								alt="img"
							/>
							<div class="background">
								<div class="background_container">
									<p class="serial_number">34</p>
									<p class="bottom_text">साईबर कैफे/आई0टी0 बिजनेश सेन्टर</p>
									<div class="bottom_bar"></div>
								</div>
							</div>
						</div>
					</a>
				</swiper-slide>
				
				<swiper-slide class="slide">
					<a class="card_wrapper" href="/success-stories/303">
						<div class="slide_card">
							<img
								class="slide_img"
								src="/images/300px-Melissa_Askew_2015-08-08_(Unsplash).jpg"
								alt="img"
							/>
							<div class="background">
								<div class="background_container">
									<p class="serial_number">35</p>
									<p class="bottom_text">पोहा/चूड़ा उत्पादन</p>
									<div class="bottom_bar"></div>
								</div>
							</div>
						</div>
					</a>
				</swiper-slide>
				
			</swiper-container>
		</div>

		<p class="small_head">सफलता की कहानियां गैलरी</p>

		<div class="small_slider_container">
			<swiper-container
				class="mySwiperTwo"
				loop="true"
				pagination="false"
				slides-per-view="5"
				space-between="50"
				autoplay-delay="3500"
				autoplay-disable-on-interaction="false"
			>
				
				<swiper-slide class="slide">
					<div class="cards">
						<img
							src="https://udyamiadmin.bihar.gov.in//pdfupload/images/2024-05-15T08-51-23.726Z-i.jpg"
							alt="img"
						/>
					</div>
				</swiper-slide>
				
				<swiper-slide class="slide">
					<div class="cards">
						<img
							src="https://udyamiadmin.bihar.gov.in//pdfupload/images/2024-07-13T05-44-14.268Z-WhatsApp-Image-2024-07-12-at-2.00.34-PM.jpeg"
							alt="img"
						/>
					</div>
				</swiper-slide>
				
				<swiper-slide class="slide">
					<div class="cards">
						<img
							src="https://udyamiadmin.bihar.gov.in//pdfupload/images/2024-07-03T08-56-53.421Z-WhatsApp-Image-2024-07-03-at-1.19.12-PM.jpeg"
							alt="img"
						/>
					</div>
				</swiper-slide>
				
				<swiper-slide class="slide">
					<div class="cards">
						<img
							src="https://udyamiadmin.bihar.gov.in//pdfupload/images/2024-06-10T11-14-28.947Z-IMG-20240610-WA0039.jpg"
							alt="img"
						/>
					</div>
				</swiper-slide>
				
				<swiper-slide class="slide">
					<div class="cards">
						<img
							src="https://udyamiadmin.bihar.gov.in//pdfupload/images/2024-07-16T11-05-41.376Z-CHANDAN-KUMAR6.jpg"
							alt="img"
						/>
					</div>
				</swiper-slide>
				
			</swiper-container>
		</div>
	</div>
</div>
`;

let projects = [];
const projectRegex = /<a class="card_wrapper" href="(.*?)">[\s\S]*?<img[\s\S]*?src="(.*?)"[\s\S]*?<p class="serial_number">(.*?)<\/p>\s*?<p class="bottom_text">(.*?)<\/p>/g;
let match;
while ((match = projectRegex.exec(html)) !== null) {
  projects.push({
    link: match[1],
    image: match[2],
    index: match[3],
    title: match[4].trim()
  });
}

let gallery = [];
const galleryRegex = /<swiper-slide class="slide">\s*?<div class="cards">\s*?<img\s*?src="(.*?)"/g;
while ((match = galleryRegex.exec(html)) !== null) {
  gallery.push(match[1]);
}

fs.writeFileSync('e:/government project/src/data/successStoriesData.js', \`export const projects = \${JSON.stringify(projects, null, 2)};\\n\\nexport const gallery = \${JSON.stringify(gallery, null, 2)};\\n\`);
console.log("Data extracted!");
