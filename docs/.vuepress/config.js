module.exports = {
  title: 'API Dokumentation DNI',
  description: 'Testaufbau',
  themeConfig: {
    nav: [
      {
        text: 'Home',
        link: '/'
      },
      {
        text: 'DNI',
        link: 'https://immosolve.de'
      }
    ],
    sidebar: [
      {
        title: 'Getting started',
        collapsable: false,
        path: '/',
        children: [
          '/',
          '/about'
        ]
      },
      {
        title: 'API',
        collapsable: false,
        path: '/',
        children: [
          '/publicMediaService'
        ]
      }
    ],
    sidebarDepth: 2
  },
  footer: 'Footer text'
}
