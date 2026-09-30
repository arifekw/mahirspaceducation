(()=>{
const c=window.MAHIR_PROMO,box=document.getElementById('campaign');
if(!c?.enabled||!box)return;
const end=Date.parse(c.endsAt);if(!Number.isFinite(end)||end<=Date.now())return;
box.hidden=false;document.getElementById('campaign-title').textContent=c.title||'Promo Mahir Space';
let expired=false;
function tick(){const remaining=Math.max(0,Math.floor((end-Date.now())/1000));if(!remaining){expired=true;box.hidden=true;clearInterval(clock);clearInterval(poll);if(typeof renderPrices==='function')renderPrices();return;}const days=Math.floor(remaining/86400),h=Math.floor(remaining%86400/3600),m=Math.floor(remaining%3600/60),s=remaining%60;document.getElementById('countdown').textContent=`${days} hari ${h} jam ${m} menit ${s} detik`;}
async function quota(){const el=document.getElementById('quota');el.hidden=true;if(!c.quotaEndpoint||expired)return;try{const response=await fetch(c.quotaEndpoint,{cache:'no-store',signal:AbortSignal.timeout(8000)});if(!response.ok)throw Error('Unavailable');const data=await response.json(),age=Date.now()-Date.parse(data.updatedAt);if(expired||!Number.isInteger(data.remaining)||data.remaining<0||!Number.isFinite(age)||age<0||age>120000)return;el.textContent=data.remaining===0?'Kuota promo telah penuh. Hubungi tutor untuk jadwal berikutnya.':`Sisa kuota promo: ${data.remaining} peserta · diperbarui ${new Date(data.updatedAt).toLocaleTimeString('id-ID',{timeZone:'Asia/Jakarta'})} WIB`;el.hidden=false;}catch{el.hidden=true;}}
const clock=setInterval(tick,1000),poll=setInterval(quota,30000);tick();quota();
})();
