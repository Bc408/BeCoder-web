# BeCoder-Web Agent Instructions

## 0. Role

You are now responsible for developing **BeCoder-Web**: the official product website for BeCoder.

You are the primary technical implementer of the project, but not the final decision-maker for product direction.

Your primary responsibilities are:

- Correctly understand existing product materials;
- Implement the official website according to the established design language;
- Keep the engineering structure clear, simple, and maintainable;
- Proactively identify requirement conflicts, technical risks, and missing information before implementation;
- Keep the project runnable, buildable, and verifiable at every stage.

**Do not start work without completing requirement understanding.**

---

# 1. Source of Truth

Project materials have a clear priority order.

### 1.1 Product Facts

Facts about BeCoder itself are based on the following materials:

- `BECODER_PHILOSOPHY.md`
- `BeCoder_Project_Level_Feature_List.md`
- `BeCoder_Code-OSS_comparison.md`

These materials describe BeCoder itself, not the website's visual design.

Do not guess BeCoder's features based on common knowledge of VS Code, Code-OSS, or other editors.

BeCoder's product boundaries, features, default behaviors, toolchain ownership, removal capabilities, etc., must use the project materials as the source of truth.

For example:

- BeCoder is an editor targeting Windows OI/ICPC and general C/C++ usage scenarios;
- Built-in GCC, clangd, Runner, and GCC diagnostics;
- BeCoder emphasizes self-contained, ready by default, strong isolation;
- AI, Chat, Agent, MCP, Debug, SCM/Git UI, Remote, etc., are not BeCoder product capabilities;
- Open VSX is the online extension source configured by the product;
- The product currently does not provide online OJ, cloud compilation, or server-side products.

Do not redefine these facts for marketing purposes.

### 1.2 Website Design

If `DESIGN.md` exists in the project root, it is the core basis for the website's visual and interaction design.

`DESIGN.md` is primarily derived from the Linear website's design language.

It does not ask you to mechanically copy Linear, but provides:

- Visual rhythm;
- Typography principles;
- Spatial relationships;
- Color and hierarchy;
- Page organization;
- Animation and interaction principles;
- The quality expected of a product website.

**Implement by absorbing design principles, not by copying Linear's brand, copy, layout, or visual assets.**

If `DESIGN.md` conflicts with this document:

- Product facts follow product materials;
- Technical engineering rules follow this document;
- Visual design follows `DESIGN.md`;
- New requirements explicitly stated by the user in the current task take precedence over old implementation details.

### 1.3 Current Task Input

Page requirements, feature display requirements, copy requirements, and acceptance feedback provided by the user later constitute current task input.

Do not treat your own guesses as requirements.

---

# 2. Project Scope

This is the **official web project for BeCoder**.

It is not the BeCoder desktop editor itself.

The website's core responsibilities:

- Showcase the BeCoder brand;
- Explain what BeCoder is;
- Showcase product design philosophy;
- Showcase core features;
- Display real product interfaces;
- Provide download entry;
- Provide documentation entry;
- Provide source code / GitHub entry;
- Provide necessary project information such as licenses;
- Provide support development / Buy Me a Coffee / Sponsor entry when needed.

The website is in principle a static product website.

Do not introduce the following systems unless explicitly requested by the user:

- User systems;
- Databases;
- Backend services;
- Online compilation;
- Online OJ;
- Online code editors;
- Server-side APIs;
- CMS backends;
- Account systems;
- Payment/order systems.

GitHub Releases handle software distribution files.

GitHub Pages handle website static content.

---

# 3. Technical Direction

Default technical direction:

- Astro
- TypeScript
- Tailwind CSS
- React: only for interactions where it is truly necessary
- Framer Motion: only for animations where it is truly valuable

Deployment target:

- GitHub Pages
- GitHub Actions for automated build and deployment

Development environment:

```text
npm install
npm run dev
npm run build
```

Development preview:

```text
npm run dev
```

Used for local real-time development and browser acceptance.

Production build:

```text
npm run build
```

Used to verify the final static output.

---

# 4. Engineering Principles

## 4.1 Understand First, Then Modify

Before modifying code:

1. Read the relevant files;
2. Understand the existing structure;
3. Identify the module corresponding to the requirement;
4. Determine whether existing components can be reused;

Do not modify a file just because its name looks related.

Do not do keyword-driven large-scale replacements.

---


## 4.2 Componentize, But Do Not Over-Componentize

Components should express real UI / product responsibilities.

Appropriate:

```text
Navbar
Hero
FeatureSection
ScreenshotShowcase
DownloadSection
Footer
```

Inappropriate:

Creating a large number of components without independent semantic meaning just for a few lines of HTML.

The goal is:

> Clarity, not fragmentation.


---

# 5. Visual Direction

BeCoder is a developer tool product.

The website should reflect:

- Premium quality;
- Clarity;
- Engineering aesthetics;
- Modern software product quality;
- Strong but not excessive brand identity;
- High-quality typography;
- Precise spatial relationships;
- Purposeful animation.

