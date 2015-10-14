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
    			'dist/js/user-message.min.js':'src/js/user-message.js',
          'dist/js/user-message_zh-CN.min.js':'src/js/user-message_zh-CN.js',
          'dist/js/user-message_zh-TW.min.js':'src/js/user-message_zh-TW.js'
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
        verifyemailchanged:'tmp/tpl/verifyemailchanged.tpl',
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
          'tmp/tpl/verifyemailchanged.tpl': [],
          'tmp/tpl/reset.tpl': [],
          'tmp/tpl/profile.tpl': []
        }
	  },
      main: {
        files: {
          'tmp/index.html': ['src/lang/en-US/main.json','src/lang/en-US/profile.json'],
          'tmp/index_zh-CN.html': ['src/lang/zh-CN/main.json','src/lang/zh-CN/profile.json'],
          'tmp/index_zh-TW.html': ['src/lang/zh-TW/main.json','src/lang/zh-TW/profile.json']
        }
      },
      signup: {
        files: {
          'tmp/signup/index.html': ['src/lang/en-US/main.json','src/lang/en-US/signup.json'],
          'tmp/signup/index_zh-CN.html': ['src/lang/zh-CN/main.json','src/lang/zh-CN/signup.json'],
          'tmp/signup/index_zh-TW.html': ['src/lang/zh-TW/main.json','src/lang/zh-TW/signup.json']
        }
      },
      signin: {
        files: {
          'tmp/signin/index.html': ['src/lang/en-US/main.json','src/lang/en-US/signin.json'],
          'tmp/signin/index_zh-CN.html': ['src/lang/zh-CN/main.json','src/lang/zh-CN/signin.json'],
          'tmp/signin/index_zh-TW.html': ['src/lang/zh-TW/main.json','src/lang/zh-TW/signin.json']
        }
      },
      forgot: {
        files: {
          'tmp/forgot/index.html': ['src/lang/en-US/main.json','src/lang/en-US/forgot.json'],
          'tmp/forgot/index_zh-CN.html': ['src/lang/zh-CN/main.json','src/lang/zh-CN/forgot.json'],
          'tmp/forgot/index_zh-TW.html': ['src/lang/zh-TW/main.json','src/lang/zh-TW/forgot.json']
        }
      },
      verify: {
        files: {
          'tmp/verify/index.html': ['src/lang/en-US/main.json','src/lang/en-US/verify.json'],
          'tmp/verify/index_zh-CN.html': ['src/lang/zh-CN/main.json','src/lang/zh-CN/verify.json'],
          'tmp/verify/index_zh-TW.html': ['src/lang/zh-TW/main.json','src/lang/zh-TW/verify.json']
        }
      },
      verifyemailchanged: {
        files: {
          'tmp/verifyemailchanged/index.html': ['src/lang/en-US/main.json','src/lang/en-US/verifyemailchanged.json'],
          'tmp/verifyemailchanged/index_zh-CN.html': ['src/lang/zh-CN/main.json','src/lang/zh-CN/verifyemailchanged.json'],
          'tmp/verifyemailchanged/index_zh-TW.html': ['src/lang/zh-TW/main.json','src/lang/zh-TW/verifyemailchanged.json']
        }
      },
      reset: {
        files: {
          'tmp/reset/index.html': ['src/lang/en-US/main.json','src/lang/en-US/reset.json'],
          'tmp/reset/index_zh-CN.html': ['src/lang/zh-CN/main.json','src/lang/zh-CN/reset.json'],
          'tmp/reset/index_zh-TW.html': ['src/lang/zh-TW/main.json','src/lang/zh-TW/reset.json']
        }
      },
      changepass: {
        files: {
          'tmp/changepass/index.html': ['src/lang/en-US/main.json'],
          'tmp/changepass/index_zh-CN.html': ['src/lang/zh-CN/main.json'],
          'tmp/changepass/index_zh-TW.html': ['src/lang/zh-TW/main.json']
        }
      },
      changemail: {
        files: {
          'tmp/changemail/index.html': ['src/lang/en-US/main.json'],
          'tmp/changemail/index_zh-CN.html': ['src/lang/zh-CN/main.json'],
          'tmp/changemail/index_zh-TW.html': ['src/lang/zh-TW/main.json']
        }
      },
      userinfo: {
        files: {
          'tmp/userinfo/index.html': ['src/lang/en-US/main.json'],
          'tmp/userinfo/index_zh-CN.html': ['src/lang/zh-CN/main.json'],
          'tmp/userinfo/index_zh-TW.html': ['src/lang/zh-TW/main.json']
        }
      }
    }
  });
  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);
  grunt.registerTask('default', ['jshint','clean','dotpl','uglify','copy','concat','cssmin','htmlmin']);
};