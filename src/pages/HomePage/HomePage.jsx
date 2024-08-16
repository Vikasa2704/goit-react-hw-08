// import img from '../../img/PhoneBook.jpg'
import css from './HomePage.module.css'



const HomePage = () => {
  return (
    <div className={css.container}>
        <h1 className={css.title}>Welcome to Your Personal Phone Book! 📝 </h1>
 {/* <img src={img} alt="Phone Book" /> */}
					<p className={css.text}>Please register to start saving your contacts!</p>
    </div>
  )
}

export default HomePage