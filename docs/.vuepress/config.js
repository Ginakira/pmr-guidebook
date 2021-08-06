module.exports = {
  title: "PMR字幕组烤肉指北",
  description: "全新2.0版本 只为高效烤肉",
  lang: "zh-CN",
  themeConfig: {
    logo: "/images/logo.png",
    navbar: [
      { text: "规范", link: "/guide/" },
      {
        text: "教程",
        children: [
          {
            text: "时间轴",
            children: [
              "/tutorial/timeline/timeline-basic.md",
              "/tutorial/timeline/timeline-advanced.md",
              "/tutorial/timeline/effects.md",
            ],
          },
        ],
      },
      { text: "资源", link: "/resources/" },
      { text: "关于我们", link: "/about/" },
      { text: "Acfun", link: "https://www.acfun.cn/u/14473357" },
      { text: "Bilibili", link: "https://space.bilibili.com/7151607" },
    ],
    repo: "Ginakira/pmr-guidebook",
    lastUpdatedText: "上次更新",
    contributorsText: "文档贡献者",
    backToHome: "返回首页",
    displayAllHeaders: false,
    smoothScroll: true,
    editLink: false,
    sidebar: {
      "/guide/": [
        "/guide/README.md",
        "/guide/workflow.md",
        "/guide/translate.md",
        "/guide/timeline.md",
      ],
      "/tutorial/timeline": [
        {
          text: "时间轴教程",
          children: [
            "/tutorial/timeline/timeline-basic.md",
            "/tutorial/timeline/timeline-advanced.md",
            "/tutorial/timeline/effects.md",
          ],
        },
      ],
    },
  },
};
