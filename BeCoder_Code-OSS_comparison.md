# BeCoder 与 Code OSS 1.130 增删改对照

> 对比日期：2026-08-16  
> BeCoder：`C:\Users\Bc\Desktop\BeCoder\BeCoder_new`，`main`，HEAD `6e1845a`  
> 上游参考：`C:\Users\Bc\Desktop\BeCoder\vscode-1.130.0`  
> 版本口径：BeCoder 产品版本为 `1.0.3`；Code OSS 来源与扩展 API 兼容版本保留为 `1.130.0`。  
> 对比口径：以产品注册图、内置扩展、默认配置、Windows 打包与 Setup 路径为准，不以关键词数量或源树中孤立文件是否仍存在作为功能判断。

## 1. 总览

BeCoder 不是对 Code OSS 1.130 的简单换皮。它保留 Code OSS 成熟的编辑器和 Workbench 主干，新增一整套自包含 C/C++ 竞赛工作流，并从产品图中移除 AI、Debug、SCM/Git UI 和 Remote 工程能力。

| 维度 | Code OSS 1.130 | BeCoder |
| --- | --- | --- |
| 产品定位 | 通用代码编辑器平台 | Windows OI/ICPC 与普通 C/C++ 编辑器 |
| 品牌 | Code - OSS | BeCoder |
| 产品版本 | 1.130 系列 | BeCoder 1.0.3；扩展 API 兼容版本 1.130.0 |
| 默认数据 | 系统用户数据目录 | 当前安装目录的 `data` |
| C/C++ 编译器 | 不内置竞赛 GCC 工作流 | 内置 GCC 14.1.0 UCRT64 |
| C/C++ 智能 | 依赖用户安装扩展 | 内置收敛后的 clangd 22.1.6 |
| 编辑器诊断 | 取决于语言扩展 | 内置 GCC diagnostics |
| 运行 | 通用 Tasks/扩展/Debug | 专用 BeCoder Runner + BC 面板 |
| 文件图标 | 上游主题可选 | Seti 内置且为新配置默认 |
| 在线扩展源 | Code OSS 本身不固定为 BeCoder 策略 | 仅 Open VSX |
| 应用更新 | 由产品配置决定 | 原生框架保留，当前无 `updateUrl`，UI 关闭 |
| Windows 发行 | 通用 Code OSS 构建方式 | Setup-only、自包含目录安装 |
| AI/Agent/MCP | 上游 1.130 包含完整基础设施 | 产品能力和主要注册/打包链移除 |
| Debug | 完整 Debug Workbench | 完整产品能力移除 |
| SCM/Git UI | 完整 SCM、Quick Diff、Git/GitHub | 完整产品能力移除 |
| Remote | Remote/Tunnel/Ports/远程扩展链 | 完整产品能力移除 |

## 2. 新增内容

### 2.1 BeCoder 自有产品层

- `becoder.becoder-setup`：默认设置、显示语言、工具链初始化、工具链诊断、snippets/格式化入口、Explorer 文件可见性控制。
- `becoder.gcc-diagnostics`：使用内置 GCC 的 C/C++ 编辑器错误诊断。
- `becoder.runner`：Run、Run With Input、BC 伪终端、F6/Shift+F6、进程树取消与生成物生命周期。
- `becoder.one-monokai`：BeCoder 默认 C/C++ 视觉主题。
- `becoder.inlayHints.enabled`：BeCoder 设置下的 clangd 内嵌类型提示开关，默认关闭。
- BeCoder 显示语言设置：固定简体中文包与英文切换。
- BeCoder 工具链诊断页面和初始化状态。

### 2.2 自包含工具链

- `resources/oi-defaults/toolchains/becoder-ucrt64.zip`：GCC 14.1.0 UCRT64 工具链。
- `resources/oi-defaults/toolchains/clangd-windows-22.1.6.zip`：固定 clangd Windows 发行包。
- `stdc++.h.gch`、`debugger.h`、竞赛常用头文件、PBDS 和运行时 DLL。
- 工具链包清单、许可证集合、对应源码配方和组件哈希。
- 内置工具链只提供给 Runner、GCC diagnostics 和 clangd，不注入原生 PowerShell。

