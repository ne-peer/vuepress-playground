Let's encryptのbotから証明書期限の警告メールがきたので更新する。

## 実施日
2017/08/31

## 更新作業

```bash
[root@mg09-develop letsencrypt]# /sbin/service httpd stop
Stopping httpd:                                            [  OK  ]
[root@mg09-develop letsencrypt]#
[root@mg09-develop letsencrypt]# pwd
/home/develop/tools/letsencrypt
[root@mg09-develop letsencrypt]#
[root@mg09-develop letsencrypt]# ./letsencrypt-auto renew
Saving debug log to /var/log/letsencrypt/letsencrypt.log

-------------------------------------------------------------------------------
Processing /etc/letsencrypt/renewal/ne-peer.com.conf
-------------------------------------------------------------------------------
Cert is due for renewal, auto-renewing...
Renewing an existing certificate
Performing the following challenges:
tls-sni-01 challenge for ne-peer.com
Waiting for verification...
Cleaning up challenges

-------------------------------------------------------------------------------
new certificate deployed without reload, fullchain is
/etc/letsencrypt/live/ne-peer.com/fullchain.pem
-------------------------------------------------------------------------------

-------------------------------------------------------------------------------
Processing /etc/letsencrypt/renewal/www.ne-peer.xyz.conf
-------------------------------------------------------------------------------
Cert is due for renewal, auto-renewing...
Renewing an existing certificate
Performing the following challenges:
tls-sni-01 challenge for www.ne-peer.xyz
Waiting for verification...
Cleaning up challenges

-------------------------------------------------------------------------------
new certificate deployed without reload, fullchain is
/etc/letsencrypt/live/www.ne-peer.xyz/fullchain.pem
-------------------------------------------------------------------------------

Congratulations, all renewals succeeded. The following certs have been renewed:
  /etc/letsencrypt/live/ne-peer.com/fullchain.pem (success)
  /etc/letsencrypt/live/www.ne-peer.xyz/fullchain.pem (success)
[root@mg09-develop letsencrypt]#
[root@mg09-develop letsencrypt]# /sbin/service httpd start
Starting httpd: httpd: Could not reliably determine the server's fully qualified domain name, using 127.0.0.1 for ServerName
                                                           [  OK  ]
[root@mg09-develop letsencrypt]#
[root@mg09-develop letsencrypt]# exit
```

## ちなみにApacheサーバを止めてないとエラーになる

```bash
[root@mg09-develop letsencrypt]# ./letsencrypt-auto renew
Upgrading certbot-auto 0.15.0 to 0.17.0...
Replacing certbot-auto...
Creating virtual environment...
Installing Python packages...
Installation succeeded.
Saving debug log to /var/log/letsencrypt/letsencrypt.log

-------------------------------------------------------------------------------
Processing /etc/letsencrypt/renewal/ne-peer.com.conf
-------------------------------------------------------------------------------
Cert is due for renewal, auto-renewing...
Renewing an existing certificate
Performing the following challenges:
tls-sni-01 challenge for ne-peer.com
Cleaning up challenges
Attempting to renew cert (ne-peer.com) from /etc/letsencrypt/renewal/ne-peer.com.conf produced an unexpected error: Problem binding to port 443: Could not bind to IPv4 or IPv6.. Skipping.

-------------------------------------------------------------------------------
Processing /etc/letsencrypt/renewal/www.ne-peer.xyz.conf
-------------------------------------------------------------------------------
Cert is due for renewal, auto-renewing...
Renewing an existing certificate
Performing the following challenges:
tls-sni-01 challenge for www.ne-peer.xyz
Cleaning up challenges
Attempting to renew cert (www.ne-peer.xyz) from /etc/letsencrypt/renewal/www.ne-peer.xyz.conf produced an unexpected error: Problem binding to port 443: Could not bind to IPv4 or IPv6.. Skipping.

All renewal attempts failed. The following certs could not be renewed:
  /etc/letsencrypt/live/ne-peer.com/fullchain.pem (failure)
  /etc/letsencrypt/live/www.ne-peer.xyz/fullchain.pem (failure)
2 renew failure(s), 0 parse failure(s)
```