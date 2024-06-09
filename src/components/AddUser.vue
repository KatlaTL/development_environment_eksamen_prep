<script setup>
import { ref } from 'vue';


const textInput = ref("");

const emit = defineEmits(["onSubmit"]);

const onSubmit = (e) => {
    e.preventDefault();
    if (textInput.value.length === 0) {
        return;
    }
    emit("onSubmit", textInput.value);
    textInput.value = "";
}

</script>

<template>

    <form id="addForm">
        <input placeholder="New user" type="text" id="addUser" v-model="textInput" />
        <button @click="onSubmit" id="addUserCTA">Add user</button>
    </form>

</template>
