# BeCoder 项目级功能清单

> 盘点日期：2026-08-16  
> 源码目录：`C:\Users\Bc\Desktop\BeCoder\BeCoder_new`  
> 基线：分支 `main`，HEAD `6e1845a420bf6d7a515332d6bccab12e3a662bc6`  
> 版本：BeCoder 产品版本 `1.0.3`；Code OSS 来源与扩展 API 兼容版本 `1.130.0`。  
> 说明：本清单按当前已发布源码和打包边界编写，不替代项目负责人的最终 GUI 验收。

## 1. 产品定位

BeCoder 是基于 Code - OSS 1.130 的 Windows C/C++ 竞赛编程编辑器，面向 OI、ICPC、算法学习和普通 C/C++ 编写。产品目标不是覆盖所有通用 IDE 场景，而是提供一套自包含、开箱即用、可移动、可预测的 C/C++ 工作环境。

核心原则：

- 编译、运行、编辑器诊断和代码智能使用 BeCoder 自带资源，不依赖系统编译器或系统 VS Code。
- 原生终端保留用户机器的真实环境，BeCoder 不向其中注入自带 GCC。
- 设置、扩展、缓存、历史和语言状态默认保存在当前安装目录内。
- 用户项目、`.vscode`、`.clangd`、`.clang-format`、`.git`、源码和输入文件始终属于用户。
- 默认状态可直接使用，同时保留用户显式设置的优先权。

## 2. Windows 产品与发行

### 2.1 品牌与身份

- 应用名、窗口品牌和可执行文件品牌为 **BeCoder**。
- 产品作者元数据为 **Bc408**，BeCoder 自身版本为 **1.0.3**。
- 应用协议为 `becoder`，数据目录名为 `.becoder`。
- Windows 应用、窗口、任务栏、Setup 和 Visual Elements 使用 BeCoder 图标资产。
- 空编辑器使用 BeCoder 单色品牌水印，并保留 Code OSS 的自适应显示方式。
- 每份安装具有独立 `installationId`，Windows AppUserModelId 随安装身份区分。
- About 页面使用固定英文 BeCoder 文案，说明 BeCoder 1.0.3、Code OSS 来源、GPL 3.0 和项目源码地址 `github.com/Bc408/BeCoder-IDE`。

### 2.2 Setup-only 目录安装

- 提供 `BeCoderSetup-x64-1.0.3.exe`，目标平台为 Windows x64。
- 默认目录为 `%LOCALAPPDATA%\Programs\BeCoder`，用户可选择专用安装目录。
- 最低权限安装，不要求管理员权限。
- 不创建卸载器，不创建卸载注册表项。
- 不修改 PATH、文件关联、协议注册、右键菜单、服务、启动项或系统环境变量。
- 不复用 Inno Setup 的上次目录、语言、任务或用户信息。
- 可选创建当前用户桌面快捷方式；默认不勾选，并提示向可移动存储介质安装时不建议勾选。
- 不允许直接安装到磁盘根目录。
- 当前安装路径要求仅含 ASCII，且总长度不超过 70 个字符。
- 非空且不属于 BeCoder 的目录会被拒绝，避免覆盖用户文件。
- 重装同一 BeCoder 目录是完整替换；交互安装要求明确确认数据丢失，静默替换要求显式参数授权。
- 安装目录带 `.becoder-installation.json` 所有权标记；不同安装具有不同身份。
- 安装目录整体可移动到其他目录或 U 盘，移动后仍按同一安装身份运行。

### 2.3 安装内私有数据

- 打包版启动时强制把安装目录下的 `data` 设为便携数据根。
- 用户设置、快捷键、扩展、缓存、日志、历史、Profiles 等进入当前安装的私有数据树。
- 外部 `VSCODE_APPDATA` 或其他 BeCoder/系统 VS Code 数据不会成为产品数据权威。
- 多份安装分别使用自己的 `data` 和安装身份，互不共享。

### 2.4 首次启动示例

- Setup 在 `BeCoder.exe` 同级安装 `coding\helloCoder.cpp`。
- 新安装第一次启动会打开 `coding` 文件夹中的 `helloCoder.cpp`。
- 只对这份安装自带的首次示例目录作窄范围信任。
- 首次打开标记只消费一次；文件或标记不符合冻结哈希和结构时不会冒险执行该流程。