### 2.3 Windows 安装和隔离

- BeCoder 专用 Inno Setup：`build/win32/becoder.iss`。
- 安装目录所有权标记 `.becoder-installation.json`。
- 每安装唯一 `installationId` 和 AppUserModelId。
- 安装目录内 `data` 作为强制便携数据根。
- 非空外部目录保护、磁盘根目录保护、ASCII/短路径约束。
- 覆盖安装的数据丢失确认和静默安装显式授权。
- 多份安装隔离、完整目录移动和 U 盘运行边界。
- 可选创建当前用户桌面快捷方式，安装时默认不勾选，并提示可移动存储安装不建议启用。
- 安装后 `coding\helloCoder.cpp` 与首次启动一次性打开逻辑。
- 针对 Setup 的零注册表污染和目录边界验证器。

### 2.4 品牌资源

- Windows EXE、窗口、任务栏、Setup 和 Visual Elements 的 BeCoder 图标。
- 顶栏左上角 BeCoder 品牌图标。
- 空编辑器 BeCoder 单色水印及多主题版本。
- BeCoder Welcome 标签图标。
- 产品名、协议、数据目录名、应用标识、许可证与 GitHub 地址改为 BeCoder。
- BeCoder 作者元数据统一为 `Bc408`；About 页面固定显示 BeCoder 1.0.3、Code OSS 来源、GPL 3.0 与 `github.com/Bc408/BeCoder-IDE` 项目源码信息。

### 2.5 内置第三方/衍生组件

- CodeSnap 作为受保护内置扩展。
- Better C++ Syntax grammar 集成到 `vscode.cpp`。
- 固定版本简体中文语言包，并裁剪已删除产品的翻译。
- BeCoder Runner 基于上游 C/C++ Compile Run 大幅重构为无 shell 的封闭执行器。
- clangd 扩展改造成 BeCoder 专用的受控能力集。

## 3. 修改内容

### 3.1 工作台默认布局

BeCoder 曾有偏离上游的紧凑布局，现已恢复到 Code OSS 1.130 风格的成熟默认：

- Activity Bar 默认位于主侧栏侧边。
- 主侧栏重新允许左/右两侧。
- 状态栏默认可见。
- 导航控件和命令中心默认启用。
- Windows 菜单栏默认使用 classic。
- Panel 默认位置和布局控制沿用上游可配置能力。
- 显式用户布局设置优先。

BeCoder 仍保留自定义标题栏，以展示品牌图标并承载上游式导航、命令中心和布局控制。

### 3.2 Welcome

Code OSS Getting Started 被收敛为单一 BeCoder Welcome：

- 继续使用原生 Editor、响应式布局、键盘导航和可访问性。
- 品牌标题、副标题和图标改为 BeCoder。
- 启动项缩减为新建文件、打开文件、打开文件夹和打开内置浏览器。
- 最近区域从上游全局最近工作区逻辑改为“当前文件夹/工作区内最近打开文件”。
- 默认 5 条，“更多”到 15 条；支持当前窗口、新窗口和移除历史记录。
- 新配置默认 Welcome，关闭后回到品牌水印，不建立第二套 New Tab 页面。
- walkthrough 展示和第三方注入退出运行注册图。

### 3.3 C/C++ 语法和语义显示

- 上游 `vscode.cpp` grammar 被 Better C++ Syntax 固定快照替换/增强。
- 首屏由 TextMate 完整着色，clangd 只做一次有界语义细化。
- One Monokai 调整 C/C++ semantic token 颜色。
- 非活动预处理区域改为降低亮度显示。
- 删除自研语义 token 缓存、恢复、增量重建等复杂路径。

### 3.4 clangd

相对通用 vscode-clangd，BeCoder 只保留产品需要的 LSP 能力：

