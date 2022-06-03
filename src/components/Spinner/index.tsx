import { LinearProgress } from '@mui/material';
import './Spinner.css';

interface ISpinner {
  size?: 'small' | 'regular' | 'large';
}

export const Spinner = ({ size = 'regular' }: ISpinner) => {

  return (
    <div className={`spinner spinner-${size}`}>
      <LinearProgress color='secondary'/>
    </div>
  );
};