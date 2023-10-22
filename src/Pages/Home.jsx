import './css/Home.css'
import {Link} from "react-router-dom"
import Function from '../Components/Functions.jsx'
import setting from '../img/setting.png'
import addition from '../img/add.jpg'



const Home = () => {
  return (
    <>
      <div>
        <Link to="/setting" className='setting'><Function name='Setting' url={setting}/></Link>
        <Link to="/addition" className='addition'><Function name='Addition' url={addition}/></Link>
      </div>
    </>
  )
}

export default Home;