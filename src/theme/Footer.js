import * as React from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Translate, { translate } from "@docusaurus/Translate";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

import Logo from "@site/static/img/Mashin_Logo_Horizontal_White.svg";

function FooterSocialColumn() {
  const SocialItem = ({ href, className }) => {
    return (
      <li className="text-white mr-2 mr-lg-0 mr-xl-2">
        <a href={href} target="_blank" rel="noopener noreferrer">
          <i className={className} />
        </a>
      </li>
    );
  };

  const Social = () => (
    <ul className="list-social-links mt-5 mt-lg-0 justify-content-lg-end">
      <SocialItem
        href="https://twitter.com/nutshimit"
        className="socicon-twitter"
      />
      <SocialItem
        href="https://github.com/nutshimit/mashin"
        className="socicon-github"
      />
      <SocialItem
        href="https://discord.gg/khWcvUStMB"
        className="socicon-discord"
      />
    </ul>
  );

  return (
    <Col className="px-lg-0">
      <Social />
    </Col>
  );
}

function FooterLegalLink({ href, content }) {
  return (
    <li>
      <a
        href={href}
        className="text-white text-small"
        target="_blank"
        rel="noopener noreferrer"
      >
        {content}
      </a>
    </li>
  );
}

export default function Footer() {
  const { siteConfig } = useDocusaurusContext();
  const { footer } = siteConfig.themeConfig;

  return (
    <footer className="nav-footer spacer-y-4" id="footer">
      <Container className="container-custom">
        <Row className="footer-legal align-items-end">
          {footer && (
            <Col lg={2} className="mb-2 mb-lg-0">
              <a
                className="navbar-brand"
                href="https://mashin.land/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Logo height={31} alt="Mashin" />
              </a>
            </Col>
          )}
          <Col lg={6}>
            <ul className="list-unstyled d-flex flex-wrap list-pipe-separator mt-2">
              <FooterLegalLink
                content={footer.copyright}
                href="https://mashin.land"
              />
              <FooterLegalLink
                content={translate({
                  message: "Impressum",
                  id: "footer.footerLegal.impressum",
                  description: "Impressum Button Label in Footer Legal",
                })}
                href="#"
              />
              <FooterLegalLink
                content={translate({
                  message: "Disclaimer",
                  id: "footer.footerLegal.disclaimer",
                  description: "Disclaimer Button Label in Footer Legal",
                })}
                href="#"
              />
              <FooterLegalLink
                content={translate({
                  message: "Privacy",
                  id: "footer.footerLegal.privacy",
                  description: "Privacy Button Label in Footer Legal",
                })}
                href="#"
              />
            </ul>
          </Col>
          <FooterSocialColumn />
        </Row>
      </Container>
    </footer>
  );
}
