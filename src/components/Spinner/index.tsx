import { LinearProgress } from '@mui/material';
import './Spinner.css';

interface ISpinner {
  size?: 'small' | 'regular' | 'large';
  noPadding?: boolean;
}

export const Spinner = ({ size = 'regular', noPadding }: ISpinner) => {

  return (
    <div className={`spinner spinner-${size} ${noPadding ? 'no-padding' : ''}`}>
      <LinearProgress color='secondary'/>
    </div>
  );
};