- 固定使用内置 clangd 和内置 GCC include 环境。
- 禁止外部 `.clangd` 配置接管核心行为。
- 删除扩展自更新、下载、AST 页面、内存状态、配置文件编辑、头/源切换等非必要 UI。
- 可见诊断交给 GCC diagnostics。
- 保留补全、跳转、悬停、签名、重命名、格式化、符号/层级和可选 inlay hints。
- 格式化固定为显式 Google 风格，不默认自动运行。

### 3.5 终端与 Runner

- Code OSS 原生终端仍是终端基础设施。
- 新配置默认终端由 PowerShell 改为 BeCoder Runner。
- 用户选择其他默认终端后，`Ctrl+\`` 和后续新建终端遵循用户选择；BeCoder 默认关闭终端持久会话，不恢复旧终端进程。
- PowerShell 仍是完整系统终端；BC 是封闭编译运行面板。
- Runner 按钮被调整到适合 C/C++ 编辑器标题区的位置。
- Runner 的可执行文件发布兼容固定磁盘和可移动文件系统，不依赖可移动介质提供稳定 inode。
- Terminal Suggest 被移除，但普通 shell 识别、Profile 和终端会话保留。

### 3.6 扩展治理

- 扩展 gallery 固定为 Open VSX。
- `ms-vscode.cpptools` 和扩展包进入黑名单。
- BeCoder 核心扩展进入 protectedExtensions，不能被在线版本替换。
- 本地 VSIX 仍保留，但同样服从黑名单和受保护边界。
- 扩展签名路径调整为适应 Open VSX 与本地 VSIX。
- 上游大量语言、Debug、Git、Remote、AI 及多余主题扩展不再打包。

### 3.7 用户数据导入导出

- 曾经的 BeCoder 自研备份/恢复实现已移除。
- 现在完全复用 Code OSS 原生 User Data Profiles 导入/导出。
- 由同一原生实现保持格式兼容，避免维护第二套事务和数据格式。

### 3.8 应用更新

- 原生更新服务、命令和状态机保留。
- 当前 `product.json` 无 `updateUrl`，应用内更新处于关闭状态。
- 没有更新 URL 时不注册更新设置分类。
- 更新设置说明中的 VS Code/Microsoft 品牌改为 BeCoder。
- Open VSX 扩展更新不受影响。

### 3.9 中文本地化

- 固定 Code OSS 1.130 对应简体中文包。
- 新增 BeCoder Runner、GCC diagnostics、设置、Welcome、工具链和产品品牌翻译。
- 删除 AI、Debug、SCM/Git、Remote、Terminal Suggest 等不打包能力的扩展翻译。
- 保留普通 Authentication、Markdown/Mermaid、图片预览和通用工作台翻译。

### 3.10 文件与启动细节

- Explorer 增加“显示全部文件/隐藏 BeCoder 初始化文件”。
- 设置齿轮入口打开干净的原生设置页，而不是预填 `@ext:becoder.becoder-setup`。
- 默认新文件语言为 C++。
- 首次安装自动打开自带示例，但普通后续启动遵循编辑器会话恢复和用户启动设置。

### 3.11 Notebook 与 Jupyter 兼容

- 恢复上游 `ipynb` 和 `notebook-renderers` 内置扩展，提供 `.ipynb` 格式读写与输出渲染基础。
- 为兼容的 Jupyter/Python 扩展保留其所需的受控 API 形状和提议 API 授权，但不恢复 Debug、AI 或 Remote 产品能力。
- BeCoder 不内置 Python/Jupyter 运行时或内核，执行环境仍由用户安装的兼容扩展和本机环境提供。

## 4. 删除内容

### 4.1 AI、Chat、Agent 与 MCP

从核心工作台、扩展 API、主进程/渲染进程桥、构建、打包和测试中删除或退出注册：

