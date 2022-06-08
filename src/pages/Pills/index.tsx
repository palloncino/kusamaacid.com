import { Text } from '../../components';
import json from '../../settings.json';
import './Pills.css';

const { pills } = json;

export default function Pills() {
  return (
    <div className="home-wrapper">
      <Text textType='h3'>PILLS</Text>
      <div className='pills-wrapper'>
      {pills.map(pill => {
        return (
          
          <div key={pill} className='pill-container'>
            <video width="100%" controls>
              <source src={`${process.env.REACT_APP_KUSAMA_BUCKET_PILLS}${pill}+PILL.mp4`} type="video/mp4" />
            </video>
          </div>
        )
      })}
      </div>
    </div>
  );
}
