const fs = require('fs');
const path = require('path');

const appDir = path.resolve(__dirname, '..');
const packageJson = require(path.join(appDir, 'package.json'));
const installerName = `OSLO-Browser-v${packageJson.version}-Setup.exe`;
const distDir = path.join(appDir, 'dist');
const installerPath = path.join(distDir, installerName);
const checksumPath = `${installerPath}.sha256`;

if (!fs.existsSync(installerPath)) {
  throw new Error(`Installer not found: ${installerPath}`);
}

const currentArtifacts = new Set([
  installerName,
  `${installerName}.blockmap`,
  `${installerName}.sha256`
]);
const staleInstallerPattern = /^OSLO-Browser-v?\d+\.\d+\.\d+(?:[-+][0-9A-Za-z.-]+)?-Setup\.exe(?:\.(?:blockmap|sha256))?$/;

for (const entry of fs.readdirSync(distDir)) {
  if (staleInstallerPattern.test(entry) && !currentArtifacts.has(entry)) {
    fs.unlinkSync(path.join(distDir, entry));
    console.log(`Removed stale artifact ${path.join('dist', entry)}`);
  }
}

const crypto = require('crypto');
const hash = crypto.createHash('sha256').update(fs.readFileSync(installerPath)).digest('hex');
fs.writeFileSync(checksumPath, `${hash}  ${installerName}\n`, 'utf8');

console.log(`Wrote ${path.relative(appDir, checksumPath)}`);