- Chat、Inline Chat、Chat Sessions。
- Agent、Agent Host、Agent Sessions、Remote Coding Agents。
- MCP registry、MCP server 管理和 MCP 认证策略。
- Language Model API、AI embedding、AI related information、AI settings search。
- Copilot 内置扩展与默认 Chat Agent 产品元数据。
- Agent voice/local transcription、Chat webview/terminal integration。
- 相关组件夹具、自动化、MCP 测试和构建流水线。

### 4.2 Debug 与 GDB

- Debug Workbench 注册。
- Run and Debug Activity Bar、断点、调用栈、变量、Watch、Debug Console。
- Debug Extension Host 桥和 Debug 专用菜单操作。
- `debug-auto-launch`、`debug-server-ready`、JS Debug 内置扩展。
- GDB 产品能力和相关配置入口。
- 进程资源管理器中失效的 Debug 操作。

注意：普通进程、任务、终端、编译、运行和 Problems 仍保留，它们不属于 Debug 产品。

### 4.3 Source Control 与 Git UI

- SCM View、SCM API、Source Control Activity Bar。
- Quick Diff、SCM decorations 和 Git 图形交互。
- `git`、`git-base`、`github`、`github-authentication`、`merge-conflict` 内置扩展。
- Git 发现、Git 工程识别、提交/分支/同步等产品路径。

用户项目中的 `.git`、`.gitignore` 等不会被删除；用户仍可在 PowerShell 中运行外部 Git。

### 4.4 Remote 工程能力

- Remote Window 和 Remote Explorer。
- Remote Extension Host、Remote Extensions Scanner、远程 Profiles。
- Tunnel、Remote Tunnel、Ports/端口转发。
- Remote/Tunnel 状态栏、命令、菜单、设置和欢迎入口。
- Remote resolver/tunnel 扩展贡献和相关 proposed API。
- `tunnel-forwarding`、测试 resolver 等上游扩展。
- dev-tunnels/SSH 产品依赖树。

普通网络、代理、HTTP(S)、Webview、Browser View、URI、ssh/scp 外部命令、本地网络驱动器和本地多窗口不属于 Remote 工程能力，全部保留。

### 4.5 Walkthrough 与不适合 BeCoder 的入口

- Welcome walkthrough UI 和右侧教程区。
- 扩展向 BeCoder Welcome 注入 walkthrough 的运行能力。
- walkthrough 自动打开和进度入口。
- Connect to、Open Tunnel。
- 编辑器 Playground、Report Issue 等非产品入口。
- Timeline 用户界面入口；底层通用 timeline service 仍可保留以避免误伤普通消费者。

### 4.6 不打包的上游内置扩展

BeCoder 不再打包上游的大量通用语言/工具扩展，例如：

- JavaScript/TypeScript language features、HTML/CSS language features。
- Java、Go、Rust、C#、PHP、Ruby、Swift、Lua 等语言扩展。
- NPM、Grunt、Gulp、Docker、Emmet。
- Jupyter、Python 语言服务和运行时等完整通用扩展；上游 `ipynb` 与 `notebook-renderers` 基础扩展已恢复打包。
- 多套上游配色主题。
- Powershell 语言扩展（不等于删除原生 PowerShell 终端）。
- Simple Browser 扩展（BeCoder 使用保留的原生 Browser View 路径）。

## 5. 明确保留且未被删除的 Code OSS 能力

这一部分是清理边界的关键。BeCoder 继续复用：

- Monaco 编辑器核心、TextMate、语义 token 渲染。
- Explorer、搜索、Quick Access、设置、快捷键、命令面板。
- 多编辑器、分栏、Diff、Merge Editor、Multi Diff。
- Problems、Output、日志、通知和进度。
- Tasks、snippets、格式化、折叠、Outline、层级视图。
- 原生集成终端、PowerShell 和用户可选终端 Profile。
- 扩展宿主、Open VSX、VSIX、启用/禁用/卸载/更新。
- 普通 Authentication 和扩展认证 API。
- Webview、Custom Editor、Browser View、外部 URI。
- Markdown、Markdown Math、Mermaid、Notebook 核心、IPYNB 格式和 Notebook 输出渲染能力。
- Profiles、Profile 导入导出、本地历史、工作区历史。
- 普通网络、系统代理、下载、文件系统、IPC 和进程基础设施。
- 可访问性、高对比度、键盘导航和本地化框架。
- 用户项目、`.vscode` 和所有普通项目文件。

