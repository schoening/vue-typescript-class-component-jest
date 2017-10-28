<template>
    <div class="class-component">{{ message }}{{ myProp }}</div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

@Component({
    created() {
        console.log("created")
    },
    props: ["myProp"]
})
class ClassComponent extends Vue {

    message: string = "";

}

export default ClassComponent;
</script>