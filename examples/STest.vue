<script setup lang="ts">
import {asyncDebounce, debounce} from "../src/utils/decorator/debounce.ts";


type myType = '123' | '456';

const func = asyncDebounce((a: myType) => {
	console.log(a);
	return 'hello world!';
}, 3000);


let res = func('123');
res = func('123');
res = func('123');

res.then((data) => {

})








</script>
