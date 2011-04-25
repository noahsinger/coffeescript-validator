# ---------------------------------------
# Change these to define valid conditions
# needs to return {valid: is_it_valid, message: not_valid_error_message}

$.data document, 'text_field_not_blank', (field, errors) ->
	{valid: field.attr( "value" ) isnt "", message: "cannot be blank"}
# ---------------------------------------
