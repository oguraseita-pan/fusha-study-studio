(function(){
"use strict";
var match=location.pathname.match(/lesson-(\d{2})\.html$/);
var lesson=match?Number(match[1]):null;
var path=location.pathname;
var inContent=/\/content\//.test(path);
var prefix=inContent?"../":"";
if(document.getElementById("fss-nav"))return;
var root=document.createElement("aside");
root.id="fss-nav";
root.setAttribute("aria-label","教材内の移動");
var prev=lesson>1?'<a href="lesson-'+String(lesson-1).padStart(2,"0")+'.html" aria-label="前のレッスン">← 前の課</a>':"";
var next=lesson!==null&&lesson<20?'<a href="lesson-'+String(lesson+1).padStart(2,"0")+'.html" aria-label="次のレッスン">次の課 →</a>':"";
var extra=lesson===null?'':prev+next;
root.innerHTML='<div class="fss-panel" id="fss-nav-panel" hidden><div class="fss-panel-header"><span class="fss-panel-title">目次・教材内を検索</span><button type="button" data-fss-close aria-label="閉じる">×</button></div><input class="fss-search" id="fss-nav-query" type="search" placeholder="見出し・単語・表現で検索" aria-label="この教材内を検索"><div class="fss-status" id="fss-nav-count"></div><div class="fss-items" id="fss-nav-items"></div><div class="fss-hint">検索はこのページ内のみ。入力内容は保存されません。</div></div>'+
'<div class="fss-dock"><a href="'+prefix+'index.html" aria-label="教材一覧に戻る">⌂ 教材</a>'+extra+'<button type="button" class="fss-primary" data-fss-toggle aria-expanded="false" aria-controls="fss-nav-panel">☷ 目次・検索</button><button type="button" data-fss-top aria-label="ページ先頭へ">↑</button></div>';
document.body.appendChild(root);
var panel=root.querySelector("#fss-nav-panel"),search=root.querySelector("#fss-nav-query"),list=root.querySelector("#fss-nav-items"),status=root.querySelector("#fss-nav-count"),toggle=root.querySelector("[data-fss-toggle]");
function norm(s){return String(s||"").normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/[\u064b-\u065f\u0670\u06d6-\u06ed]/g,"").replace(/[\u0622\u0623\u0625\u0671]/g,"\u0627").replace(/\u0640/g,"").toLowerCase()}
function title(el,i){
var h=el.querySelector("h2,h1,h3,.section-kicker,.cover-title");
var v=h?(h.textContent||"").replace(/\s+/g," ").trim():"";
if(!v&&el.matches("tr"))v=(el.innerText||el.textContent||"").replace(/\s+/g," ").trim().slice(0,75);
return v.slice(0,95)||("項目 "+(i+1));
}
function collect(){
var nodes;
if(lesson!==null){
 if(lesson>=9)nodes=[...document.querySelectorAll("#content > section.unit")];
 else if(lesson>=5)nodes=[...document.querySelectorAll("main.wrap > section")];
 else nodes=[...document.querySelectorAll("section.sheet")];
}else if(/conversation\.html$/.test(path))nodes=[...document.querySelectorAll("section.unit")];
else if(/curriculum\.html$/.test(path))nodes=[...document.querySelectorAll("tbody tr")];
else if(/essential-phrases\.html$/.test(path))nodes=[...document.querySelectorAll("#results > section.section")];
else if(/grammar\.html$/.test(path))nodes=[...document.querySelectorAll("#article")];
else nodes=[...document.querySelectorAll("main section")];
return nodes.map(function(el,i){if(!el.id)el.id="fss-jump-"+(i+1);el.classList.add("fss-section-anchor");return {id:el.id,title:title(el,i),text:norm(el.innerText||el.textContent||""),index:i+1}}).filter(function(x){return x.text.length>4});
}
function esc(s){return String(s).replace(/[&<>"']/g,function(c){return {"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]})}
function repaint(){
var items=collect(),q=norm(search.value.trim()),terms=q?q.split(/\s+/):[];
var found=items.filter(function(x){return terms.every(function(t){return x.text.includes(t)||norm(x.title).includes(t)})});
status.textContent=found.length+" / "+items.length+" 項目";
if(!items.length){
 list.innerHTML='<div class="fss-empty">この教材には専用の目次・検索があります。教材内の検索欄をご利用ください。</div>';return;
}
list.innerHTML=found.length?found.slice(0,80).map(function(x){
var extra=q?x.text.indexOf(terms[0]):-1;
var excerpt=extra>=0?x.text.slice(Math.max(0,extra-27),extra+65).replace(/\s+/g," "):"";
return '<a class="fss-item" href="#'+esc(x.id)+'" data-fss-jump="'+esc(x.id)+'"><b>'+esc(x.index)+'. '+esc(x.title)+'</b>'+(excerpt?'<small>'+esc(excerpt)+'</small>':"")+'</a>'
}).join(""):'<div class="fss-empty">一致する箇所がありません。別の単語で検索してください。</div>';
}
function show(open){panel.hidden=!open;toggle.setAttribute("aria-expanded",String(open));if(open){repaint();search.focus();search.select()}}
toggle.addEventListener("click",function(){show(panel.hidden)});
root.querySelector("[data-fss-close]").addEventListener("click",function(){show(false)});
root.querySelector("[data-fss-top]").addEventListener("click",function(){window.scrollTo({top:0,behavior:"smooth"});show(false)});
search.addEventListener("input",repaint);
list.addEventListener("click",function(e){var link=e.target.closest("[data-fss-jump]");if(link)show(false)});
document.addEventListener("keydown",function(e){
 if(e.key==="Escape"&&!panel.hidden){show(false);toggle.focus()}
 if(e.key==="/"&&!e.ctrlKey&&!e.metaKey&&!e.altKey&&!["INPUT","TEXTAREA","SELECT"].includes(document.activeElement.tagName)&&!document.activeElement.isContentEditable){e.preventDefault();show(true)}
});
document.addEventListener("click",function(e){if(!panel.hidden&&!root.contains(e.target))show(false)});
})();