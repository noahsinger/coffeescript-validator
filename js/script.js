(function() {
  var clear_errors, create_errors_div, remove_errors_div, show_error;
  create_errors_div = function() {
    if ($("#form_errors").size() < 1) {
      return $("<div id=\"form_errors\"><h1>The following errors kept the form from being submitted</h1><ul></ul></div>").prependTo("form");
    }
  };
  remove_errors_div = function() {
    return $("#form_errors").remove();
  };
  show_error = function(message) {
    return $("<li>" + message + "</li>").appendTo("#form_errors ul");
  };
  clear_errors = function() {
    if ($("#form_errors").size() > 0) {
      return $("#form_errors ul").empty();
    }
  };
  $(document).ready(function() {
    $("form input[type=text]").each(function() {
      return $(this).bind('validate', function(event, errors) {
        var status;
        status = $.data(document, 'text_field_not_blank')($(this), errors);
        if (!status.valid) {
          $(this).addClass("in_error");
          $("label[for=" + $(this).attr("id") + "]").addClass("in_error");
          errors.push("" + ($("label[for=" + $(this).attr("id") + "]").html()) + " " + status.message);
          return $(this).focus(function() {
            $(this).removeClass("in_error");
            return $("label[for=" + $(this).attr("id") + "]").removeClass("in_error");
          });
        }
      });
    });
    return $("form").submit(function() {
      var errors, message, _i, _len;
      errors = [];
      $("form input[type=text]").each(function() {
        return $(this).trigger('validate', [errors]);
      });
      if (errors.length > 0) {
        remove_errors_div();
        create_errors_div();
        for (_i = 0, _len = errors.length; _i < _len; _i++) {
          message = errors[_i];
          show_error(message);
        }
        return false;
      } else {
        return true;
      }
    });
  });
}).call(this);
