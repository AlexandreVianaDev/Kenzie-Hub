import * as yup from "yup";

const formSchema = yup
  .object()
  .shape({
    title: yup.string().required("Digite o nome da tecnologia"),
    status: yup.string().required("Escolha o nível dessa tecnologia"),
  })
  .required();

export default formSchema;
