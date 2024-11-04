import React from 'react';

interface TabComponentProps {
  label: string;
  isActive?: boolean;
}

const TabComponent: React.FC<TabComponentProps> = ({ label, isActive = false }) => {
  const baseClasses = "px-px py-3.5 border-t-[3px]";
  const activeClasses = "text-base font-bold bg-white border-slate-400 text-teal-950";
  const inactiveClasses = "border-white";

  return (
    <div className={`${baseClasses} ${isActive ? activeClasses : inactiveClasses}`}>
      {label}
    </div>
  );
};

export default TabComponent;