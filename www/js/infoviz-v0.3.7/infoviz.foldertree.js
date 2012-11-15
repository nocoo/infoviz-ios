define(function(b,a,c){b.async(["./infoviz.core"],function(d){a.draw_foldertree=function(g,n,V,E,L,I){if(!g||!V){return idb("Paper or Data is empty.")}var B=d.merge_options(E),o=[],M,K,S,R,F;var l=function(aa){var ac=[],Y=[],x={};var Z=0,j;aa._id="n_"+Z++;ac.push({_id:aa._id,node:aa});x[aa._id]={index:ac.length-1,parent_id:undefined,count_direct:aa.children.length,count_leaf:0,count_total:0};Y.push(aa);var y,ab,W,X;while(Y.length>0){ab=Y[0];Y=Y.slice(1);X=ab._id;if(!ab.children){ab.children=[]}for(W=0;W<ab.children.length;++W){ab.children[W]["_id"]="n_"+Z++;ac.push({_id:ab.children[W]["_id"],node:ab.children[W]});x[ab.children[W]["_id"]]={index:ac.length-1,parent_id:X,count_direct:ab.children[W]["children"]?ab.children[W]["children"].length:0,count_leaf:0,count_total:0};Y.push(ab.children[W])}}for(var p in x){j=0;ab=x[p];while(ab.parent_id!==undefined){if(ab.count_direct===0){y=ab;while(y.parent_id!==undefined){x[y.parent_id]["count_leaf"]+=1;y=x[y.parent_id]}}ab=x[ab.parent_id];++j}x[p]["level"]=j}for(var p in x){ab=x[p];y=ab;while(y.parent_id!==undefined){x[y.parent_id]["count_total"]+=1;y=x[y.parent_id]}}return{set:ac,dictionary:x}};var C=V.data;var u=l(C);var r=[],v=0;var D=u.set,s=u.dictionary;for(id in s){t=s[id];if(!r[t.level]){r[t.level]={count_node:0,nodes:[]};v++}r[t.level]["count_node"]++;r[t.level]["nodes"].push(D[t.index]["_id"])}var U=n["top-left"][0]+B.foldertree["padding-left"];var T=n["top-left"][1]+B.foldertree["padding-top"];var h=B.foldertree["node-size"];var w,f=[],k,q=[],H=0,e;var N,z,A,Q,J;var O=function(Z,i,aa,W,X,j,p){var Y;switch(X){default:case"circle":Y=Z.circle(i,aa,W).attr({fill:j.color,"fill-opacity":j["light-alpha"],stroke:j.color,"stroke-opacity":j["dark-alpha"],"stroke-width":p}).translate(0.5,0.5);break;case"box":Y=Z.rect(i-W,aa-W,W*2,W*2).attr({fill:j.color,"fill-opacity":j["light-alpha"],stroke:j.color,"stroke-opacity":j["dark-alpha"],"stroke-width":p}).translate(0.5,0.5);break;case"line":o=[];i-=W;aa-=W;W=2*W;o.push("M"+i+","+(aa+W));o.push("L"+(i+2*W/5)+","+(aa+2*W/5));o.push("L"+(i+3*W/4)+","+(aa+5*W/7));o.push("L"+(i+W)+","+aa);Y=Z.path(o.join("")).attr({stroke:j.color,"stroke-opacity":j["dark-alpha"],"stroke-width":p}).translate(0.5,0.5);break;case"area":o=[];i-=W;aa-=W;W=2*W;o.push("M"+i+","+(aa+W));o.push("L"+(i+2*W/5)+","+(aa+2*W/5));o.push("L"+(i+3*W/4)+","+(aa+5*W/7));o.push("L"+(i+W)+","+aa);o.push("L"+(i+W)+","+ +(aa+W));o.push("Z");Y=Z.path(o.join("")).attr({fill:j.color,"fill-opacity":j["light-alpha"],stroke:j.color,"stroke-opacity":j["dark-alpha"],"stroke-width":p}).translate(0.5,0.5);break}return Y};for(S=0;S<r.length;++S){for(R=0;R<r[S]["nodes"].length;++R){N=s[r[S]["nodes"][R]];z=B.color[(H++%B.color.length)];if(S===0){M=U+h/2;K=T+h/2;w=O(g,M,K,h,B.foldertree["node-type"],z,B.foldertree["node-border-width"]);f.push(w);s[D[0]["_id"]]["_x"]=M;s[D[0]["_id"]]["_y"]=K;s[D[0]["_id"]]["_current"]=K+h*2+B.foldertree["vertical-spacing"]}else{A=s[N.parent_id];Q=(N.count_total+1)*(h*2)+N.count_total*B.foldertree["vertical-spacing"];M=A._x+h*2+B.foldertree["horizontal-spacing"];K=A._current;w=O(g,M,K,h,B.foldertree["node-type"],z,B.foldertree["node-border-width"]);f.push(w);A._current+=Q+B.foldertree["vertical-spacing"];N._x=M;N._y=K;N._current=K+h*2+B.foldertree["vertical-spacing"];o=[];o.push("M"+(M-h-B.foldertree["edge-horizontal-spacing"])+","+K);o.push("L"+A._x+","+K);o.push("L"+A._x+","+(A._y+B.foldertree["edge-vertical-spacing"]+h));e=g.path(o.join("")).attr({"stroke-width":B.foldertree["edge-width"],stroke:B.foldertree["edge-color"],"stroke-opacity":B.foldertree["edge-alpha"]}).translate(0.5,0.5)}J=V.node_text;F=D[N.index]["node"];for(var P in F){J=J.replace("{"+P+"}",F[P])}k=g.text(M+h+B.foldertree["node-label-spacing"],K,J).attr({"text-anchor":"start","font-size":B.foldertree["node-label-size"],fill:z.color,"fill-opacity":B.foldertree["node-label-alpha"]}).translate(0.5,0.5);q.push(k);if(L&&typeof(L)==="function"){w.data("info",{x:M,y:K,type:"node",radius:h,data:D[N.index]["node"],callback:L,that:I});w.click(d.element_action);k.data("info",{x:M,y:K,type:"label",text:J,data:D[N.index]["node"],callback:L,that:I});k.click(d.element_action)}if(V.node_tooltip_title||V.node_tooltip_content){var G=V.node_tooltip_title;var m=V.node_tooltip_content;var F=D[N.index]["node"];for(var P in F){G=G.replace("{"+P+"}",F[P]);m=m.replace("{"+P+"}",F[P])}k.data("tooltip",{id:"n_"+S+"_"+R,title:G,content:m,color:z,x:M,y:K-h,element:k,options:B,paper:g});k.hover(d.element_tooltip)}}}}})});