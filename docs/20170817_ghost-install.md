## 推奨環境
https://docs.ghost.org/docs/hosting

## やったこと
次の公式セットアップドキュメントを参照: https://docs.ghost.org/docs/install

```
# adduser ghost

# passwd ghost

# visudo  // `ghost` ユーザでsudoをpwなしで実行できるように設定

# su - ghost

$ sudo yum update  // apt-getを入れずにyumで行ってみようと思った

$ nginx -v  // nginxは前に入れてた
$ nginx version: nginx/1.10.2

$ sudo ufw allow 'Nginx Full'  // `ufw`は有効にしていなかったらしいので放置
sudo: ufw: command not found

$ mysql -V  // mysqlも入ってる
mysql  Ver 14.14 Distrib 5.1.73, for redhat-linux-gnu (x86_64) using readline 5.1

$ su -  // nodejsのインストール
# curl --silent --location https://rpm.nodesource.com/setup_6.x | bash -
# yum -y install nodejs
# exit
$ node -v
v6.11.2
$ ls /usr/bin/node  // ここにあれば良いらしい
/usr/bin/nod

$ sudo npm i -g ghost-cli  // グローバルに `ghost-cli` をインストール

$ sudo mkdir -p /var/www/ghost
$ sudo chown ghost:ghost /var/www/ghost/
$ cd /var/www/ghost/
$ ls                   // ディレクトリが空であること

// mysqlのセットアップ https://www.ghostforbeginners.com/migrating-ghost-installation-from-sqlite3-to-mysql/
# mysql -u root -p
Enter password:
mysql> create user
    -> 'ghost'@'localhost' identified by 'ghost';
Query OK, 0 rows affected (0.00 sec)
mysql> select User,Host from mysql.user;
+---------+----------------+
| User    | Host           |
+---------+----------------+
| ghost   | localhost      |
+---------+----------------+
mysql> create database ghost;
Query OK, 1 row affected (0.01 sec)
mysql>
mysql> grant create,delete,insert,select,update,alter ON ghost.* TO 'ghost'@'localhost';
Query OK, 0 rows affected (0.00 sec)
mysql>
mysql> flush privileges;
Query OK, 0 rows affected (0.00 sec)
mysql>
mysql> exit

$ ghost install

// mysqlとかnginxとか認識しないしsystemdのセットアップに失敗するのでやめた
```