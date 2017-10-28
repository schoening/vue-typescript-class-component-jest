import { mount } from "vue-test-utils";
import Vue from "vue";
import ClassComponent from "../src/components/ClassComponent.vue";

describe("ClassComponent.test.ts", () => {
    let wrapper;

    beforeEach(() => {
        wrapper = mount(ClassComponent, {
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

    it("updates the .textContent to 'foo'", done => {
        wrapper.vm.message = "foo"

        // vuejs updates the dom asynchronously
        // wait for the nextTick callback before running the test
        Vue.nextTick(() => {
            try {
                expect(wrapper.vm.$el.textContent).toBe('foo!')
                done()
            } catch (err) {
                done.fail(err)
            }
        })
    })

    it("has the expected html structure", () => {
        expect(wrapper.vm.$el).toMatchSnapshot()
    })
})