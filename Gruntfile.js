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
      build: {
	    files: [{
			expand: true,
			cwd: 'bower_components/jquery-ajax-control/dist/',
			src: '**/*',
			dest:'dist/js/'
		  },{
			expand: true,
			cwd: 'bower_components/dotpl/dist/',
			src: '**/*',
			dest:'dist/js/'
		  }]
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
      },
      allinone:{
        src: [
          'dist/js/jquery-ajax-control.min.js',
          'dist/js/dotpl.min.js',
          'dist/js/bootstrap-user-login.min.js'
        ],
        dest: "dist/js/userlogin_allinone.js"
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
        signup:'tmp/tpl/signup.tpl',
        signin:'tmp/tpl/signin.tpl',
        forgot:'tmp/tpl/forgot.tpl',
        verify:'tmp/tpl/verify.tpl',
        reset:'tmp/tpl/reset.tpl',
        main:'tmp/tpl/profile.tpl',
        framework:'src/tpl/framework.tpl',
        changepass:'src/tpl/changepass.tpl',
        changemail:'src/tpl/changemail.tpl',
        userinfo:'src/tpl/userinfo.tpl' 
	  },
	  framework: {
		options: {
			opener:'<%',
			closer:'%>',
			tag:'[tpl]',
			renderer: function(k, v) {
				if(k==='content') {
					v = grunt.file.read(this.ctx.dest.replace('tmp', 'src'));
				}
				return v;
			}
		},
        files: {
          'tmp/tpl/signup.tpl': [],
          'tmp/tpl/signin.tpl': [],
          'tmp/tpl/forgot.tpl': [],
          'tmp/tpl/verify.tpl': [],
          'tmp/tpl/reset.tpl': [],
          'tmp/tpl/profile.tpl': []
        }
	  },
      main: {
        files: {
          'tmp/index.html': ['src/lang/en-US/main.json','src/lang/en-US/profile.json'],
          'tmp/index_zh-CN.html': ['src/lang/en-CN/main.json','src/lang/en-CN/profile.json'],
          'tmp/index_zh-TW.html': ['src/lang/en-TW/main.json','src/lang/en-TW/profile.json']
        }
      },
      signup: {
        files: {
          'tmp/signup/index.html': ['src/lang/en-US/main.json','src/lang/en-US/signup.json'],
          'tmp/signup/index_zh-CN.html': ['src/lang/en-CN/main.json','src/lang/en-CN/signup.json'],
          'tmp/signup/index_zh-TW.html': ['src/lang/en-TW/main.json','src/lang/en-TW/signup.json']
        }
      },
      signin: {
        files: {
          'tmp/signin/index.html': ['src/lang/en-US/main.json','src/lang/en-US/signin.json'],
          'tmp/signin/index_zh-CN.html': ['src/lang/en-CN/main.json','src/lang/en-CN/signin.json'],
          'tmp/signin/index_zh-TW.html': ['src/lang/en-TW/main.json','src/lang/en-TW/signin.json']
        }
      },
      forgot: {
        files: {
          'tmp/forgot/index.html': ['src/lang/en-US/main.json','src/lang/en-US/forgot.json'],
          'tmp/forgot/index_zh-CN.html': ['src/lang/en-CN/main.json','src/lang/en-CN/forgot.json'],
          'tmp/forgot/index_zh-TW.html': ['src/lang/en-TW/main.json','src/lang/en-TW/forgot.json']
        }
      },
      verify: {
        files: {
          'tmp/verify/index.html': ['src/lang/en-US/main.json','src/lang/en-US/verify.json'],
          'tmp/verify/index_zh-CN.html': ['src/lang/en-CN/main.json','src/lang/en-CN/verify.json'],
          'tmp/verify/index_zh-TW.html': ['src/lang/en-TW/main.json','src/lang/en-TW/verify.json']
        }
      },
      reset: {
        files: {
          'tmp/reset/index.html': ['src/lang/en-US/main.json','src/lang/en-US/reset.json'],
          'tmp/reset/index_zh-CN.html': ['src/lang/en-CN/main.json','src/lang/en-CN/reset.json'],
          'tmp/reset/index_zh-TW.html': ['src/lang/en-TW/main.json','src/lang/en-TW/reset.json']
        }
      },
      changepass: {
        files: {
          'tmp/changepass/index.html': ['src/lang/en-US/main.json'],
          'tmp/changepass/index_zh-CN.html': ['src/lang/en-CN/main.json'],
          'tmp/changepass/index_zh-TW.html': ['src/lang/en-TW/main.json']
        }
      },
      changemail: {
        files: {
          'tmp/changemail/index.html': ['src/lang/en-US/main.json'],
          'tmp/changemail/index_zh-CN.html': ['src/lang/en-CN/main.json'],
          'tmp/changemail/index_zh-TW.html': ['src/lang/en-TW/main.json']
        }
      },
      userinfo: {
        files: {
          'tmp/userinfo/index.html': ['src/lang/en-US/main.json'],
          'tmp/userinfo/index_zh-CN.html': ['src/lang/en-CN/main.json'],
          'tmp/userinfo/index_zh-TW.html': ['src/lang/en-TW/main.json']
        }
      }
    }
  });
  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);
  grunt.registerTask('default', ['jshint','clean','dotpl','uglify','copy','concat','cssmin','htmlmin']);
};