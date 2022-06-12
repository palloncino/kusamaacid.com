import { TabContext, TabList, TabPanel } from '@mui/lab';
import { Dialog, Tab } from '@mui/material';
import { MouseEvent, SyntheticEvent, useState } from 'react';
import { Text } from '../../components';
import { useWhatDevice } from '../../hooks/useWhatDevice';
import NftPlaceholder from './loading.gif';
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
  const [isNftVideoLoading, setIsNftVideoLoading] = useState(false);
  const [isNftImgLoaded, setIsNftImgLoaded] = useState(false);
  const [isNftVideoPlaying, setIsNftVideoPlaying] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | undefined>();
  const [openDialog, setOpenDialog] = useState(false);
  const { isMobile } = useWhatDevice();

  // VIDEO

  const handleChange = (event: SyntheticEvent, newValue: string) => setActiveTab(newValue);

  const handleClickOnVideo = (e: MouseEvent<HTMLVideoElement>) => {
    const player = e.target as HTMLVideoElement;
    if (isNftVideoPlaying) {
      player.pause();
      setIsNftVideoPlaying(false);
    } else {
      player.play();
      setIsNftVideoPlaying(true);
    }
  };

  const handleNftVideoLoading = (value: boolean) => setIsNftVideoLoading(value);

  const handleIsVideoPlaying = () => setIsNftVideoPlaying(true);

  const handleVideoOnError = () => setErrorMessage('Sorry, the video is not available at this time.');

  const renderNftVideo = (pill: string) => {
    return (
      <>
        <video
          className={`${pill}-NFT-mp4 NFT`}
          key={pill}
          id={pill}
          style={!isNftVideoLoading ? {
            width: '100%',
            maxHeight: '100%',
            height: 'auto',
          } : { 
            height: '0px' 
          }}
          playsInline
          autoPlay
          loop
          onLoadStart={() => handleNftVideoLoading(true)}
          onLoadedData={() => handleNftVideoLoading(false)}
          onPlaying={handleIsVideoPlaying}
          onClick={handleClickOnVideo}
          onError={handleVideoOnError}
        >
          <source src={`${process.env.REACT_APP_KUSAMA_BUCKET_PILLS}${pill}+PILL.mp4`} type="video/mp4" />
        </video>
        {isNftVideoLoading && (
          <img
            key={id}
            width="100%"
            max-height="100%"
            height="auto"
            style={{ opacity: 0.2 }}
            src={NftPlaceholder} />
        )}
      </>
    );
  };

  // IMG

  const handleClickNftImg = () => !isMobile && setOpenDialog(true);

  const renderNftImage = (id: string) => {
    return (
      <>
        <img
          onLoad={() => setIsNftImgLoaded(true)}
          className={`${id}-NFT-img NFT`}
          key={id}
          style={isNftImgLoaded ? {
            width: '100%',
            maxHeight: '100%',
            height: 'auto',
          } : { 
            height: '0px' 
          }}
          src={`${process.env.REACT_APP_KUSAMA_BUCKET_PILLS_THUMBNAILS}${id}.png`}
          loading="lazy"
          alt={`${id} PILL NFT`}
          onClick={handleClickNftImg} />
        {!isNftImgLoaded && (
          <img
            key={id}
            width="100%"
            max-height="100%"
            height="auto"
            style={{ opacity: 0.2 }}
            src={NftPlaceholder} />
        )}
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
        <TabPanel value="mp4" style={{ position: 'relative' }}>
          <Text customStyle={{ position: 'absolute', padding: '1rem' }}>
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
