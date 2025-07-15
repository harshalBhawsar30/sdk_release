const fs = require('fs');
const path = './metadata/versions.json';

const versions = JSON.parse(fs.readFileSync(path, 'utf8'));
const now = new Date();

const getMajor = version => parseInt(version.replace(/^v/, '').split('.')[0]);

// Sort by version descending
const sorted = versions.sort((a, b) => getMajor(b.version) - getMajor(a.version));

const latestMajors = Array.from(new Set(sorted.map(v => getMajor(v.version)))).slice(0, 2);

const updated = versions.map(v => {
  const date = new Date(v.releaseDate);
  const ageInMonths = (now - date) / (1000 * 60 * 60 * 24 * 30);
  const major = getMajor(v.version);

  let status = 'unsupported';
  if (latestMajors.includes(major)) {
    status = 'active';
  } else if (ageInMonths <= 8) {
    status = 'deprecated';
  }

  return { ...v, status };
});

fs.writeFileSync(path, JSON.stringify(updated, null, 2));
