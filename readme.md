#PhpUi - Php Masaüstü Program Arayüzü / Php Desktop Applications

Node webkit + php + mysql kullanarak masaüstü programlar yazabilirsiniz.

config.json dosyasýndaki ip ve port deðerleri ile php yerleþik web sunucu ve mysql baþlatýlýyor.  

#####PhpUi.exe'yi çalýþýtýrýn, php dosyalarýnýzý src dizinine kopyalayýn ve istediðiniz yerde çalýþtýrýn..

Mysql kullanýcý adý : root

Mysql parola : root


Php yerleþik sunucu bu tür masaüstü uygulamalar için yeterli. En azýndan denedðim kadarýyla herhangi bir sorun yaþamadým. 
Apache Url rewrite iþlemlerini yapmak içinse sadece index.php dosyanýzýn baþýna þunlarý ekleyin.

```php
<?php
$filename = __DIR__.preg_replace('#(\?.*)$#', '', $_SERVER['REQUEST_URI']);
if (php_sapi_name() === 'cli-server' && is_file($filename)) {
    return false;
}
```




