require("dotenv").config();
import { Mail } from "../Interfaces/mail";
import sgMail from "@sendgrid/mail";
const { SENDGRID_API_KEY } = process.env;

sgMail.setApiKey(SENDGRID_API_KEY as string);
export const sendMail = (msg: Mail) => {
  sgMail.send(msg).then(
    () => {
      console.log("Correo enviado");
    },
    (error) => {
      console.error(error);
      if (error.response) {
        console.error(error.response.body);
      }
    }
  );
};
