# grunt-imageworsener

> ImageWorsener task runner for grunt.

## Getting Started
This plugin requires Grunt `~0.4.4`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-imageworsener --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-imageworsener');
```

## The "imageworsener" task

### Overview
In your project's Gruntfile, add a section named `imageworsener` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  imageworsener: {
    options: {
      // Task-specific options go here.
    },
    your_target: {
      // Target-specific file lists and/or options go here.
    },
  },
});
```

### Options

#### args

Type: `Object`

The command line arguments sent to the ImageWorsener task. See the [ImageWorsener](https://github.com/jsummers/imageworsener) Github page for a full list of arguments.

### Usage Examples

```js
grunt.initConfig({
  imageworsener: {
    options: {
      args: {
        h: 90,
        bkgd: '88f,0f0',
        cc: 2,
        dither: 'f'
      }
    },
    dist: {
      files: {
        'img/dist': ['img/*.{png,jpg,gif}']
      }
    }
  }
});
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
_(Nothing yet)_
