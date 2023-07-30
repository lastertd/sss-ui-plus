/**
 * @description 延时一段时间
 * @param timeout 延时时间
 */
export default function (timeout:number) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve("ok");
        },timeout);
    })
}