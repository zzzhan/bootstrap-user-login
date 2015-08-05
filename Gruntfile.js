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
    			'dist/js/user-message.min.js':'src/js/user-message.js'
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
    copy: {
      jquery_ajax_control: {
        expand: true,
        cwd: 'bower_components/jquery-ajax-control/dist/',
        src: '**/*',
        dest:'dist/js/'
      }
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
	    files: [{       
          expand: true,
		  cwd: 'tmp',
		  src: '**/*.html',
		  dest: 'dist'
		}]
      }
    },
    clean: ['tmp', 'dist'],
    dotpl: {
	  options: {
        signup:'tmp/signup.tpl',
        signin:'tmp/signin.tpl',
        forgot:'tmp/forgot.tpl',
        verify:'tmp/verify.tpl',
        reset:'tmp/reset.tpl',
        profile:'tmp/profile.tpl',
        changepass:'src/tpl/reset.tpl',
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
			  'tmp/verify.tpl': {title:'${verify_title}'},
			  'tmp/reset.tpl': {title:'${reset_pass}'},
			  'tmp/profile.tpl': {title:'${signin_title}'}
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
          'tmp/signup.tpl': [],
          'tmp/signin.tpl': [],
          'tmp/forgot.tpl': [],
          'tmp/verify.tpl': [],
          'tmp/reset.tpl': [],
          'tmp/profile.tpl': []
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
      },
      reset: {
        files: {
          'tmp/reset.html': ['src/lang/en-us.json'],
          'tmp/reset_zh_cn.html': ['src/lang/en-us.json', 'src/lang/zh-cn.json'],
          'tmp/reset_zh_tw.html': ['src/lang/en-us.json', 'src/lang/zh-tw.json']
        }
      },
      profile: {
        files: {
          'tmp/profile.html': ['src/lang/en-us.json'],
          'tmp/profile_zh_cn.html': ['src/lang/en-us.json', 'src/lang/zh-cn.json'],
          'tmp/profile_zh_tw.html': ['src/lang/en-us.json', 'src/lang/zh-tw.json']
        }
      },
      changepass: {
        files: {
          'tmp/changepass.html': ['src/lang/en-us.json'],
          'tmp/changepass_zh_cn.html': ['src/lang/en-us.json', 'src/lang/zh-cn.json'],
          'tmp/changepass_zh_tw.html': ['src/lang/en-us.json', 'src/lang/zh-tw.json']
        }
      }
    }
  });
  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);
  grunt.registerTask('default', ['jshint','clean','dotpl','concat','cssmin','htmlmin','uglify','copy']);
};