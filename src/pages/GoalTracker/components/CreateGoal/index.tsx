import { useMutation } from "@apollo/client";
import { useState } from "react";
import StyledButton from "../../../../shared/components/StyledButton";
import { CREATE_GOAL, GET_GOALS } from "../../../../shared/graphql/goals";
import GoalEditOrCreateMode from "../ReadEditDelGoalHandler/GoalEditOrCreateMode";

const CreateGoal = () => {
  const [createMode, setCreateMode] = useState<boolean>(false);

  const [newGoal] = useMutation(CREATE_GOAL);

  const onCreateGoal = (text: string, completed: boolean) => {
    if (!text) {
      alert("Please insert the text of the new goal");
      return;
    }
    console.log(text, completed);
    newGoal({
      variables: { text, completed },
      refetchQueries: [GET_GOALS],
      onCompleted: () => {
        setCreateMode(false);
      },
    });
  };

  return (
    <>
      {createMode && (
        <GoalEditOrCreateMode
          onSave={(text, completed) => onCreateGoal(text, completed)}
          onCancel={() => setCreateMode(false)}
        />
      )}
      {!createMode && (
        <div className="grid lg:grid-cols-12  md:grid-cols-8 xs:grid-cols-4 gap-4 xs:gap-1">
          <div className="col-span-3">
            <StyledButton onClick={() => setCreateMode(true)}>
              Create Goal
            </StyledButton>
          </div>
        </div>
      )}
    </>
  );
};

export default CreateGoal;
