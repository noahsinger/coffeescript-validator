(function() {
  $(document).ready(function() {
    return $("form").submit(function() {
      $("form input[type=text]").each(function() {
        if ($(this).attr("value") === "") {
          $(this).addClass("in_error");
          return $(this).focus(function() {
            return $(this).removeClass("in_error");
          });
        }
      });
      return false;
    });
  });
}).call(this);
