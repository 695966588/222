const $ = new Env('我的网红店');
let status;
status = (status = ($.getval("wdwhdstatus") || "1") ) > 1 ? `${status}` : ""; // 账号扩展字符
const wdwhdhdArr = [],wdwhdbodyArr = [],wdwhdspbodyArr = [],wdwhdcount = ''
let wdwhdhd = $.getdata('wdwhdhd')
let wdwhdbody = $.getdata('wdwhdbody')
let wdwhdspbody = $.getdata('wdwhdspbody')
const sphd = {
'Accept' : `*/*`,
'Accept-Encoding' : `gzip, deflate, br`,
'Connection' : `keep-alive`,
'Content-Type' : `application/json`,
'Host' : `api-access.pangolin-sdk-toutiao.com`,
'User-Agent' : `Mozilla/5.0 (iPhone; CPU iPhone OS 14_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148`,
'Accept-Language' : `zh-Hans-CN;q=1`
};
!(async () => {
  if (typeof $request !== "undefined") {
    await wdwhdck()
   
  } else {
    wdwhdhdArr.push("{\"app_id\":\"41\",\"Pkg-Name\":\"com.whddy.merge.puzzle.game\",\"Connection\":\"keep-alive\",\"Accept-Encoding\":\"br, gzip, deflate\",\"iv\":\"5481649756531687\",\"Content-Type\":\"application/json;charset=utf-8\",\"X-Unity-Version\":\"2019.3.10f1\",\"User-Agent\":\"game/4 CFNetwork/897.15 Darwin/17.5.0\",\"Host\":\"tinygame-api.beijingqianji.com\",\"lang\":\"cn\",\"Accept-Language\":\"zh-cn\",\"Accept\":\"*/*\",\"Content-Length\":\"216\"}")
    wdwhdbodyArr.push("inVJoZa23Dv6oJmkMbsJmst/IQDeULbwrXKQt367fOehC/k4sHwzDa5Od2HMldhdM9GxuO6Wb4zY2LhLr+MZG42bIHXVqVr6jgpQZ7OjqdsI4P/nwa1Ex2CQNNoHcOyATB3IsZuKmQLGfdtyTuwQdqUB6pwrc1QD7mSnjQRk9LuHCMTIm6c0ggQFBUSNaialiKOtBQoHkJaAzrvxOetnOQ==")
    wdwhdspbodyArr.push("{\"message\":\"3B3kjbS4aNUCNoTb0Ch5PZwLtQfyHZs8OxHKoEYfRV1WpebfEv5CQUVaClvXiQ\\/KTZK8silQfzO9miAY\\/\\/433pfiq5wTXMMkLHwjPre6hkljHvf+LBwhYIvKLl2by8i9Q1ZoZ5DQayBzheovReh4yhtccImc\\/REIZEDBUxe4\\/WtYkCYVEp22NShpZwu5JS8SAmj8dhLcL131gWuqmscmswLCcUKCUPpjvfmzrsRLvGMbOhtyPz\\/cDHte3rOUACgTzTnU1B5m89eQ77McRPGLBbd29fG2Cmu53JEHHNhWoLAsMUygpWvlJMIFB8OCdC4cxfJfq9Aaw+0AielyAvClTclGc\\/cYkEzeY\\/7hsFU9vWNpmzWXz\\/87XPjxY7E98ricwAQAmPTgpVuffn\\/NqUx5sm5O0CUC4JToH5tF9yAQUMkPdZd+1HxXAgmdbrdnbYqycMe3Ava8a5lhtVFaYYrjAZnWXlTAasXeBfASZCj4juYJwDs0vYouQ0N6E04wBsSLa0aa+TWiIKIS4LFTHvu9yzVoxAZvUX2LqKWoDE+zD5da9paujfE52HJs1VnoMwPauKDRu4WHLPEWUCtlm+tUgTnoJ7ranxjuoyLHwowQ3VWWdRr3386SV\\/AbgIqf8WN2fzOvcATSyNDVmolxn1Qf4BIQgrd9arZcx82PpxeWYpGfBbjwUPFipgv\\/JU7kNxjX+CSTqo2mJPqnxKI0NfsjewwzLBOndtZ6sPA\\/ayhlEdGoLqwQnalfPQySRuJsZbflgYXYFM5DP\\/\\/DdgeSAt37w2UtiO0CEpU+TjQuuKzTp5lAUbAQD0HF+aJdXqtbnPCIlb2d7tWFrXZMgNEH+eS5vTzZvnUBz8sEh\\/hKtgWFHfUy7eCICYG0TzGK0cqC+n068j\\/+eiCQKTR6epFriDDeJvN\\/HSB+7V656Lvb0iWin1YezDrNs11tA5YHpheJw+4D+yji56D6CTNAO6O0q7W2SGUUuvZgqy2MWTiLThDQ+qYEtxwMEENYljG2BulWCHOi+ccP7G0Haxb9okb6Jq9\\/xftqnyB4c+GODBqzG+43Ep+X\\/bE9wGwL8BKHLRR\\/r\\/SHmtwjxX+4opSeJZv6k3pxHWoqDoc6YBpMbbF\\/KW8k+0ldY0yw2tZTGPLgODp5HC\\/aGVycenbnRZOIhlTaOCfxuG5o9L\\/8FNiuUxxQFzxKvOMbrV36nvSJELt\\/VU12ENqXbKIHd80kxnKfeRSnk9\\/YRwC0NL4H5eFRt2LQKv4pnjrSqsNH78CnSHN\\/+TgS3l7m0ecQ6+Tr6NIubKTBx7\\/fMPgLuZIOe++R+n3mpyFqcn\\/cB8zi6PHNF3HbGA5vTVg34FuMp1FZFhf5L4GJP582KKWF7x0OUt0FK8JlLATdtyJELsa1BrTU\\/qhH\\/xMQm0Jrt9MJHyQhMQAe9AWv8Cdw1HRI67Jjz6xt371h2+VszptIHd7FpMbOWiqISE6iJOMmm1ISK0cVBNWsNLVPR2QlBwrd37ss20RVfUydnA4yc\\/M+vDC6+rpxx6zPTp3k+raWhGMxBU6A8DhFLGfXrF9zsBI2J26uN388rC6d9TIGvv+t9+RZmtKSDXfwBFvvAkWCobcisf1WUzCkREVMVay6Mu7KwGeExejc6lHWU3+gJobEPolXyZgLNNxW\\/8PT1atozEl1sp96sdYkXQQ6ubBxHbTa0wR9LCGZjXIUT\\/INVmXjP1sNVhCgkNrlrrjEWhp7Ul3WZyN+GJ\\/yLzs+CrffJL1v0ZuUhUKpQsTuaqWLAXq2SNRr3kiFQAWwur\\/8zRndOLxlOCG3ZBWq+YPsUyFCkK2DxczcyemB+E9yAJI2s\\/w20QzNUnO4z5btcsE6+KY2ZU9f1nb32p5askwcLmC2Ip76pYW34AU\\/sQOUPURWQlBeMYYHaOHh5Y3B4t4g3ZcL3Z7uH65Pq1yucHSXjnLN6vbV7X5gbFVvCmJAs9fPuYvsYXrt2+BW4sGIk4N82JeSkoHwLPQOQaMFO8SrBTm8mB7onBR285NaKC7oRF0ZOdu2hXUB64qF\\/X5YXZ7CBoeHEIm9PaM8haNqlGFp7jKEq9IEpFhDfcjqqYbFlthO7NWKySvvAbF70fkC0oC+deDdbVp4wGO8zdZk0NBBJ8r46oPAgnnzBUbv5XRGGaDAJ7ngEI9nXU2xHIEfoBjhKh7dWHHXy8sRAe81ZW6c3Wnjuh0F4o9Hw+O8akrkFgooSMoPe3dRd+9Q8hDLrXyb74hEuNuZJWUPbT9t1TxT0l1rKaVrbZPvEz1h7JIlDwXZVAkqqKniDt1oO0yecyM970op+Yr0Qy4lbA4FPiYlgls9YtOUKMyZcANWTpf5TjXmJUYt7LhkLObNzpa4VZIYuVYD01O+bqW6B9vOsJwuQn0D42bO0zyWmKqEKtr1EOz6iKdWD71LBMovkwCOjD0Dgw+StPcLL5yenGSr2u8pUr4O67faWYePIAzOQZpJh4w4kTRlFxAv23cbBi58VZVfFUQTv1QMbzXNlQ0XEtDdqk88prgnxWfm3GVfXYeV6qZtpZQPS2BNovanyLSxceHR+cQ33lam+WHh+l1RHqZhZaACp0l4k1zOyzvylePXmpKvgEX\\/U8rO54DOlJIUkr8G9Au4sDcNGGHRr6flUlb1Ij8eICpBctTLH+Vv95wsPVU\\/FBzHL31ag6XqyrC2zdoOi41xD0nHj59RkX1HvVX7EFeNMjl\\/1qfiSZj4JLc\\/0lTIDK60BhDtIlDYXLhT3mFZimIr8YJktIIgeBjkTFFhZX3NtP5am\\/A6aNwPKjAREkgqvcQlXrO8C6ci+ta1ity5rHqPTpM2IVODezH1e7Gg7XR4vnIOYdUCHPEy04z3cWBMYXf3FIMiGCnrVYgCFXD93PHqYRL16Vw86HF3Kv8aS6MxTFZBuaGhAiLbmFecUEvWQesrs4zgxPgYWip2seJ2zHggzChW38lg9JLj6n49EdCLg9iIfzi2ZJEA9JVOM19EjeIB+lbYWgqjVe+CoVphPABYqZqVWgjwKHn7GEKWUmq+boKp5ZcQOu2gk3zxfmapnnxjwooZpqs\\/bV857JDBYWxicfoc36oPGs18n+DoptQeTTlVcOvbGnGjUHv7EsmuQRTfGcJ+eo1FyjxHs0NwZIOeN5182gbjcKpIXzLbtl+O\\/KPR3aGkpBmVscR2z6OpuK2E92RHLq\\/KgQvofDmulUwAL5RirOP6SbTcXiMeB0tNZEhyNtiob7JzJo3mz73hB9\\/JROop4U7DwFcIQkd1myLcZWpTIb1YD2ynn71kZ4bTxlPWO5xoxe7Jpkd6wHChXetTjoqq4kvuG3LEDtvlThVYALOX7aQcW\\/qZlhR3b5XiGoAiYvNhL5fYox0lNXOfe774+7C3Iyyzc9wdLeNsYJc7PqLDBZ\\/gM\\/MxhIfrBL5LaRosCVw7YAPQOrQ3oWNL4CVOXBUkZ0mYG1sTA7Nwde5RtzeSVmHaJ0O6JgFXLKQkZxeGRo6rGrO2tQVPcw8zRwK0HX4WQdZ+g6zbVKKak8nckSmHG37wUWRzhBHWGAlLwxkItxL2H\\/sbEBgxawMuwKVFzX\\/jQQD1gGCDcCfPorl0laNfwGZ8Jfv+4Jq3hqAeYGwlXtSMZojTH60zgHgBmcGSg9PG9gj6OQrt23HKbURX21YzKvHLEgwbB8g331yyaZXEiuKR6Yx18gJGoYmLc2XNlDrtpDkVD79h7I6MoLm5gn1Z4RM\\/efC11L11Ln28cMCA6ALpzWTOW\\/NZ\\/rVhkAKiFJVc8z6rEBm1ruobAoCW0uZrwLAEZ01tmPVa3zdEX0+8Id77aTCpfdn20187aTxmF5jj9ZEP9S8nj2EOsG1lVvMANFlf+oBp6tuYDPvu\\/RVYGYASnQWR7nB3QmmHq\\/GJzcpktCQHlpN0Tx6VTHhOXWfoi5iN3Uxjf7V3GdA1W\\/W0V1HyGplhMUGxb7flxU5xPAvaE3oywIdYl+GHvUkqwlzKXHM84BHQvmHTh7kAINmHsnTY+EHjsFG220BMzIuB0dGwirUa8jc91\\/3Pc1puwPkKzZrZWm5EWQUyDJhCFQQTJFeVS8hW3zp7f\\/c0dfysV1FASjWdsdVfNTR2k+pKel7AupQqw3ZZxjjfNH3StYzjfQUusvqNS3bLH3hanwMJSsohBGLTkdJKMOrvi6JgZgkMeOJS0xcf4S9xRJXZybRHtI5Sv5W0O+bL915BvWXe3pBES7VXSEksvrWuRGLitclln6lFz9Tro8\\/Vfw9Q22zTti4C5iqqzcrCFDLEUpjQiwSfK9ymsS+IlTdoLoRNwTo4qzb1vSI7dUslzPJRvVC9SgSk=\",\"cypher\":3}")
    let wdwhdcount = ('1');
 
    console.log(`------------- 共${wdwhdhdArr.length}个账号-------------\n`)
    for(let j = 0; j < 217; j++) {  
      console.log(`第${j+1}次运行`);
      for (let i = 0; i < wdwhdhdArr.length; i++) {
        if (wdwhdhdArr[i]) {
          wdwhdhd = wdwhdhdArr[i];
          wdwhdbody = wdwhdbodyArr[i];
          wdwhdspbody = wdwhdspbodyArr[i];
          $.index = i + 1;
          console.log(`\n开始【我的网红店${$.index}】`)
   
    
         await wdwhdsp();
         

    
    
  }
}

    }}

})()
  .catch((e) => $.logErr(e))
  .finally(() => $.done())
