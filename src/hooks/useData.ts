import { useEffect, useState } from "react";
import { IComponentOption } from "../components";
import { data } from "../data";

export interface ILaptopData {
  id: string;
  title: string;
  options: IComponentOption[];
}

const useData = () => {
  const [laptopData, setLaptopData] = useState<ILaptopData[]>([]);

  useEffect(() => {
    //mocking getting data from api
    const mappedData: ILaptopData[] = data.map((item) => ({
      ...item,
      options: item.options.map((option, index) => ({
        ...option,
        selected: index === 0 ? true : false,
      })),
    }));

    setLaptopData(mappedData);
  }, []);

  const updateLaptopData = (componentId: string, optionId: string) => {
    setLaptopData((prevData) =>
      prevData.map((component) =>
        component.id === componentId
          ? {
              ...component,
              options: component.options.map((option) => ({
                ...option,
                selected: option.id === optionId,
              })),
            }
          : component
      )
    );
  };

  return { laptopData, updateLaptopData };
};

export default useData;
