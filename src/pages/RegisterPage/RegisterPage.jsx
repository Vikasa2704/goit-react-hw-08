import RegistrationForm from "../../components/RegistrationForm/RegistrationForm";
import css from './RegisterPage.module.css'



const RegisterPage = () => {
  return (
    <div className={css.container}>
      
      <RegistrationForm />
    </div>
  )
}

export default RegisterPage