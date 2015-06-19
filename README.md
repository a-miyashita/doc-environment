doc-environment
===============

Document Compilation Environment

This environment is to make easy to convert text documents from a markup format into others.

Requirements
------------

This template environment requires following programs to be installed and to be installed in PATH.

* gulp
* pandoc

Installation
------------

```bash
$ npm install
```

By default, this environment assumes source files in `src` directory is written in reStructuredText format and makes output files in `dest/html5` directory with HTML5 format.
If you are to change it, overwrite gulpfile.js.

```javascript
var config = {
	src: {
		dir: 'src',
		type: 'rst'
	},
	dest: {
		dir: 'dest',
		formats: [{
			type: 'html5',
			ext: '.html'
		}]
	}
};
```

Usage
-----

If you are to convert once, execute `build` task.

```bash
$ gulp build
```

If you are to watch modifications and then convert, execute `watch` task.

```bash
$ gulp watch
```

License
-------

MIT License
