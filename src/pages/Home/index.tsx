import { Text } from '../../components';
import AWS from 'aws-sdk';
import './Home.css';
import { useEffect } from 'react';

export default function Home() {

  async function handleGetNFTs() {
    console.log(process.env.REACT_APP_TEST);
    const s3 = new AWS.S3();

    AWS.config.update({
      region: 'us-east-1',
      credentials: {
        accessKeyId: 'string',
        secretAccessKey: 'string',
      }
    });

    const params = {
      Bucket: 'kusama-acid-media',
      Delimiter: '/',
      Prefix: 'acid-pills' + '/'
    };

    const data = await s3.listObjects(params).promise();
    console.log({ data });
  }

  useEffect(() => {
    handleGetNFTs();
  }, []);
  return (
    <div className="home-wrapper">
      <Text textType="h3">CURRENT PROJECT : KUSAMA QUEENS</Text>
      <video width="200" height="200" controls >
        <source src="https://kusama-acid-media.s3.amazonaws.com/acid+pills/ANGEL+PILL.mp4" type="video/mp4" />
      </video>
      <Text textType="regular">
        Kusama Kings is one of the most successful NFT projects in the Kusama ecosystem, and now it is time for the Kusama Queens to make their entrance. Owning a Kusama Queen comes with access to a private discord The Great Hall,
        opportunities to invest in pre-sales through KingPad and the chance to create a Royal Baby NFT.
        There will only ever be 110 Queens (60 Limited, 25 Rare, 15 Ultra Rare and 10 Legendary).  All Queens are hand-drawn and unique.  Pledge your allegiance to the Kingdom and start your reign today!
        The Kusama Kings mint is now finished, but Kings can still be purchased from the secondary marketplace.
      </Text>
    </div>
  );
}
