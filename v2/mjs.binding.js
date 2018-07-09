Mjs.binding = {
	oneWay: function($sourceComponent, $targetComponent) {
		Mjs.logger.debug("Binding: " + $sourceComponent.attr('id') +
			" => " + $targetComponent.attr('id'));
		$sourceComponent.keyup(function() {
			Mjs.logger.debug("Atualizando target para '" + $sourceComponent.val() + "'");
			$targetComponent.val($sourceComponent.val());
		});
	},
	twoWay: function($component1, $component2) {
		Mjs.binding.oneWay($component1, $component2);
		Mjs.binding.oneWay($component2, $component1);
	}
};
