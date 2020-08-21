/**
 * Created by lsh on 2020/6/30.
 */
// css 需要的固定样式 文件
import '../css/loading.css';
// 转动的图svg效果
import segma_loading from '../image/loading.svg';

function getElementStyle(obj, attr) {
    if (obj.currentStyle) {
        return obj.currentStyle[attr];
    } else {
        return getComputedStyle(obj, false)[attr];
    }
}

export default {
    inserted: (el, binding, Vnode) => {
        let bgColor = 'rgba(255, 255, 255, 0.65)'
        let text = ''
        //设置 loading 整个区域的 背景颜色和文字提示
        let obj = Vnode.data
        if (obj && obj.attrs) {
            bgColor = typeof obj.attrs['segma-loading-background'] !== 'undefined' ? obj.attrs['segma-loading-background'] : bgColor
            text = typeof obj.attrs['segma-loading-text'] !== 'undefined' ? obj.attrs['segma-loading-text'] : text
        }
        //背景框dom和样式
        const tempDiv = document.createElement('div');
        tempDiv.className = 'custom-loading';
        tempDiv.style.backgroundColor = bgColor

        //loading总区域dom 和 class
        const roundDiv = document.createElement('div');
        roundDiv.className = 'custom-loading-round';

        //loading图dom和class
        const roundEle = document.createElement('div');
        roundEle.innerHTML = `<img src=${segma_loading}>`;
        roundEle.className = 'custom-loading-icon';

        //文字区域 样式
        if (text !== '') {
            const textEle = document.createElement('div');
            textEle.innerHTML = text;
            textEle.className = 'custom-loading-text';
            roundDiv.appendChild(textEle);
        }
        //注册在需要loading的el元素上
        roundDiv.appendChild(roundEle);
        tempDiv.appendChild(roundDiv);
        el.loadingElement = tempDiv;

        //loading 内部旋转动画相对于外层absolute 所以外层的父级需要 relative
        const position = getElementStyle(el, 'position');
        if (position !== 'absolute' && position !== 'relative') {
            el.style.position = 'relative';
        }
        //binding.value v-segma-loading的值  true/false
        if (binding.value) {
            el.appendChild(tempDiv);
        }
    },
    update: (el, binding) => {
        if (binding.value) {
            if (el.loadingElement.parentNode === null) {
                el.appendChild(el.loadingElement);
            }
        } else {
            if (el === el.loadingElement.parentNode) {
                el.removeChild(el.loadingElement);
            }
        }
    },
    unbind: (el) => {
        //解绑
        if (el.loadingElement.parentNode === el) {
            el.removeChild(el.loadingElement);
        }
        el.loadingElement = null;
    }
};