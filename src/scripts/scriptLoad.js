import React, { useState, useEffect } from "react";
let cachedScripts = [];
const useScript = src => {
    const [scriptLoad, loadScript] = useState(false);
    const [state, setState] = useState({
        loaded: false,
        error: false
    });

    useEffect(() => {
        //if cachedScripts arr includes src that means the script has already loaded
        if (cachedScripts.includes(src)) {
            setState({
                loaded: true,
                error: false
            });
        } else {
            cachedScripts.push(src);

            //create Script
            let script = document.createElement("script");
            script.src = src;
            script.async = true;

            //script event listener
            const onScriptLoad = () => {
                setState({
                    loaded: true,
                    error: false
                });
                loadScript(true);
            };

            const onScriptError = () => {
                const index = cachedScripts.indexOf(src);
                if (index >= 0) cachedScripts.splice(index, 1);
                script.remove();

                setState({
                    loaded: true,
                    error: true
                });
            };

            script.addEventListener("load", onScriptLoad);
            script.addEventListener("error", onScriptError);

            document.body.appendChild(script);

            //remove event listeners on cleanup

            return () => {
                script.removeEventListener("load", onScriptLoad);
                script.removeEventListener("error", onScriptError);
            };
        }
    }, [src]);
    return [state.loaded, state.error];
};

export default useScript;
