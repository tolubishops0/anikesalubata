import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import Payment from "payment";

function clearNumber(value = "") {
  return value.replace(/\D+/g, "");
}

export function formatCreditCardNumber(value) {
  if (!value) {
    return value;
  }

  const issuer = Payment.fns.cardType(value);
  const clearValue = clearNumber(value);
  let nextValue;

  switch (issuer) {
    case "amex":
      nextValue = `${clearValue.slice(0, 4)} ${clearValue.slice(
        4,
        10
      )} ${clearValue.slice(10, 15)}`;
      break;
    case "dinersclub":
      nextValue = `${clearValue.slice(0, 4)} ${clearValue.slice(
        4,
        10
      )} ${clearValue.slice(10, 14)}`;
      break;
    default:
      nextValue = `${clearValue.slice(0, 4)} ${clearValue.slice(
        4,
        8
      )} ${clearValue.slice(8, 12)} ${clearValue.slice(12, 19)}`;
      break;
  }

  return nextValue.trim();
}

export function formatCVC(value, prevValue, allValues = {}) {
  const clearValue = clearNumber(value);
  let maxLength = 3;

  if (allValues.number) {
    const issuer = Payment.fns.cardType(allValues.number);
  }

  return clearValue.slice(0, maxLength);
}

export function formatExpirationDate(value) {
  const clearValue = clearNumber(value);

  if (clearValue.length >= 3) {
    return `${clearValue.slice(0, 2)}/${clearValue.slice(2, 4)}`;
  }

  return clearValue;
}

export const authSignUpSchema = yup.object().shape({
  name: yup.string().required("name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  phoneNumber: yup.number().required("pls enter phone number"),
  password: yup
    .string()
    .min(8, "Password must be at least 8 characters long")
    .max(15, "Password must be at most 15 characters long")
    .required("Password is required"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords do not match")
    .required(),
});
export const authSignInSchema = yup.object().shape({
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup
    .string()
    .min(8, "Password must be at least 8 characters long")
    .max(15, "Password must be at most 15 characters long")
    .required("Password is required"),
});
export const authResetSchema = yup.object().shape({
  email: yup.string().email("Invalid email").required("Email is required"),
});

export const deliverySchema = yup.object().shape({
  phoneNumber: yup.string().required("pls enter phone number"),
  street: yup.string().required("pls provide your street address"),
  state: yup.string().required("pls provide your state"),
  // country: yup.string().required("pls select your country"),
  city: yup.string().required("pls provide your city"),
  zipcode: yup.string().required("pls provide your zipcode"),
});

export const cardSchema = yup.object().shape({
  cardName: yup.string().required("Card name is required"),
  // cardNumber: yup
  //   .string()
  //   .required("Card number is required")
  //   .matches(/^\d{4} \d{4} \d{4} \d{4}$/, "Invalid card number"),
  // cardExp: yup
  //   .string()
  //   .required("Expiration date is required")
  //   .matches(/^\d{2}\/\d{2}$/, "Invalid expiration date"),
  cvv: yup
    .string()
    .required("CVV is required")
    .matches(/^\d{3}$/, "Invalid CVV"),
});
