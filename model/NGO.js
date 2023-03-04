import mongoose from "mongoose";

const { Schema, connection } = mongoose;

const NGOSchema = new Schema(
  {
    name: {
      type: String,
      trim: true,
      match: [
        /^[a-zA-Z ]+$/,
        (props) => `${props.value} is not a valid ngo name`,
      ],
      required: [true, "Please add a NGO Name"],
    },
    email_address: {
      type: String,
      trim: true,
      lowercase: true,
      match: [
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/,
        (props) => `${props.value} is not a valid email address`,
      ],
      required: [true, "Please add an Email Address"],
      unique: true,
    },
    phone_number: {
      type: String,
      trim: true,
      match: [
        /^[0-9]{10}$/,
        (props) => `${props.value} is not a valid phone number`,
      ],
      required: [true, "Please add a Phone Number"],
      unique: true,
    },
    in_charge_name: {
      type: String,
      trim: true,
      match: [
        /^[a-zA-Z ]+$/,
        (props) => `${props.value} is not a valid in charge name`,
      ],
      required: [true, "Please add a In Charge Name"],
    },
    address: {
      type: String,
      trim: true,
      required: [true, "Please add a NGO Address"],
    },
    about: {
      type: String,
      trim: true,
      required: [true, "Please add a About NGO"],
    },
    password: {
      type: String,
      required: [true, "Please add a Password"],
    },
  },
  {
    timestamps: true,
  }
);

const NGO = connection.useDb("TECH-NIGHT").model("NGO", NGOSchema);

export default NGO;
