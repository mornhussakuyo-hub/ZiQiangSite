# 自强学术研讨会网站

武汉大学人工智能学院自强班组织的自强学术研讨会官网。项目根据 Base44 页面预览与浏览器保存的 MHTML 重新实现，保留 Astro 作为内容组织和静态构建工具。

当前包含首页、往期回顾、组委会、精彩展示、News、联系我们、赞助展示和 Magazine 占位页；构建结果为纯静态 HTML、CSS 与少量原生 JavaScript，不依赖 Base44 运行时。

## 本地运行

```bash
pnpm install
pnpm dev
```

生产构建：

```bash
pnpm build
pnpm preview
```

## 内容更新

- News 文章放在 `src/content/news/`，使用 Markdown front matter。
- 页面卡片和活动资料集中在 `src/data/site.ts`。
- 下载资源放在 `public/files/`，图片和 Logo 放在 `public/images/`。
- 组委会头像、Logo、邮箱等占位信息可直接替换，不需要修改页面结构。

## 还原依据与上线风险

- 原始参考资料保存在 `base44偷来的东西/`，包括首页与新闻页的桌面、平板、手机 MHTML。
- 颜色、字体、间距、响应式断点和主要页面结构均从这些文件的最终 DOM/CSS 中整理。
- `public/images/library-hero.webp` 与 `public/images/library-article.webp` 来自 Base44 页面引用的媒体资源，MHTML 未提供作者或许可证；正式上线前必须确认授权或替换。
- `public/files/submission-guidelines.pdf`、成员、邮箱和赞助方仍是演示内容，不能视为正式发布材料。

## 路由

- `/` 首页
- `/archive` 往期回顾
- `/committee` 组委会成员
- `/showcase` 精彩展示
- `/news` News 列表及文章详情
- `/contact` 联系我们
- `/sponsors` 赞助展示
- `/magazine` Magazine 预留页
