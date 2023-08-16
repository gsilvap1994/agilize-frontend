import { useState } from "react";
import StyledButton from "../../../../../shared/components/StyledButton";
import { Goal } from "../../../../../shared/types/Goal";

export interface GoalEditOrCreateModeProps {
  goal?: Goal;
  onSave: (text: string, completed: boolean, id?: number) => void;
  onCancel: () => void;
}

const GoalEditOrCreateMode = ({
  goal,
  onSave,
  onCancel,
}: GoalEditOrCreateModeProps) => {
  const [goalText, setGoalText] = useState<string>(goal ? goal.text : "");
  const [goalCompleted, setGoalCompleted] = useState<boolean>(
    goal ? goal.completed : false
  );

  return (
    <div className="p-3 bg-white border-b-2 border-b-gold grid lg:grid-cols-12  md:grid-cols-8 xs:grid-cols-4 gap-4 xs:gap-1">
      <input
        type="text"
        placeholder="Text"
        className="lg:col-span-5 md:col-span-3 rounded px-2 py-1"
        value={goalText}
        onChange={(event) => setGoalText(event.target.value)}
      />
      <div className="lg:col-span-5 md:col-span-3 py-1">
        <input
          type="checkbox"
          id="completed"
          name="completed"
          checked={goalCompleted}
          className="checked:bg-darkGold"
          onChange={() => setGoalCompleted(!goalCompleted)}
        />
        <label className="pl-2" htmlFor="completed">
          Completed
        </label>
      </div>

      <StyledButton
        onClick={() =>
          goal
            ? onSave(goalText, goalCompleted, goal.id)
            : onSave(goalText, goalCompleted)
        }
      >
        Save
      </StyledButton>
      <button onClick={() => onCancel()}>Cancel</button>
    </div>
  );
};

export default GoalEditOrCreateMode;
