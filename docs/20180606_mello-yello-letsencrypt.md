## logs

```
[develop@mg09 /]$ 
[develop@mg09 /]$ cd home/develop/
[develop@mg09 ~]$ ls
source  tools  working
[develop@mg09 ~]$ 
[develop@mg09 ~]$ cd tools/
[develop@mg09 tools]$ ls
letsencrypt
[develop@mg09 tools]$ 
[develop@mg09 tools]$ cd letsencrypt/
[develop@mg09 letsencrypt]$ ls
certbot
[develop@mg09 letsencrypt]$ 
[develop@mg09 letsencrypt]$ cd certbot/
[develop@mg09 certbot]$ 
[develop@mg09 certbot]$ ls
AUTHORS.md       Dockerfile         LICENSE.txt  certbot                     certbot-dns-cloudflare    certbot-dns-dnsmadeeasy  certbot-dns-rfc2136  docs                     letshelp-certbot                  setup.cfg  tox.cover.sh
CHANGELOG.md     Dockerfile-dev     MANIFEST.in  certbot-apache              certbot-dns-cloudxns      certbot-dns-google       certbot-dns-route53  examples                 linter_plugin.py                  setup.py   tox.ini
CHANGES.rst      Dockerfile-old     README.rst   certbot-auto                certbot-dns-digitalocean  certbot-dns-luadns       certbot-nginx        letsencrypt-auto         pytest.ini                        tests
CONTRIBUTING.md  ISSUE_TEMPLATE.md  acme         certbot-compatibility-test  certbot-dns-dnsimple      certbot-dns-nsone        docker-compose.yml   letsencrypt-auto-source  readthedocs.org.requirements.txt  tools
[develop@mg09 certbot]$ 
[develop@mg09 certbot]$ ./certbot-auto certonly
Requesting to rerun ./certbot-auto with root privileges...
[sudo] develop のパスワード:
Upgrading certbot-auto 0.21.0 to 0.24.0...
Replacing certbot-auto...
Creating virtual environment...
Installing Python packages...
Installation succeeded.
Saving debug log to /var/log/letsencrypt/letsencrypt.log
Failed to find executable apachectl in expanded PATH: /sbin:/bin:/usr/sbin:/usr/bin:/usr/local/bin:/usr/local/sbin

How would you like to authenticate with the ACME CA?
-------------------------------------------------------------------------------
1: Nginx Web Server plugin - Alpha (nginx)
2: Spin up a temporary webserver (standalone)
3: Place files in webroot directory (webroot)
-------------------------------------------------------------------------------
Select the appropriate number [1-3] then [enter] (press 'c' to cancel): 1
Plugins selected: Authenticator nginx, Installer None
Please enter in your domain name(s) (comma and/or space separated)  (Enter 'c'
to cancel): mello-yello.co
Obtaining a new certificate
Performing the following challenges:
http-01 challenge for mello-yello.co
Waiting for verification...
Cleaning up challenges

IMPORTANT NOTES:
 - Congratulations! Your certificate and chain have been saved at:
   /etc/letsencrypt/live/mello-yello.co/fullchain.pem
   Your key file has been saved at:
   /etc/letsencrypt/live/mello-yello.co/privkey.pem
   Your cert will expire on 2018-09-04. To obtain a new or tweaked
   version of this certificate in the future, simply run certbot-auto
   again. To non-interactively renew *all* of your certificates, run
   "certbot-auto renew"
 - If you like Certbot, please consider supporting our work by:

   Donating to ISRG / Let's Encrypt:   https://letsencrypt.org/donate
   Donating to EFF:                    https://eff.org/donate-le
```