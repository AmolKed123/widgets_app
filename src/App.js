import "./App.css";
import AutoComplete from "./Components/AutoComplete";
import SelectWithCheckbox from "./Components/SelectWithCheckbox";
import VolumeSlider from "./Components/VolumeSlider";
import Table from "./Components/Table";
import SearchAppBar from "./Components/SearchAppBar";
import SubscribeModel from "./Components/SubscribeModal";
import Stepper from "./Components/Stepper";
import CircularProgressBar from "./Components/CircularProgressBar";
import SwitchToggle from "./Components/SwitchToggle";
import Toast from "./Components/Toast";
import { Stack } from "@mui/material";

function App() {
  return (
    <div className="App">
      <h2 style={{ textAlign: "center" }}>Material UI Application</h2>
      <Stack direction="row" alignItems="center" spacing={3} sx={{ mt: 5 }}>
        <p>1. AutoComplete TextField - </p>
        <AutoComplete />
      </Stack>
      <Stack direction="row" alignItems="center" spacing={3} sx={{ mt: 5 }}>
        <p>2. Select With Checkbox - </p>
        <SelectWithCheckbox />
      </Stack>
      <Stack direction="row" alignItems="center" spacing={3} sx={{ mt: 5 }}>
        <p>3. Volume Slider - </p>
        <VolumeSlider />
      </Stack>
      <Stack direction="row" alignItems="center" spacing={3} sx={{ mt: 5 }}>
        <p>4. Table - </p>
        <Table />
      </Stack>
      <Stack direction="row" alignItems="center" spacing={3} sx={{ mt: 5 }}>
        <p>5. App Bar - </p>
        <SearchAppBar />
      </Stack>
      <Stack direction="row" alignItems="center" spacing={3} sx={{ mt: 5 }}>
        <p>6. Modal - </p>
        <SubscribeModel data="Please Provide Email Address To Subscribe To This Website" />
      </Stack>
      <Stack direction="row" alignItems="center" spacing={3} sx={{ mt: 5 }}>
        <p>7. Stepper - </p>
        <Stepper steps={["Sign Up For Account", "Sign In Using Credentials", "Sign Out"]}/>
      </Stack>
      <Stack direction="row" alignItems="center" spacing={3} sx={{ mt: 5 }}>
        <p>8. Circular Progress Bar - </p>
        <CircularProgressBar colorValue="secondary"/>
      </Stack>
      <Stack direction="row" alignItems="center" spacing={3} sx={{ mt: 5 }}>
        <p>9. Switch Toggle - </p>
        <SwitchToggle colorValue="warning"/>
      </Stack>
      <Stack direction="row" alignItems="center" spacing={3} sx={{ mt: 5 }}>
        <p>10. Snack Bar - </p>
        <Toast message="You Are Registered Successfully" colorValue="success"/>
      </Stack>
    </div>
  );
}

export default App;
