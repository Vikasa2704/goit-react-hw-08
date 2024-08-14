// import PageTitle from "../../components/PageTitle/PageTitle";
import RegistrationForm from "../../components/RegistrationForm/RegistrationForm";
import css from './RegisterPage.module.css'



const RegisterPage = () => {
  return (
    <div className={css.container}>
        {/* <PageTitle>Register</PageTitle> */}
      <RegistrationForm />
    </div>
  )
}

export default RegisterPage