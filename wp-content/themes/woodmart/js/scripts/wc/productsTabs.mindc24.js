!function(a){a.each(["frontend/element_ready/wd_products_tabs.default"],function(a,b){woodmartThemeModule.wdElementorAddAction(b,function(){woodmartThemeModule.productsTabs()})}),woodmartThemeModule.productsTabs=function(){var b=!1;a(".wd-products-tabs").each(function(){var d=a(this),e=d.find(".wd-tab-content"),f=[];e.find(".owl-carousel").length<1&&(f[0]={html:e.html()}),d.find(".products-tabs-title li").on("click",function(d){d.preventDefault();var g=a(this),h=g.data("atts"),i=g.index();b||g.hasClass("active-tab-title")||(b=!0,c(h,i,e,g,f,function(a){a.html&&woodmartThemeModule.removeDuplicatedStylesFromHTML(a.html,function(a){e.html(a),e.removeClass("loading").parent().removeClass("element-loading"),g.removeClass("loading"),woodmartThemeModule.$document.trigger("wdProductsTabsLoaded"),woodmartThemeModule.$document.trigger("wood-images-loaded")})}))});var g=d.find(".tabs-navigation-wrapper"),h=g.find("ul");g.on("click",".open-title-menu",function(){var b=a(this);h.hasClass("list-shown")?(b.removeClass("toggle-active"),h.stop().slideUp(300).removeClass("list-shown")):(b.addClass("toggle-active"),h.addClass("list-shown"),setTimeout(function(){woodmartThemeModule.$body.one("click",function(c){var d=c.target;if(!a(d).is(".tabs-navigation-wrapper")&&!a(d).parents().is(".tabs-navigation-wrapper"))return b.removeClass("toggle-active"),h.removeClass("list-shown"),!1})},10))}).on("click","li",function(){var b=g.find(".open-title-menu"),c=a(this).text();h.hasClass("list-shown")&&(b.removeClass("toggle-active").text(c),h.removeClass("list-shown"))})});var c=function(c,d,e,f,g,h){if(f.parent().find(".active-tab-title").removeClass("active-tab-title"),f.addClass("active-tab-title"),g[d])return e.addClass("loading").parent().addClass("element-loading"),void setTimeout(function(){h(g[d]),b=!1},300);e.addClass("loading").parent().addClass("element-loading"),f.addClass("loading"),a.ajax({url:woodmart_settings.ajaxurl,data:{atts:c,action:"woodmart_get_products_tab_shortcode"},dataType:"json",method:"POST",success:function(a){g[d]=a,h(a)},error:function(){console.log("ajax error")},complete:function(){b=!1}})}},a(document).ready(function(){woodmartThemeModule.productsTabs()})}(jQuery);