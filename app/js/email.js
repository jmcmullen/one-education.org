$(document).ready(function(){function e(e,t){var o=$(".reserve-modal input[type=submit]"),n=$(".reserve-modal form input, .reserve-modal form select"),a=e?null:"disabled";e?o.val(o.data("buttonTxt")):(o.data("buttonTxt",o.val()),o.val("Submitting...")),o.attr("disabled",a),n.each(function(){$(this).attr("disabled",a)})}function t(e,t){$(t).html(e),$(t).fadeIn()}function o(e,t){$.ajax({type:"post",dataType:"json",contentType:"application/json; charset=utf-8",url:"//one-education.us9.list-manage.com/subscribe/post-json?u=bc0719d67f05914460985b3ba&amp;id=fb4014f15f&c=?",data:e,cache:!1,success:t,error:function(e){alert("An error has occured while trying to connect to our server. Please refresh the page and try again.")}})}function n(){window.innerWidth<=992?$("#emailbar h3").css("display","block"):($("#emailbar button").data("open",!1),$("#emailbar button").css("display","none"),$("#emailbar button").css("display","inline-block"),$("#emailbar h3").css("display","inline-block"))}$(document).on("scroll",function(){var e=!1;$(document).scrollTop()>=100&&!e?($("#emailbar").fadeIn("slow"),e=!0):$(document).scrollTop()<=100&&($("#emailbar").fadeOut("fast"),e=!1)});var a=$(".reserve-modal form").on("submit",function(n){var l=a.serialize();n.preventDefault(),e(!1,a),o(l,function(o){"error"==o.result?(ga("send","event","earlybird","click","modal-reserve-fail"),t(o.msg,".reserve-modal .alert"),e(!0,a)):(ga("send","event","earlybird","click","modal-reserve"),$(".reserve-modal").modal("hide"),$(".reserve-confirmation").addClass("visible"),$(".vote-modal").modal("show"),e(!0,a))})}),l=$(".newsletter-modal form").on("submit",function(n){var a=l.serialize();n.preventDefault(),e(!1,l),o(a,function(o){"error"==o.result?(ga("send","event","signups","click","modal-reserve-fail"),t(o.msg,".newsletter-modal .alert"),e(!0,l)):(ga("send","event","signups","click","modal-newsletter"),$(".newsletter-modal").modal("hide"),$(".reserve-confirmation").addClass("visible"),$(".twitter-modal").modal(),e(!0,l))})});$("#emailbar h3").on("click",function(){window.innerWidth<=992&&($("#email-modal").modal().toggle(),ga("send","event","earlybird","click","top-reserve"))}),$("#btn-reserve1, .btn-reserve2").on("click",function(){$(".reserve-modal").modal().toggle()}),$("#btn-specs1").on("click",function(){$("html, body").animate({scrollTop:$("#specs").offset().top-100},2e3)}),$(window).on("resize",function(){n()}),n(),$("#btn-reserve1").on("click",function(){ga("send","event","earlybird","click","top-reserve")}),$(".btn-reserve2").on("click",function(){ga("send","event","earlybird","click","bottom-reserve")}),$(".btn-newsletter1").on("click",function(){ga("send","event","signups","click","top-newsletter"),$(".newsletter-modal").modal()}),$(".btn-newsletter2").on("click",function(){ga("send","event","signups","click","bottom-newsletter"),$(".newsletter-modal").modal()}),$(".btn-vote-twitter").on("click",function(){ga("send","event","social","click","twitter-vote")}),$(".btn-vote-facebook").on("click",function(){ga("send","event","social","click","facebook-vote"),$(".vote-modal").modal("hide"),$(".vote-facebook-modal").modal("show")}),$.urlParam=function(e){var t=new RegExp("[?&]"+e+"=([^&#]*)").exec(window.location.href);return null===t?null:t[1]||0},$.urlParam("email")?($(".reserve-modal .val-email").val($.urlParam("email")),$(".reserve-modal").modal("show")):"facebook"==$.urlParam("vote")?$(".vote-facebook-modal").modal():"twitter"==$.urlParam("vote")?window.location.href="https://twitter.com/intent/tweet?&text=Retweet%20and%20%23vote%20with%20me%20for%20%40One_Education%20to%20win%20%2450k%20from%20%23UpgradeYourWorldAU%20so%20they%20can%20keep%20upgrading%20kid%27s%20lives%20around%20the%20world.":$.urlParam("newsletter")?$(".newsletter-modal").modal():$(".vote-modal").modal()});