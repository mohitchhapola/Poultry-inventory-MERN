import React, { useState } from 'react';
// import { RiProductHuntLine } from 'react-icons/ri';
import { HiMenuAlt3 } from "react-icons/hi";
import SidebarItem from './sidebarItem';
import { useNavigate } from 'react-router-dom';


function Sidebar({children}) {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const toggle = () => setIsOpen(!isOpen);

  const menu = [
    {
      title: 'Dashboard',
      path: '/dashboard',
    },
    {
      title: 'Add Product',
      path: '/product',
    },
    {
      title: 'Report Bug',
      path: '/contact-us',
    },
  ];

  return (
    <>
    
    <div className="flex">
  <div className={`sidebar  ${isOpen ? 'w-64' : 'w-4'} min-h-screen bg-gray-900 overflow-auto transition-all duration-500`}>
    <div className="top_section  flex items-center justify-between p-4 bg-dark-blue text-white">
      {/* <div className={`logo ${isOpen ? 'text-2xl' : 'hidden'} cursor-pointer`}>
        <RiProductHuntLine size={35} />
      </div> */}
      <div className={`bars ease-in  ${isOpen ? 'ml-auto' : 'ml-auto'} text-white text-2xl cursor-pointer transition-all duration-300 hover:text-primary`}>
        <HiMenuAlt3 onClick={toggle} />
      </div>
    </div>
    {menu.map((item, index) => {
      return <SidebarItem key={index} item={item} isOpen={isOpen}/>;
      // <div key={index} className="sidebar-item p-3 transition-all text-gray-500 cursor-pointer duration-150 hover:bg-pink-200 hover:text-black">
      //   <div className="sidebar-title flex justify-between items-center">
      //     <span className="flex items-center gap-3 transition-all duration-500">
      //       <span className="icon text-xl">
      //         {/* Your icon goes here */}
      //       </span>
      //       {item.title}
      //     </span>
      //     <span className={`arrow-icon ${isOpen ? 'transform rotate-90' : ''} cursor-pointer transition-all duration-500`}>
            
      //     </span>
      //   </div>
        {/* <div className={`sidebar-content ${isOpen ? 'h-auto' : 'h-0'} overflow-hidden`}>
          Submenu items
        </div> */}
      // </div>
    })}
  </div>

  <main className={` ${isOpen ? 'pl-60' : 'pl-60'} transition-all duration-500`}>
    {children}
  </main>
</div>

      </>
  );
}

export default Sidebar;
