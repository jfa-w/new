setTimeout (function (){   $("<div class='fr borderg' style='padding:2px;background-color:white;margin-right:4px;'>تصميم وبرمجه: <a href='https://jawalhost.com/'>جوال هوست</a></div>").insertAfter($(".loginstat"));  },1000);

$("div#tlogins button.btn.btn-primary").click(function(){
var myVar = setInterval(function(){ var usmsgw = $(".pmsgc").length;if(usmsgw > 0){
   $(`
	<div class="uzr fl corner borderg mm" style="border-radius:5px;margin-bottom:-2px;width:99.5%;padding:0px; background-color:white;">
      <img style="width: 36px; height: 38px; margin-left: 1px; margin-top: 1px; background-image: url(room.png);" class="fl fitimg hand u-pic    ">
      <div class="uzr fl" style="padding:0px;width:80%">
        <div style="padding:0px;width:100%;" class="fl">
          <img class="fl u-ico" alt="" src="sico/king.gif">
          <span style="padding: 1px 8px; margin-top: 2px; display: block; max-width: 82%; border-radius: 3px; color: rgb(199, 103, 48);" class="corner nosel u-topic dots fl hand">ADMIN CHAT</span>
        </div>
        <br>
        <div style="padding: 0px; width: 100%; color: rgb(60, 0, 255);" class=" u-msg   break  fl">
		<div style="padding: 0px;width: 100%;color: rgb(60, 0, 255);text-align: right;display: block;margin-top: -17px;" class=" u-msg   break  fl"> مرحباً بك 👋 <h1 style="display: inline-block;color: red;">`+ getuser(myid).topic+ `</h1> نقدّر تواجدك معنا ، ونتمنى لك يوماً سعيداً إن شاء الله </div>
      </div>
    </div></div>
	`).appendTo('div#d2')
clearInterval(myVar);

}else{console.log(usmsgw)} }, 2000);
})


$(".ubnr").remove(); 


$('.u-msg.dots').removeClass('dots');  


$(`<img src="sico/z1ernup9aj10.jpg" class="fr" style="width:100%;margin-top: 0px;">`).insertBefore('.nav-tabs');



$(".fa-gear").text("الضبط").css("width","");

