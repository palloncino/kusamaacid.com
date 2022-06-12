import { LinearProgress, CircularProgress } from '@mui/material';
import { ISpinner } from '../../interfaces';
import './Spinner.css';

export const Spinner = ({ color = 'secondary', size = 'regular', noPadding, noMargin, type = 2 }: ISpinner) => {

  return (
    <div className={`spinner spinner-${size} ${noPadding ? 'no-padding' : noMargin ? 'no-margin' : ''}`}>
      {type === 1 ? <CircularProgress color={color} /> : <LinearProgress color={color}/ >}
    </div>
  );
};