import "./app.css";

import { FunctionalComponent } from "preact";
import { useEffect } from "preact/hooks";

import { Shell } from "./shell";
import { ShellDef } from "./shell/type";

const MOCKUP_SHELL_DEF: ShellDef = {
    type: 'column',
    children: [],
};

export const App: FunctionalComponent = () => {
    useEffect(() => {

    }, []);

    return <>
        <Shell def={MOCKUP_SHELL_DEF}></Shell>
    </>;
}
