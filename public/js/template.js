var templater = {
	create: function(name, data) {},
	loadTemplates: function(node) {},
	templates: {}
};



// -------------------- //

templater.create = function(name, data) {
	var template = this.templates[name];

	if(!template) {
		return null;
	}

	var instance = template.node.cloneNode(true);

	if(data) {
		for(var varName in data) {
			if(template.variables[varName]) {
				var node = instance;

				for(var i = 0; i < template.variables[varName].length; i++) {
					node = node.children[template.variables[varName][i]];
				}

				templater._debug = node;

				while(node.childNodes.length > 0) {
					node.removeChild(node.childNodes[0]);
				}

				if(data[varName] instanceof Array) {
					data[varName].forEach(function(item) {
						node.append(item);
					});
				} else {
					node.append(data[varName]);
				}
			}
		}
	}

	return instance;
};

templater.loadTemplates = function(node) {
	if(node.attributes.getNamedItem("template:define")) {
		var name = node.attributes.getNamedItem("template:define").nodeValue;
		node.attributes.removeNamedItem("template:define");
		node.remove();

		var variables = {};

		var searchAttributes = function(node, path) {
			var attributes = node.attributes;
			for(var i = 0; i < attributes.length; i++) {
				var attrib = attributes[i];

				if(attrib.nodeName.startsWith("template:")) {
					var attribName = attrib.nodeName.substr("template:".length);

					if(attribName === "var") {
						variables[attrib.nodeValue] = path;
					}
				}
			}

			var children = node.children;
			for(var i = 0; i < children.length; i++) {
				searchAttributes(children[i], path.concat([i]));
			}
		};

		searchAttributes(node, []);

		templater.templates[name] = {node: node, variables: variables};
	} else {
		var children = node.children;
		for(var i = 0; i < children.length; i++) {
			templater.loadTemplates(children[i]);
		}
	}
};

window.addEventListener("load", function() {
	templater.loadTemplates(document.body);
});

