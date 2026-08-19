# BeCoder-Web

BeCoder 的官方静态产品网站。本仓库用于介绍产品定位、设计理念、真实界面与下载入口；它不是 BeCoder 桌面编辑器的源码仓库。

- 网站仓库：[Bc408/BeCoder-web](https://github.com/Bc408/BeCoder-web)
- BeCoder 桌面编辑器与 Release：[Bc408/BeCoder-IDE](https://github.com/Bc408/BeCoder-IDE)
- 官网：<https://ide.becoder.tech/>

## 产品边界

BeCoder 是面向 Windows OI、ICPC 与 C/C++ 学习场景的自包含编辑器。官网只呈现已经由产品资料确认的能力：内置 GCC、内置 clangd、GCC Diagnostics、BeCoder Runner、Open VSX 与本地 VSIX。

它不是通用 IDE，也不宣传 AI、Chat、Agent、MCP、Debug / GDB、SCM / Git UI、Remote Development、在线 OJ 或云编译等不属于 BeCoder 的产品能力。产品事实以根目录的 `BECODER_PHILOSOPHY.md`、`BeCoder_Project_Level_Feature_List.md` 与 `BeCoder_Code-OSS_comparison.md` 为准。

## 技术栈

- Astro 5 静态生成
- TypeScript
- Tailwind CSS
- GitHub Pages 与 GitHub Actions

页面尽量使用 Astro 和 CSS 完成展示与动画，只有下载最新 Release 与滚动聚焦效果使用少量浏览器端脚本。

## 本地开发

需要 Node.js 24（与部署工作流一致）及 npm。

```bash
npm install
npm run dev
```

开发服务器会输出本地预览地址。浏览器验收应覆盖桌面和移动宽度下的导航、截图、下载按钮、外部链接与动画。

## 构建与预览

```bash
npm run build
npm run preview
```

`npm run build` 会先执行 Astro 的 TypeScript/模板检查，再生成 `dist/` 静态文件。构建通过只说明静态产物可以生成，不代表视觉验收已经完成。

需要模拟 CI 的干净依赖安装时，使用：

```bash
npm ci
npm run build
```

`dist/` 与 `.astro/` 是可再生文件，已被 Git 忽略。

## 内容与资源

```text
src/
  components/      首页各个有独立语义的展示区
  content/         集中管理产品链接、下载入口与可复用文案数据
  layouts/         页面基础布局、元信息和小型浏览器交互
  pages/           Astro 路由
  styles/          全站样式与响应式、动效规则
public/
  brand/           BeCoder 品牌资源及对比展示所需标识
  screenshots/     经确认的真实 BeCoder 截图
.github/workflows/ GitHub Pages 构建与部署工作流
```

下载、仓库与 Release 地址统一维护在 `src/content/product.ts`。下载按钮先查询 BeCoder-IDE 的最新 GitHub Release，并在请求失败时回退到该仓库的 `releases/latest` 页面；网站源码中不写死版本号或安装包文件名。

新增或替换截图时，请优先使用真实 BeCoder 界面，并保持组件既有引用路径。涉及产品能力的文案修改前，应先核对根目录产品资料，避免根据 Code-OSS 或其他编辑器推断功能。

## GitHub Pages 部署

部署工作流位于 `.github/workflows/deploy.yml`：推送到 `main` 后，GitHub Actions 使用 `npm ci` 与 `npm run build`，再将 `dist/` 发布到 GitHub Pages。

仓库首次启用时，在 GitHub 仓库的 Pages 设置中选择 **GitHub Actions** 作为发布来源，并将自定义域名设置为 `ide.becoder.tech`。Astro 使用根路径构建，因此部署后的资源会直接从该域名根目录加载；不要手工修改生成目录后再部署。

## 许可证与第三方材料

Copyright (C) 2026 Bc408。本仓库以 [GNU General Public License v3.0 or later](LICENSE) 发布。许可证覆盖本仓库中由 BeCoder-Web 项目拥有版权的代码与文档，不会改变第三方依赖、商标、徽标或素材的原有权利与授权条件。

请同时阅读 [THIRD_PARTY_NOTICES.md](THIRD_PARTY_NOTICES.md)。
