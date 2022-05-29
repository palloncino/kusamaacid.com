import './Spinner.css';

interface ISpinner {
  size?: 'small' | 'regular' | 'large';
}

export const Spinner = ({ size = 'regular' }: ISpinner) => {

  return (
    <div className={`spinner spinner-${size}`}>
      Loading ...
    </div>
  );
};