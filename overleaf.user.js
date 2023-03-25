// ==UserScript==
// @name         Beautify overleaf
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  beautiful overleaf
// @author       You
// @match        https://www.overleaf.com/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        GM_addStyle
// ==/UserScript==
function addStyle() {
    let css = `
        ::-webkit-scrollbar {
        width: 4px;
        height: 6px;
        background-color: transparent;
        border-style: none;
        }

        ::-webkit-scrollbar-track:hover {
            background-color: rgba(0, 0, 0, .1);
        }

        ::-webkit-scrollbar-thumb,
        ::-webkit-scrollbar-thumb {
            background-clip: border-box;
            background-color: rgba(0, 0, 0, .2);
        }

        ::-webkit-scrollbar-thumb:hover {
            background-color: rgba(0, 0, 0, .3);
        }

        ::-webkit-scrollbar-thumb:active {
            background-color: rgba(0, 0, 0, .5);
        }

        botton {
            font-size: 4px;
        }
        `;

    GM_addStyle(css);
};


(function() {
    'use strict';

    setTimeout(function () {
    var obj=document.getElementsByClassName("cm-gutter-lint")[0];
    obj.remove();
    console.log(obj);
        var button2 = document.createElement("button");
        button2.id = "id002";
        button2.textContent = "L";
        button2.style.width = "38px";
        button2.style.height = "38px";
        button2.style.border = "none";
        button2.style.align = "center";
        button2.onclick = function (){
            var obj=document.getElementsByClassName("cm-gutters")[0];
            if(obj.style.display=="none"){
                obj.style.display="flex";
            }
            else{
                obj.style.display="none";
            }
            
        }
        var button = document.createElement("button");
        button.id = "id001";
        button.textContent = "F";
        button.style.width = "38px";
        button.style.height = "38px";
        button.style.border = "none";
        button.style.align = "center";
        button.onclick = function (){
            let tb=document.getElementsByClassName("toolbar-header")[0];
            let main=document.getElementById("ide-body");
            let pane=document.getElementsByClassName("ui-layout-pane")
            // tb.remove();
            if(tb.style.display=="none"){
                tb.style.display='flex';
                main.style.top = "40";
            }
            else{
                tb.style.display="none";
                main.style.top = "0";
                for(obj in pane){
                    obj.style.height = 700;
                }
            }
		    return;
	    };
        // var x = document.getElementsByClassName('project-name')[0];

        // var onuser = document.getElementsByClassName('online-user')[1];
        var tabedit = document.getElementsByClassName('toolbar-editor')[0];
        tabedit.appendChild(button2);
        tabedit.appendChild(button);
        addStyle();
}, 3000);
})();