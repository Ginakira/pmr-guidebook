module.exports = {
    title: 'PMR字幕组烤肉指北',
    description: '全新2.0版本 只为高效烤肉',
    themeConfig: {
        logo: '/images/logo.png',
        nav: [
            { text: '指北', link: '/guide/' },
            { text: '资源', link: '/resources/'},
            { text: '关于我们', link: '/about/'},
            { text: 'Acfun', link: 'https://www.acfun.cn/u/14473357' },
            { text: 'Bilibili', link: 'https://space.bilibili.com/7151607' },
            { text: 'Github', link: 'https://github.com/Ginakira/pmr-guidebook' }
        ],
        lastUpdated: '上次更新',
        displayAllHeaders: true,
        smoothScroll: true,
        sidebar: {
            '/guide/': [
                '',
                'workflow',
                'translate',
                'timeline-basic',
                'timeline-advanced',
                'effects',
            ]
        }
    }
}