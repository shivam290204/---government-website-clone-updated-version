const fs = require('fs');

const filesToRestore = [
  { orig: 'src/pages/Bluy.jsx', dest: 'nextjs-app/src/app/bluy/page.tsx' },
  { orig: 'src/pages/Mmuy.jsx', dest: 'nextjs-app/src/app/mmuy/page.tsx' },
  { orig: 'src/pages/Chat.jsx', dest: 'nextjs-app/src/app/chat/page.tsx' },
  { orig: 'src/pages/Login.jsx', dest: 'nextjs-app/src/app/login/page.tsx' },
  { orig: 'src/pages/SearchResults.jsx', dest: 'nextjs-app/src/app/search/page.tsx' },
  { orig: 'src/components/TopStrip.jsx', dest: 'nextjs-app/src/components/TopStrip.tsx' },
];

filesToRestore.forEach(({ orig, dest }) => {
  if (!fs.existsSync(orig)) {
    console.log('Skipping missing original', orig);
    return;
  }
  let c = fs.readFileSync(orig, 'utf8');
  
  // 1. Add use client
  if (!c.includes("'use client'")) {
    c = "'use client';\n\n" + c;
  }
  
  // 2. Fix imports
  c = c.replace(/from '\.\.\/components/g, "from '@/components");
  c = c.replace(/from '\.\.\/data/g, "from '@/data");
  c = c.replace(/from '\.\.\/\.\.\/components/g, "from '@/components");
  c = c.replace(/from '\.\.\/\.\.\/data/g, "from '@/data");
  c = c.replace(/from '\.\.\/assets/g, "from '@/assets");
  c = c.replace(/from '\.\.\/\.\.\/assets/g, "from '@/assets");

  // 3. React Router -> Next.js replacements
  c = c.replace(/import \{ useNavigate \} from 'react-router-dom';/g, "import { useRouter } from 'next/navigation';");
  c = c.replace(/const navigate = useNavigate\(\);/g, "const router = useRouter();");
  c = c.replace(/navigate\(/g, "router.push(");

  // 4. File specific TS fixes
  if (dest.includes('bluy/page.tsx')) {
    c = c.replace(/width="80"/g, 'style={{ width: "80px" }}');
    c = c.replace(/width="120"/g, 'style={{ width: "120px" }}');
    c = c.replace(/width="150"/g, 'style={{ width: "150px" }}');
  }
  if (dest.includes('mmuy/page.tsx')) {
    c = c.replace(/width="80"/g, 'style={{ width: "80px" }}');
    c = c.replace(/width="120"/g, 'style={{ width: "120px" }}');
    c = c.replace(/width="150"/g, 'style={{ width: "150px" }}');
  }
  if (dest.includes('chat/page.tsx')) {
    c = c.replace(/const messagesEndRef = useRef\(null\);/g, "const messagesEndRef = useRef<any>(null);");
    c = c.replace(/onClick=\{\(\) => sendMessage\(\)\}/g, "onClick={() => sendMessage(input)}");
    c = c.replace(/if \(e.key === 'Enter' && !e.shiftKey\) \{\n      e.preventDefault\(\);\n      sendMessage\(\);\n    \}/g, "if (e.key === 'Enter' && !e.shiftKey) {\n      e.preventDefault();\n      sendMessage(input);\n    }");
  }
  if (dest.includes('login/page.tsx')) {
    c = c.replace(/e\.target\.style\.color/g, "(e.target as any).style.color");
    c = c.replace(/, ':focus': \{ borderColor: '#1a2b5f' \} \}\}/g, "}}");
  }
  if (dest.includes('search/page.tsx')) {
    c = c.replace(/import React, \{ useState, useEffect \} from 'react';/g, "import React, { useState, useEffect } from 'react';\nimport { useSearchParams } from 'next/navigation';");
    c = c.replace(/import React, \{ useEffect, useState \} from 'react';/g, "import React, { useEffect, useState } from 'react';\nimport { useSearchParams } from 'next/navigation';");
    c = c.replace(/const \[searchParams\] = useSearchParams\(\);/g, "const searchParams = useSearchParams();");
  }
  if (dest.includes('TopStrip.tsx')) {
    c = c.replace(/const optionsDate = \{ day: '2-digit', month: 'short', year: 'numeric' \};/g, 'const optionsDate = { day: "2-digit" as const, month: "short" as const, year: "numeric" as const };');
  }

  fs.writeFileSync(dest, c, 'utf8');
  console.log('Restored and fixed', dest);
});
