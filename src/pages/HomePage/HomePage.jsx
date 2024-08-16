import { FaAddressCard } from "react-icons/fa";
import css from './HomePage.module.css'



const HomePage = () => {
  return (
    <div className={css.container}>
        <h1 className={css.title}>Welcome to Your Personal Phone Book! 📝
Easily manage all your contacts in one place, right at your fingertips. Stay connected with the people who matter most!

 </h1>
			<FaAddressCard  color='tomato' size={'270px'} />
			<p className={css.text}>Please register to start saving your contacts!</p>
    </div>
  )
}

export default HomePage