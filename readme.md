#PhpUi - Php Masa�st� Program Aray�z� / Php Desktop Applications

Node webkit + php + mysql kullanarak masa�st� programlar yazabilirsiniz.

config.json dosyas�ndaki ip ve port de�erleri ile php yerle�ik web sunucu ve mysql ba�lat�l�yor.  

#####PhpUi.exe'yi �al���t�r�n, php dosyalar�n�z� src dizinine kopyalay�n ve istedi�iniz yerde �al��t�r�n..

Mysql kullan�c� ad� : root

Mysql parola : root


Php yerle�ik sunucu bu t�r masa�st� uygulamalar i�in yeterli. En az�ndan dened�im kadar�yla herhangi bir sorun ya�amad�m. 
Apache Url rewrite i�lemlerini yapmak i�inse sadece index.php dosyan�z�n ba��na �unlar� ekleyin.

```php
<?php
$filename = __DIR__.preg_replace('#(\?.*)$#', '', $_SERVER['REQUEST_URI']);
if (php_sapi_name() === 'cli-server' && is_file($filename)) {
    return false;
}
```




