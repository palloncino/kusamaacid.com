import { Dialog, Tab } from '@mui/material';
import { Text, Spinner } from '../../components';
import { TabContext, TabList, TabPanel } from '@mui/lab';
import { useState, SyntheticEvent, useEffect } from 'react';
import './NFT.css';

interface INFTProps {
  id: string;
  classification: string;
  label: string;
}

export const NFT = ({
  id,
  classification,
  label,
}: INFTProps) => {

  const [activeTab, setActiveTab] = useState('img');
  const [isLoading, setIsLoading] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | undefined>();
  const [open, setOpen] = useState(false);
  

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setActiveTab(newValue);
  };

  useEffect(() => {
    console.log(isPlaying);
  }, [isPlaying]);

  const renderNftVideo = (pill: string) => {
    return (
      <>
        <video
          className={`${pill}-NFT-mp4 NFT`}
          key={pill}
          id={pill}
          width="100%"
          max-height="100%"
          height="auto"
          playsInline
          autoPlay
          loop
          onLoadStart={() => setIsLoading(true)}
          onLoadedData={() => setIsLoading(false)}
          onPlaying={() => setIsPlaying(true)}
          onClick={(e) => {
            const player = e.target as HTMLVideoElement;
            isPlaying ? player.pause() : player.play();
          }}
          onError={(e: SyntheticEvent) => {
            if (e.type === 'error') {
              setTimeout(() => {
                handleChange(undefined as any, 'img');
                setErrorMessage(undefined);
              }, 10000);
              setErrorMessage('Sorry, this video is not available at this time :/');
            }
          }}
        >
          <source src={`${process.env.REACT_APP_KUSAMA_BUCKET_PILLS}${pill}+PILL.mp4`} type="video/mp4" />
        </video>
        {isLoading && <Spinner />}
      </>
    );
  };

  const renderThumbnail = (id: string) => {
    if (isPlaying) {
      setIsPlaying(false);
    }
    return (
      <>
        <img
          className={`${id}-NFT-img NFT`}
          key={id}
          width="100%"
          max-height="100%"
          height="auto"
          src={`${process.env.REACT_APP_KUSAMA_BUCKET_PILLS_THUMBNAILS}${id}.png`}
          alt={`${id} PILL NFT`} 
          onClick={() => setOpen(true)}/>
        <Dialog
          open={open}
          onClose={() => setOpen(false)}
          aria-labelledby="responsive-dialog-title"
        >
          <img
            className={`${id}-NFT-img NFT`}
            key={id}
            width="100%"
            height="100%"
            src={`${process.env.REACT_APP_KUSAMA_BUCKET_PILLS_THUMBNAILS}${id}.png`}
            alt={`${id} PILL NFT`} />
        </Dialog>
      </>
    );
  };

  return (
    <div className="NFT" key={id} style={{ width: '100%' }}>
      <TabContext value={activeTab}>
        <TabList onChange={handleChange} aria-label="lab API tabs example">
          <Tab label="IMG" value="img" />
          <Tab label="VIDEO" value="mp4" />
        </TabList>
        <TabPanel value="img">
          {renderThumbnail(id)}
        </TabPanel>
        <TabPanel value="mp4">
          <Text>
            {errorMessage && errorMessage}
          </Text>
          {renderNftVideo(id)}
        </TabPanel>
        <Text>
          {label}
        </Text>
        <Text>
          {classification}
        </Text>
        <Text>
          on singular
        </Text>
      </TabContext>
    </div>
  );

};
