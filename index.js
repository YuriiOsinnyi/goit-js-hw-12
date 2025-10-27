import{a as S,S as E,i as n}from"./assets/vendor-BSTwZ_tR.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&c(i)}).observe(document,{childList:!0,subtree:!0});function a(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function c(e){if(e.ep)return;e.ep=!0;const o=a(e);fetch(e.href,o)}})();const q="52824914-67b35cbaeb2ca1734ba8e47a6",P="https://pixabay.com/api/",$=15,m=async(r,t)=>{const{data:a}=await S(P,{params:{key:q,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0,page:t,per_page:$}});return a},g=document.querySelector(".gallery"),h=document.querySelector(".loader"),f=document.querySelector(".load-more"),x=new E(".gallery a",{captionsData:"alt",captionDelay:250,captionPosition:"bottom",disableScroll:!0});function y(r){const t=r.map(({likes:a,views:c,comments:e,downloads:o,largeImageURL:i,webformatURL:b,tags:v})=>{const w=v.split(",").slice(0,3).join(",");return`
        <li class="gallery-item">
  <a class="gallery-link" href="${i}">
    <img
      class="gallery-image"
      src="${b}"
      alt="${w}"
    />
  </a>
  <div class="info">
  ${l("Likes",a)}
   ${l("Views",c)}
    ${l("Comments",e)}
     ${l("Downloads",o)}
  </div>
</li>
        `}).join("");g.insertAdjacentHTML("beforeend",t),x.refresh()}const l=(r,t)=>`
<div class="info-block">
<h4 class="card-heading">${r}</h4>
<p class="info-text">${t}</p>
</div>
`;function B(){g.innerHTML=""}function p(){h.classList.add("active")}function L(){h.classList.remove("active")}function M(){f.classList.remove("hidden")}function O(){f.classList.add("hidden")}const A=document.querySelector(".form");let s=1,d="",u=0;f.addEventListener("click",_);A.addEventListener("submit",T);async function T(r){if(r.preventDefault(),d=r.target.elements["search-text"].value.trim(),!d){n.error({title:"Error",message:"Please enter a search query.",position:"topRight"});return}B(),s=1,p();try{const t=await m(d,s);if(u=t.totalHits,t.hits.length===0){n.info({title:"No results",message:"Sorry, no images found."});return}y(t.hits),u>s*15&&M()}catch(t){n.error({title:"Error",message:t.message})}finally{L(),r.target.reset()}}async function _(){s+=1,p();try{const r=await m(d,s);y(r.hits),D(),s*15>=u&&(O(),n.warning({title:"End",message:"We're sorry, but you've reached the end of search results."}))}catch{n.error({title:"Error",message:"Something went wrong. Try again later."})}finally{L()}}function D(){const a=document.querySelector(".gallery .gallery-item").getBoundingClientRect().height;window.scrollBy({top:a*1.5,behavior:"smooth"})}
//# sourceMappingURL=index.js.map
