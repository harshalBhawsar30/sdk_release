module.exports = {
  types: [
    { type: 'feat', scope: 'api', release: 'major' },
    { type: 'feat', release: 'minor' },
    { type: 'fix', release: 'patch' },
    { breaking: true, release: 'major' },
    { type: 'chore', section: 'Chores', hidden: false },
    { type: 'docs', section: 'Docs', hidden: false },
    { type: 'test', section: 'Tests', hidden: false },
    { type: 'refactor', section: 'Refactors', hidden: false }
  ]
};
