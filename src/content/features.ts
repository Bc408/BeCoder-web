export const philosophy = [
  { number: '01', title: '自包含', englishTitle: 'Self-contained', description: '编辑器、GCC、clangd、诊断与 Runner 被组织为一套准备就绪的环境。' },
  { number: '02', title: '开箱即用', englishTitle: 'Ready by default', description: '安装后即可开始 C/C++ 工作，无需先配置编译器或语言服务。' },
  { number: '03', title: '清晰隔离', englishTitle: 'Strong isolation', description: 'BeCoder 将工具链和数据保留在自身目录内，同时尊重用户项目与 PowerShell 的边界。' },
] as const;

export const workflowSteps = [
  ['01', '编写', 'Write', '编辑 C/C++'],
  ['02', '编译', 'Compile', '使用内置 GCC'],
  ['03', '诊断', 'Diagnose', '获得直接反馈'],
  ['04', '运行', 'Run', '在 Runner 中执行'],
  ['05', '迭代', 'Iterate', '快速进入下一次尝试'],
] as const;

export const keptCapabilities = ['C/C++', 'GCC', 'clangd', 'Runner', '诊断', 'Open VSX / VSIX'] as const;
export const excludedCapabilities = ['AI / Chat / Agent', 'MCP', 'Debug / GDB', 'SCM / Git UI', 'Remote Development', '在线 OJ / 云端编译'] as const;