## 3. 工作台与编辑能力

### 3.1 默认布局

- 使用接近 Code OSS 1.130 的经典工作台布局。
- 顶部保留经典菜单栏、后退/前进导航、命令中心和布局控制。
- 左侧保留纵向 Activity Bar 和主侧栏。
- 底部保留 Panel 和状态栏。
- 主侧栏可由用户移动到右侧。
- Panel 可放在左、下、上或右侧。
- 显式用户设置优先，不通过强制迁移覆盖用户布局。
- 默认使用自定义标题栏，以承载 BeCoder 品牌图标和原生工作台控件。

### 3.2 文件与编辑器

- Explorer 文件树、打开文件/文件夹/工作区、新建文件、重命名、移动和删除等普通文件操作。
- 多编辑器、分栏、标签页、Diff、Merge Editor、Multi Diff Editor。
- 全局搜索、文件内搜索、Search Editor、Quick Access。
- 设置编辑器、键盘快捷键编辑器、命令面板。
- Problems、Output、日志、通知、进度显示。
- Outline、大纲服务、Call Hierarchy、Type Hierarchy、代码操作、格式化、折叠。
- 原生 snippets 功能和 C/C++ snippets 配置入口。
- 本地文件历史、工作区历史和编辑器历史。
- Tasks 基础设施保留。
- `.vscode` 工作区配置作为普通用户项目资产保留。
- 支持普通 Webview、Custom Editor、URL 打开和外部 URI。

### 3.3 默认编辑体验

- 字号默认 14。
- 平滑光标、平滑滚动、列表和终端平滑滚动默认开启。
- 鼠标滚轮缩放默认开启。
- 自动保存默认为失焦保存。
- 默认不在保存、粘贴或输入时自动格式化。
- 默认关闭字体连字。
- 允许用户修改这些设置；默认值不取代用户显式配置。

## 4. C/C++ 开箱即用链

### 4.1 内置 GCC 工具链

- 内置基于 MSYS2 UCRT64 的 GCC 14.1.0 工具链归档。
- 默认 C 标准为 C17；可选 C11、C17、C23。
- 默认 C++ 标准为 C++20；可选 C++11、14、17、20、23。
- 默认编译参数包含 `-O2 -Wall -DDEBUG`。
- 包含 `bits/stdc++.h`、预编译头 `stdc++.h.gch`、PBDS 等竞赛常用能力。
- 包含 BeCoder 的 `debugger.h` 辅助头及必要运行时 DLL。
- 工具链按安装目录私有部署，不进入系统 PATH。
- 编译器归档、包清单、许可证和对应源码配方随项目维护。

### 4.2 BeCoder Runner

- C/C++ 编辑器标题区提供 **Run** 和 **Run With Input**。
- `F6` 运行当前 C/C++ 文件；`Shift+F6` 使用输入文件运行。
- 提供 **BeCoder Runner** 终端 Profile，并作为新配置默认终端。
- 用户仍可选择 PowerShell 或其他系统终端为默认 Profile；后续新建终端遵循用户选择。
- BC 面板是伪终端，不是 PowerShell/CMD，也不执行任意 shell 命令。
- BC 仅接受封闭命令：`run <source>`、`run <source> -WithInput`、`clear`、`help`。
- 运行前保存 C/C++ 源文件。
- Run With Input 只使用源码同目录下名字精确为 `input` 的普通文件。
- 同一时刻只允许一个活动请求；忙时立即拒绝，不建立隐藏队列。
- `Ctrl+C` 取消当前编译或程序进程树，取消完成后才允许下一次请求。
- 编译成功后把可执行程序发布到源码目录；清理只处理当前请求拥有的生成物。
- 可执行文件发布兼容固定磁盘和可移动存储介质，不依赖可移动文件系统提供稳定 inode。
- 编译、运行、退出码、运行时错误和清理结果在 BC 面板中直接反馈。
- 原生 PowerShell 完整保留，用于用户自己的 PATH、脚本、Git、ssh、scp 和任意系统命令。

### 4.3 GCC 编辑器诊断

- BeCoder 自有 `becoder.gcc-diagnostics` 扩展为 C/C++ 编辑器提供可见错误诊断。
- 使用内置 GCC，而不是系统 GCC。
- 诊断和显式 Run 是独立进程与状态，不共享取消或终端状态。
- 采用“最新请求获胜”的协调方式，避免旧诊断覆盖新文档状态。
- 诊断能力不在不受信任工作区执行。

