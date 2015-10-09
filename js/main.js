$(function() {
  $('[data-toggle="popover"]').popover({
    html: true,
    content: function() {
      return $("#popoverTemplate").html();
    }
  });

});
