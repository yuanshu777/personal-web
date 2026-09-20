import {readFile,writeFile} from 'node:fs/promises';

const root=new URL('../dist/',import.meta.url);
const css=['styles.css','language.css','homepage.css'];
const js=['localization.js','profile.js','homepage.js','contact.js','market-engine.js','agent-market.js','app.js'];
const combine=async(files,separator)=>Promise.all(files.map(file=>readFile(new URL(file,root),'utf8'))).then(parts=>parts.join(separator));

await Promise.all([
  writeFile(new URL('site-core.css',root),await combine(css,'\n')),
  writeFile(new URL('site-core.js',root),await combine(js,';\n'))
]);
