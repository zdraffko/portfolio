import React from "react";
import styles from "./FilterWidget.module.scss";
import projectCategories from "../../../../../constants/projectCategories";
import Button from "../../../../layout/Button/Button";

interface IProps {
  filter: string;
  handleFilterChange: (filter: string) => void
}

const FilterWidget: React.FC<IProps> = ({ handleFilterChange, filter }) => (
  <div className={styles.FilterWidget}>
    <Button
      onClick={() => handleFilterChange("")}
      content="All"
      isActive={filter === ""}
    />
    <Button
      onClick={() => handleFilterChange(projectCategories.ASPNET)}
      content="ASP.NET"
      isActive={filter === projectCategories.ASPNET}
    />
    <Button
      onClick={() => handleFilterChange(projectCategories.REACT_TS)}
      content="React-TS"
      isActive={filter === projectCategories.REACT_TS}
    />
    <Button
      onClick={() => handleFilterChange(projectCategories.REACT_JS)}
      content="React-JS"
      isActive={filter === projectCategories.REACT_JS}
    />
  </div>
);

export default FilterWidget;
