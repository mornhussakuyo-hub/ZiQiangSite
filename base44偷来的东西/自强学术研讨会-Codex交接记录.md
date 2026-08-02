# Codex 本地交接：自强学术研讨会网站

更新时间：2026-07-30

## 1. 对话与任务背景

用户拿到了一份《自强学术研讨会网站需求说明》，原计划考虑使用 Base44 生成网站，但 Base44 的正式源码导出属于付费能力。讨论中形成了以下路线：

1. 使用 Base44 免费额度生成审美与页面预览；
2. 浏览器分别保存首页和新闻详情页的电脑、平板、手机 MHTML；
3. 从 MHTML 中提取最终渲染 DOM、编译 CSS 与图片资源；
4. 不尝试逆向恢复 Base44 原始 React 工程，而是重构为干净、独立、可维护的静态站；
5. 交付源码、构建产物、说明文档，以便 Codex 后续在本地继续完善。

原始 MHTML 中包含大量与目标站点无关的 Base44 编辑器外壳、埋点、Stripe iframe、Monaco 样式和错误页。当前项目没有保留这些内容。

## 2. 需求书核心约束

技术方向已经确定为静态网站：

- 不做登录、评论、实时讨论或强交互社区；
- 便于后续新增页面和改内容；
- News、往期回顾与学术材料需要长期沉淀；
- 内容适合 Markdown + 静态资源维护；
- 桌面端和移动端都要适配；
- 基本 SEO、图片 alt 和可读链接；
- 可部署到 GitHub Pages、Cloudflare Pages 或学院服务器；
- Magazine 首期只预留；
- 视觉要求是“正式为主、简约为骨”，避免商业 SaaS、玻璃拟态、大渐变和夸张动效。

需求书副本位于：

```text
docs/需求说明.pdf
```

## 3. Base44 视觉结论

从 MHTML 中提取出的核心视觉系统：

```text
背景：#f9f8f6
前景：#1a1a1a
强调色：#7c2222
浅灰层：#edece8
风格：暖白纸张、近黑正文、暗红细节、细边框、极少圆角与阴影
中文标题：宋体/思源宋体风格
正文：黑体/思源黑体风格
英文小标题：高字距、全大写、暗红色
```

重构时保留了这些特征，但没有复制 Base44 的平台代码。

参考截图位于：

```text
docs/references/
```

## 4. 当前实现

项目使用一个零第三方依赖的 Python 静态站生成器：

```text
scripts/build.py
```

它读取：

```text
content/**/*.md
data/*.json
```

并生成：

```text
dist/
```

浏览器端仅有：

```text
src/assets/js/app.js
```

作用：

- 固定导航滚动状态；
- 移动端菜单开关；
- 首页活动日程横向滚动按钮。

CSS 位于：

```text
src/assets/css/site.css
```

## 5. 已完成路由

```text
/                         首页
/news/                    News 列表
/news/[slug]/             News 详情
/archive/                 往期回顾
/archive/[slug]/          往期详情
/committee/               组委会成员
/showcase/                精彩展示
/contact/                 联系我们
/magazine/                Magazine 占位
/404.html                 静态 404
```

News 与 Archive 共用同一套文章结构，包括：

- 面包屑；
- 分类、标题、摘要；
- 日期、作者、来源；
- 文章图片和图注；
- Markdown 正文；
- 二级标题；
- blockquote；
- PDF 下载卡片；
- 上一篇 / 下一篇。

## 6. 构建和检查

```bash
python3 scripts/build.py
python3 scripts/check_site.py
python3 -m http.server 4173 -d dist
```

或：

```bash
npm run build
npm run check
npm run serve
```

不需要 `npm install`。

当前检查结果：

```text
13 个 HTML 页面成功生成
站内链接和静态资源检查通过
```

## 7. 内容维护方式

### News / Archive

每篇内容使用 Markdown + 简单 front matter：

```markdown
---
title: 标题
slug: url-slug
category: 公告
date: 2026-07-22
author: 作者
source: 来源
description: 摘要
cover: /assets/images/library-article.webp
attachment: /assets/files/example.pdf
attachment_label: 文件标题
---

正文……
```

当前内置 Markdown 渲染支持：

- 普通段落；
- `##` / `###` 标题；
- `>` 引用块；
- 无序列表；
- 粗体、斜体和普通链接。

不要把复杂 Markdown 语法直接加入内容，除非先扩展 `markdown_to_html()`。

### 其他数据

```text
data/site.json         站点名、主旨、邮箱等
data/programme.json    首页活动环节
data/members.json      组委会成员
data/sponsors.json     赞助方
```

## 8. 明确的占位与风险

以下内容不能根据需求书确定，因此没有擅自补成正式信息：

- Logo 与 favicon 最终设计；
- Global Slogan 最终版本；
- 正式活动地点和时间；
- 真实组委会成员；
- 正式邮箱、手机号、两类联系对接人；
- 赞助方名单和 Logo；
- 新闻正文、报告与 PDF；
- 域名；
- 图片授权。

现有图书馆图片是从用户保存的 Base44 页面 MHTML 中提取的。MHTML 只暴露了 Base44 媒体地址，没有提供图片作者或许可证。生产发布前必须确认授权或替换。

`src/assets/files/submission-guidelines.pdf` 是用于验证下载链路的英文占位 PDF，不是正式征稿文件。

## 9. 建议 Codex 下一阶段优先级

### P0：内容替换与验收

1. 与组委会确认真实内容；
2. 替换 Logo、favicon、图片、成员、邮箱和赞助方；
3. 对每个页面进行 375px、768px、1440px 三档截图验收；
4. 检查中文断行、长标题、超长作者名与空数据状态；
5. 确认图片版权和隐私信息；
6. 配置 Cloudflare Pages 预览部署。

### P1：工程增强

1. 增加 sitemap.xml 和 canonical URL；
2. 为 News 添加分类筛选，但不要引入重型框架；
3. 增加自动压缩图片脚本；
4. 增加 HTML 校验与 Lighthouse 检查；
5. 为文章建立更完整的 Markdown 语法或切换到 Astro。

### 是否切换 Astro

当前项目的优点是零依赖、结构简单、直接可部署。若后续内容量明显增长，或需要：

- 自动生成 RSS；
- 更成熟的 Markdown/MDX；
- 图片优化；
- 组件化模板；
- 内容 schema 校验；

可以迁移到 Astro。迁移时应保留现有：

```text
content/
data/
src/assets/css/site.css
```

视觉和内容结构无需推倒重做。

## 10. 可直接交给 Codex 的起始提示词

```text
请先阅读 README.md、CODEX_HANDOFF.md 和 docs/需求说明.pdf。

这是一个从 Base44 MHTML 页面清洗重构得到的零依赖静态网站。不要重新引入 Base44 SDK，不要改成登录、评论或动态社区，也不要擅自把示例人物和邮箱当作真实信息。

先运行：
python3 scripts/build.py
python3 scripts/check_site.py

然后检查 dist/ 中全部路由，并按 CODEX_HANDOFF.md 的 P0 清单继续完善。所有真实内容缺口必须标记为待确认，不要自行编造。保持“正式为主、简约为骨”的学术出版物风格。
```
