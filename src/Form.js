import { Button } from "@material-ui/core";
import { Send } from "@material-ui/icons";
import { useState } from "react";
import useGeoLocation from "react-ipgeolocation";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";

function Form() {
    const [phone, setPhone] = useState("");
    const { country } = useGeoLocation();
  
    const sendMessage = (e) => {
      e.preventDefault();
      const to = phone.split("+")[1];
      if (to) {
        window.open("https://web.whatsapp.com/send?phone=" + to);
      }
    };
  return (
    <div>
      <form className="fasttext__form">
        <p>Send Whatsapp messages without saving the number.</p>
        <PhoneInput
          defaultCountry={country}
          value={phone}
          placeholder="Phone Number"
          onChange={setPhone}
        />
        <Button
          type="submit"
          className="fasttext__button"
          onClick={sendMessage}
        >
          <Send /> Send
        </Button>
      </form>
    </div>
  );
}

export default Form;
