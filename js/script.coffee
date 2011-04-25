create_errors_div = ->
	if $("#form_errors").size( ) < 1
		$("<div id=\"form_errors\"><h1>The following errors kept the form from being submitted</h1><ul></ul></div>").prependTo( "form" )
		
remove_errors_div = ->
	$("#form_errors").remove( )
		
show_error = ( message ) ->
	$("<li>#{message}</li>").appendTo( "#form_errors ul" )

clear_errors = ->
	if $("#form_errors").size( ) > 0
		$("#form_errors ul").empty( )

$(document).ready ->
	$("form input[type=text]").each ->
		$(this).bind 'validate', (event, errors) ->
			status = $.data( document, 'text_field_not_blank' )($(this), errors)
			unless status.valid
				$(this).addClass "in_error"
				$("label[for=" + $(this).attr( "id" ) + "]").addClass "in_error"
				errors.push "#{$("label[for=" + $(this).attr( "id" ) + "]").html( )} #{status.message}"
				$(this).focus ->
					$(this).removeClass "in_error"
					$("label[for=" + $(this).attr( "id" ) + "]").removeClass "in_error"

	$("form").submit ->
		errors = []
		$("form input[type=text]").each ->
			$(this).trigger 'validate', [errors]
		
		if errors.length > 0
			remove_errors_div( )
			create_errors_div( )
			show_error message for message in errors
			false
		else
			true