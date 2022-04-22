import { SpecComponent, Box } from "../";
import { useData } from "../../hooks";

const Content = () => {
  const { laptopData, updateLaptopData } = useData();

  const renderChosenSpecs = () => {
    const chosenSpecNames = laptopData.map(
      (data) => data.options.filter((option) => option.selected)[0].name
    );
    return chosenSpecNames.map((name) => (
      <li key={name} className="spec-list__spec">
        {name}
      </li>
    ));
  };

  const renderTotalCost = () => {
    const basePrice = 300;
    const chosenSpecs = laptopData.map((data) =>
      Number(data.options.filter((option) => option.selected)[0].price.slice(1))
    );
    return `£${
      chosenSpecs.reduce((prev, current) => prev + current, 0) + basePrice
    }`;
  };

  const handleOptionClick = (componentId: string, optionId: string) => {
    updateLaptopData(componentId, optionId);
  };

  const handleBuyNowClick = () => {
    //Continue with buying flow
    console.log("Procedd to the next buying stage");
  };

  const handleBuyNowKeyPress = () => {
    //Continue with buying flow
    console.log("Procedd to the next buying stage");
  };

  const handleOptionKeyDown = (componentId: string, optionId: string) => {
    updateLaptopData(componentId, optionId);
  };

  return (
    <div className="content">
      <Box
        header="Customisation Choices"
        containerClassName="spec-sheet"
        dataTestId="spec-choices"
      >
        {laptopData.map((component) => (
          <SpecComponent
            key={component.id}
            componentId={component.id}
            title={component.title}
            options={component.options}
            handleOptionClick={handleOptionClick}
            handleOptionKeyDown={handleOptionKeyDown}
          />
        ))}
      </Box>
      <Box
        header="Summary"
        containerClassName="summary-window"
        dataTestId="spec-summary"
      >
        <div className="summary-window__chosen-specs">
          <ul className="chosen-specs__spec-list list--no-style">
            {renderChosenSpecs()}
          </ul>
        </div>
        <span className="summary-window__total">
          Total: {renderTotalCost()}
        </span>
        <button
          name="my-button"
          className="buy-button clickable"
          onClick={handleBuyNowClick}
          onKeyDown={handleBuyNowKeyPress}
        >
          Buy now
        </button>
      </Box>
    </div>
  );
};

export default Content;
