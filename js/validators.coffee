# ---------------------------------------
# Change these to define valid conditions
# needs to return {valid: is_it_valid, message: not_valid_error_message}

$.data document, 'text_field_not_blank', (field) ->
	{valid: field.attr( "value" ) isnt "", message: "cannot be blank"}
	
$.data document, 'text_field_cannot_contains_spaces', (field) ->
	{valid: field.attr( "value" ).match( /^[\w]*$/ ), message: "cannot contains spaces"}
# ---------------------------------------
