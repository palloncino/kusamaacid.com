import { Text } from '../../components';
import { BackgroundImage, CustomSection, SectionChild_1_body, SectionChild_1_body_1, SectionChild_1_body_1_1, SectionChild_1_body_1_2, SectionChild_1_body_1_2_header, SectionChild_1_body_2, SectionChild_1_body_2_1, SectionChild_1_body_2_1_header, SectionChild_1_body_2_2, SectionChild_1_head, Section_1 } from '../../style';
import './Home.css';

export default function Home() {

  return (
    <>
      <CustomSection key={1} mb={'1rem'}>
        <Section_1 id={'team'}>

          {/* HEAD */}
          <CustomSection mb={'2rem'}>
            <SectionChild_1_head>

              <Text textType='h1' customStyle={{ textAlign: 'center' }}>
                  TEAM
              </Text>
              <Text textType='h3' customStyle={{ textAlign: 'center' }}>
                  SUB Title about BIO
              </Text>

            </SectionChild_1_head>
          </CustomSection>

          {/* BODY */}
          <SectionChild_1_body bg={undefined}>

            <CustomSection mb={'0rem'} id={'team'}>
              <SectionChild_1_body_1>

                <SectionChild_1_body_1_1>
                  <BackgroundImage width="width: 100%;"
                    css={`
                      // transform: rotateY(0deg) rotate(-1deg);
                      width: 100%;
                      height: 500px;
                      background: url(https://picsum.photos/500);
                      transition: all 0.3s cubic-bezier(.25,.8,.25,1);
                      box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);`} />
                </SectionChild_1_body_1_1>

                <SectionChild_1_body_1_2>

                  <SectionChild_1_body_1_2_header>

                    <CustomSection mb={'0rem'}>
                      <Text textType="h3">
                        BIO
                      </Text>
                    </CustomSection>

                    <CustomSection mb={'0rem'}>
                      <Text textType="h4">
                        Why am I what huh
                      </Text>
                    </CustomSection>

                  </SectionChild_1_body_1_2_header>

                  <CustomSection>
                    <Text textType="regular">
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
                </SectionChild_1_body_1_2>

              </SectionChild_1_body_1>
            </CustomSection>

            <CustomSection mb={'0rem'} id={'works'}>
              <SectionChild_1_body_2>

                <SectionChild_1_body_2_1>

                  <SectionChild_1_body_2_1_header>

                    <CustomSection mb={'0rem'}>
                      <Text textType="h3" customStyle={{ textAlign: 'right' }}>
                        WORKS
                      </Text>
                    </CustomSection>

                    <CustomSection mb={'0rem'}>
                      <Text textType="h4"  customStyle={{ textAlign: 'right' }}>
                        Why am I what huh
                      </Text>
                    </CustomSection>

                  </SectionChild_1_body_2_1_header>

                  <CustomSection>
                    <Text textType="regular"  customStyle={{ textAlign: 'right' }}>
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
                </SectionChild_1_body_2_1>

                <SectionChild_1_body_2_2>
                  <BackgroundImage 
                    css={`
                      // transform: rotateY(0deg) rotate(-1deg);
                      width: 100%;
                      height: 500px;
                      background: url(https://picsum.photos/600);
                      transition: all 0.3s cubic-bezier(.25,.8,.25,1);
                      box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
                    `}/>
                </SectionChild_1_body_2_2>

              </SectionChild_1_body_2>
            </CustomSection>

          </SectionChild_1_body>
        </Section_1>
      </CustomSection>
    </>
  );
}
