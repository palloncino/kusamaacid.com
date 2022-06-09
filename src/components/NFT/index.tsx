import { Tab } from '@mui/material';
import { Text } from '../../components';
import { TabContext, TabList, TabPanel } from '@mui/lab';
import { useState } from 'react';
import './NFT.css';

interface INFTProps {
  id: string;
  classification: string;
  label: string;
  setActiveNft: (id: string | undefined) => void;
  activeNft: string | undefined;
  setWhoIsLoading: (id: string | undefined) => void;
  whoIsLoading: string | undefined;
  setCurrentlyPlaying: (value: boolean) => void;
  currentlyPlaying: boolean;
}

export const NFT = ({
  id,
  classification,
  label,
  setActiveNft,
  activeNft,
  setWhoIsLoading,
  whoIsLoading,
  setCurrentlyPlaying,
  currentlyPlaying,
}: INFTProps) => {

  const [value, setValue] = useState('img');

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

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
      </>
    );
  };

  const renderThumbnail = (id: string) => {
    return (
      <img
        className={`${id}-NFT-img NFT`}
        key={id}
        width="100%"
        height="100%"
        onClick={() => setActiveNft(id)}
        src={`${process.env.REACT_APP_KUSAMA_BUCKET_PILLS_THUMBNAILS}${id}.png`}
        alt={`${id} PILL NFT`} />
    );
  };

  return (
    <div className="NFT" key={id} style={{ width: '100%' }}>
      <TabContext value={value}>
        <TabList onChange={handleChange} aria-label="lab API tabs example">
          <Tab label="IMG" value="img" />
          <Tab label="VIDEO" value="mp4" />
        </TabList>
        <TabPanel value="img">
          {renderThumbnail(id)}
        </TabPanel>
        <TabPanel value="mp4">
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
