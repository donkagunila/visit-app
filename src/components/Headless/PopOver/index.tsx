import {Popover} from "@headlessui/react";



function PopOver ({
                     ...props
                 }) {
    return (
        <Popover
            as="div"
            {...props}>
            {/* JSX content */}
        </Popover>
    );
}

export default PopOver