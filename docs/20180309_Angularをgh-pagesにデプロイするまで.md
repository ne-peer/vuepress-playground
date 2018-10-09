## tools install
```
npm install -g @angular/cli
npm install -g gh-pages
```

## deploy
```
ng build --prod --base-href "https://USERNAME.github.io/REPOSITORY/"

gh-pages -d dist
```
