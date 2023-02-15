import * as yup from "yup";

const formSchema = yup
  .object()
  .shape({
    status: yup.string().required("Escolha o nível dessa tecnologia"),
  })
  .required();

export default formSchema;