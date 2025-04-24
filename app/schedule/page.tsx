"use client";
import Countdown from "@/components/elements/Countdown";
import Layout from "@/components/layout/Layout";
import Link from "next/link";
import { useMyContext } from "../context/MainContext";
import { useContext } from "react";

export default function Schedule() {
  const { mainData } = useMyContext();

  return (
    <>
      <Layout headerStyle={1} footerStyle={1}>
        <div>
          <div
            className="inner-page-header"
            style={{ backgroundImage: "url(assets/img/bg/header-bg10.png)" }}
          >
            <div className="container">
              <div className="row">
                <div className="col-lg-6 m-auto">
                  <div className="heading1 text-center">
                    <h1>Event Schedule</h1>
                    <div className="space20" />
                    {/* <Link href="/">Home <i className="fa-solid fa-angle-right" /> <span>Event Schedule</span></Link> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*===== HERO AREA ENDS =======*/}
          {/*===== OTHERS AREA STARTS =======*/}
          <div className="choose-section-area sp2">
            <div className="container">
              {/* <div className="row">
								<div className="col-lg-4 m-auto">
									<div className="heading2 text-center space-margin60">
										<h2>Event Schedule</h2>
									</div>
								</div>
							</div> */}
              <div className="row">
                {mainData?.data?.eventSchd?.schdDates.map((dts) => {
                  return (
                    <>
                      <div className="col-lg-4 col-md-6">
                        <div className="choose-widget-boxarea">
                          <div className="icons">
                            <img
                              src="/assets/img/icons/choose-icons1.svg"
                              alt=""
                            />
                          </div>
                          <div className="space24" />
                          <div className="content-area">
                            <Link href="/event-schedule">{dts?.Date}</Link>
                            <div className="space16" />
                            <Link href="/event-schedule">
                              {dts?.programDetails}
                            </Link>
                            {/* <p>{dts?.programDetails}</p> */}
                            <div className="space16" />
                            <p>{dts?.exactTime}</p>
                          </div>
                        </div>
                      </div>
                    </>
                  );
                })}
                {/* <div className="col-lg-4 col-md-6">
									<div className="choose-widget-boxarea">
										<div className="icons">
											<img src="/assets/img/icons/choose-icons1.svg" alt="" />
										</div>
										<div className="space24" />
										<div className="content-area">
											<Link href="/event-single">Make Ideas Happen</Link>
											<div className="space16" />
											<p>Eventify 2024 brings together the brightest minds and industry leaders for best of transformative business.</p>
											<div className="space24" />
											<Link href="/event-single" className="readmore">Read More <i className="fa-solid fa-arrow-right" /></Link>
										</div>
									</div>
								</div>
								<div className="col-lg-4 col-md-6">
									<div className="choose-widget-boxarea">
										<div className="icons">
											<img src="/assets/img/icons/choose-icons1.svg" alt="" />
										</div>
										<div className="space24" />
										<div className="content-area">
											<Link href="/event-single">Great Speakers</Link>
											<div className="space16" />
											<p>Whether you're looking to elevate your business strategy, discover the latest industry trends, or connect.</p>
											<div className="space24" />
											<Link href="/event-single" className="readmore">Read More <i className="fa-solid fa-arrow-right" /></Link>
										</div>
									</div>
								</div>
								<div className="col-lg-4 col-md-6">
									<div className="choose-widget-boxarea">
										<div className="icons">
											<img src="/assets/img/icons/choose-icons1.svg" alt="" />
										</div>
										<div className="space24" />
										<div className="content-area">
											<Link href="/event-single">One Day Ticket</Link>
											<div className="space16" />
											<p>We empower businesses to thrive in an ever-evolving marketplace. This conference more than just an event.</p>
											<div className="space24" />
											<Link href="/event-single" className="readmore">Read More <i className="fa-solid fa-arrow-right" /></Link>
										</div>
									</div>
								</div> */}
              </div>
            </div>
          </div>
          <div className="cta1-section-area d-lg-block d-block">
            <div className="container">
              <div className="row">
                <div className="col-lg-10 m-auto">
                  <div className="cta1-main-boxarea">
                    {/* <Countdown /> */}
                    <div className="col-lg-4 m-auto">
                      <div className="heading1">
                        <h2>{mainData?.data?.eventSchd?.Notes}</h2>
                      </div>
                    </div>
                    <ul>
                      {mainData?.data?.eventSchd?.schdNotes.map((nt) => {
                        return (
                          <>
                            <li>
                              <Link href="/#">
                                - {nt?.ImpNotes}
                              </Link>
                            </li>
                          </>
                        );
                      })}
                      {/* <li>
                        <Link href="/#">
                          30 January 2025 - 6pm to 11:30pm
                        </Link>
                      </li>
                      <li className="m-0">
                        <Link href="/#">
                          Secret Location In The UK
                        </Link>
                      </li> */}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*===== CTA AREA ENDS =======*/}
          {/*===== CTA AREA STARTS =======*/}
        </div>
      </Layout>
    </>
  );
}
