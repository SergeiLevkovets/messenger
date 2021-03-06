import React from "react";
import {create} from "react-test-renderer";
import ProfileStatus from "./ProfileStatus";

describe("ProfileStatus component", () => {
    test("Status from props should be in the state", () => {
        const component = create(<ProfileStatus storeStatus={"it-kamasutra.com"}/>);
        const instance = component.getInstance();
        expect(instance.state.status).toBe("it-kamasutra.com");
    })

    test("After creating <span> should be displayed", () => {
        const component = create(<ProfileStatus storeStatus={"it-kamasutra.com"}/>);
        const root = component.root;
        let span = root.findByType("span")
        expect(span).not.toBeNull()
    })

    test("After creating <input> shouldn't be displayed", () => {
        const component = create(<ProfileStatus storeStatus={"it-kamasutra.com"}/>);
        const root = component.root;
        expect(() => {
            let input = root.findByType("input");
        }).toThrow();
    })

    test("After creating <span> should contains correct status", () => {
        const component = create(<ProfileStatus storeStatus={"it-kamasutra.com"}/>);
        const root = component.root;
        let span = root.findByType("span")
        expect(span.children[0]).toBe("it-kamasutra.com")
    })

    test("Input should be displayed in editMod insted of span", () => {
        const component = create(<ProfileStatus storeStatus={"it-kamasutra.com"}/>);
        const root = component.root;
        let span = root.findByType("span");
        span.props.onDoubleClick();
        let input = root.findByType("input");
        expect(input.props.value).toBe("it-kamasutra.com")
    })

    test("Callback should be called", () => {
        const mockCallback = jest.fn();
        const component = create(<ProfileStatus storeStatus={"it-kamasutra.com"} updateStatus={mockCallback}/>);
        const instance = component.getInstance();
        instance.deActivateEditMode();
        expect(mockCallback.mock.calls.length).toBe(1);
    })
})