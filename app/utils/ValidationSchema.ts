import * as Yup from "yup";

 const ONLY_CHARACTER_REGEX =
  /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð 0-9]+$/u;

export const loginSchema = Yup.object().shape({
  email: Yup.string()
    .email("Enter a valid Email")
    .required("Email is required")
    .label("Email"),
  password: Yup.string()
    .min(6)
    .max(24)
    .required("Password is required")
    .label("Password"),
});
export const RegisterSchema = Yup.object().shape({
  fullName: Yup.string()
  .min(3)
  .max(24)
  .matches(ONLY_CHARACTER_REGEX, "Enter a valid name")
  .required("Full Name is required")
  .label("Full Name"),
  email: Yup.string()
    .email("Enter a valid Email")
    .required("Email is required")
    .label("Email"),
  password: Yup.string()
    .min(6)
    .max(24)
    .required("Password is required")
    .label("Password"),
    confirmPassword: Yup.string()
    .required("Password is required")
    .oneOf([Yup.ref("password"), null], "Passwords must match"),
});

export const addItemSchema = Yup.object().shape({
  image: Yup.array()
    .required("image is reqired")
    .min(1,'minimum 1 image required')
    .max(3,'max 3 images allowed')
  .label('Image')
  ,
  title: Yup.string()
    .min(2, "Title must be at least 2 characters")
    .max(60, "Title can be maximum 60 characters")
    .required("Title is required")
    .label("Title"),
  price: Yup.number('only numbers are allowed')
    .min(0)
    .max(100000)
    .required("Price is required")
    .label("Price"),
  category: Yup.object()
    .nullable()
    .required("Category is required")
    .test("strongValueTest", null, (value: any, ctx: any) => {
      if (value == 0) {
        return new Yup.ValidationError(
          `Select a option is required`,
          null,
          "category"
        );
      }

      return true;
    })
    .label("Category"),
  description: Yup.string()
    .min(2, "Description must be at least 2 characters")
    .max(200, "Description can be maximum 200 characters")
    .required("Description is required")
    .label("Description"),
});

export default {RegisterSchema, loginSchema, addItemSchema}
