!function(a){woodmartThemeModule.$document.on("wdBackHistory wdShopPageInit",function(){woodmartThemeModule.woocommercePriceSlider()}),woodmartThemeModule.woocommercePriceSlider=function(){var b=a(".price_slider_amount #min_price"),c=a(".price_slider_amount #max_price"),d=a(".products");if("undefined"==typeof woocommerce_price_slider_params||b.length<1||!a.fn.slider)return!1;var e=a(".price_slider");if(void 0===e.slider("instance")){a("input#min_price, input#max_price").hide(),a(".price_slider, .price_label").show();var f=b.data("min"),g=c.data("max"),h=parseInt(f,10),i=parseInt(g,10);d.attr("data-min_price")&&d.attr("data-min_price").length>0&&(h=parseInt(d.attr("data-min_price"),10)),d.attr("data-max_price")&&d.attr("data-max_price").length>0&&(i=parseInt(d.attr("data-max_price"),10)),e.slider({range:!0,animate:!0,min:f,max:g,values:[h,i],create:function(){b.val(h),c.val(i),woodmartThemeModule.$body.trigger("price_slider_create",[h,i])},slide:function(b,c){a("input#min_price").val(c.values[0]),a("input#max_price").val(c.values[1]),woodmartThemeModule.$body.trigger("price_slider_slide",[c.values[0],c.values[1]])},change:function(a,b){woodmartThemeModule.$body.trigger("price_slider_change",[b.values[0],b.values[1]])}}),setTimeout(function(){woodmartThemeModule.$body.trigger("price_slider_create",[h,i]),e.find(".ui-slider-range").length>1&&e.find(".ui-slider-range").first().remove()},10)}},a(document).ready(function(){woodmartThemeModule.woocommercePriceSlider()})}(jQuery);