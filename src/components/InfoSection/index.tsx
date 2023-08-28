import {
  BtnWrap,
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
  description4: string;
  description5: string;
  description6: string;
  buttonLabel2: string;
  buttonLabel3: string;
  buttonLabel4: string;
  buttonLabel5: string;
  buttonLabel6: string;
  buttonPresent: boolean;
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
  description4,
  description5,
  description6,
  buttonLabel,
  buttonLabel2,
  buttonLabel3,
  buttonLabel4,
  buttonLabel5,
  buttonLabel6,
  alt,
  img,
  primary,
  dark,
  buttonPresent,
}: InfoSectionProps): JSX.Element => {
  return (
    <InfoContainer id={id} lightBg={lightBg}>
      <InfoWrapper>
        <InfoRow imgStart={imgStart}>
          <Column1>
            <TextWrapper>
              <TopLine>{topLine}</TopLine>
              <Heading lightText={lightText}>{headline}</Heading>
              {buttonPresent && (
                <BtnWrap>
                  <a
                    href="https://github.com/DenseLink/react-admin"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      borderRadius: "50px",
                      background: primary ? "#01BF71" : "#010606",
                      whiteSpace: "nowrap",
                      padding: "14px 48px", // Replaced big with a static value
                      color: dark ? "#010606" : "#fff",
                      fontSize: "16px", // Replaced fontBig with a static value
                      textDecoration: "none",
                      cursor: "pointer",
                      transition: "all 0.2s ease-in-out",
                    }}
                    onMouseOver={(e) => {
                      e.currentTarget.style.background = primary
                        ? "#fff"
                        : "#01BF71";
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.background = primary
                        ? "#01BF71"
                        : "#010606";
                    }}
                  >
                    {buttonLabel}
                  </a>
                </BtnWrap>
              )}
              <Subtitle darkText={darkText}>{description}</Subtitle>
              {buttonPresent && (
                <BtnWrap>
                  <a
                    href="https://github.com/DenseLink/COVID-On-Flight-FE"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      borderRadius: "50px",
                      background: primary ? "#01BF71" : "#010606",
                      whiteSpace: "nowrap",
                      padding: "14px 48px", // Replaced big with a static value
                      color: dark ? "#010606" : "#fff",
                      fontSize: "16px", // Replaced fontBig with a static value
                      textDecoration: "none",
                      cursor: "pointer",
                      transition: "all 0.2s ease-in-out",
                    }}
                    onMouseOver={(e) => {
                      e.currentTarget.style.background = primary
                        ? "#fff"
                        : "#01BF71";
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.background = primary
                        ? "#01BF71"
                        : "#010606";
                    }}
                  >
                    {buttonLabel2}
                  </a>
                </BtnWrap>
              )}
              <Subtitle darkText={darkText}>{description2}</Subtitle>
              {buttonPresent && (
                <BtnWrap>
                  <a
                    href="https://github.com/DenseLink/AI_TicTacToe"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      borderRadius: "50px",
                      background: primary ? "#01BF71" : "#010606",
                      whiteSpace: "nowrap",
                      padding: "14px 48px", // Replaced big with a static value
                      color: dark ? "#010606" : "#fff",
                      fontSize: "16px", // Replaced fontBig with a static value
                      textDecoration: "none",
                      cursor: "pointer",
                      transition: "all 0.2s ease-in-out",
                    }}
                    onMouseOver={(e) => {
                      e.currentTarget.style.background = primary
                        ? "#fff"
                        : "#01BF71";
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.background = primary
                        ? "#01BF71"
                        : "#010606";
                    }}
                  >
                    {buttonLabel3}
                  </a>
                </BtnWrap>
              )}
              <Subtitle darkText={darkText}>{description3}</Subtitle>
              {buttonPresent && (
                <BtnWrap>
                  <a
                    href="https://github.com/DenseLink/minesweeper"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      borderRadius: "50px",
                      background: primary ? "#01BF71" : "#010606",
                      whiteSpace: "nowrap",
                      padding: "14px 48px", // Replaced big with a static value
                      color: dark ? "#010606" : "#fff",
                      fontSize: "16px", // Replaced fontBig with a static value
                      textDecoration: "none",
                      cursor: "pointer",
                      transition: "all 0.2s ease-in-out",
                    }}
                    onMouseOver={(e) => {
                      e.currentTarget.style.background = primary
                        ? "#fff"
                        : "#01BF71";
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.background = primary
                        ? "#01BF71"
                        : "#010606";
                    }}
                  >
                    {buttonLabel4}
                  </a>
                </BtnWrap>
              )}
              <Subtitle darkText={darkText}>{description4}</Subtitle>
              {buttonPresent && (
                <BtnWrap>
                  <a
                    href="https://github.com/DenseLink/Project-2-Image-Processing"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      borderRadius: "50px",
                      background: primary ? "#01BF71" : "#010606",
                      whiteSpace: "nowrap",
                      padding: "14px 48px", // Replaced big with a static value
                      color: dark ? "#010606" : "#fff",
                      fontSize: "16px", // Replaced fontBig with a static value
                      textDecoration: "none",
                      cursor: "pointer",
                      transition: "all 0.2s ease-in-out",
                    }}
                    onMouseOver={(e) => {
                      e.currentTarget.style.background = primary
                        ? "#fff"
                        : "#01BF71";
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.background = primary
                        ? "#01BF71"
                        : "#010606";
                    }}
                  >
                    {buttonLabel5}
                  </a>
                </BtnWrap>
              )}
              <Subtitle darkText={darkText}>{description5}</Subtitle>
              {buttonPresent && (
                <BtnWrap>
                  <a
                    href="https://github.com/DenseLink/PerformantProgramming_Fractal_GUI"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      borderRadius: "50px",
                      background: primary ? "#01BF71" : "#010606",
                      whiteSpace: "nowrap",
                      padding: "14px 48px", // Replaced big with a static value
                      color: dark ? "#010606" : "#fff",
                      fontSize: "16px", // Replaced fontBig with a static value
                      textDecoration: "none",
                      cursor: "pointer",
                      transition: "all 0.2s ease-in-out",
                    }}
                    onMouseOver={(e) => {
                      e.currentTarget.style.background = primary
                        ? "#fff"
                        : "#01BF71";
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.background = primary
                        ? "#01BF71"
                        : "#010606";
                    }}
                  >
                    {buttonLabel6}
                  </a>
                </BtnWrap>
              )}
              <Subtitle darkText={darkText}>{description6}</Subtitle>
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
