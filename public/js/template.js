var templater = {
	create: function(name, data) {},
	loadTemplates: function(node) {},
	getRootNode: function(node) {},
	setVariable: function(node, name, value) {},
	getData: function(node, name) {},
	getNode: function(node, name) {},
	templates: {}
};



// -------------------- //

templater.create = function(name, data) {
	var template = this.templates[name];

	if(!template) {
		return null;
	}

	var instance = template.node.cloneNode(true);
	instance.__templater__ = {
		tags: {},
		data: {},
		vars: {}
	};

	if(data) {
		for(var varName in data) {
			if(template.variables[varName]) {
				if(template.variables[varName].type == 0) {
					var node = instance;

					for(var i = 0; i < template.variables[varName].path.length; i++) {
						node = node.children[template.variables[varName].path[i]];
					}

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
				} else if(template.variables[varName].type == 1) {
					instance.__templater__.data[varName] = data[varName];
				}
			}
		}
	}

	for(var varName in template.variables) {
		if(template.variables[varName].type == 0 || template.variables[varName].type == 2) {
			var node = instance;

			for(var i = 0; i < template.variables[varName].path.length; i++) {
				node = node.children[template.variables[varName].path[i]];
			}

			if(template.variables[varName].type == 0) {
				instance.__templater__.vars[varName] = node;
			} else if(template.variables[varName].type == 2) {
				instance.__templater__.tags[varName] = node;
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
						variables[attrib.nodeValue] = {path: path, type: 0};
					} else if(attribName === "data") {
						variables[attrib.nodeValue] = {path: path, type: 1};
					} else if(attribName === "tag") {
						variables[attrib.nodeValue] = {path: path, type: 2};
					}

					attributes.removeNamedItem(attrib.nodeName);
					i--;
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
		var children = [];
		for(var i = 0; i < node.children.length; i++) {
			children.push(node.children[i]);
		}
		for(var i = 0; i < children.length; i++) {
			templater.loadTemplates(children[i]);
		}
	}
};

templater.getRootNode = function(node) {
	while(node && !node.__templater__) {
		node = node.parentNode;
	}

	return node;

};

templater.setVariable = function(node, name, value) {
	node = templater.getRootNode(node);

	if(!node) {
		return false;
	}

	node = node.__templater__.vars[name];

	if(!node) {
		return false;
	}

	while(node.childNodes.length > 0) {
		node.removeChild(node.childNodes[0]);
	}

	if(value instanceof Array) {
		value.forEach(function(item) {
			node.append(item);
		});
	} else {
		node.append(value);
	}

	return true;
};

templater.getData = function(node, name) {
	node = templater.getRootNode(node);

	if(!node) {
		return null;
	}

	return node.__templater__.data[name];
};

templater.getNode = function(node, name) {
	node = templater.getRootNode(node);

	if(!node) {
		return null;
	}

	return node.__templater__.tags[name];

}

window.addEventListener("load", function() {
	templater.loadTemplates(document.body);
});

