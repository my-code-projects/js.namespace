Mjs.module.depends('logger');

Mjs.helper = {
	syncVal: function($from, $to) {
		Mjs.logger.debug("Sync Val: " + $from.attr('id') + " => " + $to.attr('id'));
		$to.val($from.val())
	}
};