### 4.4 clangd 代码智能

- 内置 clangd 22.1.6 Windows 归档和经过收敛的 clangd 扩展。
- 提供 C/C++ 补全、跳转、悬停、签名帮助、重命名、符号与层级等原生 LSP 代码智能。
- 使用 BeCoder 自带 clangd 和 GCC include 路径，不依赖系统 clangd。
- 使用 `--enable-config=false`，避免项目或系统配置改变 BeCoder 受控语言服务边界。
- 关闭 clangd 可见诊断，由 GCC diagnostics 统一负责编辑器错误。
- 不把 clangd 扩展成 Debug、GDB、代码执行或通用索引产品。
- 提供显式 Google 风格格式化；默认不自动保存格式化。
- 修正 GCC 14.1.0 标准头相关的 clangd 假阳性边界。

### 4.5 内嵌类型提示

- BeCoder 设置中提供 `becoder.inlayHints.enabled`。
- 默认关闭。
- 开启后由 clangd 提供原生 inlay hints，例如 `auto` 推断后的类型提示。
- 该开关复用 Code OSS 编辑器的内嵌提示渲染，不另造提示系统。

## 5. C/C++ 视觉系统

- 使用内置 C/C++ TextMate 语法作为即时、完整的首屏着色。
- C/C++ grammar 集成了固定版本的 Better C++ Syntax。
- clangd 只进行一次有边界的语义细化，不维护额外语义缓存/恢复管线。
- 默认主题为 **BeCoder One Monokai**，负责已接受的 C/C++ 语义颜色。
- 非活动预处理分支采用降低亮度的视觉处理，而不是简单统一灰色。
- 默认文件图标主题为内置 **Seti (`vs-seti`)**。
- Seti 保持 Code OSS 1.130 上游主题资源、字体和第三方告知。
- 支持系统深浅色自动跟随，以及保留的默认高对比度/基础主题能力。

## 6. Welcome 与启动体验

- 新配置默认打开 BeCoder Welcome 页面。
- Welcome 复用 Code OSS 原生 Getting Started 编辑器框架，而不是独立 Webview。
- 页面品牌为 BeCoder，副标题为中文“一切就绪”、英文“All set”。
- 启动区保留：新建文件、打开文件、打开文件夹、打开内置浏览器。
- 不显示 Connect to、Open Tunnel、Git、SCM、Debug、AI 或 Agent 入口。
- 不展示 walkthrough；普通扩展不能向 BeCoder Welcome 注入演练内容。
- 关闭 Welcome 后显示带 BeCoder 水印的空编辑器，不强制重新打开 Welcome。
- `workbench.startupEditor` 仍是启动页权威，用户可以修改启动行为。

### 6.1 文件夹内最近打开

- Welcome 的最近区域只显示当前打开文件夹/工作区内的普通文件。
- 单文件夹只显示该根目录内文件，多根工作区合并各根目录内文件。
- 使用原生 `IHistoryService.getHistory()`，不创建 BeCoder 私有历史数据库。
- 默认显示 5 条，点击“更多”扩展到 15 条。
- 主文本显示文件名，次要文本显示相对父目录，tooltip 显示完整路径。
- 普通点击在当前窗口打开；Ctrl/Command 点击在新窗口打开。
- 移除按钮只从原生历史中移除记录，不删除磁盘文件。
- 不混入工作区外文件、设置页、Welcome、虚拟文档或内部资源。
- 未打开文件夹或没有历史时显示对应中英文空状态。

## 7. 终端

- 完整保留 Code OSS 集成终端基础设施。
- 默认 Profile 为 BeCoder Runner，但默认终端选择权属于用户。
- 原生 PowerShell 保留，使用真实系统 PATH、Profile、别名和环境变量。
- `Ctrl+\`` 打开用户当前选择的默认终端。
- BeCoder 默认关闭终端持久会话，不承诺恢复上一次终端进程；重新打开后新建终端使用用户选择的默认 Profile，未修改配置时为 BC。
- 保留多个终端、终端 Profile、终端编辑器/Panel 等普通终端能力。
- 移除终端建议功能，但不移除普通 shell 识别和终端运行能力。

