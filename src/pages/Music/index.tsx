import { AnimatePresence, motion } from 'framer-motion';
import { Text } from '../../components';

export default function Music() {
    
  return (
    <AnimatePresence>
      <motion.div
        key={`music-page-${Math.random()*1000}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        
        {/* <div style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          justifyContent: 'flex-start',
          alignItems: 'center',
        }}>
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            height: '100%',
            width: '100%',
            background: 'url(https://acidpilsnft.tempurl.host/wp-content/uploads/2022/08/3-scaled.jpg)',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            zIndex: -1
          }}/> */}
        <Text>
            MUSIC
        </Text>
        {/* </div> */}
      </motion.div>
    </AnimatePresence> 
  );
}