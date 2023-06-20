import logo from './logo.svg';
import './App.css';
import { Typography } from '@mui/material';

function App() {
  return (
    <div className="App">
      <Typography variant='h1'> This is heading 1</Typography>
      <Typography variant='h2'> This is heading 2</Typography>
      <Typography variant='h3'> This is heading 3</Typography>
      <Typography variant='h4'> This is heading 4</Typography>
      <Typography variant='h5'> This is heading 5</Typography>
      <Typography variant='h6'> This is heading 6</Typography>
      <Typography variant='subtitle1'> This is Subtitle 1 </Typography>
      <Typography variant='subtitle2'> This is Subtitle 2 </Typography>
    </div>
  );
}

export default App;