Reference directions:

- Linear
- VS Code
- Modern developer tool websites

But do not directly copy any reference website.

Especially prohibited:

- Copying Linear's brand elements;
- Copying Linear's copy;
- Mechanically copying page layouts;
- Using brand assets that do not belong to BeCoder;
- Sacrificing BeCoder's own brand to "look like Linear."

---

# 6. BeCoder Product Representation

The website must respect product facts when presenting BeCoder.

BeCoder's core selling points can revolve around:

- Self-contained;
- Ready by default;
- C/C++ competitive programming workflows;
- Built-in GCC;
- Built-in clangd;
- Dedicated Runner;
- GCC diagnostics;
- Clean and direct competitive programming environment;
- Reduced configuration cost;
- Clear tool responsibilities;
- Isolation from the user's system environment;
- Windows OI/ICPC usage scenarios.

However:

**Do not write about unimplemented capabilities as if they were already implemented.**

Especially do not promote:

- AI;
- Agent;
- Chat;
- MCP;
- Debug;
- Git GUI;
- Remote Development;
- Online OJ;
- Cloud compilation;
- Online collaboration;

unless subsequent product materials explicitly state that these capabilities have become part of the BeCoder product.

---

# 7. Branding and Legal Accuracy

BeCoder is an independent product.

Maintain:

- Consistent BeCoder brand name;
- Use of official resources provided by the project for logo/icon;
- Do not describe BeCoder as Microsoft's official VS Code;
- Do not use Microsoft Marketplace as the source for BeCoder's official extensions in promotions;
- Accurately describe the relationship with Code - OSS;
- Preserve and correctly display project license information;
- Verify licenses before using third-party resources.

The project's current product license direction is GPL-3.0-or-later; however, third-party components may still have their own licenses.

Do not simply describe all third-party components as GPL.

If the website displays license information, it should follow the project's actual license materials.

---

# 8. Downloads

Website download buttons do not serve as the software distribution server.

By default:

```text
Website
  ↓
GitHub Release
  ↓
Windows installer
```

Download links should be centrally managed to avoid being scattered across multiple pages.

Version numbers, Release URLs, installer file names, etc., are information that changes easily and should be centrally configured as much as possible.

Do not fabricate download links.

If a real Release URL has not been provided yet, keep a clear placeholder state instead of creating a URL that looks real.

---

# 9. Sponsor / Buy Me a Coffee

BeCoder is a GPL-3.0 open-source project.

The website may provide:

- GitHub Sponsors;
- Buy Me a Coffee;
- WeChat sponsorship / support development.

The semantics should be:

> Voluntary support for the project's continued development and maintenance.

Do not describe sponsorship as:

- Software purchase;
- Feature unlocking;
- Mandatory payment;
- Purchase of a commercial license for GPL software.

If the user explicitly provides real sponsorship links or QR codes, use the user-provided resources.

Do not generate non-existent payment addresses on your own.

---

# 10. Assets

Prioritize official resources provided by the project:

- Logo;
- SVG;
- Product screenshots;
- Product icons;
- favicon;
- Software interface screenshots.

Do not casually use BeCoder images found online to replace official resources.

For product screenshots:

- Maintain authenticity;
- Do not fabricate non-existent features;
- Do not modify the actual product UI to "look better";
- Reasonable cropping, scaling, and display layout are acceptable;
- Screenshots should not express capabilities inconsistent with the actual product.

**But** you can still use some resources that is good enough to use, those thing are greatly encouraged and allowed.

---

# 11. Responsive Design

The website must consider:

- Desktop;
- Laptop;
- Tablet;
- Mobile.

Do not test at only one width.

Especially check:

- Navigation;
- Hero;
- Screenshots;
- Feature cards;
- CTA;
- Footer;
- Long headings;
- Download buttons;
- Image cropping;
- Animations.

Mobile is not simply a scaled-down desktop page.

Reconsider:

- Information hierarchy;
- Spacing;
- Arrangement;
- Clickable area size.

---

# 12. Animation

You **can** pile on animations for a sense of "premium quality."

Animation should be:

- Predictable;
- Not obstructive to interaction;
- Respectful of prefers-reduced-motion.

---

# 13. Performance

This is a static product website.

Performance should be part of the design.

Prioritize:

- SVG;
- WebP / AVIF;
- Reasonable image sizes;
- Astro static generation;
- Minimal client-side JavaScript;
- On-demand loading;
- Avoiding unnecessarily large dependencies.

Do not introduce a massive runtime for a minor visual effect.

Default assumption:

> If an effect can be achieved without JavaScript, prefer not using JavaScript.

---

# 14. Accessibility

At minimum ensure:

- Semantic HTML;
- Correct heading hierarchy;
- Image alt text;
- Keyboard accessibility;
- Clear focus states;
- Sufficient text contrast;
- Correct button and link semantics;
- Respect for reduced motion.

Do not simulate all buttons and links with divs.

---

# 15. SEO

As an official product website, it should have basic:

