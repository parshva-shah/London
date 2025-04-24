'use client'
import Link from 'next/link'
import { useState } from "react"

export default function Section3() {
	const [isTab, setIsTab] = useState(1)
	const handleTab = (i: number) => {
		setIsTab(i)
	}

	const [isAccordion, setIsAccordion] = useState(1)

const handleAccordion = (key: any) => {
    setIsAccordion(prevState => prevState === key ? null : key)
}

	return (
		<>

			<div className="event1-section-area blue-bg sp1">
				<div className="container">
					<div className="row">
						<div className="col-lg-6 m-auto">
							<div className="event-header heading2 space-margin60 text-center">
								<h5 data-aos="fade-left" className="cream-bg text-blue" data-aos-duration={800}>Event Schedule</h5>
								<div className="space16" />
								<h2 className="text-anime-style-3 text-cream">Sacred Weekend Schedule</h2>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col-lg-12">
							<div data-aos="fade-up" data-aos-duration={900}>
								<ul className="nav nav-pills d-none space-margin60" id="pills-tab" role="tablist">
									<li className="nav-item" onClick={() => handleTab(1)}>
										<button className={isTab == 1 ? "nav-link active" : "nav-link"} id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">
											<span className="day">Friday</span>
											<span className="vl-flex">
												
												<span className="cal">20</span>
												<span className="date">JUN<br />
													2025</span>
											</span>
										</button>
									</li>
									<li className="nav-item" onClick={() => handleTab(2)}>
										<button className={isTab == 2 ? "nav-link active" : "nav-link"} id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">
											<span className="day">Friday</span>
											<span className="vl-flex">
												<span className="cal">20</span>
												<span className="date">JUN <br />
													2025</span>
											</span>
										</button>
									</li>
								</ul>
							</div>
							<div className="tab-content d-flex" id="pills-tabContent">
							<div className="tab-pane fade show active mx-3" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab" tabIndex={0}>
									<div className="tabs-widget-boxarea" data-aos="fade-up" data-aos-duration={800}>
										<div className="row align-items-center">
											<div className="col-lg-4">
												{/* <div className="img1">
													<img src="/assets/img/all-images/event/event-img1.png" alt="" />
												</div> */}
													<ul className="nav nav-pills" id="pills-tab" role="tablist">
									<li className="nav-item" onClick={() => handleTab(1)}>
										<button className={isTab == 1 ? "nav-link active" : "nav-link"} id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">
											<span className="day">Friday</span>
											<span className="vl-flex">
												
												<span className="cal">20</span>
												<span className="date">JUN<br />
													2025</span>
											</span>
										</button>
									</li>
									</ul>
											</div>
											<div className="col-lg-8">
												<div className="content-area">
											
												<ul>
														<li>
															<p><img src="/assets/img/icons/clock1.svg" alt="" /> 8:00
																PM - 10:00 PM </p>
														</li>
														<li>
															<p><img src="/assets/img/icons/location1.svg" alt="" /> London Spiritual Centre </p>
														</li>
													</ul>
													<div className="space20" />
													<p className="head">Bhakti & Discourse</p>
												</div>
											</div>
										</div>
									</div>
									<div className="space30" />
									
								</div>
							<div className="tab-pane fade show active mx-3" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab" tabIndex={0}>
							<div className="tabs-widget-boxarea" data-aos="fade-up" data-aos-duration={800}>
										<div className="row align-items-center">
											<div className="col-lg-4">
												{/* <div className="img1">
													<img src="/assets/img/all-images/event/event-img1.png" alt="" />
												</div> */}
													<ul className="nav nav-pills" id="pills-tab" role="tablist">
									<li className="nav-item" onClick={() => handleTab(1)}>
										<button className={isTab == 1 ? "nav-link active" : "nav-link"} id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">
											<span className="day">Saturday</span>
											<span className="vl-flex">
												
												<span className="cal">21</span>
												<span className="date">JUN<br />
													2025</span>
											</span>
										</button>
									</li>
									</ul>
											</div>
											<div className="col-lg-8">
												<div className="content-area">
											
													<ul>
														<li>
															<p><img src="/assets/img/icons/clock1.svg" alt="" /> 8:00
																PM - 10:00 PM </p>
														</li>
														<li>
															<p><img src="/assets/img/icons/location1.svg" alt="" /> London Spiritual Centre </p>
														</li>
													</ul>
													<div className="space20" />
													<p className="head">Meditative Sound Bath & Discourse</p>
													
												</div>
											</div>
										</div>
									</div>
</div>
							</div>
						</div>
					</div>
					<div className="container about4-section-area">
						<div className="row">
						<div className="col-lg-12">
						<div className="about4-heading heading6 text-center">
								<h5 data-aos="fade-left" className="darkbrown-bg text-offwhite" data-aos-duration={800}>PLEASE BE SEATED 30 MINUTES BEFORE THE EVENT START TIME.</h5>
								<div className="space10" />
								<ul data-aos="fade-left" data-aos-duration={1000}>
									<li><img src="/assets/img/icons/check4.svg" alt="" />Dinner has been arranged from 6:00 pm to 7:30 pm on Friday & Saturday. </li>
									<li><img src="/assets/img/icons/check4.svg" alt="" />Explore an immersive exhibition on the global initiatives of SRMD for one hour prior to and follow the event on both days.</li>
							    </ul>
						</div>
						

{/*===== FAQ AREA STARTS =======*/}
<div className="faq-inner-section-area py-5">
						<div className="container">
							
							<div className="row">
								<div className="col-lg-12">
									<div className="faq-widget-area">
																			
												<div className="faq-section-area">
													<div className="row">
														<div className="col-lg-12">
															<div className="accordian-area">
																<div className="accordion" id="accordionExample">
																	<div className="accordion-item">
																		<h2 className="accordion-header"onClick={() => handleAccordion (2)}>
																			<button className={isAccordion == 2 ? "accordion-button" : "accordion-button collapsed"} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">Additional Information</button>
																		</h2>
																		<div id="collapseOne" className={isAccordion == 2 ? "accordion-collapse collapse show" : "accordion-collapse collapse"} data-bs-parent="#accordionExample">
																			<div className="accordion-body pt-0">
																			<div className="about4-heading heading6 p-0">
														
								<ul data-aos="fade-left" className='p-0 pb-4' data-aos-duration={1000}>
									<li>1. Due to limited capacity, seating in the Discourse is on a ‘first come, first serve’ basis </li>
									<li>2. Doors open 1 hour before the Discourse and will be closed 5 minutes before the event starts.
									</li>
									<li>3. Children under 12 years of age are not allowed in the Hall during the Discourse
									</li>
									<li>4. A crèche facility will be available for children between 5-11 years during the discourse. It will be open 30 minutes before the discourse and close 30 minutes after discourse. Please register them while doing your registration. Places are limited so we encourage you to pre-register.
									</li>
									<li>5. A separate room will be available for parents and children aged 0-4 years. These children must be supervised by their parents at all times. No registration is required for this.
									</li>
									<li>5. The management will take utmost care of all participants. However, the management is not responsible for any injury/loss or damage to any individuals or their property during the event.

									</li>
									<li>6. Please follow a conservative dress code, no shorts or sleeveless clothing.
									</li>
								</ul>
								
							</div>
																			</div>
																		</div>
																	</div>
																	<div className="space20" />
												
																</div>
															</div>
														</div>
													</div>
											
											</div>
										
										</div>
									</div>
								</div>
							</div>
						</div>
					{/*===== FAQ AREA ENDS =======*/}



						</div>
						</div>
					</div>
				</div>
			</div>

		</>
	)
}
