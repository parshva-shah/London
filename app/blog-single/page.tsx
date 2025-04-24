"use client";
import { useState } from "react";
import ModalVideo from "react-modal-video";
import "@/node_modules/react-modal-video/css/modal-video.css";
import Countdown from "@/components/elements/Countdown";
import Layout from "@/components/layout/Layout";
import Link from "next/link";
import { useMyContext } from "../context/MainContext";
export default function BlogSingle() {
  const [isOpen, setOpen] = useState(false);
  const { mainData } = useMyContext();
  return (
    <>
      <Layout headerStyle={1} footerStyle={1}>
        <div>
          <div
            className="inner-page-header"
            style={{ backgroundImage: "url(assets/img/bg/header-bg14.png)" }}
          >
            <div className="container">
              <div className="row">
                <div className="col-lg-6 m-auto">
                  <div className="heading1 text-center">
                    <h1>Additional Information</h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*===== HERO AREA ENDS =======*/}
          {/*===== BLOG AREA STARTS =======*/}
          <div className="blog-details-section sp8">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div className="blog-deatils-content heading2">
                    {mainData?.data?.eventSchd?.AdditionalNotes.map((data) => {
                      return (
                        <>
                          <div className="space18" />
                          <h5>
                            - {data?.ImpNotes}
                          </h5>
                          <div className="space16" />
                        </>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
