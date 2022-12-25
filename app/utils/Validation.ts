import * as Yup from "yup";

export const ONLY_CHARACTER_REGEX =/^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð 0-9]+$/u;

export const loginSchema = Yup.object().shape({
    email: Yup.string()
      .email("Enter a valid Email")
      .required("Email is required")
      .label("Email"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .max(24, "Password can be maximum 24 characters")
      .required("Password is required")
      .label("Password"),
  });