import { Text } from '../../components';
import { useWhatDevice } from '../../hooks/useWhatDevice';
import { BackgroundImage, CustomSection } from '../../style';
import { SectionChild_1_body, SectionChild_1_body_1, SectionChild_1_body_1_1, SectionChild_1_body_1_2, SectionChild_1_body_2, SectionChild_1_body_2_1, SectionChild_1_body_2_2, Section_1 } from '../../style/Section1';
import { Section_Text_Head_Common, Section_Text_Head_ID } from '../../style/SectionCommon';
import { motion, AnimatePresence } from 'framer-motion';

export default function Team() {

  const {isMobile} = useWhatDevice();
    
  return (
    <AnimatePresence>
      <motion.div 
        key={`team-page-${Math.random()*1000}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <CustomSection mb={isMobile ? '1rem' : '20rem'}>
          <Section_1 id={'team'}>

            {/* HEAD */}
            <CustomSection mb={'1rem'}>
              <Section_Text_Head_ID bg="https://acidpilsnft.tempurl.host/wp-content/uploads/2022/08/3-scaled.jpg" isMobile={isMobile}>

                <CustomSection mb={'0rem'}>
                  <Text textType={isMobile ? 'h1_large' : 'h1_xLarge'} customStyle={{background: '#0e1d2ad9', padding: '.2rem .4rem' }}>
                    THE TEAM
                  </Text>
                </CustomSection>

                <CustomSection mb={'0rem'} css="width: 100%; display: flex;justify-content: center;">
                  <Text textType="h3" customStyle={{background: '#0e1d2ad9', padding: '.2rem .4rem', color: '#ACBBCB' }}>
                    Bio & Works
                  </Text>
                </CustomSection>

              </Section_Text_Head_ID>
            </CustomSection>

            {/* BODY */}
            <SectionChild_1_body bg={undefined} isMobile={isMobile}>

              <SectionChild_1_body_1>

                {/* Photo */}
                <SectionChild_1_body_1_1>
                  <BackgroundImage width="width: 100%;"
                    css={`
                    // transform: rotateY(0deg) rotate(-1deg);
                    width: 100%;
                    height: 400px;
                    background: url(${process.env.REACT_APP_KUSAMA_BUCKET_ALL}/gianste1.jpg);
                    transition: all 0.5s cubic-bezier(.25,.8,.25,1);
                    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
                    border-radius: .2rem;`} />
                </SectionChild_1_body_1_1>

                {/* BIO - Why am I .. */}
                <CustomSection mt={'1rem'}>
                  <SectionChild_1_body_1_2>

                    <CustomSection p={'1rem 1.2rem'} css="height: 100%;box-sizing: border-box;border: 2px solid #acbbcb; border-radius: .2rem;background: url(https://acidpilsnft.tempurl.host/wp-content/uploads/2022/08/3-scaled.jpg);background-repeat: no-repeat;background-position: center;">

                      <Section_Text_Head_Common>

                        <CustomSection css='display: flex;align-items: center;justify-content: space-between;padding-bottom:.4rem;border-bottom: 2px solid #acbbcb;'>
                          <Text textType="h1">
                            BIO{'\u00A0'}
                          </Text>
                          <Text textType="large">
                            {'\u00A0'} Why am I what huh
                          </Text>
                        </CustomSection>

                      </Section_Text_Head_Common>

                      <CustomSection>
                        <Text textType="regular" customStyle={{color: '#ACBBCB'}}>
                            Kusama Acid is a project born and conceived by
                            Gianste, an electronic music producer.
                            In the frst two collections acid smiley and acid
                            pills he was self-taught in everything, while in
                            the collections acid mouth and acid people he
                            will be helped by an outside team for the
                            completion, divide and have a better realization
                            of the project itself.
                            The project was created to create a cohesion
                            between electronic music and 3D art, something
                            unique and very special.
                        </Text>
                      </CustomSection>

                    </CustomSection>
                  </SectionChild_1_body_1_2>
                </CustomSection>

              </SectionChild_1_body_1>

              <SectionChild_1_body_2>

                {/* Photo - Mobile ONLY */}
                {isMobile && (
                  <SectionChild_1_body_2_2>
                    <CustomSection mt={'1rem'}>
                      <BackgroundImage 
                        css={`
                        // transform: rotateY(0deg) rotate(-1deg);
                        width: 100%;
                        height: 520px;
                        background: url(${process.env.REACT_APP_KUSAMA_BUCKET_ALL}/cachedImage.png);
                        transition: all 0.3s cubic-bezier(.25,.8,.25,1);
                        box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
                        border-radius: .2rem;
                        `}/>
                    </CustomSection>
                  </SectionChild_1_body_2_2>
                )}

                <SectionChild_1_body_2_1 isMobile={isMobile} css="background: url(https://acidpilsnft.tempurl.host/wp-content/uploads/2022/08/3-scaled.jpg);background-repeat: no-repeat;background-position: center;">

                  {/* Works - Someth.. */}
                  <CustomSection mt={isMobile ? '1rem' : '0rem'} p={'1rem 1.2rem'} css="height: 100%;box-sizing: border-box;border: 2px solid #acbbcb; border-radius: .2rem;">

                    <Section_Text_Head_Common>

                      <CustomSection css="display: flex;align-items: center;justify-content: space-between;padding-bottom:.4rem;border-bottom: 2px solid #acbbcb;">

                        <Text textType="h1">
                        WORKS{'\u00A0'}
                        </Text>

                        <Text textType="large">
                          {'\u00A0'}Something about what
                        </Text>

                      </CustomSection>

                    </Section_Text_Head_Common>

                    <CustomSection>
                      <Text textType="regular" customStyle={{color: '#ACBBCB'}}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi architecto fugit itaque consequuntur dolore quod ipsum vero repellendus. Omnis at animi error blanditiis obcaecati, veniam aspernatur quas eius! Impedit, magnam!
                      </Text>
                    </CustomSection>

                  </CustomSection>
                    
                </SectionChild_1_body_2_1>
                
                {/* Photo - Desktop ONLY */}
                {!isMobile && (
                  <SectionChild_1_body_2_2>
                    <BackgroundImage 
                      css={`
                        // transform: rotateY(0deg) rotate(-1deg);
                        width: 100%;
                        height: 520px;
                        background: url(${process.env.REACT_APP_KUSAMA_BUCKET_ALL}/cachedImage.png);
                        transition: all 0.3s cubic-bezier(.25,.8,.25,1);
                        box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
                        border-radius: .2rem;
                        `}/>
                  </SectionChild_1_body_2_2>
                )}

              </SectionChild_1_body_2>

            </SectionChild_1_body>

          </Section_1>
        </CustomSection>

      </motion.div>
    </AnimatePresence>
  );
}