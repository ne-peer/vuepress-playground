## IPとか打たずに `ssh alias` で入りたい
windowsの場合、ユーザディレクトリの `.ssh` にconfigという名前でファイルを生成し、

```
Host ec2
    	Hostname ec2-00-000-000-000.ap-northeast-1.compute.amazonaws.com
    	User ec2-user
    	IdentityFile ~/.ssh/hogehoge.pem
```

こんな感じで書く。

あとはcmderで `ssh ec2` とやれば自動的に `ssh ec2@ec2-user -i ~/.ssh/hogehoge.pem` と解釈される。

## 参考
* [cmderでssh_configを設定する](http://qiita.com/fagai/items/5b74ef4cf6b497f54312)
* [ssh_configの書き方](https://koejima.com/archives/583/)
