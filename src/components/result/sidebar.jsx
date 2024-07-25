const SidebarItem = ({ children }) => {
    return (
      <li className="flex w-full bg-[#121212] p-2 rounded-xl pl-4 group hover:bg-white/5 transition-colors duration-300 ease-in-out cursor-pointer">
        <div className="flex items-center gap-3 justify text-white/70 group-hover:text-white/95 transition-colors duration-300 ease-in-out">
          {children}
        </div>
      </li>
    );
  };
  
  export default SidebarItem;