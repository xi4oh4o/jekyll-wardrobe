WebFontConfig = {
<<<<<<< HEAD
  google: { families: [ 'PT Serif' ] }
=======
  google: { families: [ 'Open Sans' ] }
>>>>>>> 646b45aabf7481bababc61833e97192b08a8addb
};
(function() {
  var wf = document.createElement('script');
  wf.src = ('https:' == document.location.protocol ? 'https' : 'http') +
      '://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';
  wf.type = 'text/javascript';
  wf.async = 'true';
  var s = document.getElementsByTagName('script')[0];
  s.parentNode.insertBefore(wf, s);
})();