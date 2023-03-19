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
              <FooterLink to="/">How it works</FooterLink>
              <FooterLink to="/">Testimonials</FooterLink>
              <FooterLink to="/">Carrers</FooterLink>
              <FooterLink to="/">Investor</FooterLink>
              <FooterLink to="/">Terms of Service</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>Contact Us</FooterLinkTitle>
              <FooterLink to="/">Contact</FooterLink>
              <FooterLink to="/">Support</FooterLink>
              <FooterLink to="/">Destinations</FooterLink>
              <FooterLink to="/">Sponsorships</FooterLink>
            </FooterLinkItems>
          </FooterLinkWrapper>

          <FooterLinkWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>Videos</FooterLinkTitle>
              <FooterLink to="/">Submit Video</FooterLink>
              <FooterLink to="/">Ambassadors</FooterLink>
              <FooterLink to="/">Agency</FooterLink>
              <FooterLink to="/">Influencer</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>Social Media</FooterLinkTitle>
              <FooterLink to="/">Instagram</FooterLink>
              <FooterLink to="/">Facebook</FooterLink>
              <FooterLink to="/">Youtube</FooterLink>
              <FooterLink to="/">Twitter</FooterLink>
            </FooterLinkItems>
          </FooterLinkWrapper>
        </FooterLinkContainer>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo onClick={toggleHome} to="/">
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
