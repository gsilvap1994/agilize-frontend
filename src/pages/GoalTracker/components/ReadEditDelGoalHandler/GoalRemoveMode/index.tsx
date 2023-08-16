import StyledButton from "../../../../../shared/components/StyledButton";
import { Goal } from "../../../../../shared/types/Goal";

export interface GoalRemoveModeProps {
  goal: Goal;
  onConfirm: (id: number) => void;
  onCancel: () => void;
}

const GoalRemoveMode = ({ goal, onConfirm, onCancel }: GoalRemoveModeProps) => {
  return (
    <div className="p-3 bg-white border-b-2 border-b-gold grid lg:grid-cols-12  md:grid-cols-8 xs:grid-cols-4 gap-4 xs:gap-1">
      <span className="font-bold lg:col-span-10 md:col-span-6 xs:col-span-2">
        Do you want ro remove {goal.text}?
      </span>
      <StyledButton onClick={() => onConfirm(goal.id)}>Confirm</StyledButton>
      <button onClick={onCancel}>Cancel</button>
    </div>
  );
};

export default GoalRemoveMode;
