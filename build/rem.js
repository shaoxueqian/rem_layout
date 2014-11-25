// https://github.com/jieyou/rem_layout
!function(a,b,c){function q(){var d=Math.min((o?e[h]().width:f.innerWidth)/(a/b),c);d!=p&&(k.innerHTML="html{font-size:"+d+"px!important;"+n+"}",p=d)}function r(){clearTimeout(l),l=setTimeout(q,500)}var l,d=document,e=d.documentElement,f=window,g="addEventListener",h="getBoundingClientRect",i="pageshow",j=d.head||d.getElementsByTagName("HEAD")[0],k=d.createElement("STYLE"),m="text-size-adjust:100%;",n="-webkit-"+m+"-moz-"+m+"-ms-"+m+"-o-"+m+m,o=h in e,p=null;a=a||320,b=b||16,c=c||32,j.appendChild(k),d[g]("DOMContentLoaded",q,!1),"on"+i in f?f[g](i,function(a){a.persisted&&r()},!1):f[g]("load",r,!1),f[g]("resize",r,!1),q()}(
	320, // 设置设计稿基准宽度
	16, // 设置默认根元素font-size 最好设置为16，因为浏览器默认的值就是16，这样代码失效或尚未起效时，不会有布局问题
	32 // 设置最大根元素font-size 它的作用是，当用户用非常宽的屏幕（pad、pc）访问页面时，不至于使得根元素的font-size超过这个值
);