import { Text } from '../../components';
import './Home.css';

export default function Home() {
  
  return (
    <div className="home-wrapper">
      <Text textType="h1">FRESH NEW NFTs</Text>
      <Text textType="regular">
        This website is a work in progress, is expected to reach its first stable form at the end of June 2022
      </Text>
      <Text textType='tooltip'>
        Powered by Antonio Guiotto - powerydratoni@gmail.com
      </Text>
       
    </div>
  );
}
