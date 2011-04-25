(function() {
  $.data(document, 'text_field_not_blank', function(field) {
    return {
      valid: field.attr("value") !== "",
      message: "cannot be blank"
    };
  });
  $.data(document, 'text_field_cannot_contains_spaces', function(field) {
    return {
      valid: field.attr("value").match(/^[\w]*$/),
      message: "cannot contains spaces"
    };
  });
}).call(this);
