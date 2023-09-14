import {Ref, ref} from "vue";

export const useFlag =  function (f:Boolean = false)  {
    const flag:Ref<Boolean> = ref<Boolean>(f);
    const setFalse = function () {
        flag.value = false;
    }
    const setTrue = function () {
        flag.value = true;
    }

    const toggle = function () {
        if (flag.value){
            setFalse();
        }
        else{
            setTrue();
        }
    }

    return {
        flag,
        setTrue,
        setFalse,
        toggle
    }

}