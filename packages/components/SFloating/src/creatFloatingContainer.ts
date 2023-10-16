import {IndexManager} from "@sss-ui-plus/utils";


const _ = function () {
    const floatingContainer: HTMLElement = document.createElement('div');
    const appendTo = document.body;

    floatingContainer.classList.add('___sss-floating-container');
    floatingContainer.style.zIndex = new IndexManager().nextIndex().toString();
    appendTo.appendChild(floatingContainer);
    return void 0;
}

export default _();