
export const SDropdownItemProps = {
    suffixIcon:String,
    prefixIcon:String,
    label:String,
    value:String,
}

export const SDropdownItemEmits = {
    select:(value:string | undefined) => true
}