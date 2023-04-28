/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Translate from "@docusaurus/Translate";
import Layout from "@theme/Layout";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

function HomeNav() {
  const NavContainer = ({ children }) => (
    <section className="homeNavContainer">
      <Container className="h-100 px-5">
        <Row className="h-100 d-flex align-items-center">{children}</Row>
      </Container>
    </section>
  );

  const NavItem = ({ href, aosDelay, children }) => (
    <Col xs={12} md={12} lg={4} className="homeNavItem rounded-lg">
      <a
        href={href}
        className="h-100"
        data-aos="fade-up"
        data-aos-delay={aosDelay}
      >
        <div className="mx-auto">{children}</div>
      </a>
    </Col>
  );

  const NavItemTitle = ({ children }) => (
    <h1 className="mt-0 text-dark font-weight-bold text-center">{children}</h1>
  );

  const NavItemContent = ({ children }) => (
    <div className="homeNavItemContent">{children}</div>
  );

  return (
    <NavContainer>
      <NavItem href={useDocUrl("learn/learn-architecture")} aosDelay="0">
        <NavItemContent>
          <NavItemTitle>
            <Translate
              id="homePage.navContainer.learn.title"
              description="Title of Learn Navigator in Home page"
            >
              Learn
            </Translate>
          </NavItemTitle>
          <p className="mx-auto small text-secondary px-4">
            <Translate
              id="homePage.navContainer.learn.content"
              description="Content of Learn Navigator in Home page"
            >
              Learn the fundamentals of Mashin, including installation, CLI
              usage, and getting started with your first project.
            </Translate>
          </p>
        </NavItemContent>
      </NavItem>
      <NavItem href={useDocUrl("build-index")} aosDelay="200">
        <NavItemContent>
          <NavItemTitle>
            <Translate
              id="homePage.navContainer.build.title"
              description="Title of Build Navigator in Home page"
            >
              Build
            </Translate>
          </NavItemTitle>
          <p className="mx-auto small text-secondary px-4">
            <Translate
              id="homePage.navContainer.build.content"
              description="Content of Build Navigator in Home page"
            >
              Dive into creating custom providers and leveraging the Mashin SDK
              to extend and enhance your IaC solutions.
            </Translate>
          </p>
        </NavItemContent>
      </NavItem>
      <NavItem href={useDocUrl("engage")} aosDelay="200">
        <NavItemContent>
          <NavItemTitle>
            <Translate
              id="homePage.navContainer.build.title"
              description="Title of Build Navigator in Home page"
            >
              Engage
            </Translate>
          </NavItemTitle>
          <p className="mx-auto small text-secondary px-4">
            <Translate
              id="homePage.navContainer.build.content"
              description="Content of Build Navigator in Home page"
            >
              Get involved with Mashin by contributing code, submitting
              improvements, and collaborating with the community.
            </Translate>
          </p>
        </NavItemContent>
      </NavItem>
    </NavContainer>
  );
}

function HomeFooter() {
  const FooterContainer = ({ children }) => (
    <section className="homeFooterContainer text-white text-left">
      <Container className="container-custom">
        <Row className="">{children}</Row>
      </Container>
    </section>
  );

  const LearnMashin = () => (
    <Col lg={6}>
      <span className="material-icons" style={{ fontSize: 50 + "px" }}>
        article
      </span>
      <h3 className="h2 font-weight-medium text-heading">
        <Translate
          id="homepage.homeFooter.learnMashin.title"
          description="Title of Mashin Section in Home Page"
        >
          Mashin Paper
        </Translate>
      </h3>
      <p className="">
        <Translate
          id="homepage.homeFooter.learnMashin.content"
          description="Content of Learn Mashin Footer Section in Home Page"
        >
          This is where you'll find the comprehensive paper on the Mashin
          engine. As we gear up to unveil the full document, join us in
          exploring the transformative potential of Mashin and how it's poised
          to reshape the IaC landscape.
        </Translate>
      </p>
      <div>
        <a href="https://github.com/nutshimit/mashin_paper/wiki/1.-Introduction">
          <button className="btn btn-lg btn-primary btn-bg-primary">
            <Translate
              id="homepage.homeFooter.learnMashin.discoverMashinButton"
              description="Discover Mashin Paper Button Label of Improve Wiki Footer Section in Home page"
            >
              Discover Mashin Paper
            </Translate>
          </button>
        </a>
      </div>
    </Col>
  );

  const OpenSource = () => (
    <Col lg={6}>
      <span className="material-icons" style={{ fontSize: 50 + "px" }}>
        code
      </span>
      <h3 className="h2 font-weight-medium text-heading">
        <Translate
          id="homepage.homeFooter.openSource.title"
          description="Title of Open Source Footer Section in Home page"
        >
          Open Source
        </Translate>
      </h3>
      <p className="">
        <Translate
          id="homepage.homeFooter.openSource.content"
          description="Content of Open Source Footer Footer Section in Home page"
        >
          As an early-stage, alpha software, we are constantly working to
          improve and refine its features and capabilities. We wholeheartedly
          welcome and encourage contributions from the community to help make
          Mashin even better.
        </Translate>
      </p>
      <div>
        <a href="https://github.com/nutshimit/mashin">
          <button className="btn btn-lg btn-primary btn-bg-primary mr-3">
            <Translate
              id="homepage.homeFooter.openSource.contributeButton"
              description="Contribute Button Label of Improve Wiki Footer Section in Home page"
            >
              View Github Project
            </Translate>
          </button>
        </a>
      </div>
    </Col>
  );

  return (
    <FooterContainer>
      <LearnMashin />
      <OpenSource />
    </FooterContainer>
  );
}

export default function Index() {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout title={siteConfig.tagline}>
      <div className="homeContainer">
        <HomeNav />
        <HomeFooter />
      </div>
    </Layout>
  );
}

function useDocUrl(url) {
  const { siteConfig } = useDocusaurusContext();
  const { baseUrl } = siteConfig;
  const docsPart = "docs/";
  return `${baseUrl}${docsPart}${url}`;
}
