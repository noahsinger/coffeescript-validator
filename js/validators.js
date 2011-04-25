(function() {
  $.data(document, 'text_field_not_blank', function(field, errors) {
    return {
      valid: field.attr("value") !== "",
      message: "cannot be blank"
    };
  });
}).call(this);
