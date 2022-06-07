import './App.css';
import Profile from './Profile';

function App() {
  let username = '';
  if (window.location.pathname === '/') {
    username = 'ramonh';
  } else {
    username = window.location.pathname.replace('/profile/', '');
  }
  return (
    <div className="App">
      <Profile username={username} />
    </div>
  );
}

export default App;
