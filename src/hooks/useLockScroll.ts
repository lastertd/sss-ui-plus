
let count = 0;
export default function (){

    const lockScroll = function (){
        if (count === 0){
            document.body.style.overflowY = "hidden"
        }
        count++;
    }
    const unLockScroll = function () {
        count--;
        if (count <= 0) count = 0;
        if (count === 0){
            document.body.style.overflowY = "auto"
        }
    }

    return{
        lockScroll,
        unLockScroll
    }
}