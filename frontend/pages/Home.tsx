// src/pages/Home.tsx
import { useNavigate } from 'react-router-dom';
import Button from '../components/button';


function Home() {
  const navigate = useNavigate();

  return (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      <h1>Welcome to the Home Page</h1>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginTop: '2rem' }}>
        <Button label="Login" onClick={() => navigate('/login')} />
        <Button label="Sign Up" onClick={() => navigate('/signup')} />
      </div>
    </div>
  );
}

export default Home;
