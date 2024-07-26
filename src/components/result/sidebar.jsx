const SidebarItem = ({ children }) => {
  return (
    <li className="flex w-full p-2 rounded-xl pl-4 group hover:bg-white/5 transition-colors duration-300 ease-in-out cursor-pointer">
      <div className="flex items-center gap-3 justify text-white/50 group-hover:text-white/85 transition-colors duration-300 ease-in-out">
        {children}
      </div>
    </li>
  );
};

export default SidebarItem;
