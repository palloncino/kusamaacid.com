import { TabContext, TabList, TabPanel } from '@mui/lab';
import { Dialog, Tab } from '@mui/material';
import { CSSProperties, MouseEvent, SyntheticEvent, useState } from 'react';
import NftPlaceholderGif from '../../assets/media/loading.gif';
import { Text } from '../../components';
import { useWhatDevice } from '../../hooks/useWhatDevice';
import { INFTProps } from '../../interfaces';
import './NFT.css';

export const NFT = ({ id, classification, label }: INFTProps) => {
  const [activeTab, setActiveTab] = useState('img');
  const [isNftVideoLoading, setIsNftVideoLoading] = useState(false);
  const [isNftImgLoaded, setIsNftImgLoaded] = useState(false);
  const [isNftVideoPlaying, setIsNftVideoPlaying] = useState(false);
  const [nftVideoErrorMessage, setNftVideoErrorMessage] = useState<string | undefined>(undefined);
  const [nftImgErrorMessage, setNftImgErrorMessage] = useState<string | undefined>(undefined);
  const [openDialog, setOpenDialog] = useState(false);
  const { isMobile } = useWhatDevice();

  const naturalHeight = { width: '100%', maxHeight: '100%', height: 'auto' };
  const flatHeight = { height: '0px' };
  const errorMessageStyle: CSSProperties = { position: 'absolute', padding: '1rem' };
  const mrRelative: CSSProperties = { position: 'relative' };

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

  const handleVideoOnError = () => setNftVideoErrorMessage('Sorry, the video is not available at this time.');

  const handleClickNftImg = () => !isMobile && setOpenDialog(true);

  const renderNftImage = (id: string) => {
    if (nftImgErrorMessage) {
      return (
        <>
          <img
            style={{ ...naturalHeight, opacity: 0.2 }}
            src={NftPlaceholderGif} />
        </>
      );
    }
    return (
      <>
        <img
          className={`${id}-NFT-img NFT`}
          style={isNftImgLoaded ? naturalHeight : flatHeight}
          src={`${process.env.REACT_APP_KUSAMA_BUCKET_PILLS_THUMBNAILS}${id}-small.png`}
          loading="lazy"
          alt={`${id} PILL NFT`}
          onClick={handleClickNftImg}
          onLoad={() => setIsNftImgLoaded(true)}
          onError={() => setNftImgErrorMessage('Sorry, this NFT is not available at this time.')}
        />
        {!isNftImgLoaded && (
          <img
            style={{ ...naturalHeight, opacity: 0.2 }}
            src={NftPlaceholderGif} />
        )}
        <Dialog
          open={openDialog}
          onClose={() => setOpenDialog(false)}
          aria-labelledby="responsive-dialog-title"
        >
          <img
            className={`${id}-NFT-img NFT`}
            src={`${process.env.REACT_APP_KUSAMA_BUCKET_PILLS_THUMBNAILS}${id}.png`}
            alt={`${id} PILL NFT`} />
        </Dialog>
      </>
    );
  };

  const renderNftVideo = (pill: string) => {
    return (
      <>
        <video
          className={`${pill}-NFT-mp4 NFT`}
          style={!isNftVideoLoading ? naturalHeight : flatHeight}
          playsInline
          autoPlay
          loop
          onLoadStart={() => handleNftVideoLoading(true)}
          onLoadedData={() => handleNftVideoLoading(false)}
          onPlaying={handleIsVideoPlaying}
          onClick={handleClickOnVideo}
          onError={handleVideoOnError}
          controls
        >
          <source src={`${process.env.REACT_APP_KUSAMA_BUCKET_PILLS}${pill}.mp4`} type="video/mp4" />
        </video>
        {isNftVideoLoading && (
          <img
            style={{ ...naturalHeight, opacity: 0.2 }}
            src={NftPlaceholderGif} />
        )}
      </>
    );
  };

  return (
    <div className="NFT">
      <TabContext value={activeTab}>
        <TabList onChange={handleChange} aria-label="lab API tabs example">
          <Tab label="IMG" value="img" />
          <Tab label="VIDEO" value="mp4" />
        </TabList>
        <TabPanel value="img">
          <Text customStyle={errorMessageStyle}>
            {nftImgErrorMessage && nftImgErrorMessage}
          </Text>
          {renderNftImage(id)}
        </TabPanel>
        <TabPanel value="mp4" style={mrRelative}>
          <Text customStyle={errorMessageStyle}>
            {nftVideoErrorMessage && nftVideoErrorMessage}
          </Text>
          {renderNftVideo(id)}
        </TabPanel>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <Text>
            {label}
          </Text>
          <Text>
            {classification}
          </Text>
          <Text>
          on singular
          </Text>
        </div>
      </TabContext>
    </div>
  );

};
