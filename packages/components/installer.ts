import SInput from "./SInput";
import SButton from "./SButton";
import SIcon from "./SIcon";
import SLink from "./SLink";
import SDialog from "./SDialog";
import SDrawer from "./SDrawer";
import SRow from "./SRow";
import SDivider from "./SDivider";
import SSwitch from "./SSwitch";
import SFloating from "./SFloating";
import STooltip from "./STooltip";
import SPopconfirm from "./SPopConfirm";
import SDropdown from "./SDropdown";
import SDropdownItem from "./SDropDownItem";
import SScrollbar from "./SScrollbar";
import SCascader from "./SCascader";
import SSkeleton from "./SSkeleton";
import SSkeletonItem from "./SSkeletonItem";
import SBadge from "./SBadge";
import {App} from "vue";

const comps =  {
    SInput,
    SButton,
    SIcon,
    SLink,
    SDrawer,
    SDialog,
    SRow,
    SDivider,
    SSwitch,
    SFloating,
    STooltip,
    SPopconfirm,
    SDropdown,
    SDropdownItem,
    SScrollbar,
    SCascader,
    SSkeleton,
    SSkeletonItem,
    SBadge

}

export default function (Vue:App) {
    for (let key in comps){
        const comp = Reflect.get(comps, key);
        Vue.use(comp);

    }
}