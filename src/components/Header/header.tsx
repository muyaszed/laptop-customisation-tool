import React from "react";

export interface IHeaderProps {
  title: string;
}

const Header = ({ title }: IHeaderProps) => {
  return (
    <div className="header">
      <h1>{title}</h1>
    </div>
  );
};

export default Header;
