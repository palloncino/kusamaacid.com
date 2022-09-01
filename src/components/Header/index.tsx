import { useNavigate } from 'react-router-dom';
import './Header.css';

export const Header = () => {

  const navigate = useNavigate();

  const handleRedirect = () => {
    return navigate('/pills');
  };

  return (
    <div className="header-wrapper">
      <div className="header-container" onClick={handleRedirect} title="New NFTs">
      </div>
    </div>
  );
};