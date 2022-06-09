import { useState } from 'react';
import { NFT } from '../../components';
import json from '../../settings.json';
import './Pills.css';

const { pills } = json;

export default function Pills() {

  const [activeNft, setActiveNft] = useState<string | undefined>(undefined);

  const [whoIsLoading, setWhoIsLoading] = useState<string | undefined>(undefined);

  const [currentlyPlaying, setCurrentlyPlaying] = useState(false);

  return (
    <div className="nft-wrapper">
      {pills.map(({ id, classification, label }) => {
        return (
          <NFT 
            key={id}
            id={id}
            classification={classification} 
            label={label}
            setActiveNft={setActiveNft}
            activeNft={activeNft}
            setWhoIsLoading={setWhoIsLoading}
            whoIsLoading={whoIsLoading}
            setCurrentlyPlaying={setCurrentlyPlaying}
            currentlyPlaying={currentlyPlaying}
          />
        );
      })}
    </div>
  );
}
