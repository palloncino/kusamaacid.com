import { Backdrop, Button, Card, CardActionArea, CardActions, CardContent } from '@mui/material';
import { useState } from 'react';
import { Spinner } from '../../components/Spinner';
import json from '../../settings.json';
import './Pills.css';

const { pills } = json;

export default function Pills() {

  const [activeNft, setActiveNft] = useState<string | undefined>(undefined);

  const [whoIsLoading, setWhoIsLoading] = useState<string | undefined>(undefined);

  const renderNftVideo = (pill: string) => {
    return (
      <>
        <video
          className={`${pill}-NFT-mp4 NFT`}
          key={pill}
          id={pill}
          width="100%"
          playsInline
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
        <Backdrop
          sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={pill === whoIsLoading}
        >
          <Spinner type={1} />
        </Backdrop>
      </>
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
      {pills.map(pill => {
        return (
          <Card key={pill}>
            <CardActionArea>
              {pill === activeNft ? renderNftVideo(pill) : renderThumbnail(pill)}
            </CardActionArea>
            <div style={{display: 'flex', justifyContent: 'space-between'}}>

              <CardContent>
                {pill}
              </CardContent>
              <CardActions>
                <Button size="small" color="secondary">
                on Singular
                </Button>
              </CardActions>
            </div>
          </Card>
        );
      })}
    </div>
  );
}
