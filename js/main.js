  $("[data-toggle='popover']").popover({
    html: true,
    content: function(){
      return $("#popoverTemplate").html();
    }
  });
//   $(".inboxPopover").hover(
//     function() {
//         return $("#popoverTemplate").html();
//     };
//     // function() {
//     //   $(this).find("#popoverTemplate").hide();
//     });
// });