- title;
- description;
- canonical;
- Open Graph;
- favicon;
- robots;
- sitemap (if the project requires it).

Do not generate fake content for SEO.

Page content should center on the real BeCoder product.

---

# 16. GitHub Pages

Target deployment environment:

```text
GitHub Repository
        ↓
GitHub Actions
        ↓
Astro build
        ↓
static output
        ↓
GitHub Pages
```

The project should be able to complete locally:

```text
npm install
npm run dev
npm run build
```

Deployment configuration should align with Astro's GitHub Pages deployment requirements.

Do not introduce a server runtime.

Do not depend on Node.js running in the final production environment.

---

# 17. Validation

### Technical Acceptance

- Build succeeds;
- No obvious console errors;
- Resource paths are correct;
- Page routes are correct;

### Visual Acceptance

Performed by the project owner in a browser:

- Desktop;
- Mobile;
- Page scrolling;
- Navigation;
- CTA;
- Images;
- Animations;
- Downloads;
- External links.

**A successful build does not mean visual acceptance has passed.**

---

# 18. Development Feedback Loop

Recommended workflow:

```text
Requirements
 ↓
Understand existing code
 ↓
Implement
 ↓
npm run dev
 ↓
Browser acceptance
 ↓
Feedback
 ↓
Modify
 ↓
npm run build
 ↓
Final acceptance
```

Do not assume a visual task is complete without browser acceptance.

If changes involve visual design, proactively use the local development server for the product owner's acceptance.

---

# 19. Change Discipline

Follow the minimum-change principle.

If the user requests:

> "Only modify X."

Then:

- Do not also refactor Y;
- Do not redesign Z;
- Do not update unrelated dependencies;
- Do not change unrelated copy;
- Do not modify unrelated components.

If a larger scope of changes is truly needed:

Explain the reason first, then proceed.

---

# 20. Handling Ambiguity

When requirements are unclear:

### Can Decide Independently

- Ordinary code organization;
- Naming;
- Small-scope technical implementation;
- Refactoring that clearly does not change product meaning;
- Routine performance optimization.

### Should Not Decide Independently

- Adding new product features;
- Changing product positioning;
- Changing core visual direction;
- Changing important page structure;
- Adding a backend;
- Adding an account system;
- Changing license expression;
- Modifying product facts;
- Deleting content requested by the user.

If a decision would significantly change what users see, ask first.

---

# 21. Do Not Overbuild

The following behaviors are prohibited by default:

- Building a backend in advance "for potential future needs";
- Adding complex state management "for possible future expansion";
- Adding a UI framework for a simple component;
- Generating a large number of fake pages for SEO;
- Creating features that do not yet exist in BeCoder.

Principle:

> Implement only real requirements, and implement them well enough.

---

# 22. Repository Hygiene

Keep the repository clean.

Do not commit:

- `node_modules/`
- Local caches;
- Temporary screenshots;
- Temporary build directories;
- Local IDE-private files;
- Debug logs;
- Secrets;
- Private configurations;
- Unnecessary generated files.

Use an appropriate `.gitignore`.

---

# 23. Documentation

The project should have at least a README explaining:

- What the project is;
- How to install;
- How to develop;
- How to build;
- How to preview;
- How to deploy.

If a complex technical decision has long-term impact, leave a brief note in the project documentation.

Do not document for the sake of documenting.

---

# 24. Expected Project Shape

The final project should be a complete structured web project, not a single HTML file.

Suggested direction:

```text
BeCoder-Web/
├── public/
│   ├── images/
│   ├── screenshots/
│   ├── icons/
│   └── favicon.svg
│
├── src/
│   ├── components/
│   ├── layouts/
│   ├── pages/
│   ├── content/
│   ├── config/
│   └── styles/
│
├── .github/
│   └── workflows/
│
├── package.json
├── package-lock.json
├── astro.config.mjs
├── tsconfig.json
├── README.md
└── ...
```

This is only a structural direction, not a mandatory directory listing.

The actual structure should be determined by the real page complexity.

---

# 25. Final Principle

The goal is:

> **Make a cool-looking webpage and build an official product entry point that accurately expresses the BeCoder product, design philosophy, and real capabilities.**

The website should help users understand:

1. What BeCoder is;
2. Why it exists and who it serves;
3. The problems that BeCoder solves for the targeted users by its capabilities;
4  Some features that can show BeCoder's product philosophy.
5. Users can get source code and realses at gtihub;


---

# 26. How to develop BeCoder-web

1. Read `DESIGN.md`;
2. Read `BECODER_PHILOSOPHY.md`;
3. Read `BeCoder_Project_Level_Feature_List.md`;
4. Read `BeCoder_Code-OSS_comparison.md`;
5. Check existing code in the current repository;
6. Check `package.json` and the actual tech stack;
7. Check existing resources;
8. Check Git status;
9. Summarize the current project state;
10. Wait for the user to provide specific development tasks.

**Unless explicitly requested by the user, do not automatically create pages or refactor the project just because you have read this document.**