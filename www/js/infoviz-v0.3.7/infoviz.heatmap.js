define(function(b,a,c){b.async(["./infoviz.core"],function(d){a.draw_heatmap=function(t,o,L,m,h,q){if(!t||!L){return idb("Paper or Data is empty.")}var f=d.merge_options(m),u=[],s,r,F,E,I;if(f.heatmap["sort-enabled"]){L.data.sort(function(j,i){return i[L.value_field]-j[L.value_field]})}var D=-Infinity,z=Infinity;for(F=0;F<L.data.length;++F){I=L.data[F];if(I[L.value_field]>D){D=I[L.value_field]}if(I[L.value_field]<z){z=I[L.value_field]}}var k=1,g=1;if(f.heatmap["horizontal-count"]>0){k=f.heatmap["horizontal-count"];g=Math.ceil(L.data.length/k)}else{if(f.heatmap["vertical-count"]>0){g=f.heatmap["vertical-count"];k=Math.ceil(L.data.length/g)}else{k=Math.floor(Math.sqrt(L.data.length));g=k}}var H=1,G=1;H=(o.width-((k-1)*f.heatmap["horizontal-margin"]))/k;G=(o.height-((g-1)*f.heatmap["vertical-margin"]))/g;var n,J,l,e,K;if(f.heatmap["color"]&&f.heatmap["color"].length>0){J=f.heatmap["color"]}else{J=f.color}r=o["top-left"][1];index=0;var v=false,B=[],A=[];K=undefined;for(E=0;E<g;++E){s=o["top-left"][0];for(F=0;F<k;++F){if(!L.data[index]){v=true;break}l=L.data[index][L.value_field];n=J[Math.floor((l-z)*((J.length-1)/(D-z)))];e=t.rect(s,r,H,G).attr({fill:n.color,"fill-opacity":n["dark-alpha"],stroke:n.color,"stroke-opacity":n["dark-alpha"],"stroke-width":f.heatmap["box-border-width"]}).translate(0.5,0.5);B.push(e);if(H>f.heatmap["label-size"]&&G>f.heatmap["label-size"]){K=t.text(s+H/2,r+G/2,L.data[index][L.label_field]).attr({fill:f.heatmap["label-color"],"fill-opacity":f.heatmap["label-alpha"],"font-size":f.heatmap["label-size"]}).translate(0.5,0.5);A.push(K)}if(h&&typeof(h)==="function"){e.data("info",{x:s,y:r,data:L.data[index],type:"box",callback:h,that:q});K.data("info",{x:s,y:r,data:L.data[index],type:"label",callback:h,that:q});e.click(d.element_action);K.click(d.element_action)}if(L.tooltip_title||L.tooltip_content){var M=L.tooltip_title;var C=L.tooltip_content;for(var w in L.data[index]){M=M.replace("{"+w+"}",L.data[index][w]);C=C.replace("{"+w+"}",L.data[index][w])}if(K){K.data("tooltip",{id:index,title:M,content:C,color:n,x:s+H/2,y:r,element:K,options:f,paper:t});K.hover(d.element_tooltip)}else{e.data("tooltip",{id:index,title:M,content:C,color:n,x:s+H/2,y:r,element:e,options:f,paper:t});e.hover(d.element_tooltip)}}s+=H+f.heatmap["horizontal-margin"];++index}if(v){break}r+=G+f.heatmap["vertical-margin"]}}})});