import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
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
              <FooterLinkTitle>About us</FooterLinkTitle>
              <FooterLink href="/">How it works</FooterLink>
              <FooterLink href="/">Testimonials</FooterLink>
              <FooterLink href="/">Carrers</FooterLink>
              <FooterLink href="/">Investor</FooterLink>
              <FooterLink href="/">Terms of Service</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>Contact Us</FooterLinkTitle>
              <FooterLink href="/">Contact</FooterLink>
              <FooterLink href="/">Support</FooterLink>
              <FooterLink href="/">Destinations</FooterLink>
              <FooterLink href="/">Sponsorships</FooterLink>
            </FooterLinkItems>
          </FooterLinkWrapper>

          <FooterLinkWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>Videos</FooterLinkTitle>
              <FooterLink href="/">Submit Video</FooterLink>
              <FooterLink href="/">Ambassadors</FooterLink>
              <FooterLink href="/">Agency</FooterLink>
              <FooterLink href="/">Influencer</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>Social Media</FooterLinkTitle>
              <FooterLink href="/">Instagram</FooterLink>
              <FooterLink href="/">Facebook</FooterLink>
              <FooterLink href="/">Youtube</FooterLink>
              <FooterLink href="/">Twitter</FooterLink>
            </FooterLinkItems>
          </FooterLinkWrapper>
        </FooterLinkContainer>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo href="/" onClick={toggleHome}>
              dolla
            </SocialLogo>
            <WebsiteRights>
              dolla © {new Date().getFullYear()} All rights reserved.
            </WebsiteRights>
            <SocialIcons>
              <SocialIconLink arial-label="Facebook" href="/" target="_blank">
                <FaFacebook />
              </SocialIconLink>
              <SocialIconLink
                arial-label="Instagram"
                href="//www.instagram.com/leonardtcomdt/"
                target="_blank"
              >
                <FaInstagram />
              </SocialIconLink>
              <SocialIconLink
                arial-label="Youtube"
                href="//www.youtube.com/channel/UCF6Cz50AqAJcg6JC5LDRElg/videos?view_as=subscriber"
                target="_blank"
              >
                <FaYoutube />
              </SocialIconLink>
              <SocialIconLink arial-label="Twitter" href="/" target="_blank">
                <FaTwitter />
              </SocialIconLink>
              <SocialIconLink
                arial-label="Linkedin"
                href="//www.linkedin.com/in/leonardtlauenstein/"
                target="_blank"
              >
                <FaLinkedin />
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;
