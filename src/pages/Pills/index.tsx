import { AnimatePresence, motion } from 'framer-motion';
import { NFT } from '../../components';
import ProjectCard from '../../components/ProjectCard';
import json from '../../settings.json';
import { CustomSection } from '../../style';
import '../../style/NFTs.css';

const { pills } = json;

export default function Pills() {

  return (
    <AnimatePresence>
      <motion.div 
        key={`pills-page-${Math.random()*1000}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <div className="pills-page-wrapper">
      
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
            {pills.map(({ id, classification, label }) => {
              return (
                <NFT
                  baseUrl={`${process.env.REACT_APP_KUSAMA_BUCKET_PILLS_THUMBNAILS}`}
                  baseUrlVideo={`${process.env.REACT_APP_KUSAMA_BUCKET_PILLS}`}
                  key={id}
                  id={id}
                  classification={classification}
                  label={label}
                />
              );
            })}
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
