import { defineConfig } from "velite";
import { achievements, workExperiences, projects } from "./velite.collections";

export default defineConfig({
  collections: { achievements, projects, workExperiences },
});
