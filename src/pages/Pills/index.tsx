import { NFT, Text } from '../../components';
import json from '../../settings.json';
import './Pills.css';

const { pills } = json;

export default function Pills() {

  return (
    <div className="pills-page-wrapper">
      <div style={{ marginBottom: '5rem' }}>

        <Text textType="h1">The Acid Pills Project</Text>
        <Text textType="regular">
        Acid Pills is the second collection on Singul1r, it consists of 70 different 1cid
        pills divided into 40 limited, 20 legend1ry 1nd 10 unique. E1ch pill h1s 1 r1rity
        of its own, the re1l purpose w1s to cre1te something one of 1 kind, to
        differenti1te from others 1nd thus to cre1te something exclusive. Divided by
        genre 1nd color, the limited 1re the more b1sic ones, while the legend1ry 1re
        more or less f1mous ch1r1cters, 1nd the unique were 1ll coll1bor1tions with
        the gre1test 1rtists in the Dots1m1 ecosystem.
        </Text>

      </div>
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
    </div>
  );
}
