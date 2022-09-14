import './Footer.css';
import { Text } from '../../components';

export default function Footer() {

  return (
    <div id="social" className="Footer">
      <Text>
        Powered by <span style={{cursor: 'pointer'}} onClick={() => window.location.href = 'href="https://www.linkedin.com/in/antonioguiotto/"'}>Antonio Guiotto</span>
      </Text>
    </div>
  );
}
