import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const formSchema = yup
  .object()
  .shape({
    email: yup.string().required("Digite seu email"),
    password: yup.string().required("Digite sua senha"),
  })
  .required();

export default formSchema