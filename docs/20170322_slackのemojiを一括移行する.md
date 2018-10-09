※Windows10で動作確認済み。

## 現在のチームのemojiをエクスポート

こちらの記事を参考に進めます。
[Qiita: Slackのカスタム絵文字を全てダウンロードする](http://qiita.com/kure/items/7938d92532bb7577d8b8)

### 1. [Node.js](https://nodejs.org/ja/)をインストール
インストール後、 `node --version` コマンドで動作確認できます。
今回は下記バージョンを使いました。

```
λ node --version
v6.10.0
```

### 2. 必要なモジュールをインストール

```
λ npm install slack-node
λ npm install request
λ npm install fs
```

### 3. エクスポート元のSlackチームのAPIトークンを取得

**[ここ](https://api.slack.com/custom-integrations/legacy-tokens)** でAPIトークンを発行する。

### 4. スクリプトファイルを配置

メモ帳やらに下記をコピペして、 `"<apitoken>"` の部分に発行したAPIトークンを貼り付ける。
その後 `slack-emoji-export.js` という名前で保存（何でも良い）。

```
var Slack = require('slack-node');
var request = require('request');
var fs = require('fs');

apiToken = "<apitoken>"; // ここにAPIトークンを貼り付ける。
slack = new Slack(apiToken);

slack.api("emoji.list", function (err, response) {
    for(key in response.emoji){
        url = response.emoji[key];
        //エイリアスは無視
        if(url.match(/alias/)){
            continue;
        }
        request
        .get(url)
        .on('response', function (res) {
        })
        .pipe(fs.createWriteStream('image\\'+key+'.png'));
    }
});
```

### 5. 保存先ディレクトリを作成する
`slack-emoji-export.js` を配置した同階層に `image` というディレクトリを作成する。

### 6. 実行
コマンドプロンプトからスクリプトを実行する。

```
C:\Users\Dia\emoji-sakura>node slack-emoji-export.js
```

### 7. 完了
imageディレクトリにカスタム絵文字が保存されているはず。

## emojiを一括インポート

GoogleChromeのエクステンション、 [Slack Emoji Tools](https://chrome.google.com/webstore/detail/slack-emoji-tools/anchoacphlfbdomdlomnbbfhcmcdmjej) を使う。

こちらの記事を参考。
[Hatena Blog: Slack Emoji （絵文字） を一括登録できるツールが素敵すぎました](http://bhind.hatenablog.com/entry/2016/08/03/165645)

### エクステンションをインストールすると一括登録できるようになる

チームのemoji追加画面 (https://チーム.slack.com/customize/emoji) に行くと、一括登録できるようになっている。
ファイル名がそのままemojiの名前になる。

## おわり
おかげでとっても楽に移行できました。