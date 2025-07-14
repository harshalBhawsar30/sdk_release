module.exports = {
  header: '# Changelog\n\nAll notable changes to this project will be documented in this file.\n',
  types: [
    { type: 'feat', section: 'Features' },
    { type: 'fix', section: 'Bug Fixes' },
    { type: 'refactor', section: 'Refactors' },
    { type: 'chore', section: 'Chores' },
    { type: 'misc', section: 'Miscellaneous', hidden: false } // 👈 important!
  ],
  parserOpts: {
    headerPattern: /^(\w*)(?:\((.*)\))?: (.*)$/,
    headerCorrespondence: ['type', 'scope', 'subject'],
  },
  writerOpts: {
    transform: (commit) => {
      // fallback for non-conventional commits
      if (!commit.type) {
        commit.type = 'misc';
      }
      if (!commit.scope) {
        commit.scope = '';
      }
      return commit;
    },
  },
};
