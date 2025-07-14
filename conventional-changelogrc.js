module.exports = {
  parserOpts: {
    // Accept anything that looks like a commit
    headerPattern: /^(\w*)(?:\((.*)\))?: (.*)$/,
    headerCorrespondence: ["type", "scope", "subject"],
    noteKeywords: ["BREAKING CHANGE", "BREAKING CHANGES"],
  },
  writerOpts: {
    // Show all types, not just feat/fix
    commitGroupsSort: "title",
    commitsSort: ["scope", "subject"],
    groupBy: "type",
    transform: (commit, context) => {
      // if no type, set to "misc"
      if (!commit.type) {
        commit.type = "misc";
      }
      return commit;
    },
  },
};