//数据获取


function wdwhdck() {
   if ($request.url.indexOf("imp_callback") > -1) {
 
  const wdwhdhd = JSON.stringify($request.headers)
        if(wdwhdhd)    $.setdata(wdwhdhd,`wdwhdhd${status}`)
$.log(wdwhdhd)
const wdwhdbody = $request.body
        if(wdwhdbody)    $.setdata(wdwhdbody,`wdwhdbody${status}`)
$.log(wdwhdbody)
   $.msg($.name,"",'我的网红店'+`${status}` +'红包数据获取成功！')
  }else if ($request.url.indexOf("reward_video/reward/") > -1) {
 
const wdwhdspbody = $request.body
        if(wdwhdspbody)    $.setdata(wdwhdspbody,`wdwhdspbody${status}`)
$.log(wdwhdspbody)
   $.msg($.name,"",'我的网红店'+`${status}` +'视频数据获取成功！')
  }
}

//红包
function wdwhdhb(timeout = 0) {
  return new Promise((resolve) => {

let url = {
        url : 'https://tinygame-api.beijingqianji.com/en/check/imp_callback',
        headers : JSON.parse(wdwhdhd),
        body : wdwhdbody,
}
      $.post(url, async (err, resp, data) => {
        try {
    //const result = JSON.parse(data)
        if(resp.statusCode == 200){
  $.log(`\n我的网红店:成功领取红包`)
} else {

        $.log(`\n我的网红店:领取失败${data}`)
 
}
   
        } catch (e) {
          //$.logErr(e, resp);
        } finally {
          resolve()
        }
    },timeout)
  })
}


