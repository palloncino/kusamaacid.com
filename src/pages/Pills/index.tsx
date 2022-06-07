import { useState } from 'react';
import { Spinner } from '../../components/Spinner';
import json from '../../settings.json';
import './Pills.css';

const { pills } = json;


const spinnerContainerStyle = {
  // position: 'absolute',
  // left: 0,
  // bottom: 0,
  // zIndex: 100,
  // width: '100%',
  // backgroundColor: 'red'
} as any;

export default function Pills() {

  const [activeNft, setActiveNft] = useState<string | undefined>(undefined);

  const [whoIsLoading, setWhoIsLoading] = useState<string | undefined>(undefined);

  const renderNftVideo = (pill: string) => {
    return (
      <video
        className={`${pill}-NFT-mp4 NFT`}
        key={pill}
        id={pill}
        width="100%"
        onClick={(e) => {
          if (activeNft === pill) {
            setActiveNft(undefined);
            return (e.target as any).pause(); // eslint-disable-line @typescript-eslint/no-explicit-any
          }
          document.querySelectorAll('video').forEach(vid => vid.pause());
          setActiveNft(pill);
          (e.target as any).play(); // eslint-disable-line @typescript-eslint/no-explicit-any
        }}
        autoPlay
        onLoadStart={() => setWhoIsLoading(pill)}
        onLoadedData={() => setWhoIsLoading(undefined)}
        onPause={() => console.log(1.1)}
      >
        <source src={`${process.env.REACT_APP_KUSAMA_BUCKET_PILLS}${pill}+PILL.mp4`} type="video/mp4" />
      </video>
    );
  };

  const renderThumbnail = (pill: string) => {
    return (
      <img
        className={`${pill}-NFT-img NFT`}
        key={pill}
        width="100%"
        height="100%"
        onClick={() => setActiveNft(pill)}
        src={`${process.env.REACT_APP_KUSAMA_BUCKET_PILLS_THUMBNAILS}${'ANGEL'}-thumbnail.png`}
        alt={`${pill} PILL NFT`} />
    );
  };

  return (
    <div className="nft-wrapper">
      {pills.map(pill => pill === activeNft ? renderNftVideo(pill) : renderThumbnail(pill))}
    </div>
  );
}
