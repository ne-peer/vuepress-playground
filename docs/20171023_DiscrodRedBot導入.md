## 参考
[Arch Linux ARMにRed-Discord botをインストールする](https://mlny.info/2017/02/red-discord-bot-on-arch-linux/)

## 環境
centos6

## 手順
#### 0. Botの動作に必要なものインストール
```
# yum install bzip2 opus xz sqlite ncurses gdbm zlib readline git unzip openssl tk libffi ffmpeg youtube-dl
```

#### 1. Python3.6 インストール
```
# yum install -y https://centos6.iuscommunity.org/ius-release.rpm
#
# yum install -y python35u python35u-libs python35u-devel python35u-pip

path通し
# unlink /usr/bin/python3
# ln -s /usr/bin/python3.5 /usr/bin/python3

確認
# python3 -V
Python 3.5.4
#
# pip3 -V
pip 9.0.1 from /usr/lib/python3.5/site-packages (python 3.5)
```

#### 2. pythonモジュールのインストール
```
# pip3 install imgurpython
#
# pip3 install -U discord.py[voice]
```

#### 3. 配置するディレクトリを作成＆ソースのクローン
```
$ mkdir -p /home/develop/work/discord/attamaru-red
$
$ git clone https://github.com/Twentysix26/Red-DiscordBot.git
```

#### 4. 初回起動（設定ファイルの生成）
```
$ python3 red.py
```