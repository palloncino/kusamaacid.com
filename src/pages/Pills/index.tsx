import { useState } from 'react';
import json from '../../settings.json';
import './Pills.css';

const { pills } = json;

export default function Pills() {

  const [activeNft, setActiveNft] = useState<string | undefined>(undefined);

  return (
    <div className="nft-wrapper">
      {pills.map(pill => {
        return (
          <div key={pill} className='nft-container'>
            <video
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
            >
              <source src={`${process.env.REACT_APP_KUSAMA_BUCKET_PILLS}${pill}+PILL.mp4`} type="video/mp4" />
            </video>
          </div>
        );
      })}
    </div>
  );
}
