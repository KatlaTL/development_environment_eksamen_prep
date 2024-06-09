<script setup>
import { ref } from 'vue';

const props = defineProps(["user"]);

const textInput = ref(props.user?.user.name);

const emit = defineEmits(["onSubmit"]);

const onSubmit = (e) => {
    e.preventDefault();
    if (textInput.value.length === 0) {
        return;
    }
    emit("onSubmit", textInput.value, props.user?.index);
    textInput.value = "";
}

</script>

<template>

    <form id="editForm">
        <input type="text" id="editUser" v-model="textInput" />
        <button @click="onSubmit" id="editUserCTA">Edit user</button>
    </form>

</template>
