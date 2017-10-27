<template>
    <div class="class-component">
        {{ message }}{{ myProp }}
    </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";

@Component
class PropertyDecorator extends Vue {

    message: string = "";

    @Prop()
    myProp: string;

    created() {
        console.log("created");
    }
}

export default PropertyDecorator;
</script>