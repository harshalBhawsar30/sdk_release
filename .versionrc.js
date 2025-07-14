module.exports = {
  header: '# Changelog\n\nAll notable changes to this project will be documented in this file.\n',
  types: [
    { type: 'feat', section: 'Features' },
    { type: 'fix', section: 'Bug Fixes' },
    { type: 'chore', section: 'Chores' },
    { type: 'refactor', section: 'Refactors' },
    { type: 'misc', section: 'Miscellaneous', hidden: false }
  ],
  parserOpts: {
    headerPattern: /^(\w*)(?:\((.*)\))?: (.*)$/,
    headerCorrespondence: ['type', 'scope', 'subject'],
  },
  writerOpts: {
    transform: (commit, context) => {
      // DEBUG LOG to check if transform runs
      console.log('COMMIT:', commit.header, 'TYPE BEFORE:', commit.type);

      if (!commit.type || commit.type.trim() === '') {
        commit.type = 'misc';
        console.log('→ Assigned fallback type "misc"');
      }

      return commit;
    },
  },
};
