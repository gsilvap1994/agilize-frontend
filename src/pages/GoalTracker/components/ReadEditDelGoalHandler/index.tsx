import { useMutation } from "@apollo/client";
import { useState } from "react";
import {
  EDIT_GOAL,
  GET_GOALS,
  REMOVE_GOAL,
} from "../../../../shared/graphql/goals";
import { Goal } from "../../../../shared/types/Goal";
import GoalEditMode from "./GoalEditOrCreateMode";
import GoalListItem from "./GoalListItem";
import GoalRemoveMode from "./GoalRemoveMode";

export interface ReadEditDelGoalHandlerProps {
  goal: Goal;
}

const ReadEditDelGoalHandler = ({ goal }: ReadEditDelGoalHandlerProps) => {
  const [editMode, setEditMode] = useState<boolean>(false);
  const [removeMode, setRemoveMode] = useState<boolean>(false);

  const [editGoal] = useMutation(EDIT_GOAL);
  const [removeGoal] = useMutation(REMOVE_GOAL);

  const onEdit = (id: number, text: string, completed: boolean) => {
    editGoal({
      variables: { id: +id, text: text, completed: completed },
      refetchQueries: [GET_GOALS],
      onCompleted: () => {
        setEditMode(false);
      },
    });
  };

  const onRemove = (id: number) => {
    removeGoal({
      variables: { id: +id },
      refetchQueries: [GET_GOALS],
      onCompleted: () => {
        setRemoveMode(false);
      },
    });
  };

  return (
    <>
      {editMode && (
        <GoalEditMode
          onSave={(text, completed, id) =>
            onEdit(id as number, text, completed)
          }
          onCancel={() => setEditMode(false)}
          goal={goal}
        />
      )}
      {removeMode && (
        <GoalRemoveMode
          goal={goal}
          onCancel={() => setRemoveMode(false)}
          onConfirm={(id) => onRemove(id)}
        />
      )}
      {!editMode && !removeMode && (
        <GoalListItem
          goal={goal}
          onEdit={() => setEditMode(true)}
          onRemove={() => setRemoveMode(true)}
        />
      )}
    </>
  );
};

export default ReadEditDelGoalHandler;
