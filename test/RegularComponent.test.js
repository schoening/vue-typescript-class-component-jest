import { mount } from "vue-test-utils";
import RegularComponent from "../src/components/RegularComponent.vue";

describe("RegularComponent.test.ts", () => {
    let wrapper;

    beforeEach(() => {
        wrapper = mount(RegularComponent, {
            data: {
                message: "Hello world",
            },
            propsData: {
                myProp: "!"
            }
        })
    })

    it(".message = 'Hello world'", () => {
        expect(wrapper.vm.message).toEqual("Hello world");
    })

    it(".myProp = '!'", () => {
        expect(wrapper.vm.myProp).toEqual("!");
    })

    it("has the expected html structure", () => {
        expect(wrapper.vm.$el).toMatchSnapshot()
    })
})