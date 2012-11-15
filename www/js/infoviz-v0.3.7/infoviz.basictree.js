define(function(b,a,c){b.async(["./infoviz.core"],function(d){a.draw_basictree=function(k,A,at,Y,ah,ae){if(!k||!at){return idb("Paper or Data is empty.")}var S=d.merge_options(Y),C=[],ai,ag,ap,ao,Z;var r=function(az){var aB=[],ax=[],y={};var ay=0,j;az._id="n_"+ay++;aB.push({_id:az._id,node:az});y[az._id]={index:aB.length-1,parent_id:undefined,count_direct:az.children.length,count_leaf:0};ax.push(az);var aA,av,aw;while(ax.length>0){aA=ax[0];ax=ax.slice(1);aw=aA._id;if(!aA.children){aA.children=[]}for(av=0;av<aA.children.length;++av){aA.children[av]["_id"]="n_"+ay++;aB.push({_id:aA.children[av]["_id"],node:aA.children[av]});y[aA.children[av]["_id"]]={index:aB.length-1,parent_id:aw,count_direct:aA.children[av]["children"]?aA.children[av]["children"].length:0,count_leaf:0};ax.push(aA.children[av])}}for(var p in y){j=0;aA=y[p];while(aA.parent_id!==undefined){if(aA.count_direct===0){var x=aA;while(x.parent_id!==undefined){y[x.parent_id]["count_leaf"]+=1;x=y[x.parent_id]}}aA=y[aA.parent_id];++j}y[p]["level"]=j}return{set:aB,dictionary:y}};var V=at.data;var L=r(V);var H=[],M=0;var W=L.set,J=L.dictionary;for(id in J){t=J[id];if(!H[t.level]){H[t.level]={count_node:0,nodes:[]};M++}H[t.level]["count_node"]++;H[t.level]["nodes"].push(W[t.index]["_id"])}var I=-Infinity,an=Infinity,B=0;var am=-Infinity,G=Infinity,af=0;for(ap=0;ap<W.length;++ap){J[W[ap]["_id"]]["_color"]=S.color[(ap%S.color.length)];var n=W[ap]["node"][at.node_value_field];if(d.is_number(n)){if(n>I){I=n}if(n<an){an=n}B+=n}var m=W[ap]["node"][at.edge_value_field];if(d.is_number(m)){if(m>am){am=m}if(m<G){G=m}af+=m}}var e=A.width-S.basictree["padding-left"]-S.basictree["padding-right"];var l=A.height-S.basictree["padding-top"]-S.basictree["padding-bottom"];var ar=A["top-left"][0]+S.basictree["padding-left"];var aq=A["top-left"][1]+S.basictree["padding-top"];ai=ar+e/2;ag=aq+S.basictree["node-max-radius"];var ac=(S.basictree["node-max-radius"]-S.basictree["node-min-radius"])/(I-an);if(I===an){ac=0}var ad;if(M>0){ad=l/M}else{ad=l}var N,f=[];var o,E=[];var X,au=[];for(ap=0;ap<H.length;++ap){for(ao=0;ao<H[ap]["nodes"].length;++ao){var aj=J[H[ap]["nodes"][ao]];if(ap===0){var u,aj,R,al;var w=W[0]["node"][at.node_value_field];var h=(w-an)*ac+S.basictree["node-min-radius"];N=k.circle(ai,ag,h).attr({"stroke-width":S.basictree["node-border-width"],stroke:J[W[0]["_id"]]["_color"]["color"],fill:J[W[0]["_id"]]["_color"]["color"],"fill-opacity":J[W[0]["_id"]]["_color"]["light-alpha"]}).translate(0.5,0.5);f.push(N);J[W[0]["_id"]]["_x"]=ai;J[W[0]["_id"]]["_y"]=ag;J[W[0]["_id"]]["_r"]=h;J[W[0]["_id"]]["_space"]=e;J[W[0]["_id"]]["_current"]=ar}else{R=J[aj.parent_id];al=R._space/R.count_direct;w=W[aj.index]["node"][at.node_value_field];u=W[aj.index]["node"][at.edge_value_field];h=(w-an)*ac+S.basictree["node-min-radius"];ai=R._current+al/2;N=k.circle(ai,ag,h).attr({"stroke-width":S.basictree["node-border-width"],stroke:aj._color["color"],fill:aj._color["color"],"fill-opacity":aj._color["light-alpha"]}).translate(0.5,0.5);f.push(N);R._current+=al;aj._x=ai;aj._y=ag;aj._space=al;aj._r=h;aj._current=ai-al/2}var D=W[aj.index]["node"][at.node_label_field];if(D&&S.basictree["node-label-size"]>0){o=k.text(ai,ag,D).attr({"text-anchor":"middle","font-size":S.basictree["node-label-size"],fill:S.basictree["node-label-color"]}).translate(0.5,0.5);E.push(o)}if(ah&&typeof(ah)==="function"){N.data("info",{x:ai,y:ag,type:"node",radius:h,data:W[aj.index]["node"],callback:ah,that:ae});N.click(d.element_action);if(o){o.data("info",{x:ai,y:ag,type:"label",radius:h,data:W[aj.index]["node"],callback:ah,that:ae});o.click(d.element_action)}}if(at.node_tooltip_title||at.node_tooltip_content){var ab=at.node_tooltip_title;var z=at.node_tooltip_content;var Z=W[aj.index]["node"];for(var ak in Z){ab=ab.replace("{"+ak+"}",Z[ak]);z=z.replace("{"+ak+"}",Z[ak])}N.data("tooltip",{id:"n_"+ap+"_"+ao,title:ab,content:z,color:J[Z._id]["_color"],x:ai,y:ag-h,element:o,options:S,paper:k});N.hover(d.element_tooltip)}if(R){var P=ai,O=ag;var s=R._x,q=R._y;var K=Math.atan((q-O)/(s-P));var U=R._r;if(s>=P){P+=h*Math.cos(K);O+=h*Math.sin(K);s-=U*Math.cos(K);q-=U*Math.sin(K)}else{P-=h*Math.cos(K);O-=h*Math.sin(K);s+=U*Math.cos(K);q+=U*Math.sin(K)}k.path("M"+P+","+O+"L"+s+","+q).attr({"stroke-width":S.basictree["edge-width"],stroke:S.basictree["edge-color"],"stroke-opacity":S.basictree["edge-alpha"]}).translate(0.5,0.5);if(u&&S.basictree["edge-label-size"]>0){var T=(P+s)/2;var Q=(O+q)/2;var g=k.text(-1000,-1000,u).attr({"font-size":S.basictree["edge-label-size"]}).translate(0.5,0.5);var v=g.getBBox();var aa=v.width+S.basictree["edge-box-padding-left"]+S.basictree["edge-box-padding-right"];var F=v.height+S.basictree["edge-box-padding-top"]+S.basictree["edge-box-padding-bottom"];X=k.rect(T-aa/2,Q-F/2,aa,F,S.basictree["edge-box-border-radius"]).attr({stroke:S.basictree["edge-box-border-color"],"stroke-width":S.basictree["edge-box-border-width"],"stroke-opacity":S.basictree["edge-box-border-alpha"],fill:S.basictree["edge-box-background-color"],"fill-opacity":S.basictree["edge-box-background-alpha"]}).translate(0.5,0.5);au.push(X);o=k.text(T,Q,u).attr({"text-anchor":"middle","font-size":S.basictree["edge-label-size"],fill:S.basictree["edge-label-color"]}).translate(0.5,0.5);E.push(o);if(ah&&typeof(ah)==="function"){o.data("info",{x:T,y:Q,type:"edge",data:W[aj.index]["node"],callback:ah,that:ae});o.click(d.element_action)}if(at.edge_tooltip_title||at.edge_tooltip_content){var ab=at.edge_tooltip_title;var z=at.edge_tooltip_content;var Z=W[aj.index]["node"];for(var ak in Z){ab=ab.replace("{"+ak+"}",Z[ak]);z=z.replace("{"+ak+"}",Z[ak])}o.data("tooltip",{id:"e_"+ap+"_"+ao,title:ab,content:z,color:J[Z._id]["_color"],x:T,y:Q-F/2,element:o,options:S,paper:k});o.hover(d.element_tooltip)}}}}ag+=ad}for(ap=0;ap<f.length;++ap){f[ap].toFront()}for(ap=0;ap<au.length;++ap){au[ap].toFront()}for(ap=0;ap<E.length;++ap){E[ap].toFront()}}})});