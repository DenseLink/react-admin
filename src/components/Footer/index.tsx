import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { animateScroll as scroll } from "react-scroll";

import {
  FooterContainer,
  FooterLink,
  FooterLinkContainer,
  FooterLinkItems,
  FooterLinkTitle,
  FooterLinkWrapper,
  FooterWrap,
  SocialIconLink,
  SocialIcons,
  SocialLogo,
  SocialMedia,
  SocialMediaWrap,
  WebsiteRights,
} from "./FooterStyled";

const toggleHome = (): void => {
  scroll.scrollToTop();
};

const Footer = (): JSX.Element => {
  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinkContainer>
          <FooterLinkWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>Social Media</FooterLinkTitle>
              <FooterLink href="https://www.instagram.com/denselink/">
                Instagram
              </FooterLink>
              <FooterLink href="https://www.linkedin.com/in/gary-jones-4483b8b2/">
                LinkedIn
              </FooterLink>
              <FooterLink href="https://twitter.com/DenseLink">
                Twitter
              </FooterLink>
              <FooterLink href="https://github.com/DenseLink">
                Github
              </FooterLink>
            </FooterLinkItems>
          </FooterLinkWrapper>
        </FooterLinkContainer>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo href="/" onClick={toggleHome}>
              Gary Jones
            </SocialLogo>
            <WebsiteRights>
              Gary Jones © {new Date().getFullYear()} All rights reserved.
            </WebsiteRights>
            <SocialIcons>
              <SocialIconLink
                arial-label="Instagram"
                href="https://www.instagram.com/denselink/"
                target="_blank"
              >
                <FaInstagram />
              </SocialIconLink>

              <SocialIconLink
                arial-label="Twitter"
                href="https://twitter.com/DenseLink"
                target="_blank"
              >
                <FaTwitter />
              </SocialIconLink>
              <SocialIconLink
                arial-label="Linkedin"
                href="https://www.linkedin.com/in/gary-jones-4483b8b2/"
                target="_blank"
              >
                <FaLinkedin />
              </SocialIconLink>
              <SocialIconLink
                arial-label="Github"
                href="https://github.com/DenseLink"
                target="_blank"
              >
                <FaGithub />
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;