$(`<style>
@font-face{font-family:'jazeera';src: url('https://www.fontstatic.com/fonts/jazeera/jazeera.eot?#iefix');src: local('الجزيرة'), local('jazeera'),url('https://www.fontstatic.com/fonts/jazeera/jazeera.woff') format('woff');}
@font-face{font-family:'jazeera-light';src: url('https://www.fontstatic.com/fonts/jazeera-light/jazeera-light.eot?#iefix');src: local('الجزيرة خفيف'), local('jazeera-light'),url('https://www.fontstatic.com/fonts/jazeera-light/jazeera-light.woff') format('woff');}
label.fl.label.loginstat.label-success {
    background-color: #454545;
}
.fr.borderg, .fr.borderg a {
    font-size: 12px !important;
    padding: 0 5px!important;
    border-radius: 0px 0px 0px 7px!important;
    margin-top: -5px!important;
    margin-right: -5px!important;
    background-color: #454545!important;
    border: black solid 0px;
    color: #fff;
}
.label.label.label-primary.mini.fl {
    width: 34%!important;
    padding: 1px;
    border-radius: 0px 0px 7px 0px!important;
    margin-top: -5px!important;
}
div#l3 {
    border-bottom: 3px solid #595959;
    margin-bottom: 2px;
    padding: 8px 1px!important;
}
div#l1 {
    border-bottom: 3px solid #595959;
    margin-bottom: 2px;
    padding: 8px 1px!important;
}
div#l2 {
    border-bottom: 3px solid #595959;
    margin-bottom: 2px;
    padding: 8px 1px!important;
}
input#u2, input#pass1, input#u1, input#pass2, input#u3 {
    text-align: center;
    border: 1.5px solid #595959;
    border-radius: 4px;
    width: 50%!important;
}
div#l2 button.btn.btn-primary {
    width: 85px;
    position: inherit;
    height: 26px;
    margin-bottom: 4px;
    padding: 0 0 3px;
    font-family: 'jazeera',FontAwesome;
}
.checkbox {
    margin-top: -25px!important;
    margin-left: -83px!important;
    position: fixed;
    float: right;
 /*   margin-right: 100px!important;*/
}
ul.nav.nav-tabs {
    background-color: white!important;
    border: none;
    border-bottom: 3px solid #FEFEFE;
    padding-bottom: 2px;
}
a.label.label-primary.fl img.fl {
    display: none;
}
button.btn.fr.btn-success.fa.fa-refresh {
    float: left;
    margin-right: 5px!important;
    margin-left: 5px!important;
}
a.label.label-primary.fl {
    width: 68%!important;
    border-radius: 5px!important;
    margin: 5px -4px;
    padding: 3px!important;
    margin-top: 5px;
    margin-bottom: 2px;
    font-family: 'jazeera',FontAwesome;
    font-size: 13px!important;
    text-align: center!important;
}
.nav-tabs>li.active>a, .nav-tabs>li.active>a:focus, .nav-tabs>li.active>a:hover {
    color: #FEFEFE;
    background-color: #747474;
    text-align: center;
}
.nav-tabs>li:hover {
    background-color: #FEFEFE;
}
.nav-tabs>li>a:hover {
    border-color: #ffffff #eee #ddd;
    border: 2px solid;
    background-color: #454545;
    color: #ffffff;
}
.nav-tabs>li {
    background-color: white;
    width: 33%;
    border: 1px solid #454545;
    margin-left: 1px;
    border-radius: 6px 6px 0 0;
    height: 40px!important;
}
.nav-tabs>li>a {
    color: #ffffff;
    margin: auto auto;
    border: 1px solid #0b3361;
    text-align: center;
    background-color: #454545;
    width: 95%;
    height: 90%!important;
    margin-top: 2px;
    padding: 5px 0px!important;
    font-family: 'jazeera',FontAwesome;
}
button.btn.fr.btn-success.fa.fa-refresh {
    padding: 0px;
    border-radius: 15px;
    background-image: linear-gradient(to bottom,#454545 0,#093e6b 100%);
    border-color: #0b5ca2;
}
label.label.label-primary.mini.fl {
    width: 34%!important;
    padding: 1px;
    border-radius: 5px!important;
}
img.fr.co {
    margin: 4px 6px;
    border-radius: 5px!important;
}
img.fitimg.fl.u-pic {
    border-radius: 6px;
}
/*input#u1, input#pass2, input#u3, input#pass1, input#u2 {
    border-color: #c9c7c7;
    float: right;
    margin-top: 2px;
    width: 51%;
}*/
body.bg,div#d2 {
    background-color: #f1eff1!important;
}
span.s1.fa.fa-user.label.badgex.label-as-badge.label-success {
    padding: 0px 3px 2px;
    margin-right: 5px;
}
.fr.borderg, .fr.borderg a {
    font-size: 12px !important;
    padding: 0 5px!important;
}
label.fl.label.loginstat {
    float: right!important;
    border-radius: 5px!important;
    position: absolute;
    top: 0;
    right: 0;
    margin: 5px -4px;
    padding: 1px 8px 4px!important;
    margin-top: 5px;
    font-family: 'jazeera',FontAwesome;
    font-size: 13px !important;
}
div#d0 span {
    background-color: red;
    border: 1px solid red;    
}
#as5 {font-family: 'jazeera-light',FontAwesome;margin-bottom: 2px; background-color: #4682B4; height: 23px; color: #FFFFFA; border-radius: 5px 5px 5px 5px; border-bottom: 2px solid #1F394F; border-top: 2px solid #1F394F; padding-bottom: 1px!important;
}
.a {background-color: #FFFFFF; border-radius: 15px 15px 15px 15px; font-family: 'jazeera',FontAwesome; padding: 2px 10px 2px 10px; margin:7px 10px 7px 10px;color: #4682B4;}
</style>`).insertBefore('body');
$(`<a href="#" class="btn btn-primary" style="padding: 1px 5px 3px;margin-top: -26px;width: 22%;float: right;position: relative;margin-right: 1px;font-family: 'jazeera',FontAwesome;font-size: 13px!important;background-color: #ffffff!important;color: #343334;">التطبيق</a>
<a href="#" class="btn btn-primary" style="padding: 1px 5px 3px;width: 22%;float: right;position: relative;margin-right: 1px;font-family: 'jazeera',FontAwesome;font-size: 13px!important;background-color: #ffffff!important;color: #343334;">اتصل بنا</a>
`).appendTo('div#l2');
$(`<a href="#" class="btn btn-primary" style="padding: 1px 5px 3px;margin-top: -35px;width: 22%;float: right;position: relative;margin-right: 1px;font-family: 'jazeera',FontAwesome;font-size: 13px!important;background-color: #ffffff!important;color: #343334;">القوانين</a>
<a href="#" class="btn btn-primary" style="padding: 1px 5px 3px;width: 22%;margin-top: -8px;float: right;position: relative;margin-right: 1px;font-family: 'jazeera',FontAwesome;font-size: 13px!important;background-color: #ffffff!important;color: #343334;">اختصارات</a>
`).appendTo('div#l1');
$(`<a href="#" class="btn btn-primary" style="padding: 1px 5px 3px;margin-top: -26px;width: 22%;float: right;position: relative;margin-right: 1px;font-family: 'jazeera',FontAwesome;font-size: 13px!important;background-color: #ffffff!important;color: #343334;">ق.السوابر</a>
<a href="#" class="btn btn-primary" style="padding: 1px 5px 3px;width: 22%;float: right;position: relative;margin-right: 1px;font-family: 'jazeera',FontAwesome;font-size: 13px!important;background-color: #ffffff!important;color: #343334;">اشتراكات</a>
`).appendTo('div#l3');
