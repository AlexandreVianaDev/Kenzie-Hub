import * as yup from "yup";

const formSchema = yup
  .object()
  .shape({
    email: yup
      .string()
      .required("Digite seu email")
      .email("Digite um email válido"),
    password: yup.string().required("Digite sua senha"),
  })
  .required();

export default formSchema;
