import { defineConfig } from "velite";
import {
  achievements,
  workExperiences,
  projects,
  research,
} from "./velite.collections";

export default defineConfig({
  collections: { achievements, projects, workExperiences, research },
});
