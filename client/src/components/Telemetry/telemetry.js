import { useEffect } from "react";

function useAppInsights() {
  useEffect(() => {
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.async = true;
    script.innerHTML = `
      var appInsights=window.appInsights||function(config){
        function r(config){t[config]=function(){var i=arguments;t.queue.push(function(){t[config].apply(t,i)})}}
        var t={config:config},u=document,e=window,o="script",s=u.createElement(o),i,f;
        s.src=config.url||"//az416426.vo.msecnd.net/scripts/a/ai.0.js";
        u.getElementsByTagName(o)[0].parentNode.appendChild(s);
        try{t.cookie=u.cookie}catch(h){}
        for(t.queue=[],i=["Event","Exception","Metric","PageView","Trace","Dependency"];i.length;)r("track"+i.pop());
        return r("setAuthenticatedUserContext"),r("clearAuthenticatedUserContext"),
        config.disableExceptionTracking||(i="onerror",r("_"+i),f=e[i],e[i]=function(config,r,u,e,o){
          var s=f&&f(config,r,u,e,o);return s!==!0&&t["_"+i](config,r,u,e,o),s
        }),t
      }({
        instrumentationKey: "8084348c-4b13-44f1-9e2a-68862c20c400"
      });
      window.appInsights=appInsights;
    `;
    document.body.appendChild(script);

    return () => {
      // Cleanup if needed
      document.body.removeChild(script);
    };
  }, []);
}

export default useAppInsights;
