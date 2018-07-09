var Mjs = {
	loader: {
		setupGlobal: function() {
			Mjs.loader.callRecursively(Mjs, 'setupGlobal');
		},
		setupFragment: function(targetSelector) {
			Mjs.loader.callRecursively(Mjs, 'setupFragment', targetSelector);
		},
		callRecursively: function(owner, methodName, params) {
			if(typeof owner[methodName] === 'function') {
				owner[methodName](params);
			}

			for(key in owner) {
				if (key !== 'loader' && owner[key] instanceof Object) {
					Mjs.loader.callRecursively(owner[key], methodName, params);
				}
			}
		}
	}
};
