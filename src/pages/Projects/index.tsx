import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Text } from '../../components';
import ProjectCard from '../../components/ProjectCard';
import { useWhatDevice } from '../../hooks/useWhatDevice';
import { CustomSection } from '../../style';
import { SectionChildBody, Section_2 } from '../../style/Section2';
import { Section_Text_Head_ID } from '../../style/SectionCommon';

export default function Projects() {

  const navigate = useNavigate();

  const {isMobile} = useWhatDevice();

  const [bgOffset, setBgOffset] = useState<number>();

  useEffect(() => {
    const num = (document.querySelector('#projects') as HTMLElement)?.offsetLeft;
    if (num) {
      setBgOffset(num);
    }
  }, []);
    
  return (
    <AnimatePresence>
      <motion.div 
        key={`team-page-${Math.random()*1000}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <CustomSection mb={'10rem'}>
          <Section_2 id={'projects'}>
            <div style={{ 
              position: 'absolute',
              top: 0,
              left: `-${bgOffset}px`,
              zIndex: -1,
              // background: '#0e1d2ac9',
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
              height: '100%',
              width: window.innerWidth,
            }}>
    
            </div>

            {/* HEAD */}
            <CustomSection mb={isMobile ? '1rem' : '1rem'}>
              <Section_Text_Head_ID isMobile={isMobile} bg={`${process.env.REACT_APP_KUSAMA_OLD_SITE}/wp-content/uploads/2022/08/2-scaled.jpg`}>

                <CustomSection mb={'0rem'}>
                  <Text textType={isMobile ? 'h1_large' : 'h1_xLarge'} customStyle={{background: '#0e1d2ad9', padding: '.2rem .4rem' }}>
                NFT{'\''}s PROJECTS
                  </Text>
                </CustomSection>

                <CustomSection mb={'0rem'}>
                  <Text textType="h3" customStyle={{background: '#0e1d2ad9', padding: '.2rem .4rem', color: '#ACBBCB' }}>
                Smiley, Pills, Collab, Roadmap
                  </Text>
                </CustomSection>

              </Section_Text_Head_ID>
            </CustomSection>

            {/* BODY */}
            <SectionChildBody bg={undefined} style={{ display: 'flex', flexDirection: 'column' }}>

              {/* Smiley */}
              <CustomSection mb={'1rem'} id={'Smiley'}>

                <ProjectCard 
                  mainMediaUrl={`${process.env.REACT_APP_KUSAMA_BUCKET_SMILEY_VIDEOS}/SMILE_BLUE.mp4`}
                  bannerUrl={`${process.env.REACT_APP_KUSAMA_BUCKET_SMILEY_BANNERS}/bannerSmiley.png`}
                  bannerTextTitle={'Primary'}
                  bannerTextSubTitle={'Secondary'}
                  paragraph={`
            Acid Smiley was the first approach to NFT's.
            A very restrained collection of 10 unique pieces that vary in color with acid
            electronic bases.
            The choice and everything has started from here.
            `}
                  buttons={[
                    {
                      variant: 'outlined',
                      label: 'View catalog',
                      callback: () => navigate('/smiley')
                    }
                  ]}
                />
              </CustomSection>

              {/* Pills */}
              <CustomSection mb={'1rem'} id={'Pills'}>

                <ProjectCard 
                  mainMediaUrl={`${process.env.REACT_APP_KUSAMA_BUCKET_PILLS}/BUTTERFLY.mp4`}
                  bannerUrl={`${process.env.REACT_APP_KUSAMA_BUCKET_SMILEY_BANNERS}/bannerSmiley.png`}
                  bannerTextTitle={'Primary'}
                  bannerTextSubTitle={'Secondary'}
                  paragraph={`
            Acid Smiley was the first approach to NFT's.
            A very restrained collection of 10 unique pieces that vary in color with acid
            electronic bases.
            The choice and everything has started from here.
            `}
                  buttons={[
                    {
                      variant: 'outlined',
                      label: 'View catalog',
                      callback: () => navigate('/pills')
                    }
                  ]}
                />
              </CustomSection>

              {/* Collab */}
              <CustomSection mb={'1rem'} id={'Collab'}>

                <ProjectCard 
                  mainImgUrl={`${process.env.REACT_APP_KUSAMA_OLD_SITE}/wp-content/uploads/2022/08/a56b4c48-49cc-4929-a748-5d4842b67c4b.jpg`}
                  bannerUrl={`${process.env.REACT_APP_KUSAMA_BUCKET_SMILEY_BANNERS}/bannerSmiley.png`}
                  bannerTextTitle={'Primary'}
                  bannerTextSubTitle={'Secondary'}
                  paragraph={`
            Acid Smiley was the first approach to NFT's.
            A very restrained collection of 10 unique pieces that vary in color with acid
            electronic bases.
            The choice and everything has started from here.
            `}
                  buttons={[
                    {
                      variant: 'outlined',
                      label: 'View catalog',
                      callback: () => console.log(1)
                    }
                  ]}
                />
              </CustomSection>


            </SectionChildBody>

          </Section_2>
        </CustomSection>
      </motion.div>
    </AnimatePresence>
  );
}