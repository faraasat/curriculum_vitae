import { InputAdornment, Select, TextField } from "@material-ui/core";
import {
  ContactFormAlignmentStyles,
  ContactFormTypoAlignmentStyles,
  ContactFormTypographyStyles,
  ContactFormTypographyTypoStyles,
  ContactFormFormAlignmentStyles,
  ContactFormLineAlignmentStyles,
  ContactFormTextBoxAlignmentStyles,
  ContactFormBtnStyling
} from "./contact-form.styles";
import AccountCircle from "@material-ui/icons/AccountCircle";
import { useState } from "react";
import AlternateEmailIcon from "@material-ui/icons/AlternateEmail";
import SubjectIcon from "@material-ui/icons/Subject";
import countryList from "country-list";
import CustomButton from "../custom-button/custom-button.component";
import SendIcon from "@material-ui/icons/Send";

const ContactFormComponent = () => {
  const [country, setCountry] = useState<string>("");

  const handleChange = (event: any) => {
    setCountry(event.target.value);
  };

  return (
    <ContactFormAlignmentStyles>
      <ContactFormTypoAlignmentStyles>
        <ContactFormTypographyStyles>
          <ContactFormTypographyTypoStyles>
            GET IN TOUCH
          </ContactFormTypographyTypoStyles>
        </ContactFormTypographyStyles>
      </ContactFormTypoAlignmentStyles>
      <ContactFormFormAlignmentStyles>
        <ContactFormLineAlignmentStyles>
          <TextField
            label="First Name"
            type="text"
            placeholder="Max"
            variant="filled"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <AccountCircle />
                </InputAdornment>
              ),
            }}
          />
          <TextField
            label="Last Name"
            type="text"
            placeholder="Adam"
            variant="filled"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <AccountCircle />
                </InputAdornment>
              ),
            }}
          />
        </ContactFormLineAlignmentStyles>
        <ContactFormLineAlignmentStyles>
          <TextField
            label="Email"
            type="email"
            placeholder="max@example.com"
            variant="filled"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <AlternateEmailIcon />
                </InputAdornment>
              ),
            }}
          />
          <TextField
            label="Subject"
            type="text"
            placeholder="I Wanna Discuss About..."
            variant="filled"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SubjectIcon />
                </InputAdornment>
              ),
            }}
          />
        </ContactFormLineAlignmentStyles>
        <ContactFormTextBoxAlignmentStyles>
          <Select
            variant="filled"
            native
            value={country}
            onChange={handleChange}
            inputProps={{
              name: "age",
              id: "filled-age-native-simple",
            }}
          >
            <option key={"none"} value={"none"}>
              Country
            </option>
            {countryList.getData().map((country: any) => (
              <option key={country.code} value={country.code}>
                {country.name.split(",")[0]}
              </option>
            ))}
          </Select>
        </ContactFormTextBoxAlignmentStyles>
        <ContactFormTextBoxAlignmentStyles>
          <TextField
            label="Message"
            type="text"
            multiline
            rows={3}
            placeholder="I wanna ask..."
            variant="filled"
          />
        </ContactFormTextBoxAlignmentStyles>
        <ContactFormBtnStyling>
          <CustomButton txt1="Send Message" txt2="Send!" Ico={SendIcon} />
        </ContactFormBtnStyling>
      </ContactFormFormAlignmentStyles>
    </ContactFormAlignmentStyles>
  );
};

export default ContactFormComponent;