## 8. 扩展系统

### 8.1 在线与本地安装

- 唯一产品配置的在线扩展源为 **Open VSX**。
- 支持浏览、安装、启用、禁用、卸载和更新普通扩展。
- 支持从本地 VSIX 安装。
- 不连接、不回退到 Microsoft Marketplace。
- 扩展签名校验路径按 Open VSX/本地 VSIX 边界兼容。

### 8.2 受保护与黑名单

受保护的产品组件不能被普通 gallery 更新或替换：

- `becoder.becoder-setup`
- `becoder.runner`
- `becoder.gcc-diagnostics`
- `becoder.one-monokai`
- `llvm-vs-code-extensions.vscode-clangd`
- `adpyke.codesnap`
- `vscode.cpp`
- `ms-ceintl.vscode-language-pack-zh-hans`

黑名单扩展：

- `ms-vscode.cpptools`
- `ms-vscode.cpptools-extension-pack`

黑名单用于防止 cpptools 与 BeCoder 自有 clangd/GCC/Runner 所有权冲突。

### 8.3 当前成品内置扩展

BeCoder 专有或集成组件：

- BeCoder Setup
- BeCoder Runner
- BeCoder GCC Diagnostics
- BeCoder One Monokai
- BeCoder C/C++ Intelligence（clangd）
- CodeSnap
- 简体中文语言包

保留的 Code OSS 内置扩展：

- C/C++ grammar 与 snippets
- Diff
- dotenv
- JSON 与 JSON Language Features
- LaTeX 基础语法
- Log
- Make
- Markdown Basics / Markdown Language Features / Markdown Math
- Mermaid Markdown Features
- IPYNB
- Notebook Renderers
- Python 基础语法
- Shell Script 基础语法
- Default Themes
- Seti File Icons
- YAML

## 9. 中文、英文与设置

- 内置固定版本简体中文语言包，默认语言为 `zh-cn`。
- BeCoder 设置提供简体中文/英文切换。
- Welcome、Runner、GCC diagnostics、设置、工具链诊断和产品可见入口具有中英文文案。
- 切换语言沿用 Code OSS 本地化资源与重启流程，不在 TypeScript 中硬编码 locale 分支。
- BC Runner 已接受的终端协议文本保持固定英文，以保证输出协议稳定。

BeCoder 设置入口包括：

- 显示语言。
- 新文件默认语言（默认 C++）。
- 内嵌类型提示开关（默认关闭）。
- C/C++ snippets 配置。
- 自动格式化配置。
- 工具链诊断。
- Runner 的 C/C++ 标准与编译参数。
- Explorer 中显示全部文件/隐藏 BeCoder 初始化文件。

## 10. Markdown、网页与辅助功能

- Markdown 编辑、预览、语言功能和数学公式。
- Mermaid 图表预览；删除 Chat 输出和语言模型集成。
- Notebook 核心服务、内置 IPYNB 格式支持和 Notebook Renderers 保留，可供兼容的 Jupyter 扩展使用。
- BeCoder 不内置 Python/Jupyter 运行时或内核；实际执行仍由用户安装的兼容扩展和本机环境提供。
- 内置 Browser View 可在编辑器标签中打开普通网页。
- CodeSnap 可将代码区域生成图片。
- 普通 Authentication 服务与扩展认证 API保留。
- 可访问性、键盘导航、高对比度、通知、进度和辅助提示基础设施保留。

## 11. Profiles 与数据迁移

- 使用 Code OSS 原生 User Data Profiles。
- 保留原生 Profile 创建、切换、管理、导入和导出。
- BeCoder 不再维护一套独立的自研导入/导出事务系统。
- Profile 导入导出与 Code OSS 原生格式保持同一实现边界。
- 安装目录私有数据与 Profile 文件是不同概念：前者是当前安装的运行数据，后者是用户显式导出/导入的配置载体。

## 12. 应用更新状态

- Code OSS 原生应用更新服务、命令、状态机和未来下载/安装实现仍保留在源码中。
- 当前 `product.json` 不提供 `updateUrl`，因此 BeCoder 暂不启用应用内更新。
- 没有更新服务地址时，应用更新设置分类不注册，不向用户显示无效更新选项。
- 更新相关品牌文案已从 VS Code/Microsoft 改为 BeCoder。
- 这不影响 Open VSX 扩展更新，也不影响普通网络请求。
- 将来提供 BeCoder 更新服务时，可以重新配置 `updateUrl` 恢复原生更新能力，无需重写更新框架。

