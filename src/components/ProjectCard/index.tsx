import { Button } from '@mui/material';
import { useEffect, useState } from 'react';
import { useWhatDevice } from '../../hooks/useWhatDevice';
import { CustomSection } from '../../style';
import { SectionContainer, SectionLeftBoxMedia, SectionTextBoxRight } from '../../style/Section2';
import { Section_Text_Head_Common } from '../../style/SectionCommon';
import { Text } from '../Text';

interface Button {
  label: string;
  callback: () => void;
  variant?: 'text' | 'outlined' | 'contained';
}

const ProjectCard = ({
  mainMediaUrl,
  mainImgUrl,
  bannerUrl,
  bannerTextTitle,
  bannerTextSubTitle,
  paragraph,
  buttons
}: {
    mainMediaUrl?: string;
    mainImgUrl?: string;
    bannerUrl: string;
    bannerTextTitle: string;
    bannerTextSubTitle: string;
    paragraph: string;
    buttons?: Button[];
}) => {

  const {isMobile} = useWhatDevice();
  const [brotherHeight, setBrotherHeight] = useState(0);

  useEffect(() => {
    const el: HTMLElement | null = document.querySelector('#getBrotherHeight');

    if (el) {
      setBrotherHeight(el.offsetHeight);
    }
  }, []);

  return (
    <SectionContainer isMobile={isMobile}>

      {/* Video */}
      <SectionLeftBoxMedia isMobile={isMobile} css={`height: ${brotherHeight || 0}px;`}>

        {mainImgUrl && (
          <img src={mainImgUrl} alt="" style={{
            width: '100%',
            height: '100%',
            position: 'absolute',
            objectFit: isMobile ? 'cover' : 'contain',
            objectPosition: isMobile ? 'center' : 'right',
            zIndex: 0,
            borderRadius: '.2rem',
          }} />
        )}
        {mainMediaUrl && (
          <video autoPlay muted loop style={{
            width: '100%',
            height: '100%',
            position: 'absolute',
            objectFit: isMobile ? 'cover' : 'contain',
            objectPosition: isMobile ? 'center' : 'right',
            zIndex: 0,
            borderRadius: '.2rem',
          }}>
            <source src={mainMediaUrl} type="video/mp4" />
          </video>
        )}
          
      </SectionLeftBoxMedia>

      {/* Text   */}
      <SectionTextBoxRight id="getBrotherHeight">

        <CustomSection mt={isMobile ? '1rem' : '0rem'} css="height: 100%;box-sizing: border-box; border-radius: .2rem;">

          {/* Banner Image */}
          <CustomSection mr={isMobile ? '0rem' : '10%'} css="border: 2px solid #acbbcb;padding: 1.2rem 2rem;border-radius: .2rem;background: url(https://acidpilsnft.tempurl.host/wp-content/uploads/2022/08/3-scaled.jpg);background-repeat: no-repeat;background-position: center;">

            {/* Banner Text */}

            <Section_Text_Head_Common
              border="none"
              css={`
              height: 50px;
              min-height: 40px;
              background: url(${bannerUrl});
              background-size: contain;
              background-repeat: no-repeat;
              background-position: left;
              `} />

            {/* Text   */}
            <CustomSection>
              <Section_Text_Head_Common css='border-bottom: 2px solid #acbbcb;'>
                <CustomSection css='display: flex;align-items: center;justify-content: space-between;'>

                  <Text textType={isMobile ? 'h3' : 'h1'}>
                    {bannerTextTitle}{'\u00A0'}
                  </Text>

                  <Text textType={isMobile ? 'regular' : 'large'}>
                    {'\u00A0'}{bannerTextSubTitle}
                  </Text>

                </CustomSection>

              </Section_Text_Head_Common>
              <Text textType="regular" customStyle={{ color: '#ACBBCB' }}>
                {paragraph}
              </Text>
            </CustomSection>

            {/* Buttons   */}
            <CustomSection css='display: flex;justify-content: flex-end;' mt={'1rem'}>

              {buttons?.map(({label, callback, variant}, index) => {
                return (
                  <CustomSection key={`${label}-${index}`} mr={'.4rem'}>
                    <Button onClick={callback} variant={variant}>{label}</Button>
                  </CustomSection>
                );
              })}
              
            </CustomSection>

          </CustomSection>

        </CustomSection>

      </SectionTextBoxRight>

    </SectionContainer>
  );
};


export default ProjectCard;