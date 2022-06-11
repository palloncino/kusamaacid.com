import { NFT } from '../../components';
import json from '../../settings.json';
import './Pills.css';

const { pills } = json;

export default function Pills() {

  return (
    <div className="nft-wrapper">
      {pills.map(({ id, classification, label }) => {
        return (
          <NFT 
            key={id}
            id={id}
            classification={classification} 
            label={label}
          />
        );
      })}
    </div>
  );
}
