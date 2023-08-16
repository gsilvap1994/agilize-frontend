import { useMutation, useQuery } from "@apollo/client";
import Layout from "../../shared/components/Layout";
import { EDIT_GOAL, GET_GOALS } from "../../shared/graphql/goals";
import { Goal } from "../../shared/types/Goal";
import CreateGoal from "./components/CreateGoal";
import ReadEditDelGoalHandler from "./components/ReadEditDelGoalHandler";

const GoalTrackerPage = () => {
  const { loading, error, data } = useQuery(GET_GOALS);

  if (loading) {
    return (
      <Layout>
        <h1 className="text-base">Loading...</h1>
      </Layout>
    );
  }

  if (error) {
    return (
      <Layout>
        <h1 className="text-base">API error ocurred: {error.message}</h1>
      </Layout>
    );
  }

  return (
    <Layout>
      <section>
        <div>
          <h1 className="text-2xl font-bold">Welcome to Agilize!</h1>
          <h2 className="text-2xl font-bold">
            Agilize helps you to organize your personal life turning it into
            Agile.
          </h2>
        </div>
        <div className="my-2">
          <p className="my-0 text-base">This page is your sprint dashboard.</p>
          <p className="my-0 text-base">
            Check (and edit or create) your goals below:
          </p>
        </div>
      </section>
      <section>
        <CreateGoal />
      </section>
      {data.goals && data.goals.length > 0 && (
        <section className="my-4">
          {data.goals.map((goal: Goal) => (
            <ReadEditDelGoalHandler key={goal.id} goal={goal} />
          ))}
        </section>
      )}
    </Layout>
  );
};

export default GoalTrackerPage;
