<template>
    <div class="regular-component">{{ message }}{{ myProp }}</div>
</template>

<script lang="ts">
export default {
    data () { 
        return {
            message: "" 
        };
    },
    props: ["myProp"],
    created() {
        console.log("created")
    }
}
</script>