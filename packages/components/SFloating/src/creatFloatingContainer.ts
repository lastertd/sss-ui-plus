import {IndexManager} from "@sss-ui-plus/utils";


const _ = function () {
    const floatingContainer: HTMLElement = document.createElement('div');
    const appendTo = document.body;
    const indexManager = new IndexManager();

    floatingContainer.classList.add('___sss-floating-container');
    floatingContainer.style.zIndex = indexManager.nextIndex().toString();
    appendTo.appendChild(floatingContainer);
    return "＞﹏＜";
}

export default _();