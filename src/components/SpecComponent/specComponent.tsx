import React from "react";
import type { IComponentOption } from "..";
import { OptionItem } from "..";

export interface ISpecComponentProps {
  componentId: string;
  title: string;
  options: IComponentOption[];
  handleOptionClick: (componentId: string, optionId: string) => void;
  handleOptionKeyDown: (componentId: string, optionId: string) => void;
}

const SpecComponent = ({
  componentId,
  title,
  options,
  handleOptionClick,
  handleOptionKeyDown,
}: ISpecComponentProps) => {
  return (
    <div className="spec-sheet__component">
      <h4 className="component__title">{title}</h4>
      <ul
        className="component__component-options list--no-style"
        data-testid={`${title.toLowerCase()}-spec-list`}
      >
        {options.map((option) => (
          <OptionItem
            key={option.id}
            componentId={componentId}
            option={option}
            handleOptionClick={handleOptionClick}
            handleOptionKeyDown={handleOptionKeyDown}
          />
        ))}
      </ul>
    </div>
  );
};

export default SpecComponent;