function wdwhdsp(timeout = 0) {
  return new Promise((resolve) => {

let url = {
        url : 'https://api-access.pangolin-sdk-toutiao.com/api/ad/union/sdk/reward_video/reward/',
        headers : sphd,
        body : wdwhdspbody,
}
      $.post(url, async (err, resp, data) => {
        try {
    const result = JSON.parse(data)
        if(result.cypher == 3){
  $.log(`\n我的网红店视频观看成功`)
    await $.wait(15000)
   await wdwhdhb();
    
} else {

        $.log(`\n我的网红店视频观看失败:${data}`)
 
}
   
        } catch (e) {
          //$.logErr(e, resp);
        } finally {
          resolve()
        }
    },timeout)
  })
}

function Env(t,e){class s{constructor(t){this.env=t}send(t,e="GET"){t="string"==typeof t?{url:t}:t;let s=this.get;return"POST"===e&&(s=this.post),new Promise((e,i)=>{s.call(this,t,(t,s,r)=>{t?i(t):e(s)})})}get(t){return this.send.call(this.env,t)}post(t){return this.send.call(this.env,t,"POST")}}return new class{constructor(t,e){this.name=t,this.http=new s(this),this.data=null,this.dataFile="box.dat",this.logs=[],this.isMute=!1,this.isNeedRewrite=!1,this.logSeparator="\n",this.startTime=(new Date).getTime(),Object.assign(this,e),this.log("",`\ud83d\udd14${this.name}, \u5f00\u59cb!`)}isNode(){return"undefined"!=typeof module&&!!module.exports}isQuanX(){return"undefined"!=typeof $task}isSurge(){return"undefined"!=typeof $httpClient&&"undefined"==typeof $loon}isLoon(){return"undefined"!=typeof $loon}toObj(t,e=null){try{return JSON.parse(t)}catch{return e}}toStr(t,e=null){try{return JSON.stringify(t)}catch{return e}}getjson(t,e){let s=e;const i=this.getdata(t);if(i)try{s=JSON.parse(this.getdata(t))}catch{}return s}setjson(t,e){try{return this.setdata(JSON.stringify(t),e)}catch{return!1}}getScript(t){return new Promise(e=>{this.get({url:t},(t,s,i)=>e(i))})}runScript(t,e){return new Promise(s=>{let i=this.getdata("@chavy_boxjs_userCfgs.httpapi");i=i?i.replace(/\n/g,"").trim():i;let r=this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");r=r?1*r:20,r=e&&e.timeout?e.timeout:r;const[o,h]=i.split("@"),a={url:`http://${h}/v1/scripting/evaluate`,body:{script_text:t,mock_type:"cron",timeout:r},headers:{"X-Key":o,Accept:"*/*"}};this.post(a,(t,e,i)=>s(i))}).catch(t=>this.logErr(t))}loaddata(){if(!this.isNode())return{};{this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e);if(!s&&!i)return{};{const i=s?t:e;try{return JSON.parse(this.fs.readFileSync(i))}catch(t){return{}}}}}writedata(){if(this.isNode()){this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e),r=JSON.stringify(this.data);s?this.fs.writeFileSync(t,r):i?this.fs.writeFileSync(e,r):this.fs.writeFileSync(t,r)}}lodash_get(t,e,s){const i=e.replace(/\[(\d+)\]/g,".$1").split(".");let r=t;for(const t of i)if(r=Object(r)[t],void 0===r)return s;return r}lodash_set(t,e,s){return Object(t)!==t?t:(Array.isArray(e)||(e=e.toString().match(/[^.[\]]+/g)||[]),e.slice(0,-1).reduce((t,s,i)=>Object(t[s])===t[s]?t[s]:t[s]=Math.abs(e[i+1])>>0==+e[i+1]?[]:{},t)[e[e.length-1]]=s,t)}getdata(t){let e=this.getval(t);if(/^@/.test(t)){const[,s,i]=/^@(.*?)\.(.*?)$/.exec(t),r=s?this.getval(s):"";if(r)try{const t=JSON.parse(r);e=t?this.lodash_get(t,i,""):e}catch(t){e=""}}return e}setdata(t,e){let s=!1;if(/^@/.test(e)){const[,i,r]=/^@(.*?)\.(.*?)$/.exec(e),o=this.getval(i),h=i?"null"===o?null:o||"{}":"{}";try{const e=JSON.parse(h);this.lodash_set(e,r,t),s=this.setval(JSON.stringify(e),i)}catch(e){const o={};this.lodash_set(o,r,t),s=this.setval(JSON.stringify(o),i)}}else s=this.setval(t,e);return s}getval(t){return this.isSurge()||this.isLoon()?$persistentStore.read(t):this.isQuanX()?$prefs.valueForKey(t):this.isNode()?(this.data=this.loaddata(),this.data[t]):this.data&&this.data[t]||null}setval(t,e){return this.isSurge()||this.isLoon()?$persistentStore.write(t,e):this.isQuanX()?$prefs.setValueForKey(t,e):this.isNode()?(this.data=this.loaddata(),this.data[e]=t,this.writedata(),!0):this.data&&this.data[e]||null}initGotEnv(t){this.got=this.got?this.got:require("got"),this.cktough=this.cktough?this.cktough:require("tough-cookie"),this.ckjar=this.ckjar?this.ckjar:new this.cktough.CookieJar,t&&(t.headers=t.headers?t.headers:{},void 0===t.headers.Cookie&&void 0===t.cookieJar&&(t.cookieJar=this.ckjar))}get(t,e=(()=>{})){t.headers&&(delete t.headers["Content-Type"],delete t.headers["Content-Length"]),this.isSurge()||this.isLoon()?(this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.get(t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)})):this.isQuanX()?(this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t))):this.isNode()&&(this.initGotEnv(t),this.got(t).on("redirect",(t,e)=>{try{if(t.headers["set-cookie"]){const s=t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();this.ckjar.setCookieSync(s,null),e.cookieJar=this.ckjar}}catch(t){this.logErr(t)}}).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>{const{message:s,response:i}=t;e(s,i,i&&i.body)}))}post(t,e=(()=>{})){if(t.body&&t.headers&&!t.headers["Content-Type"]&&(t.headers["Content-Type"]="application/x-www-form-urlencoded"),t.headers&&delete t.headers["Content-Length"],this.isSurge()||this.isLoon())this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.post(t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)});else if(this.isQuanX())t.method="POST",this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t));else if(this.isNode()){this.initGotEnv(t);const{url:s,...i}=t;this.got.post(s,i).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>{const{message:s,response:i}=t;e(s,i,i&&i.body)})}}time(t){let e={"M+":(new Date).getMonth()+1,"d+":(new Date).getDate(),"H+":(new Date).getHours(),"m+":(new Date).getMinutes(),"s+":(new Date).getSeconds(),"q+":Math.floor(((new Date).getMonth()+3)/3),S:(new Date).getMilliseconds()};/(y+)/.test(t)&&(t=t.replace(RegExp.$1,((new Date).getFullYear()+"").substr(4-RegExp.$1.length)));for(let s in e)new RegExp("("+s+")").test(t)&&(t=t.replace(RegExp.$1,1==RegExp.$1.length?e[s]:("00"+e[s]).substr((""+e[s]).length)));return t}msg(e=t,s="",i="",r){const o=t=>{if(!t)return t;if("string"==typeof t)return this.isLoon()?t:this.isQuanX()?{"open-url":t}:this.isSurge()?{url:t}:void 0;if("object"==typeof t){if(this.isLoon()){let e=t.openUrl||t.url||t["open-url"],s=t.mediaUrl||t["media-url"];return{openUrl:e,mediaUrl:s}}if(this.isQuanX()){let e=t["open-url"]||t.url||t.openUrl,s=t["media-url"]||t.mediaUrl;return{"open-url":e,"media-url":s}}if(this.isSurge()){let e=t.url||t.openUrl||t["open-url"];return{url:e}}}};this.isMute||(this.isSurge()||this.isLoon()?$notification.post(e,s,i,o(r)):this.isQuanX()&&$notify(e,s,i,o(r)));let h=["","==============\ud83d\udce3\u7cfb\u7edf\u901a\u77e5\ud83d\udce3=============="];h.push(e),s&&h.push(s),i&&h.push(i),console.log(h.join("\n")),this.logs=this.logs.concat(h)}log(...t){t.length>0&&(this.logs=[...this.logs,...t]),console.log(t.join(this.logSeparator))}logErr(t,e){const s=!this.isSurge()&&!this.isQuanX()&&!this.isLoon();s?this.log("",`\u2757\ufe0f${this.name}, \u9519\u8bef!`,t.stack):this.log("",`\u2757\ufe0f${this.name}, \u9519\u8bef!`,t)}wait(t){return new Promise(e=>setTimeout(e,t))}done(t={}){const e=(new Date).getTime(),s=(e-this.startTime)/1e3;this.log("",`\ud83d\udd14${this.name}, \u7ed3\u675f! \ud83d\udd5b ${s} \u79d2`),this.log(),(this.isSurge()||this.isQuanX()||this.isLoon())&&$done(t)}}(t,e)}
