let longStrCutCount = 0;
let longStrCutTimer;
import './tip_data.css'

/**
 * 等分成坐标系
 * @param e 鼠标事件
 * @returns {*}
 */
let overPage = (e) => {
    //鼠标是否在右半部分
    let boundaryX = e.pageX > (window.innerWidth / 2)
    //鼠标否在下半部分
    let boundaryY = e.pageY > (window.innerHeight / 2)
    //第二象限
    if (boundaryX && !boundaryY) {
        return {
            left: 'auto', top: e.pageY + 10 + 'px', right: window.innerWidth - e.pageX + 'px', bottom: 'auto',
        }
    }
    //第三象限
    if (!boundaryX && boundaryY) {
        return {
            left: e.pageX + 'px', top: 'auto', right: 'auto', bottom: window.innerHeight - e.pageY + 'px',
        }
    }
    //第一象限
    if (!boundaryX && !boundaryY) {
        return {
            left: e.pageX + 10 + 'px', top: e.pageY + 10 + 'px', right: 'auto', bottom: 'auto',
        }
    }
    //第四象限
    if (boundaryX && boundaryY) {
        return {
            left: 'auto', top: 'auto', right: window.innerWidth - e.pageX + 'px', bottom: window.innerHeight - e.pageY + 'px'
        }
    }
}
/**
 * 获取提示信息
 * @param el
 * @param value
 * @returns {*}
 */
let getText = (el, value) => {
    if (value && value.text) {
        return value.text
    } else {
        let str = el.innerText || el.value || el.textContent || value;
        if (!str) return '';
        str = str.toString();
        if (el.children.length) {
            str = el.innerHTML;
        }
        return str
    }
}
export default {
    bind(el, { value }) {
        if (value) {
            el.classList.add("overLine");
            el.style.cssText += `-webkit-line-clamp: ${value.line};`
        } else {
            el.classList.add("overflow");
        }
        if (document.getElementById('tipClassId')) return
        let div = document.createElement('div')
        div.id = 'tipClassId'
        div.className = 'tipClass'
        document.body.appendChild(div)
    },
    inserted(el, binding, vnode) {
        console.log(el, '触发指令',)
        let _this = vnode.context;
        let value = binding.value;
        let str = getText(el, value,)

        // 处理特殊情况

        let div = document.getElementById('tipClassId')

        _this.$nextTick(() => {
            if (el.scrollWidth >= el.offsetWidth) {
                // 思考：能否用addEventListener实现
                // 目前的问题是在inserted中定义的事件回调无法在update中removeEventListener
                el.onmousemove = (e) => {
                    div.style.visibility = 'visible'
                    overPage(e)
                    div.innerText = getText(el, value,)
                    div.style.left = overPage(e).left
                    div.style.right = overPage(e).right
                    div.style.top = overPage(e).top
                    div.style.bottom = overPage(e).bottom
                };
                el.onmouseout = () => {
                    div.style.visibility = 'hidden'
                };
                el.onfocus = () => {
                    div.style.visibility = 'hidden'
                    el.onmousemove = () => {
                    };
                    el.onmouseout = () => {
                    };
                };
                el.onblur = () => {
                    el.onmousemove = (e) => {
                        div.style.visibility = 'visible'
                        overPage(e)
                    };
                    el.onmouseout = () => {
                        div.style.visibility = 'hidden'
                    };
                };
            }
        });

    },
    update(el, binding, vnode) {
        let value = binding.value;
        let oldValue = binding.oldValue;
        if (value === oldValue) return;
        clearTimeout(longStrCutTimer);
        longStrCutTimer = setTimeout(() => {
            longStrCutCount = 0;
        }, 100);
        setTimeout(() => {
            longStrCutCount++;
            let _this = vnode.context;

            let div = document.getElementById('tipClassId')
            div.innerText = getText(el, value,);

            _this.$nextTick(() => {
                if (el.scrollWidth > el.offsetWidth) {
                    // 思考：能否用addEventListener实现
                    // 目前的问题是在inserted中定义的事件回调无法在update中removeEventListener
                    el.onmousemove = (e) => {
                        div.style.visibility = 'visible'
                        overPage(e)

                        div.innerText = getText(el, value);
                        div.style.left = overPage(e).left
                        div.style.right = overPage(e).right
                        div.style.top = overPage(e).top
                        div.style.bottom = overPage(e).bottom
                    };
                    el.onmouseout = () => {
                        div.style.visibility = 'hidden'
                    };
                    el.onfocus = () => {
                        div.style.visibility = 'hidden'
                    };
                    el.onblur = () => {
                        el.onmousemove = (e) => {
                            div.style.visibility = 'visible'
                            overPage(e)
                        };
                        el.onmouseout = () => {
                            div.style.visibility = 'hidden'
                        };
                    };
                }
            });
        }, longStrCutCount / 50);
    },
    unbind() {
        // console.log('解绑指令',)
        window.tipData = '';
    }
};
