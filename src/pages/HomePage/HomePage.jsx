import { FaAddressCard } from "react-icons/fa";
import css from './HomePage.module.css'



const HomePage = () => {
  return (
    <div className={css.container}>
        <h1 className={css.title}>This application created to save your contacts in one place </h1>
			<FaAddressCard  color='tomato' size={'300px'} />
			<p className={css.text}>Please register to start saving your contacts!</p>
    </div>
  )
}

export default HomePage