        window.onload = function() {
            document.onkeydown = function() {
                var e = window.event || arguments[0];
                //屏蔽F12
                if(e.keyCode == 123) {
					alert("请尊重劳动成果！");
                    return false;
					
                 //屏蔽Ctrl+Shift+I
                } else if((e.ctrlKey) && (e.shiftKey) && (e.keyCode == 73)) {
					alert("请尊重劳动成果！");
                    return false;
                    //屏蔽Shift+F10
                } else if((e.shiftKey) && (e.keyCode == 121)){
					alert("请尊重劳动成果！");
                    return false;                }
            };
            //屏蔽右键单击
            document.oncontextmenu = function() {
				alert("请尊重劳动成果！");
                return false;
            }
        }