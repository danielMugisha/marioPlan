const initState = {
  projects: [],
};

const projectReducer = (state = initState, action) => {
  switch (action.type) {
    case "CREATE_PROJECT":
      console.log(" created a project", action.project);
      return state;
    case "CREATE_PROJECT_ERROR":
      console.log(" created project error", action.err);
      return state;
    default:
      return state;
  }
};

export default projectReducer;
