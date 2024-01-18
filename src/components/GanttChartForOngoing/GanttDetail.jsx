import { memo } from "react";

const GanttDeltail = (props) => {
  const { tasks } = props;

  return (
    <Gantt
      tasks={tasks}
      viewMode={view}
      onDateChange={handleTaskChange}
      onDelete={handleTaskDelete}
      onProgressChange={handleProgressChange}
      onDoubleClick={handleDblClick}
      onClick={handleClick}
      onSelect={handleSelect}
      onExpanderClick={handleExpanderClick}
      listCellWidth={isChecked ? "100px" : ""}
      columnWidth={columnWidth}
      barProgressColor={"#f56565"}
      TooltipContent={CustomizeTooltip}
      TaskListTable={TaskListTable}
      TaskListHeader={TaskListHeader}
      ganttHeight={"450px"}
    />
  );
};
export default memo(GanttDeltail);
