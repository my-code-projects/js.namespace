Mjs.logger = {
	level: 0, /* OFF = 0, ERROR = 1, WARN = 2, INFO = 3, DEBUG = 4 */
	error: function(data) {
		Mjs.logger.log("[ERROR] ", data, 1);
	},
	warn: function(data) {
		Mjs.logger.log("[WARN] ", data, 2);
	},
	info: function(data) {
		Mjs.logger.log("[INFO] ", data, 3);
	},
	debug: function(data) {
		Mjs.logger.log("[DEBUG] ", data, 4);
	},
	log: function(label, data, level) {
		if(Mjs.logger.level >= level) {
			console.log(label + data);
		}
	}
};
