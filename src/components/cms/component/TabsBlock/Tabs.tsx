import React from 'react';

interface TabComponentProps {
  label: string;
  isActive: boolean;
  onClick: () => void;
}

const Tabs: React.FC<TabComponentProps> = ({ label, isActive, onClick }) => {
  const baseClasses = "px-px py-3.5 border-t-[3px] cursor-pointer";
  const activeClasses = "text-base font-bold bg-white border-slate-400 text-teal-950";
  const inactiveClasses = "border-white";

  return (
    <div
      className={`${baseClasses} ${isActive ? activeClasses : inactiveClasses}`}
      onClick={onClick}
      role="tab"
      aria-selected={isActive}
      tabIndex={0}
    >
      {label}
    </div>
  );
};

export default Tabs;