## 13. 明确不存在的产品能力

以下能力已从产品注册、交互、扩展贡献和打包路径中移除或禁用：

- AI、Chat、Inline Chat、Agent、Agent Sessions、语言模型、MCP、Copilot。
- Debug Workbench、断点、调用栈、Debug Console、GDB 和调试扩展入口。
- Source Control、SCM API、Quick Diff、Git 图形界面、内置 Git/Git Base/GitHub/Merge Conflict 扩展。
- Remote Window、Remote Explorer、Remote Extension Host、Tunnel、Ports、Remote Coding Agents。
- 欢迎页 Connect to/Open Tunnel 和远程工程入口。
- Terminal Suggest。
- Walkthrough 展示、扩展 walkthrough 注入和自动演练打开。
- 编辑器 Playground、Report Issue 等不属于 BeCoder 产品的入口。
- macOS/Linux/Web 成品发行和 Portable ZIP 发行。
- Microsoft Marketplace。
- 系统级安装集成和卸载器。
- BeCoder 自身的 Git/OJ 登录、提交、评测或在线 OJ 服务。

Git 仍可由用户在原生 PowerShell 中作为外部命令执行；BeCoder 不识别、不展示也不集成 Git 工程化能力。项目中的 `.git`、`.gitignore` 等仍作为普通文件受到保护。

## 14. 被明确保留的普通基础设施

为避免“按关键词删除”误伤产品，以下普通能力仍保留：

- 普通文件、文件夹、工作区和多窗口。
- Explorer、搜索、编辑器、Diff、Tasks、终端。
- 原生 PowerShell、用户外部命令和本地网络驱动器。
- 普通网络、代理、下载、请求和 Webview。
- Browser View、Markdown、Mermaid、HTML/图片相关基础设施。
- 普通 Authentication 与第三方扩展 API。
- Open VSX 和本地 VSIX。
- URI、进程、IPC、扩展宿主、语言服务和文件系统通用基础设施。
- 本地历史、Profiles、设置、快捷键、snippets。
- 用户项目中的版本控制资产、配置文件和源码。

## 15. 验证与验收边界

仓库包含以下主要自动验证层：

- BeCoder OI 扩展与产品边界测试。
- Runner、GCC diagnostics、clangd、Setup 扩展的单元/行为测试。
- TypeScript client typecheck 和内置 OI 扩展编译。
- Windows staged package 验证器。
- Setup 直接验证器，包括零注册表写入、目录归属、覆盖安装、多安装隔离、移动目录和首次示例文件检查。
- 内置组件哈希、许可证、语言包、Seti、图标和工具链包边界检查。
- 组件清单记录 Electron 42.6.0，并保留其独立 MIT 许可证文本。

截至本清单生成时，当前 `main` 已形成 BeCoder 1.0.3 发布状态，新的 `VSCode-win32-x64`、staged package 和 `BeCoderSetup-x64-1.0.3.exe` 已完成自动构建与直接验证。自动验证不替代项目负责人对实际 GUI 和运行体验的验收。

## 16. 主要事实来源

- `BECODER_PHILOSOPHY.md`
- `product.json`
- `extensions/becoder.setup/**`
- `extensions/becoder.gcc-diagnostics/**`
- `extensions/danielpinto8zz6.c-cpp-compile-run/**`
- `extensions/llvm-vs-code-extensions.vscode-clangd/**`
- `extensions/becoder.one-monokai/**`
- `extensions/theme-seti/**`
- `src/vs/workbench/workbench.common.main.ts`
- `src/vs/workbench/workbench.desktop.main.ts`
- `src/vs/workbench/contrib/welcomeGettingStarted/**`
- `src/vs/code/node/beCoderInstallation.ts`
- `build/lib/extensions.ts`
- `build/gulpfile.vscode.ts`
- `build/win32/becoder.iss`
- `build/lib/test/oiExtensionBoundary.test.ts`
- `build/azure-pipelines/win32/verify-becoder-package.ps1`
- `build/azure-pipelines/win32/verify-becoder-setup.ps1`
- `resources/oi-defaults/BUNDLED-COMPONENTS.json`
