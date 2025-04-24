"use client";
import { useMyContext } from "@/app/context/MainContext";
import { fetchApi } from "@/app/api";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function HeaderMain({ scroll, isSearch, handleSearch }: any) {
  const { mainData } = useMyContext();

  return (
    <>
      <header>
        <div
          className={`header-area homepage1 header header-sticky d-none d-lg-block ${
            scroll ? "sticky" : ""
          }`}
          id="header"
        >
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="header-elements">
                  <div className="site-logo">
                    <Link href="/">
                      <img src="/assets/img/logo/logo1.png" alt="" />
                    </Link>
                  </div>
                  <div className="main-menu">
                    {/* <Link href="/#">Home <i className="fa-solid" /></Link> */}

                    <ul>
                      {mainData?.data?.mainMenu?.map((list) => {
                        return (
                          <>
                            {list.showHide ? (
                              <li>
                                <Link href={list?.menuLink}>{list.menuName}</Link>
                              </li>
                            ) : null}
                          </>
                        );
                      })}
                    </ul>
                  </div>
                  <div className="btn-area">
                    <div
                      className="search-icon header__search header-search-btn"
                      onClick={handleSearch}
                    >
                      <a>
                        <img src="/assets/img/icons/search1.svg" alt="" />
                      </a>
                    </div>
                    <ul>
                      <li>
                        <Link href="/#">
                          <i className="fa-brands fa-facebook-f" />
                        </Link>
                      </li>
                      <li>
                        <Link href="/#">
                          <i className="fa-brands fa-instagram" />
                        </Link>
                      </li>
                      <li>
                        <Link href="/#">
                          <i className="fa-brands fa-linkedin-in" />
                        </Link>
                      </li>
                      <li>
                        <Link href="/#" className="m-0">
                          <i className="fa-brands fa-pinterest-p" />
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div
                    className={`header-search-form-wrapper ${
                      isSearch ? "open" : ""
                    }`}
                  >
                    <div
                      className="tx-search-close tx-close"
                      onClick={handleSearch}
                    >
                      <i className="fa-solid fa-xmark" />
                    </div>
                    <div className="header-search-container">
                      <form role="search" className="search-form">
                        <input
                          type="search"
                          className="search-field"
                          placeholder="Search …"
                          name="s"
                        />
                        <button type="submit" className="search-submit">
                          <img src="/assets/img/icons/search1.svg" alt="" />
                        </button>
                      </form>
                    </div>
                  </div>
                  {isSearch && (
                    <div
                      className="body-overlay active"
                      onClick={handleSearch}
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
