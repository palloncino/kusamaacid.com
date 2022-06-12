import { TabContext, TabList, TabPanel } from '@mui/lab';
import { Dialog, Tab } from '@mui/material';
import { MouseEvent, SyntheticEvent, useState } from 'react';
import { Spinner, Text } from '../../components';
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
  const [openDialog, setOpenDialog] = useState(false);

  const handleChange = (event: SyntheticEvent, newValue: string) => setActiveTab(newValue);

  const handleClickOnVideo = (e: MouseEvent<HTMLVideoElement>) => {
    const player = e.target as HTMLVideoElement;
    if (isPlaying) {
      player.pause();
      setIsPlaying(false);
    } else {
      player.play();
      setIsPlaying(true);
    }
  };

  const handleOnVideoLoaded = () => setIsLoading(false);

  const handleOnVideoStartLoading = () => setIsLoading(true);

  const handleIsVideoPlaying = () => setIsPlaying(true);

  const handleVideoOnError = () => setErrorMessage('Sorry, the video is not available at this time.');

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
          onLoadStart={handleOnVideoStartLoading}
          onLoadedData={handleOnVideoLoaded}
          onPlaying={handleIsVideoPlaying}
          onClick={handleClickOnVideo}
          onError={handleVideoOnError}
        >
          <source src={`${process.env.REACT_APP_KUSAMA_BUCKET_PILLS}${pill}+PILL.mp4`} type="video/mp4" />
        </video>
        {isLoading && <Spinner />}
      </>
    );
  };

  const renderNftImage = (id: string) => {
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
          onClick={() => setOpenDialog(true)} />
        <Dialog
          open={openDialog}
          onClose={() => setOpenDialog(false)}
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
          {renderNftImage(id)}
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
