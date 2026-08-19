export const philosophy = [
  {
    number: '01',
    title: '自包含',
    englishTitle: 'Self-contained',
    description: '编辑器、GCC、clangd、Runner、诊断与私有数据都在同一目录；整套 BeCoder 可随目录移动到其它位置或 U 盘继续使用。',
  },
  {
    number: '02',
    title: '默认就绪',
    englishTitle: 'Ready by default',
    description: '安装后即可开始 C/C++ 学习与练习，不把配置编译器当作第一道门槛。',
  },
  {
    number: '03',
    title: '清晰边界',
    englishTitle: 'Strong isolation',
    description: '产品资源留在自身目录，用户项目与原生 PowerShell 仍归用户自己掌控。',
  },
] as const;

export const keptCapabilities = ['C/C++', 'GCC', 'clangd', 'Runner', 'GCC Diagnostics', 'Open VSX / VSIX'] as const;
export const excludedCapabilities = ['AI / Chat / Agent', 'MCP', 'Debug / GDB', 'SCM / Git UI', 'Remote Development', '在线 OJ / 云编译'] as const;

export const extensions = [
  ['Open VSX', '唯一产品配置的在线扩展源。'],
  ['本地 VSIX', '需要时可从本地安装扩展。'],
  ['受保护组件', '核心 C/C++ 工作链不会被普通扩展替换。'],
] as const;

export const helpers = [
  ['Markdown', '写题解、笔记与说明。'],
  ['Mermaid', '在 Markdown 中查看图表。'],
  ['CodeSnap', '把代码区域生成图片。'],
] as const;
