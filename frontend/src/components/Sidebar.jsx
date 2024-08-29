import { useNavigate } from 'react-router-dom'; // Para redirecionar
import React, { useState }  from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as fas from '@fortawesome/free-solid-svg-icons';
import { ACCESS_TOKEN, REFRESH_TOKEN } from '../constants'; // Certifique-se de que o caminho está correto



const Sidebar = () => {
    const navigate = useNavigate(); // Hook para navegação
    const [isOpen, setIsOpen] = useState(true);

    const handleLogout = () => {
        // Remover os tokens do armazenamento local
        localStorage.removeItem(ACCESS_TOKEN);
        localStorage.removeItem(REFRESH_TOKEN);

        // Redirecionar para a página de login
        navigate('/login');
    };

    const handleToggle = () => {
        setIsOpen(!isOpen);
  };

  //const logout = () => {
  //  console.log('Logging out...');
  //};

  const faHome = fas.faHome;
  const faStickyNote = fas.faStickyNote;
  const faPlus = fas.faPlus;
  const faSignOut = fas.faSignOut; // Add the sign-out icon
  const faBars = fas.faBars; // Add the faBars icon


 return (
     <div className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
       <div className="menu">
         <h2 className={isOpen ? '' : 'hidden'} onClick={handleToggle} style={{ cursor: 'pointer' }}>
           <FontAwesomeIcon icon={faBars} className="mr-2" />
           {isOpen && <span>Menu</span>}
         </h2>
         <ul>
           <li>
             <a href="#">
               <FontAwesomeIcon icon={fas.faHome} />
               {isOpen && <span>Home</span>}
             </a>
           </li>
           <li>
             <a href="#">
               <FontAwesomeIcon icon={fas.faStickyNote} />
               {isOpen && <span>Notes</span>}
             </a>
           </li>
           <li>
             <a href="#">
               <FontAwesomeIcon icon={fas.faPlus} />
               {isOpen && <span>Create Note</span>}
             </a>
           </li>
         </ul>
       </div>
       <button className="logout-button" onClick={handleLogout}>
         <FontAwesomeIcon icon={fas.faSignOut} />
         {isOpen && <span>Logout</span>}
       </button>
     </div>
   );
};


export default Sidebar;