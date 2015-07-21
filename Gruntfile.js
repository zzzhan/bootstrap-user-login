module.exports = function (grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      options: {
        banner: '/*! <%= pkg.file %> <%= grunt.template.today("yyyy-mm-dd") %> */\n',
        mangle: {toplevel: true},
        squeeze: {dead_code: false},
        codegen: {quote_keys: true}
      },
      build: {
    		files: {
    			'dist/js/<%= pkg.file %>.min.js':'src/js/<%=pkg.file %>.js'
    		}
      }
    },
    jshint: {
      options: {
        jshintrc: '.jshintrc'
      },
      all: [
        'Gruntfile.js',
        'src/js/*.js'
      ]
    },
    concat: {
      options: {
        separator: ';',
        stripBanners: true
      },
      css:{
        src: [
          "src/css/*.css"
        ],
        dest: "tmp/css/<%=pkg.file %>.css"
      }
    },
  	cssmin: {
      options: {
        report: 'gzip'
      },
      build: {
        files: {
        'dist/css/<%= pkg.file %>.min.css':'tmp/css/<%=pkg.file %>.css'
        }
      }
  	},
    htmlmin: {
      build: {
        options: {
          removeComments: true,
          collapseWhitespace: true
        },
        files: {
          'dist/signup.min.html': 'tmp/signup.html',
          'dist/signup_zh_cn.min.html': 'tmp/signup_zh_cn.html',
          'dist/signup_zh_tw.min.html': 'tmp/signup_zh_tw.html',
          'dist/login.min.html': 'tmp/login.html',
          'dist/login_zh_cn.min.html': 'tmp/login_zh_cn.html',
          'dist/login_zh_tw.min.html': 'tmp/login_zh_tw.html'
        }
      }
    },
    clean: ['tmp', 'dist'],
    dotpl: {
	  options: {
        signup:'src/tpl/signup.tpl',
        login:'src/tpl/login.tpl'		  
	  },
      signup: {
        files: {
          'tmp/signup.html': ['src/lang/en-us.json'],
          'tmp/signup_zh_cn.html': ['src/lang/en-us.json', 'src/lang/zh-cn.json'],
          'tmp/signup_zh_tw.html': ['src/lang/en-us.json', 'src/lang/zh-tw.json']
        }
      },
      login: {
        files: {
          'tmp/login.html': ['src/lang/en-us.json'],
          'tmp/login_zh_cn.html': ['src/lang/en-us.json', 'src/lang/zh-cn.json'],
          'tmp/login_zh_tw.html': ['src/lang/en-us.json', 'src/lang/zh-tw.json']
        }
      }
    }
  });
  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);
  grunt.registerTask('default', ['jshint','clean','dotpl','htmlmin','uglify']);
};