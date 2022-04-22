import React from "react";

export interface IComponentOption {
  id: string;
  name: string;
  price: string;
  selected: boolean;
}

export interface IOptionItemProps {
  componentId: string;
  option: IComponentOption;
  handleOptionClick: (componentId: string, optionId: string) => void;
  handleOptionKeyDown: (componentId: string, optionId: string) => void;
}

const OptionItem = ({
  componentId,
  option,
  handleOptionClick,
  handleOptionKeyDown,
}: IOptionItemProps) => {
  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Spacebar" || e.key === " ") {
      e.preventDefault();
      handleOptionKeyDown(componentId, option.id);
    }
  };
  return (
    <li
      key={option.id}
      className={`${
        option.selected ? "selected" : ""
      } component-options__component-option clickable rounded-grey-border`}
    >
      <div
        className="component-options__info"
        tabIndex={0}
        role="option"
        aria-selected={option.selected}
        onClick={() => handleOptionClick(componentId, option.id)}
        onKeyDown={handleKeyDown}
      >
        <span className="component-option__name">{option.name}</span>
        <span className="component-option__price">{option.price}</span>
      </div>
    </li>
  );
};

export default OptionItem;
