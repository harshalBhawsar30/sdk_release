module.exports = {
  // Controls version bumps
  releaseRules: [
    { type: 'feat', scope: 'api', release: 'major' }, 
    { type: 'feat', release: 'minor' },
    { type: 'fix', release: 'patch' },
    { breaking: true, release: 'major' }
  ],

  // Controls changelog formatting
  types: [
    { type: 'feat', section: 'Features' },
    { type: 'fix', section: 'Bug Fixes' },
    { type: 'chore', section: 'Chores', hidden: false },
    { type: 'docs', section: 'Docs', hidden: false },
    { type: 'test', section: 'Tests', hidden: false },
    { type: 'refactor', section: 'Refactors', hidden: false }
  ]
};
