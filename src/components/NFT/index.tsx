import { Tab } from '@mui/material';
import { Text, Spinner } from '../../components';
import { TabContext, TabList, TabPanel } from '@mui/lab';
import { useState } from 'react';
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

  const [value, setValue] = useState('img');
  const [isLoading, setIsLoading] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

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
          autoPlay
          loop
          onLoadStart={() => setIsLoading(true)}
          onLoadedData={() => setIsLoading(false)}
          onPlay={() => setIsPlaying(true)}
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
      <img
        className={`${id}-NFT-img NFT`}
        key={id}
        width="100%"
        height="100%"
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
