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
    			'dist/js/<%= pkg.file %>.min.js':'src/js/<%=pkg.file %>.js',
    			'dist/js/jquery-ajax-control.min.js':'src/js/jquery-ajax-control.js',
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
          'dist/signup.html': 'tmp/signup.html',
          'dist/signup_zh_cn.html': 'tmp/signup_zh_cn.html',
          'dist/signup_zh_tw.html': 'tmp/signup_zh_tw.html',
          'dist/signin.html': 'tmp/signin.html',
          'dist/signin_zh_cn.html': 'tmp/signin_zh_cn.html',
          'dist/signin_zh_tw.html': 'tmp/signin_zh_tw.html',
          'dist/forgot.html': 'tmp/forgot.html',
          'dist/forgot_zh_cn.html': 'tmp/forgot_zh_cn.html',
          'dist/forgot_zh_tw.html': 'tmp/forgot_zh_tw.html',
          'dist/verify.html': 'tmp/verify.html',
          'dist/verify_zh_cn.html': 'tmp/verify_zh_cn.html',
          'dist/verify_zh_tw.html': 'tmp/verify_zh_tw.html'
        }
      }
    },
    clean: ['tmp', 'dist'],
    dotpl: {
	  options: {
        signup:'tmp/signup.tpl',
        signin:'tmp/signin.tpl',
        forgot:'tmp/forgot.tpl',
        verify:'tmp/verify.tpl' ,
        framework:'src/tpl/framework.tpl' 
	  },
	  framework: {
		options: {
			opener:'<%',
			closer:'%>',
			mapping: {
			  'tmp/signup.tpl': {title:'${signup_title}'},
			  'tmp/signin.tpl': {title:'${signin_title}'},
			  'tmp/forgot.tpl': {title:'${forgot_title}'},
			  'tmp/verify.tpl': {title:'${verify_title}'}
			},
			renderer: function(k, v) {
				if(k==='content') {
					v = grunt.file.read(this.ctx.dest.replace('tmp', 'src/tpl'));
				} else {
					v = this.options().mapping[this.ctx.dest][k];
				}
				return v;
			}
		},
        files: {
          'tmp/signup.tpl': ['src/lang/en-us.json'],
          'tmp/signin.tpl': ['src/lang/en-us.json', 'src/lang/zh-cn.json'],
          'tmp/forgot.tpl': ['src/lang/en-us.json', 'src/lang/zh-tw.json'],
          'tmp/verify.tpl': ['src/lang/en-us.json', 'src/lang/zh-tw.json']
        }
	  },
      signup: {
        files: {
          'tmp/signup.html': ['src/lang/en-us.json'],
          'tmp/signup_zh_cn.html': ['src/lang/en-us.json', 'src/lang/zh-cn.json'],
          'tmp/signup_zh_tw.html': ['src/lang/en-us.json', 'src/lang/zh-tw.json']
        }
      },
      signin: {
        files: {
          'tmp/signin.html': ['src/lang/en-us.json'],
          'tmp/signin_zh_cn.html': ['src/lang/en-us.json', 'src/lang/zh-cn.json'],
          'tmp/signin_zh_tw.html': ['src/lang/en-us.json', 'src/lang/zh-tw.json']
        }
      },
      forgot: {
        files: {
          'tmp/forgot.html': ['src/lang/en-us.json'],
          'tmp/forgot_zh_cn.html': ['src/lang/en-us.json', 'src/lang/zh-cn.json'],
          'tmp/forgot_zh_tw.html': ['src/lang/en-us.json', 'src/lang/zh-tw.json']
        }
      },
      verify: {
        files: {
          'tmp/verify.html': ['src/lang/en-us.json'],
          'tmp/verify_zh_cn.html': ['src/lang/en-us.json', 'src/lang/zh-cn.json'],
          'tmp/verify_zh_tw.html': ['src/lang/en-us.json', 'src/lang/zh-tw.json']
        }
      }
    }
  });
  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);
  grunt.registerTask('default', ['jshint','clean','dotpl','concat','cssmin','htmlmin','uglify']);
};