import * as Yup from "yup";

// export const ONLY_CHARACTER_REGEX =
//   /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð 0-9]+$/u;

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
