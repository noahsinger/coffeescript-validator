$(document).ready ->
	$("form").submit ->
		$("form input[type=text]").each ->
			if $(this).attr( "value" ) is ""
				$(this).addClass "in_error"
				$(this).focus ->
					$(this).removeClass "in_error"
		false