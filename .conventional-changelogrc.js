module.exports = {
  parserOpts: {
    headerPattern: /^(\w*)(?:\((.*)\))?: (.*)$/,
    headerCorrespondence: ["type", "scope", "subject"],
    noteKeywords: ["BREAKING CHANGE", "BREAKING CHANGES"],
  },
  writerOpts: {
    groupBy: 'type',
    commitGroupsSort: 'title',
    commitsSort: ['scope', 'subject'],
    transform: (commit) => {
      // fallback for non-conventional commits
      if (!commit.type) {
        commit.type = 'misc';
      }

      // clean up commit subject
      commit.subject = commit.subject || commit.header;

      return commit;
    },
  },
};
