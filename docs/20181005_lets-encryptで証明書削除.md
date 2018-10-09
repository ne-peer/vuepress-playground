## もういらなくなったドメインの証明書を消す

```bash
[root@mg09 certbot]# ./certbot-auto delete -d ne-peer.xyz
Upgrading certbot-auto 0.25.1 to 0.27.1...
Replacing certbot-auto...
Saving debug log to /var/log/letsencrypt/letsencrypt.log

Which certificate(s) would you like to delete?
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
1: ne-peer.xyz
2: mello-yello.co
3: ne-peer.com
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
Select the appropriate numbers separated by commas and/or spaces, or leave input
blank to select all options shown (Enter 'c' to cancel): 1

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
Deleted all files relating to certificate ne-peer.xyz.
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
```
