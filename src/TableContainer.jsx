import AutoComplete from "./Components/AutoComplete";
import SelectWithCheckbox from "./Components/SelectWithCheckbox";
import VolumeSlider from "./Components/VolumeSlider";
import Table from "./Components/Table";
import SubscribeModel from "./Components/SubscribeModal";
import Stepper from "./Components/Stepper";
import CircularProgressBar from "./Components/CircularProgressBar";
import SwitchToggle from "./Components/SwitchToggle";
import Toast from "./Components/Toast";
import DatePickerComponent from "./Components/DatePickerComponent";
import BarChartComponent from "./Components/BarChartComponent";
import LineChartComponent from "./Components/LineChartComponent";
import RatingComponent from "./Components/RatingComponent";
import TabsComponent from "./Components/TabsComponent";
import AccordionComponent from "./Components/AccordionComponent";
import DataTable from "./Components/DataTable";
import Header from "./Header";
import { Stack, Box } from "@mui/material";
import "./TableContainer.css";
import BasicTextField from "./CommonComponents/BasicTextField";
import CustomPicker from "./Components/CustomDatePicker";
import SelectSingleOption from "./Components/SelectSingleOption";

export default function TableContainer() {
  return (
    <>
      <Stack sx={{ width: "100%" }}>
        <Header />
        <Stack className="child-components" sx={{ mx: 5, width: "auto" }}>
          <Box sx={{ mt: 3 }}>
            <BasicTextField
              labelValue="Location"
              
            />
          </Box>

          <Stack direction="row" alignItems="center" spacing={3} sx={{ mt: 5 }}>
            <p className="autocompleteclass">1. AutoComplete TextField - </p>
            <AutoComplete />
          </Stack>
          <Stack direction="row" alignItems="center" spacing={3} sx={{ mt: 5 }}>
            <p>2. Select With Checkbox - </p>
            <SelectWithCheckbox />
          </Stack>
          <Stack direction="row" alignItems="center" spacing={3} sx={{ mt: 5 }}>
            <p>2. Select Single Option - </p>
            <SelectSingleOption />
          </Stack>
          <Stack direction="row" alignItems="center" spacing={3} sx={{ mt: 5 }}>
            <p>3. Volume Slider - </p>
            <VolumeSlider />
          </Stack>
          {/* <Stack direction="row" alignItems="center" spacing={3} sx={{ mt: 5 }}>
            <p>4. Table - </p>
            <Table />
          </Stack> */}
          <Stack direction="row" alignItems="center" spacing={3} sx={{ mt: 5 }}>
            <p>6. Modal - </p>
            <SubscribeModel data="Please Provide Email Address To Subscribe To This Website" />
          </Stack>
          <Stack direction="row" alignItems="center" spacing={3} sx={{ mt: 5 }}>
            <p>7. Stepper - </p>
            <Stepper
              steps={[
                "Sign Up For Account",
                "Sign In Using Credentials",
                "Sign Out",
              ]}
            />
          </Stack>
          <Stack direction="row" alignItems="center" spacing={3} sx={{ mt: 5 }}>
            <p>8. Circular Progress Bar - </p>
            <CircularProgressBar colorValue="secondary" />
          </Stack>
          <Stack direction="row" alignItems="center" spacing={3} sx={{ mt: 5 }}>
            <p>9. Switch Toggle - </p>
            <SwitchToggle colorValue="warning" />
          </Stack>
          <Stack direction="row" alignItems="center" spacing={3} sx={{ mt: 5 }}>
            <p>10. Snack Bar - </p>
            <Toast
              message="You Are Registered Successfully"
              colorValue="success"
            />
          </Stack>
          <Stack direction="row" alignItems="center" spacing={3} sx={{ mt: 5 }}>
            <p>11. Date Picker - </p>
            {/* <CustomPicker /> */}
             <DatePickerComponent heading="Admission And Joining Date Picker" />
          </Stack>
          <Stack direction="row" alignItems="center" spacing={3} sx={{ mt: 5 }}>
            <p>12. Bar Chart - </p>
            <BarChartComponent />
          </Stack>
          <Stack direction="row" alignItems="center" spacing={3} sx={{ mt: 5 }}>
            <p>13. Line Chart - </p>
            <LineChartComponent />
          </Stack>
          <Stack direction="row" alignItems="center" spacing={3} sx={{ mt: 5 }}>
            <p>14. Rating Component - </p>
            <RatingComponent ratingColor="#ffd11a" />
          </Stack>
          <Stack
            direction="row"
            alignItems="center"
            spacing={3}
            sx={{ height: "300px" }}
          >
            <p>15. Tabs Component - </p>
            <TabsComponent />
          </Stack>
          <Stack direction="row" alignItems="center" spacing={2} sx={{ mt: 5 }}>
            <p>16. Accordion Component - </p>
            <AccordionComponent />
          </Stack>
          <Stack direction="row" alignItems="center" sx={{ mt: 5 }}>
            <Table />
          </Stack>
          {/* <Stack direction="row" alignItems="center" spacing={3} sx={{ mt: 5 }}>
            <DataTable />
          </Stack> */}
        </Stack>
      </Stack>
    </>
  );
}
