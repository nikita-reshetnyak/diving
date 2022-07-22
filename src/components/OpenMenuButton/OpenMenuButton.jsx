import './index.scss';
import { menuBurger } from '../../images/icons';
export const OpenMenuButton = ({ toggleMenu }) => (
   
        <div className='btn' onClick={() => toggleMenu((value) => !value)}>
            <img src={menuBurger} alt="" />
        </div>

  

   
)