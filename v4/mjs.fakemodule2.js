Mjs.fakemodule2 = {
	setupGlobal: function() {
		console.log('[GLOBAL] Configurando FakeModule2');
	},
	setupFragment: function(targetSelector) {
		console.log('[FRAGMENT] Configurando FakeModule2 para ' + targetSelector);
	},
	subModule: {
		setupFragment: function(targetSelector) {
			console.log('[FRAGMENT] Configurando SubModule para ' + targetSelector);
		}
	}
};
