import Button from "../Button";
import {Link} from "react-router-dom";
import Lucide from "../../Lucide";

interface IViewButtonProps {
    url: string;
}

const ViewButton = (props: IViewButtonProps) => {
    return (
        <div className="btn-group">
            <Link to={props.url}>
                <Button variant="accent" className="border-none text-xs min-w-[70px] cursor-pointer">
                    <Lucide icon="Eye" className="w-3 h-3 mr-2"/>
                    View
                </Button>
            </Link>
        </div>
    );
};

export default ViewButton;
