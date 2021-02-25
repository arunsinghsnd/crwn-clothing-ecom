import { createSelector } from "reselect";

const seletDirectory = (state) => state.directory;

export const seletDirectorySections = createSelector(
  [seletDirectory],
  (directory) => directory.sections
);
