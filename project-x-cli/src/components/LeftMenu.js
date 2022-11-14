import React  from "react";
import {Menu, Grid} from "antd";
import {Link} from "react-router-dom";

const {useBreakpoint} = Grid;

export default function LeftMenu() {
    const {md} = useBreakpoint();
    return (
        <>
            <Menu mode={md ? "horizontal" : "inline"}>
                <Menu.Item>
                    <Link to="/">Home</Link>
                </Menu.Item>
                <Menu.Item>
                    <Link to="/blog">Blog</Link>
                </Menu.Item>
                <Menu.Item>
                    <Link to="/contact">Contact Us</Link>
                </Menu.Item>
            </Menu>
        </>
    );
}
