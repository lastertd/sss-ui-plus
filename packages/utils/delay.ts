/**
 * @description 延时一段时间
 * @param timeout 延时时间
 */
export const delay =  function (timeout:number = 0) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve("ok");
        },timeout);
    })
}
