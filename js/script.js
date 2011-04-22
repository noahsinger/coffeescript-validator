(function() {
  $(document).ready(function() {
    return $("form").submit(function() {
      $("form input[type=text]").each(function() {
        if ($(this).attr("value") === "") {
          $(this).addClass("in_error");
          $("label[for=" + $(this).attr("id") + "]").addClass("in_error");
          return $(this).focus(function() {
            $(this).removeClass("in_error");
            return $("label[for=" + $(this).attr("id") + "]").removeClass("in_error");
          });
        }
      });
      return false;
    });
  });
}).call(this);
