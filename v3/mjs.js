var Mjs = {
	module: {
		depends: function(...modules) {
			var fails = modules.filter(e => Mjs[e] === undefined);
			if(fails.length) {
				throw "Os seguintes módulos não foram carregados: " + fails;
			}
		}
	}
};
