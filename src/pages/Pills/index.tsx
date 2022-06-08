import { Backdrop, Button, Card, CardActionArea, CardActions, CardContent } from '@mui/material';
import { yellow } from '@mui/material/colors';
import { useState } from 'react';
import { Spinner } from '../../components/Spinner';
import json from '../../settings.json';
import './Pills.css';

const { pills } = json;

export default function Pills() {

  const [activeNft, setActiveNft] = useState<string | undefined>(undefined);

  const [whoIsLoading, setWhoIsLoading] = useState<string | undefined>(undefined);

  const [currentlyPlaying, setCurrentlyPlaying] = useState(false);

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
          onPause={() => setCurrentlyPlaying(false)}
          onPlay={() => setCurrentlyPlaying(true)}
        >
          <source src={`${process.env.REACT_APP_KUSAMA_BUCKET_PILLS}${pill}+PILL.mp4`} type="video/mp4" />
        </video>
        <Backdrop
          sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={pill === whoIsLoading && currentlyPlaying}
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
        src={`${process.env.REACT_APP_KUSAMA_BUCKET_PILLS_THUMBNAILS}${pill}.png`}
        alt={`${pill} PILL NFT`} />
    );
  };

  return (
    <div className="nft-wrapper">
      {pills.map(({ id, classification, label }) => {
        return (
          <Card key={id}>
            <CardActionArea>
              {id === activeNft ? renderNftVideo(id) : renderThumbnail(id)}
            </CardActionArea>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>

              <CardContent>
                <div style={{ position: 'relative' }}>
                  <span style={{ position: 'absolute', background: 'yellow', top: '-2.4rem', padding: '.2rem .4rem' }}>{classification}</span>
                  {label}
                </div>
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
