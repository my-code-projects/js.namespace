Mjs.action = {
	setupFragment: function(targetSelector) {
		console.log('[FRAGMENT] Configurando Actions para ' + targetSelector);
		$(targetSelector + ' [adp-action][adp-target]').click(function(e) {
			var action = $(this).attr('adp-action');
			var target = $(this).attr('adp-target');

			Mjs.ajax.request(action, target);
		});
	}
};
