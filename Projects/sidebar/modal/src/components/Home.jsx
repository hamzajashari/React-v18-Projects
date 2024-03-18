import { useGlobalContext } from "../context"
import {FaBars} from 'react-icons/fa';

const Home = () => {
    const {openSideBar, openModal} = useGlobalContext();
    console.log(openModal);
  return (
    <main>
        <button onClick={openSideBar} className="sidebar-toggle">
            <FaBars/>
        </button>
        <button onClick={openModal} className="btn">Show Modal</button>
    </main>
  )
}
export default Home