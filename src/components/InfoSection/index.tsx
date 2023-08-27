import {
  Column1,
  Column2,
  Heading,
  Img,
  ImgWrap,
  InfoContainer,
  InfoRow,
  InfoWrapper,
  Subtitle,
  TextWrapper,
  TopLine,
} from "./InfoSectionStyles";

type InfoSectionProps = {
  alt: string;
  buttonLabel: string;
  dark?: boolean | number | undefined;
  darkText: boolean;
  description: string;
  description2: string;
  description3: string;
  headline: string;
  id: string;
  img: string;
  imgStart: boolean;
  lightBg: boolean;
  lightText: boolean;
  primary: boolean | number | undefined;
  topLine: string;
};

const InfoSection = ({
  lightBg,
  id,
  imgStart,
  topLine,
  lightText,
  headline,
  darkText,
  description,
  description2,
  description3,
  buttonLabel,
  alt,
  img,
  primary,
  dark,
}: InfoSectionProps): JSX.Element => {
  return (
    <InfoContainer id={id} lightBg={lightBg}>
      <InfoWrapper>
        <InfoRow imgStart={imgStart}>
          <Column1>
            <TextWrapper>
              <TopLine>{topLine}</TopLine>
              <Heading lightText={lightText}>{headline}</Heading>
              <Subtitle darkText={darkText}>{description}</Subtitle>
              <Subtitle darkText={darkText}>{description2}</Subtitle>
              <Subtitle darkText={darkText}>{description3}</Subtitle>
            </TextWrapper>
          </Column1>
          <Column2>
            <ImgWrap>
              <Img alt={alt} src={img} />
            </ImgWrap>
          </Column2>
        </InfoRow>
      </InfoWrapper>
    </InfoContainer>
  );
};

export default InfoSection;
/* goes between TextWrapper

<BtnWrap>
                <Button
                  dark={dark ? 1 : 0}
                  duration={500}
                  offset={-80}
                  primary={primary ? 1 : 0}
                  to="home"
                  smooth
                  spy
                >
                  {buttonLabel}
                </Button>
              </BtnWrap>

              */
