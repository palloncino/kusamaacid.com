import { motion, AnimatePresence } from 'framer-motion';
import { ReactNode } from 'react';

export default function AnimateComponent(children: any) {
  return (
    <AnimatePresence>
      <motion.div 
        key={`team-page-${Math.random()*1000}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}