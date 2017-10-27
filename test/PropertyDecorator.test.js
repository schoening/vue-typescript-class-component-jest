import { mount } from "vue-test-utils";
import PropertyDecorator from "../src/components/PropertyDecorator.vue";

describe("PropertyDecorator.test.ts", () => {
    let wrapper;

    beforeEach(() => {
        wrapper = mount(PropertyDecorator, {
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