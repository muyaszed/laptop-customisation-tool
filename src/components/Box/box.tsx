import React from "react";

export interface IBoxProps {
  header: string;
  containerClassName: string;
  dataTestId: string;
  children: React.ReactNode;
}

const Box = ({
  header,
  containerClassName,
  dataTestId,
  children,
}: IBoxProps) => {
  return (
    <div
      className={`${containerClassName} rounded-grey-border`}
      data-testid={dataTestId}
    >
      <h2>{header}</h2>
      {children}
    </div>
  );
};

export default Box;
