import { gql } from "@apollo/client";

export const GET_GOALS = gql`
  query FindGoals {
    goals {
      id
      text
      completed
    }
  }
`;

export const EDIT_GOAL = gql`
  mutation EditGoal($id: Int!, $text: String!, $completed: Boolean!) {
    editGoal(id: $id, text: $text, completed: $completed) {
      id
      text
      completed
    }
  }
`;

export const REMOVE_GOAL = gql`
  mutation RemoveGoal($id: Int!) {
    deleteGoal(id: $id) {
      id
    }
  }
`;

export const CREATE_GOAL = gql`
  mutation CreateGoal($text: String!, $completed: Boolean!) {
    newGoal(text: $text, completed: $completed) {
      id
    }
  }
`;
