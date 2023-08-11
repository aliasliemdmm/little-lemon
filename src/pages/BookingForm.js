import React from "react";
import "./BookingForm.css";
import RadioButton from "../components/RadioButton";
import { useFormik } from "formik";
import useSubmit from "../hooks/useSubmit";
import {
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Select,
  Textarea,
} from "@chakra-ui/react";
import * as Yup from 'yup';

const BookingForm = ({ navigate }) => {
  const { response, submit} = useSubmit();

  const timeSlots = ["17:00","18:00","19:00","20:00","21:00","22:00"];
  const occasions = ["Birthday","Engagement","Anniversary","Other"];
  const seating = ["Standard","Outside"];

  const formik = useFormik({
    initialValues: {
      firstName: "",
      email: "",
      resdate: "",
      restime: "",
      guest: "",
      occasion: "",
      seating: "",
      message: ""
    },
    onSubmit: (values) => {
      alert(1);
      navigate("/booking-confirmation");
//      submit("", values);
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required("Required"),
      email: Yup.string().email("Invalid email address").required("Required"),
      resdate: Yup.string().required("Required"),
      restime: Yup.string().required("Required"),
      guest: Yup.string().required("Required"),
      //message: Yup.string().min(25, "Must be at least 25 characters").required("Required")
    }),
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="reservation">
        <div className="item">
          <FormControl isInvalid={!!formik.errors.firstName && formik.touched.firstName}>
            <FormLabel htmlFor="firstName">Name
              <Input id="firstName"
                    name="firstName"
                    {...formik.getFieldProps("firstName")}
              />
              <FormErrorMessage>{formik.errors.firstName}</FormErrorMessage>
            </FormLabel>
          </FormControl>
          <FormControl isInvalid={!!formik.errors.email && formik.touched.email}>
            <FormLabel htmlFor="email">Email
              <Input
                id="email"
                name="email"
                type="email"
                {...formik.getFieldProps("email")} 
              />
              <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
            </FormLabel>
          </FormControl>
          <FormControl isInvalid={!!formik.errors.resdate && formik.touched.resdate}>
            <FormLabel htmlFor="resdate">Choose date
            <Input
                id="resdate"
                name="resdate"
                type="date"
                {...formik.getFieldProps("resdate")} 
              />
              <FormErrorMessage>{formik.errors.resdate}</FormErrorMessage>
            </FormLabel>
          </FormControl>
          <FormControl isInvalid={!!formik.errors.restime && formik.touched.restime}>
            <FormLabel htmlFor="restime">Choose time
              <Select
                id="restime"
                name="restime"
                {...formik.getFieldProps("restime")}
              >
                {timeSlots.map((slot) => (
                  <option key={slot} value={slot}>
                    {slot}
                  </option>
                ))}
              </Select>
              <FormErrorMessage>{formik.errors.restime}</FormErrorMessage>
            </FormLabel>
          </FormControl>
        </div>
        <div className="item">
          <FormControl isInvalid={!!formik.errors.guests && formik.touched.guests}>
              <FormLabel htmlFor="guests">Number of guests
              <Input
                id="guests"
                name="guests"
                type="number"
                placeholder="1" min="1" max="10" 
                {...formik.getFieldProps("guests")} 
              />
              <FormErrorMessage>{formik.errors.guests}</FormErrorMessage>
            </FormLabel>
          </FormControl>
          <FormControl isInvalid={!!formik.errors.occasion && formik.touched.occasion}>
            <FormLabel htmlFor="occasion">occasion
              <Select
                id="occasion"
                name="occasion"
                {...formik.getFieldProps("occasion")}
              >
                {occasions.map((slot) => (
                  <option key={slot} value={slot.toLowerCase()}>
                    {slot}
                  </option>
                ))}
              </Select>
              <FormErrorMessage>{formik.errors.occasion}</FormErrorMessage>
            </FormLabel>
          </FormControl>
          <FormControl isInvalid={!!formik.errors.seating && formik.touched.seating}>
            <FormLabel htmlFor="seating">Seating Option
              <div id="radioGroup">
                {seating.map((slot, idx) => (
                  <RadioButton
                  name="seating"
                  label={slot}
                  checked={idx==0}
                  value={slot}
                  {...formik.getFieldProps("seating")}
                  />
                ))}
              </div>
              <FormErrorMessage>{formik.errors.occasion}</FormErrorMessage>
            </FormLabel>
          </FormControl>
        </div>
        <div className="item">
          <FormControl isInvalid={!!formik.errors.message && formik.touched.message}>
            <FormLabel htmlFor="message">Special requests</FormLabel>
            <Textarea
              id="message"
              name="message"
              height={250}
              {...formik.getFieldProps("message")}
            />
            <FormErrorMessage>{formik.errors.message}</FormErrorMessage>
          </FormControl>
        </div>
        <div className="item">
          <center><Button type="submit" className="center">Make Reservation</Button></center>
        </div>
      </div>
    </form>
  );
};

export default BookingForm;
