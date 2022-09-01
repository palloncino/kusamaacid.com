import { NFT } from '../../components';
import ProjectCard from '../../components/ProjectCard';
import json from '../../settings.json';
import { CustomSection } from '../../style';
import '../../style/NFTs.css';

const { smiley } = json;

export default function Smiley() {

  return (
    <div className="smiley-page-wrapper">
      
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
              label: 'View on Singular',
              callback: () => console.log()
            },
            {
              variant: 'outlined',
              label: 'View other projects',
              callback: () => console.log()
            },
          ]}
        />
      </CustomSection>

      <div className="nft-wrapper">
        {smiley.map(({ id, label }) => {
          return (
            <NFT
              baseUrl={`${process.env.REACT_APP_KUSAMA_BUCKET_SMILEY_PNG}`}
              baseUrlVideo={`${process.env.REACT_APP_KUSAMA_BUCKET_SMILEY_VIDEOS}`}
              key={id}
              id={id}
              classification={undefined}
              label={label}
            />
          );
        })}
      </div>
    </div>
  );
}
