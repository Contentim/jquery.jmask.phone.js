(function($) {

    var jmaskPhoneMethod = function(obj, opts) {

        var $this = this, img, options={};

        defaults = {
            color:'green',
            notification:'',
            borderColor:'#ee5a5a',
        };

        $.extend(this, $.fn, {
            init : function () {

                // актуальные настройки, будут индивидуальными при каждом запуске
                options = $.extend(defaults, opts);

                $('body').append('<div id="scoped_css_mask_phone"><style>.error_valid{ border-color: '+options.borderColor+'!important;</style></div>');

                var native_element,
                    str,
                    element,
                    maskOptions,
                    mask,
                    inp;

                native_element = obj.prop('id');
                str = obj.val();

                obj.prop('data-status', 'error');

                // this.focus();

                element = document.getElementById(native_element);

                maskOptions = {
                    mask: '+0 000 000 00 00 0000 0000',
                    country: 'Russia',
                };

                mask = IMask(element, maskOptions);

                if(str.length == 0 || str.length == 1){
                    obj.val('+');

                    inp = document.getElementById(native_element);
                    inp.selectionStart = inp.value.length;
                }

                if(mask.value.length > 1){
                    obj.prop('data-status', 'success');
                }

                obj.removeClass('error_valid');
                obj.parent().find('.valid_text_error').remove();

                return obj.on('keydown keyup blur paste', function(e){

                    var re,
                        val,
                        newstr,
                        caretPos,
                        str,
                        native_element,
                        element,
                        first_char,
                        checkPhone;

                    if (e.type == 'paste') {
                        val = e.originalEvent.clipboardData.getData("text/plain");
                    } else {
                        val = $(this).val();
                    }

                    caretPos = 0;
                    str = $(obj).val();
                    native_element = $(obj).prop('id');
                    element = document.getElementById(native_element);
                    first_char = str.charAt(1);
                    checkPhone = $(obj).position();

                    if(str.length == 0 || str.length == 1){
                        $(obj).val('+');
                    }

                    if(first_char == '8' || first_char == 8){

                        re = /^\+8/g;
                        newstr = str.toString().replace(re, '+7');
                        element.value = newstr;

                        mask.destroy();
                        maskOptions = {
                            mask: '+0 000 000 00 00 0000 0000',
                            country: 'Russia',
                        };

                        mask = IMask(element, maskOptions);
                    }

                    if(first_char == '3'){

                        mask.destroy();
                        maskOptions = {
                            mask: '+000 00 000 00 00',
                            country: 'Ukraine',
                        };

                        mask = IMask(element, maskOptions).on('complete', handler_status_field(element));
                    }

                    if (first_char != 3){

                        mask.destroy();
                        maskOptions = {
                            mask: '+0 000 000 00 00 0000 0000',
                            country: 'unknown',
                        };

                        mask = IMask(element, maskOptions).on('complete', handler_status_field(element));
                    }

                    function handler_status_field(el){

                        var reg,
                            value,
                            checkPhone,
                            notification = options.notification,
                            re = /\s*/g,
                            newstr = notification.toString().replace(re, '');

                        if(notification.length > 0){
                            reg = /\+|\d*|\s*/gm;
                            value = $(el).val();

                            if (reg.test(value) && value.length > 9){
                                $(el).removeClass('error_valid');
                                $(el).addClass('success_valid');
                                $(el).parent().find('.valid_text_error').remove();

                                value = value.replace(/\+|\s/g, '');

                                $(el).prop('data-status','success');
                                $this.triggerSuccess();

                            } else {
                                checkPhone = $(el).position();

                                $(el).parent().find('.valid_text_error').remove();
                                $(el).addClass('error_valid');
                                $(el).removeClass('success_valid');
                                $(el).after('<p class="valid_text_error">'+options.notification+'</p>');
                                $(el).parent().find('.valid_text_error').css('left', checkPhone.left);

                                $(el).prop('data-status','error');
                                $this.triggerError();
                            }
                        }
                    }
                });
            },

            triggerSuccess : function () {
                obj.trigger('success_jsmaskphone');
            },

            triggerError: function(){
                obj.trigger('error_jsmaskphone');
            },

        });

        this.init();

    };

    $.fn.jmaskPhone = function(opts) {
        return new jmaskPhoneMethod(this, opts);
    };

})(jQuery);