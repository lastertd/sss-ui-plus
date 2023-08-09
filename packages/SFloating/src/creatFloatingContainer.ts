import IndexManager from "../../../src/utils/managers/IndexManager.ts";

export default function () {
    const floatingContainer: HTMLElement = document.createElement('div');
    const appendTo = document.body;

    floatingContainer.classList.add('___sss-floating-container');
    floatingContainer.style.zIndex = IndexManager.nextIndex().toString();
    appendTo.appendChild(floatingContainer);
}