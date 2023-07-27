import React from 'react';
import { employeeSidebarButtons } from '../../../utils/arrays';
import NavButtons from '../NavButtons';

function Sidebar() {
  return (
    <nav className="sidebar">
      <h2>
        Resources
      </h2>
      <NavButtons items={employeeSidebarButtons} />
    </nav>
  );
}

export default Sidebar;
