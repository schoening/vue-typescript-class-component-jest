<template>
    <div id="app">
        <!-- message is not a prop -->
        <!-- so the output is gonna be "!" -->
        <regular-component :myProp="prop"></regular-component>
        <class-component :myProp="prop"></class-component>
        <property-decorator :myProp="prop"></property-decorator>
    </div>
</template>

<script lang="ts">
import RegularComponent from "./components/RegularComponent.vue";
import ClassComponent from "./components/ClassComponent.vue";
import PropertyDecorator from "./components/PropertyDecorator.vue";

export default {
    data () { 
        return {
            message: "Hello world!",
            prop: "!" 
        };
    },
    components: {
        RegularComponent,
        ClassComponent,
        PropertyDecorator
    }
}
</script>