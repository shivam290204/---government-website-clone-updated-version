const fs = require('fs');

function fixArrays(origPath, targetPath, varNames) {
  if (!fs.existsSync(origPath) || !fs.existsSync(targetPath)) return;
  let orig = fs.readFileSync(origPath, 'utf8');
  let target = fs.readFileSync(targetPath, 'utf8');

  for (let v of varNames) {
    const regex = new RegExp(`const ${v} = \\[[\\s\\S]*?\\];`);
    const match = orig.match(regex);
    if (match) {
      target = target.replace(new RegExp(`const ${v} = \\[[\\s\\S]*?\\];`), match[0]);
    }
  }
  fs.writeFileSync(targetPath, target, 'utf8');
  console.log('Fixed arrays in', targetPath);
}

fixArrays('src/pages/Bluy.jsx', 'nextjs-app/src/app/bluy/page.tsx', ['projects', 'resolutions']);
fixArrays('src/pages/Mmuy.jsx', 'nextjs-app/src/app/mmuy/page.tsx', ['projects']);
fixArrays('src/pages/Chat.jsx', 'nextjs-app/src/app/chat/page.tsx', ['qa']);
