import IndexManager from "../../../src/utils/managers/IndexManager";

const _ = function () {
    const floatingContainer: HTMLElement = document.createElement('div');
    const appendTo = document.body;

    floatingContainer.classList.add('___sss-floating-container');
    floatingContainer.style.zIndex = IndexManager.nextIndex().toString();
    appendTo.appendChild(floatingContainer);
    return "＞﹏＜";
}

export default _();