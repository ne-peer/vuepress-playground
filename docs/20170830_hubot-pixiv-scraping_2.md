つづき。

pixivからスクレイピングするソースをhubot用にして、エラー処理などを追加した。これで晴れてダイヤさんに正式導入された。

恥ずかしいスペルミスなどを修正した正式ソースは[これ](https://github.com/ne-peer/dia/blob/master/scripts/pixiv-img-scraping.js)。

---

10秒固定値でphantomの読み込み待ちをしているという問題が残っている。あまりにも不安定なのでセレクタの要素が取れるまでループするようにしたい。いや、そもそも遅すぎるという根本的な問題がある。

Pythonで書かれた[PixivのAPIを呼び出すことができるライブラリ](https://github.com/upbit/pixivpy)があるらしいので、そっち使ったほうが動作も早くなるしできることも多くなると思う。