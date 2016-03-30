#PhpUi - Php Masaüstü Program Arayüzü / Php Desktop Applications

Node webkit + php + mysql kullanarak masaüstü programlar yazabilirsiniz.

config.json dosyasındaki ip ve port değerleri ile php yerleşik web sunucu ve mysql başlatılıyor.  

#####PhpUi.exe'yi çalışıtırın, php dosyalarınızı src dizinine kopyalayın ve istediğiniz yerde çalıştırın..

Mysql kullanıcı adı : root

Mysql parola : root


Php yerleşik sunucu bu tür masaüstü uygulamalar için yeterli. En azından denedğim kadarıyla herhangi bir sorun yaşamadım. 
Apache Url rewrite işlemlerini yapmak içinse sadece index.php dosyanızın başına şunları ekleyin.

```php
<?php
$filename = __DIR__.preg_replace('#(\?.*)$#', '', $_SERVER['REQUEST_URI']);
if (php_sapi_name() === 'cli-server' && is_file($filename)) {
    return false;
}
```
![alt tag](http://www.wmatik.com/phpui.jpg)



