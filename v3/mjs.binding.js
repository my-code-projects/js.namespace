Mjs.module.depends('logger', 'helper');

Mjs.binding = {
	oneWay: function($source, $target) {
		Mjs.logger.debug("Binding: " + $source.attr('id') + 
			" => " + $target.attr('id'));
		$source.keyup(function() {
			Mjs.logger.debug("Atualizando target para '" + $source.val() + "'");
			Mjs.helper.syncVal($source, $target);
		});
	},
	twoWay: function($component1, $component2) {
		Mjs.binding.oneWay($component1, $component2);
		Mjs.binding.oneWay($component2, $component1);
	}
};
