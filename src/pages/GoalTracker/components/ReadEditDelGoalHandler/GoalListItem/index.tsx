import StyledButton from "../../../../../shared/components/StyledButton";
import { Goal } from "../../../../../shared/types/Goal";

export interface GoalListItemProps {
  goal: Goal;
  onEdit: () => void;
  onRemove: () => void;
}

const GoalListItem = ({ goal, onEdit, onRemove }: GoalListItemProps) => {
  return (
    <div className="p-3 bg-white border-b-2 border-b-gold grid lg:grid-cols-12  md:grid-cols-8 xs:grid-cols-4 gap-4 xs:gap-1">
      <span
        className={`lg:col-span-10 md:col-span-6 xs:col-span-2 ${
          goal.completed ? "line-through italic" : ""
        }`}
      >
        {goal.text}
      </span>
      <StyledButton onClick={onEdit}>Edit</StyledButton>
      <StyledButton onClick={onRemove}>Remove</StyledButton>
    </div>
  );
};

export default GoalListItem;
