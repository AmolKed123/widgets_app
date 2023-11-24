import AutoComplete from "./Components/AutoComplete";
import SelectMultipleOption from "./Components/SelectMultipleOption";
import VolumeSlider from "./Components/VolumeSlider";
import Table from "./Components/Table";
import CustomModal from "./Components/CustomModal";
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
import BerrySelect from "./Components/BerrySelect";

export default function TableContainer() {
  return (
    <>
      <Stack sx={{ width: "100%" }}>
        <Header />
        <Stack className="child-components" sx={{ mx: 5, width: "auto" }}>
          <Stack direction="row" alignItems="center" spacing={3} sx={{ mt: 5 }}>
            <p className="autocompleteclass">0.Berry Select - </p>
            <BerrySelect />
          </Stack>
          <Stack direction="row" alignItems="center" spacing={3} sx={{ mt: 5 }}>
            <p className="autocompleteclass">1. AutoComplete TextField - </p>
            <AutoComplete
              labelName="Location"
              options={[
                {
                  label: "Mumbai",
                },
                {
                  label: "Pune",
                },
                {
                  label: "Thane",
                },
                {
                  label: "Delhi",
                },
                {
                  label: "Bangalore",
                },
                {
                  label: "Hyderabad",
                },
                {
                  label: "Chennai",
                },
                {
                  label: "Kolkata",
                },
                {
                  label: "Chandigarh",
                },
                {
                  label: "Lucknow",
                },
                {
                  label: "Mysore",
                },
                {
                  label: "Jaipur",
                },
                {
                  label: "Kanpur",
                },
                {
                  label: "Bhopal",
                },
                {
                  label: "Vijaywada",
                },
                {
                  label: "Indore",
                },
                {
                  label: "Jodhapur",
                },
                {
                  label: "Nagpur",
                },
                {
                  label: "Jammu",
                },
                {
                  label: "Ratnagiri",
                },
                {
                  label: "Solapur",
                },
              ]}
              customWidth={160}
            />
          </Stack>
          <Stack direction="row" alignItems="center" spacing={3} sx={{ mt: 5 }}>
            <p>2. Select Multiple Options - </p>
            <SelectMultipleOption
              labelName="Country"
              Options={[
                {
                  value: "Australia",
                  label: "Australia",
                },
                {
                  value: "India",
                  label: "India",
                },
                {
                  value: "USA",
                  label: "USA",
                },
                {
                  value: "United Kingdom",
                  label: "United Kingdom",
                },
                {
                  value: "Srilanka",
                  label: "Srilanka",
                },
                {
                  value: "China",
                  label: "China",
                },
                {
                  value: "Japan",
                  label: "Japan",
                },
                {
                  value: "South Africa",
                  label: "South Africa",
                },
                {
                  value: "Poland",
                  label: "Poland",
                },
                {
                  value: "Austin",
                  label: "Austin",
                },
                {
                  value: "Germany",
                  label: "Germany",
                },
                {
                  value: "France",
                  label: "France",
                },
                {
                  value: "Italy",
                  label: "Italy",
                },
                {
                  value: "Kenya",
                  label: "Kenya",
                },
                {
                  value: "Ireland",
                  label: "Ireland",
                },
                {
                  value: "Zambia",
                  label: "Zambia",
                },
                {
                  value: "Qatar",
                  label: "Qatar",
                },
              ]}
              customWidth={160}
            />
          </Stack>
          <Stack direction="row" alignItems="center" spacing={3} sx={{ mt: 5 }}>
            <p>2. Select Single Option - </p>
            <SelectSingleOption
              labelName="Country"
              Options={[
                {
                  value: "Australia",
                  label: "Australia",
                },
                {
                  value: "India",
                  label: "India",
                },
                {
                  value: "USA",
                  label: "USA",
                },
                {
                  value: "United Kingdom",
                  label: "United Kingdom",
                },
                {
                  value: "Srilanka",
                  label: "Srilanka",
                },
                {
                  value: "China",
                  label: "China",
                },
                {
                  value: "Japan",
                  label: "Japan",
                },
                {
                  value: "South Africa",
                  label: "South Africa",
                },
                {
                  value: "Poland",
                  label: "Poland",
                },
                {
                  value: "Austin",
                  label: "Austin",
                },
                {
                  value: "Germany",
                  label: "Germany",
                },
                {
                  value: "France",
                  label: "France",
                },
                {
                  value: "Italy",
                  label: "Italy",
                },
                {
                  value: "Kenya",
                  label: "Kenya",
                },
                {
                  value: "Ireland",
                  label: "Ireland",
                },
                {
                  value: "Zambia",
                  label: "Zambia",
                },
                {
                  value: "Qatar",
                  label: "Qatar",
                },
              ]}
              customWidth={160}
            />
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
            <CustomModal
              modalData={{
                buttonHeading: "Subscribe",
                heading: "Subscription Modal",
                title: "Plz Provide Email To Subscribe To The Webisite",
              }}
            />
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
              //message="Registration Failed.."
              //colorValue="error"
            />
          </Stack>
          <Stack direction="row" alignItems="center" spacing={3} sx={{ mt: 5 }}>
            <p>11. Date Picker - </p>
            {/* <CustomPicker /> */}
            <DatePickerComponent heading="Admission Date" />
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
