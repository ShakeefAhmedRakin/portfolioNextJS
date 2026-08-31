// Single source of truth for project categories — used by the Velite project
// schema, the projects listing filter UI, and the `?category=` query param
// validation. Edit this list to add/remove/rename categories; every consumer
// picks the change up automatically.
export const projectCategoriesEnum = [
  "Web Development",
  "Machine Learning",
  "Mobile Development",
  "Desktop Development",
] as const;
