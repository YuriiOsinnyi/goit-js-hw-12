import{a as q,S as E,i as n}from"./assets/vendor-BSTwZ_tR.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&l(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function l(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();const P="52824914-67b35cbaeb2ca1734ba8e47a6",$="https://pixabay.com/api/",x=15,y=async(o,t)=>{const{data:s}=await q($,{params:{key:P,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0,page:t,per_page:x}});return s},g=document.querySelector(".gallery"),m=document.querySelector(".loader"),B=new E(".gallery a",{captionsData:"alt",captionDelay:250,captionPosition:"bottom",disableScroll:!0});function h(o){const t=o.map(({likes:s,views:l,comments:e,downloads:r,largeImageURL:i,webformatURL:S,tags:w})=>{const v=w.split(",").slice(0,3).join(",");return`
        <li class="gallery-item">
  <a class="gallery-link" href="${i}">
    <img
      class="gallery-image"
      src="${S}"
      alt="${v}"
    />
  </a>
  <div class="info">
  ${d("Likes",s)}
   ${d("Views",l)}
    ${d("Comments",e)}
     ${d("Downloads",r)}
  </div>
</li>
        `}).join("");g.insertAdjacentHTML("beforeend",t),B.refresh()}const d=(o,t)=>`
<div class="info-block">
<h4 class="card-heading">${o}</h4>
<p class="info-text">${t}</p>
</div>
`;function M(){g.innerHTML=""}function p(){m.classList.add("active")}function L(){m.classList.remove("active")}function b(){document.querySelector(".load-more").classList.remove("hidden")}function c(){document.querySelector(".load-more").classList.add("hidden")}const O=document.querySelector(".form"),A=document.querySelector(".load-more");let a=1,u="",f=0;A.addEventListener("click",_);O.addEventListener("submit",T);async function T(o){if(o.preventDefault(),u=o.target.elements["search-text"].value.trim(),!u){n.error({title:"Error",message:"Please enter a search query.",position:"topRight"}),c();return}M(),c(),a=1,p();try{const t=await y(u,a);if(f=t.totalHits,t.hits.length===0){n.info({title:"No results",message:"Sorry, no images found."}),c();return}h(t.hits),f>a*15&&b()}catch{n.error({title:"Error",message:"Something went wrong."})}finally{L(),o.target.reset()}}async function _(){a+=1,c(),p();try{const o=await y(u,a);h(o.hits),D(),a*15>=f?(c(),n.success({title:"End",message:"We're sorry, but you've reached the end of search results."})):b()}catch{n.error({title:"Error",message:"Something went wrong. Try again later."})}finally{L()}}function D(){const s=document.querySelector(".gallery .gallery-item").getBoundingClientRect().height;window.scrollBy({top:s*2,behavior:"smooth"})}console.log("loader:",m);
//# sourceMappingURL=index.js.map
