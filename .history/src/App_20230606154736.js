import './App.css';
import TypographyEx from './TypographyEx';
import ButtonEx from './ButtonEx';
import IconButtonEx from './IconButtonEx';
import ButtonGroupEx from './ButtonGroupEx';
import ToggleButtonEx from './ToggleButtonEx';
import BoxEx from './BoxEx';
import GridEx from './GridEx';
import TextFieldEx from './TextFieldEx';
import DropdownEx from './DropdownEx';
import RadioEx from './RadioEx';
import CheckboxEx from './CheckboxEx';
import SwitchEx from './SwitchEx';
import RatingEx from './RatingEx';
import AutocompleteEx from './AutocompleteEx';
import AutocompleteMultiEx from './AutocompleteMultiEx';
import PaperEx from './PaperEx';
import CardVsPaperEx from './CardVsPaperEx';
import AccordionEx from './AccordionEx';
import ImagelistEx from './ImagelistEx';
import AppbarToolbarEx from './AppbarToolbarEx';
import { Route, Routes } from 'react-router-dom';
import AvatarEx from './AvatarEx';
import AppbarToolbarMenuEx from './AppbarToolbarMenuEx';
import BreakCrumbEx from './BreakCrumbEx';
import DrawerEx from './DrawerEx';
import SpeedDialEx from './SpeedDialEx';
import { BottomNavigation } from '@mui/material';
import BottomNavigationEx from './BottomNavigationEx';


function App() {
  return (
    <div className="App">
      {/* <TypographyEx/> */}
      {/* <ButtonEx/> */}
      {/* <IconButtonEx/> */}
      {/* <ButtonGroupEx/> */}
      {/* <ToggleButtonEx/> */}
      {/* <BoxEx/> */}
      {/* <GridEx/> */}
      {/* <TextFieldEx/> */}
      {/* <DropdownEx/> */}
      {/* <RadioEx/> */}
      {/* <CheckboxEx/> */}
      {/* <SwitchEx/> */}
      {/* <RatingEx/> */}
      {/* <AutocompleteEx/> */}
      {/* <AutocompleteMultiEx/> */}
      {/* <PaperEx/> */}
      {/* <CardVsPaperEx/> */}
      {/* <AccordionEx/> */}
      {/* <ImagelistEx/> */}
      {/* <AppbarToolbarEx/> */}
      {/* <AppbarToolbarMenuEx/> */}
      {/* <Routes>
        <Route path='/' element={<ImagelistEx/>} />
        <Route path='/' element={<BreakCrumbEx/>} />
        <Route path='/' element={<DrawerEx/>} />
        <Route path='/accordion' element={<AccordionEx/>} />
        <Route path='/rating/:star' element={<RatingEx/>} />
      </Routes> */}
      {/* <AvatarEx/> */}
      {/* <SpeedDialEx/> */}
      <BottomNavigationEx/>
      <Routes>
        <Route path='/dropdown' element={<DropdownEx/>} />
        <Route path='/radio' element={<RadioEx/>} />
        <Route path='/accordion' element={<AccordionEx/>} />
      </Routes>
    </div>
  );
}

export default App;
