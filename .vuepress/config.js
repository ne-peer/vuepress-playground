module.exports = {
  title: "ne-peer's memo",
  description: "VuePress playground",
  themeConfig: {
    nav: [{ text: "Home", link: "/" }, { text: "Docs", link: "/docs/" }],
    sidebar: [
      {
        title: "Ichinose",
        collapsable: false,
        children: [
          "/",
          "/docs/20170217_python-handson",
          "/docs/20170308_google-custom-search",
          "/docs/20170322_slackのemojiを一括移行する",
          "/docs/20170327_SVN-Quickstart",
          "/docs/20170424_dia開発メモ",
          "/docs/20170531_MVCパターンについて",
          "/docs/20170618_slack-api",
          "/docs/20170711_npmの依存解決",
          "/docs/20170712_cmderのssh_config設定",
          "/docs/20170817_ghost-install",
          "/docs/20170830_hubot-pixiv-scraping_2",
          "/docs/20170831_lets-encryptで証明書更新",
          "/docs/20171023_DiscrodRedBot導入",
          "/docs/20180129_Nuxtjsのメモ",
          "/docs/20180309_Angularをgh-pagesにデプロイするまで"
        ]
      },
      {
        title: "Miyamoto",
        collapsable: false,
        children: [
          "/docs/20180326_ionic3ハンズオン",
          "/docs/20180523_install-gitbook",
          "/docs/20180606_mello-yello-letsencrypt",
          "/docs/20180608_Webサイトを公開までのレシピ",
          "/docs/20180720_nuxt-pwa.md",
          "/docs/20180921_迷惑メール対策",
          "/docs/20180926_psql-cli",
          "/docs/20181001_hubotが定期的に死ぬ",
          "/docs/20181005_lets-encryptで証明書削除",
          "/docs/20181009_Install-yarn"
        ]
      }
    ]
  },
  meta: [
    { charset: "utf-8" },
    { name: "viewport", content: "width=device-width, initial-scale=1" }
  ]
};
