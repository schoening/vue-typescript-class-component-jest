import { mount } from "vue-test-utils";
import RegularComponent from "./components/RegularComponent.vue";
import ClassComponent from "./components/ClassComponent.vue";

const wrapper1: any = mount(RegularComponent, {
    el: "#test-1",
    data: {
        message: "Hello world",
    },
    propsData: {
        myProp: "!"
    }
});

console.log( wrapper1.vm.myProp );

const wrapper2: any = mount(ClassComponent, {
    el: "#test-2",
    data: {
        message: "Hello world",
    },
    propsData: {
        myProp: "!"
    }
});

console.log( wrapper2.vm.myProp );