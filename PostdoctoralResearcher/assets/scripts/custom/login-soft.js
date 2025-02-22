var Login = function () {

    var handleLogin = function () {
        $('.login-form').validate({
            errorElement: 'span', //default input error message container
            errorClass: 'help-block', // default input error message class
            focusInvalid: false, // do not focus the last invalid input
            rules: {
                username: {
                    required: true
                },
                password: {
                    required: true
                },
                remember: {
                    required: false
                }
            },

            messages: {
                username: {
                    required: "لطفا نام کاربری خود را وارد نمایید."
                },
                password: {
                    required: "لطفا کلمه عبور خود را وارد نمایید."
                }
            },

            invalidHandler: function (event, validator) { //display error alert on form submit   
                $('.alert-danger', $('.login-form')).show();
            },

            highlight: function (element) { // hightlight error inputs
                $(element)
                    .closest('.form-group').addClass('has-error'); // set error class to the control group
            },

            success: function (label) {
                label.closest('.form-group').removeClass('has-error');
                label.remove();
            },

            errorPlacement: function (error, element) {
                error.insertAfter(element.closest('.input-icon'));
            },

            submitHandler: function (form) {
                form.submit();
            }
        });

        $('.login-form input').keypress(function (e) {
            if (e.which == 13) {
                if ($('.login-form').validate().form()) {
                    $('.login-form').submit();
                }
                return false;
            }
        });
    }

    var handleForgetPassword = function () {
        $('.forget-form').validate({
            errorElement: 'span', //default input error message container
            errorClass: 'help-block', // default input error message class
            focusInvalid: false, // do not focus the last invalid input
            ignore: "",
            rules: {
                email: {
                    required: true,
                    email: true,
                },
               code:{
                    required:true
                    }
            },

            messages: {
                email: {
                    required: "لطفا نام کاربری خود را وارد نمایید.",
                    email:"لطفا یک ایمیل معتبر وارد نمایید"
                },
                code:{
                       required:"لطفا کد زیر را وارد نمایید."
                     }
            
            },

            invalidHandler: function (event, validator) { //display error alert on form submit   

            },

            highlight: function (element) { // hightlight error inputs
                $(element)
                    .closest('.form-group').addClass('has-error'); // set error class to the control group
            },

            success: function (label) {
                label.closest('.form-group').removeClass('has-error');
                label.remove();
            },

            errorPlacement: function (error, element) {
                error.insertAfter(element.closest('.input-icon'));
            },

            submitHandler: function (form) {
                form.submit();
            }
        });

        $('.forget-form input').keypress(function (e) {
            if (e.which == 13) {
                if ($('.forget-form').validate().form()) {
                    $('.forget-form').submit();
                }
                return false;
            }
        });
		
		

        jQuery('#forget-password').click(function () {
			debugger;
            jQuery('.login-form').hide();
            jQuery('.forget-form').show();
        });
		 // $('#forget-password-en').click(function () {
			// debugger;
            // jQuery('.login-form').hide();
            // jQuery('.forget-form').show();
        // });

        jQuery('#back-btn').click(function () {
            jQuery('.login-form').show();
            jQuery('.forget-form').hide();
        });

    }

    var handleRegister = function () {

        function format(state) {
            if (!state.id) return state.text; // optgroup
            return "<img class='flag' src='assets/img/flags/" + state.id.toLowerCase() + ".png'/>&nbsp;&nbsp;" + state.text;
        }


        $("#select2_sample4").select2({
            placeholder: '<i class="fa fa-map-marker"></i>&nbsp;کشور خود را انتخاب کنید',
            allowClear: true,
            formatResult: format,
            formatSelection: format,
            escapeMarkup: function (m) {
                return m;
            }
        });


        $('#select2_sample4').change(function () {
            $('.register-form').validate().element($(this)); //revalidate the chosen dropdown value and show error or success message for the input
        });



        $('.register-form').validate({
            errorElement: 'span', //default input error message container
            errorClass: 'help-block', // default input error message class
            focusInvalid: false, // do not focus the last invalid input
            ignore: "",
            rules: {

                name: {
                    required: true
                },
                family: {
                    required: true,
                },
                cod_melli: {
                    required: true
                },
                jobplace: {
                    required:true
                },
                telno: {
                    required: true
                },
                mobile: {
                    required: true,
                    number: true,
                    rangelength: [11, 11],
                    // accept:
                },
                degree: {
                    required: true
                },
                madrak: {
                    required:true
                },
                takhasos: {
                    required: true
                },
                email: {
                    required: true,
                    email:true
                },
                code: {
                    required: true
                }
            },

            messages: { // custom messages for radio buttons and checkboxes
                name: {
                    required: "لطفا نام خود را وارد نمایید."
                },
                family: {
                    required: "لطفا نام خانوادگی خود را وارد نمایید.",
                },
                cod_melli: {
                    required: "لطفا کد ملی خود را وارد نمایید."
                },
                jobplace: {
                    required: "لطفا محل کار خود را انتخاب نمایید."
                },
                telno: {
                    required: "لطفا تلفن خود را وارد نمایید."
                },
                mobile: {
                    required: "لطفا موبایل خود را وارد نمایید.",
                    number: "لطفا عدد وارد نمایید.",
                    rangelength:"لطفا یک موبایل معتبر وارد نمایید."
                },
                degree: {
                    required: "لطفا مدرک تحصیلی خود را وارد نمایید."
                },
                madrak: {
                    required: "لطفا مقطع تحصیلی خود را وارد "
                },
                takhasos: {
                    required: "لطفا تخصص خود را وارد نمایید."
                },
                email: {
                    required: "لطفا ایمیل خود را وارد نمایید.",
                    email:"لطفا یک ایمیل معتبر وارد نمایید."
                },
                code: {
                    required: "لطفا کد زیر را وارد نمایید."
                },
            },

            invalidHandler: function (event, validator) { //display error alert on form submit   

            },

            highlight: function (element) { // hightlight error inputs
                $(element)
                    .closest('.form-group').addClass('has-error'); // set error class to the control group
            },

            success: function (label) {
                label.closest('.form-group').removeClass('has-error');
                label.remove();
            },

            errorPlacement: function (error, element) {
                if (element.attr("name") == "tnc") { // insert checkbox errors after the container                  
                    error.insertAfter($('#register_tnc_error'));
                } else if (element.closest('.input-icon').size() === 1) {
                    error.insertAfter(element.closest('.input-icon'));
                } else {
                    error.insertAfter(element);
                }
            },

            submitHandler: function (form) {
                form.submit();
            }
        });

        $('.register-form input').keypress(function (e) {
            if (e.which == 13) {
                if ($('.register-form').validate().form()) {
                    $('.register-form').submit();
                }
                return false;
            }
        });

        jQuery('#register-btn').click(function () {
            jQuery('.login-form').hide();
            jQuery('.register-form').show();
        });
		 jQuery('#register-btn-en').click(function () {
            jQuery('.login-form').hide();
            jQuery('.register-form').show();
        });
        jQuery('#register-back-btn').click(function () {
            jQuery('.login-form').show();
            jQuery('.register-form').hide();
        });
		
    }

    return {
        //main function to initiate the module
        init: function () {

            handleLogin();
            handleForgetPassword();
            handleRegister();

            $.backstretch([
		        //"assets/img/bg/1.jpg",
		        "assets/img/bg/2.jpg",
		        "assets/img/bg/3.jpg",
		        "assets/img/bg/4.jpg"
            ], {
                fade: 1000,
                duration: 8000
            });
            //virtual keyboard
            $("#password").keyboard({
                layout: 'qwerty',
                openOn: null,
                //                stayOpen: true,

            });

            $('.showKeyboard').click(function () {
                $('#password').getkeyboard().reveal();
            });
        }

    };
	
}();

