import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

import footerLinks from "../data/FooterLinks";
import socialMediaData from "../data/SocilaMediaData";

const Footer = () => {
  return (
    <FooterSection>
      <FooterWrapper>
        <DetailSection>
          <HugeText>
            Let's find
            <br />
            your Dream Home
          </HugeText>
          <Pages>
            {footerLinks.map((link, index) => (
              <PageItem key={index} to={link.url}>
                {link.name}
              </PageItem>
            ))}
          </Pages>
        </DetailSection>
        <BottomSection>
          <SocailMedia>
            {socialMediaData.map((smItem) => (
              <SocialMediaItem key={smItem.id} to={smItem.link}>
                {/* <SocialMediaIcon className="fab fa-github" /> */}
              </SocialMediaItem>
            ))}
          </SocailMedia>
          <Copyright>
            ING Real Estate © {new Date().getFullYear()} All Rights Reserved.
          </Copyright>
        </BottomSection>
      </FooterWrapper>
    </FooterSection>
  );
};

export default Footer;

const FooterSection = styled.footer`
  background-color: #000d1a;
  color: #cd853f;
  width: 100%;
  padding: 80px 240px;

  @media (max-width: 1100px) {
    padding: 80px 120px;
  }

  @media (max-width: 768px) {
    padding: 60px;
  }
`;

const FooterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
`;

const DetailSection = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  width: 100%;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const BottomSection = styled.div`
  width: 100%;
  margin-top: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const HugeText = styled.label`
  color: #fff;
  font-size: clamp(3rem, 4vw, 4.5rem);
`;

const Pages = styled.label`
  display: grid;
  grid-template-columns: 1fr 1fr;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    margin-top: 2rem;
  }
`;

const PageItem = styled(NavLink)`
  text-decoration: none;
  color: #cd853f;
  transition: all 0.3s ease-in-out;
  font-size: 1.2rem;
  font-weight: 500;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  margin-right: 1rem;
  margin-bottom: 0.7rem;

  &:hover {
    text-decoration: underline;
  }

  @media (max-width: 768px) {
    margin-bottom: 0.5rem;
    padding: 0.5rem 0rem;
  }
`;

const SocailMedia = styled.div``;

const Copyright = styled.div`
  color: #fff;
  font-size: 0.9rem;
  font-weight: 500;
`;

const SocialMediaItem = styled(NavLink)``;
