$(function () {
  var map;
  $("#accessTab").on("click", function () {
    if (map) {
      return;
    }
    var bagusLatLng = new google.maps.LatLng(35.673988, 139.766385);
    map = new google.maps.Map($("#google-map").get(0), {
      zoom: 17,
      center: bagusLatLng,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      disableDefaultUI: true,
      zoomControl: true
    });
    var marker = new google.maps.Marker({
      position: bagusLatLng,
      map: map,
      title: 'BAGUS PLACE 銀座'
    });
  });

  $('.mdl-layout__tab').click(function() {
    $('main.mdl-layout__content').scrollTop(0);
  });

  $("#google-button").on("click", function () {
    if (isAndroid()) {
      location.href = "https://maps.google.com/maps?daddr=35.673988,139.766385";
    } else {
      location.href = "comgooglemaps://?daddr=35.673988,139.766385";
    }
  });

  if (isAndroidBrowser()) {
    var link = '<a href="https://docs.google.com/forms/d/18WoU2fbQyEF2NwAtnw6GxCDHhm-RYbKVYV9YYkNxkm8/viewform?usp=send_form" class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent">出欠のご回答はこちら</a>';
    $("#form-content").html(link);
  }
});

var isAndroid = function () {
  var ua = window.navigator.userAgent;
  return /Android/.test(ua);
};

var isAndroidBrowser = function () {
  var ua = window.navigator.userAgent;
  return (/Android/.test(ua) && /Linux; U;/.test(ua) && !/Chrome/.test(ua));
};
