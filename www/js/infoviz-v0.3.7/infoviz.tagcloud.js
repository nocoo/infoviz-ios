define(function(b,a,c){b.async(["./infoviz.core"],function(d){a.draw_tagcloud=function(f,v,W,H,Q,N){if(!f||!W){return idb("Paper or Data is empty.")}var G=d.merge_options(H),w=[],R,P,U,T,I;var z=G.tagcloud["levels"]?G.tagcloud["levels"]:8;var q=-Infinity,L=Infinity,o=0;for(U=0;U<W.data.length;++U){I=W.data[U];if(I[W.value_field]>q){q=I[W.value_field]}if(I[W.value_field]<L){L=I[W.value_field]}o+=I[W.text_field].length}var h=[],k,e,t;for(U=0;U<W.data.length;++U){I=W.data[U];k=Math.floor((z-1)*(I[W.value_field]-L)/(q-L));this_size=G.tagcloud["text-min-size"]+Math.floor(k*(G.tagcloud["text-max-size"]-G.tagcloud["text-min-size"])/z);e=f.text(-1000,-1000,I[W.text_field]).attr({"font-size":this_size}).translate(0.5,0.5);t=e.getBBox();h.push({value:I[W.value_field],text:I[W.text_field],size:this_size,length:I[W.text_field].length,level:k,width:t.width,height:t.height,index:U})}var B=v["top-left"][0]+v.width/2;var A=v["top-left"][1]+v.height/2;var V=G.tagcloud["row-count"],M=[];for(U=0;U<V;++U){M.push({node:[]})}if(V%2===0){A-=G.tagcloud["text-max-size"]/2}h.sort(function(j,i){return i.size-j.size});for(U=0;U<h.length;++U){M[U%M.length]["node"].push(h[U])}var l=[],O,X=[];var g=0,F,D,s,r,E,C;var n,m,K=0;for(U=0;U<M.length;++U){if(U===0){R=B;P=A;F=P;D=P}else{R=B;if(U%2===0){P=F-g;F=P}else{P=D+g;D=P}}s=0;r=0;E=0;C=0;g=-Infinity;for(T=0;T<M[U]["node"].length;++T){I=M[U]["node"][T];this_color=G.tagcloud["color"][Math.floor((G.tagcloud["color"].length-1)*(I.level/(z-1)))];if(T===0){n=R;m=P;E=I.width+G.tagcloud["horizontal-margin"];C=I.width+G.tagcloud["horizontal-margin"]}else{if(T%2===0){s-=E/2+I.width/2;n=R+s;E=I.width+G.tagcloud["horizontal-margin"]}else{r+=C/2+I.width/2;n=R+r;C=I.width+G.tagcloud["horizontal-margin"]}}if(I.height>g){g=I.height+G.tagcloud["vertical-margin"]}X.push({x:n,y:m,item:I,color:this_color,data:W.data[I.index]});K++}}for(U=X.length-1;U>=0;--U){O=f.text(X[U]["x"],X[U]["y"],X[U]["item"]["text"]).attr({"font-size":X[U]["item"]["size"],fill:X[U]["color"]["color"],"fill-opacity":X[U]["color"]["dark-alpha"],"text-anchor":"middle"}).translate(0.5,0.5);l.push(O);if(Q&&typeof(Q)==="function"){O.data("info",{data:X[U]["data"],item:X[U]["item"],x:X[U]["x"],y:X[U]["y"],callback:Q,that:N});O.click(d.element_action)}if(W.tooltip_title||W.tooltip_content){var J=W.tooltip_title;var u=W.tooltip_content;for(var S in X[U]["data"]){J=J.replace("{"+S+"}",X[U]["data"][S]);u=u.replace("{"+S+"}",X[U]["data"][S])}O.data("tooltip",{id:U,title:J,content:u,color:this_color,x:X[U]["x"],y:X[U]["y"],element:O,options:G,paper:f});O.hover(d.element_tooltip)}}for(U=0;U<l.length;++U){(function(i){i.mouseover(function(){i.animate({transform:"s1.5"},G.layout["speed"],">")});i.mouseout(function(){i.animate({transform:""},G.layout["speed"],"<")})})(l[U])}}})});