## 6. 内置扩展集合对比

### 6.1 BeCoder 相对上游新增的目录

- `aadityanarayan.code-snap`
- `becoder.gcc-diagnostics`
- `becoder.one-monokai`
- `becoder.setup`
- `danielpinto8zz6.c-cpp-compile-run`
- `llvm-vs-code-extensions.vscode-clangd`
- `MS-CEINTL.vscode-language-pack-zh-hans`

`theme-seti` 来自上游 Code OSS 1.130，不属于 BeCoder 自创组件；BeCoder 的变化是恢复打包并设为新配置默认。

### 6.2 BeCoder 成品保留的上游扩展

- `cpp`
- `diff`
- `dotenv`
- `ipynb`
- `json`
- `json-language-features`
- `latex`
- `log`
- `make`
- `markdown-basics`
- `markdown-language-features`
- `markdown-math`
- `mermaid-markdown-features`
- `notebook-renderers`
- `python`
- `shellscript`
- `theme-defaults`
- `theme-seti`
- `yaml`

### 6.3 规模变化

- 当前源树相对 Code OSS 1.130 有数千个文件发生增删改。
- 该规模包含大范围能力删除、测试/构建资源删除和少量新增产品实现，不等于同等数量的独立功能。
- 当前 Windows staged package 中可见 26 个内置扩展目录（不计扩展共享 `node_modules`）。

## 7. 构建、法律与供应链变化

- 产品许可证元数据改为 GPL-3.0-or-later；各内置组件继续保留自身许可证。
- 新增 `BUNDLED-COMPONENTS.json`，记录 Code OSS、Electron 42.6.0、Runner、clangd、Seti、CodeSnap、语言包和工具链来源、版本、哈希、许可证及对应源码。
- Electron 42.6.0 的 MIT 许可证文本作为独立组件许可随项目保留。
- Windows 包验证器检查品牌图标、受保护扩展、Seti、中文语言包、工具链归档和被禁止能力。
- Setup 验证器检查零注册表写入、无系统集成、安装目录所有权、覆盖保护、多安装隔离、目录移动和首次示例。
- Electron 构建支持经 SHA-256 固定的本地归档输入，降低外部下载不稳定对可复现构建的影响。

## 8. 当前尚未由本文证明的事项

当前 BeCoder 1.0.3 的 Windows staged package 与 Setup 已完成自动构建和直接验证。本文仍是源码和打包边界盘点，不声称以下事项已经自动成立：

- 所有 GUI 路径在所有分辨率和缩放下均已通过人工验收。
- 所有 GUI 路径都已在所有第三方扩展组合下完成兼容性验收。
- 应用内更新已可用；当前实际状态是关闭。
- 所有第三方扩展均与被删除 API 兼容。

项目收尾时仍应把源码验证、Windows staged package、Setup 直接验证和项目负责人 GUI 验收分别记录，不能互相替代。

## 9. 对比证据入口

- BeCoder 与上游 `product.json`
- BeCoder 与上游 `src/vs/workbench/workbench.common.main.ts`
- BeCoder 与上游 `src/vs/workbench/workbench.desktop.main.ts`
- BeCoder 与上游 `src/vs/workbench/browser/workbench.contribution.ts`
- BeCoder 与上游 `src/vs/workbench/contrib/welcomeGettingStarted/**`
- `build/lib/extensions.ts`
- `extensions/**/package.json`
- `src/vs/code/node/beCoderInstallation.ts`
- `build/win32/becoder.iss`
- `resources/oi-defaults/BUNDLED-COMPONENTS.json`
- `build/lib/test/oiExtensionBoundary.test.ts`
- Git 历史：Stage 4.1 至 Stage 5、BeCoder 1.0.0 至 1.0.3 的发布与修复提交
