window.onerror = function(msg, url, line){
  var jslog_php_url = 'http://HOST/jslog.php'
  if(url.indexOf('err_log.js') > -1){ // do not report logs from this file - recursion ...
    return;
  }
  var xmlhttp;
  // compatible with IE7+, Firefox, Chrome, Opera, Safari
  xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function(){
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200){
      console.log(xmlhttp.responseText)
      // callback(xmlhttp.responseText);
    }
  }
  xmlhttp.open("GET", jslog_php_url + '?err_msg='+encodeURIComponent(msg)+
      '&err_script_url='+encodeURIComponent(url)+
      '&err_script_line='+encodeURIComponent(line)+
      '&client_url='+encodeURIComponent(document.location.href)+
      '&client_ua='+encodeURIComponent(navigator.userAgent)+
      '', true);
  xmlhttp.send();
}
