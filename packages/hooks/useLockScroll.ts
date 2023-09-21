
// 全局计数器
let count = 0;
/**
 * @description 使用禁止滚动
 */
export const useLockScroll = function () {

    const body = document.body;

    /**
     * @description 锁定滚动
     */
    const lockScroll = function () {

        if (count === 0) {
            const a = body.offsetWidth;
            document.body.style.overflowY = "hidden"
            const b = body.offsetWidth;
            document.body.style.marginRight = `${b - a}px`;

        }
        count++;
    }
    /**
     * @description 解锁滚动
     */
    const unLockScroll = function () {
        count--;
        if (count <= 0) count = 0;
        if (count === 0) {
            document.body.style.overflowY = "auto"
            document.body.style.marginRight = '0';
        }
    }

    return {
        lockScroll,
        unLockScroll
    }
}