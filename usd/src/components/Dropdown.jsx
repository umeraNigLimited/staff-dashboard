import React, { useState, useRef} from 'react';
import { DropdownContainer, DropdownButton, DropdownContent, DropdownItem } from '../components/styled/DropdownContainer';

function DropdownMenu() {
  const [open, setOpen] = useState(false);
  const buttonRef = useRef(null);
const [buttonPosition, setButtonPosition] = useState({ x: 0, y: 0 });
  const [priority, setPriority] = useState(['High', 'Low', 'Normal'])

  const toggleDropdown = () => setOpen(!open);

  const handleOpenMenu = () => {
    const rect = buttonRef.current.getBoundingClientRect();
    setButtonPosition({ x: rect.left, y: rect.top });
    // setOpen(true);
    setOpen(!open)
  };

  return (
    <DropdownContainer>
      <DropdownButton ref={buttonRef} onClick={handleOpenMenu}>High</DropdownButton>
      <DropdownContent $open={open} onMouseLeave={()=> setOpen(false)} position={buttonPosition}>
        {priority.map((items, index) => <DropdownItem key={index}>{items}</DropdownItem>)}
      </DropdownContent>
    </DropdownContainer>
  );
}

export default DropdownMenu;
