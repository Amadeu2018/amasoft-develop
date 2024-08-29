import React, { useState }  from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as fas from '@fortawesome/free-solid-svg-icons';


const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const faHome = fas.faHome;
  const faStickyNote = fas.faStickyNote;
  const faPlus = fas.faPlus;

  return (
    <div className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
      <button className="toggle-button" onClick={handleToggle}>
        {isOpen ? 'Hide' : 'Show'}
      </button>
      <div className={isOpen ? '' : 'hidden'}>
        <h2>Menu</h2>
        <ul>
          <li>
            <FontAwesomeIcon icon={faHome} />
            <a href="#">Home</a>
          </li>
          <li>
            <FontAwesomeIcon icon={faStickyNote} />
            <a href="#">Notes</a>
          </li>
          <li>
            <FontAwesomeIcon icon={faPlus} />
            <a href="#">Create Note</a>
          </li>
        </ul>
      </div>
    </div>
  );
};


export default Sidebar;