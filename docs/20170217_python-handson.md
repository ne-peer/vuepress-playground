## 参考
[Qiita: PHPerの為のPython入門 - 超基礎](http://qiita.com/odoku/items/97100c9fa20449b72588)  
[Python公式ドキュメント](http://docs.python.jp/3/tutorial/classes.html#tut-firstclasses)  
[PEP 8: スタイルガイド](https://www.python.org/dev/peps/pep-0008/)

## 基本構文

PHP:
```
<?php

/**
 * 時間を指定すると、対応する挨拶を表示するよ！
 */
function greet($hour) {
    if ($hour > 4 && $hour < 12) {
        echo "Good Morning!" . PHP_EOL;
    } elseif ($hour > 12 && $hour < 18) {
        echo "Good Afternoon!" . PHP_EOL;
    } else {
        echo "Good Evening!" . PHP_EOL;
    }
}

greet(8);  // Good Morning!
greet(15);  // GOod Afternoon!
greet(21);  // GOod Evening!
```

Python:
```
# coding=utf8

def greet(hour):
    """時間を指定すると、対応する挨拶を表示するよ！"""
    if 4 < hour < 12:
        print("Good Morning!")
    elif 12 < hour < 18:
        print("Good Afternoon!")
    else:
        print("Good Evening!")

greet(8)  # Good Morning!
greet(15)  # GOod Afternoon!
greet(21)  # GOod Evening!
```

### 文字エンコード指定
`# coding=utf8`
先頭にこれがないとマルチバイト文字が書けないそうな。明確でよい。

### PHPと違うところ
* 変数の `$` は不要。
* 末尾の `;` は不要。
* 関数定義は `def hogehoge()`
