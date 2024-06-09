<script setup>
import { ref } from 'vue';
import users from "@/assets/users.json";
import AddUser from '@/components/AddUser.vue';
import EditUser from './EditUser.vue';

const userList = ref(users.users);
const showEdit = ref(false);
const currentUser = ref(null);

const addUserEvent = (user) => {
    userList.value.unshift({ name: user });
}

const editUserEvent = (user, index) => {
    userList.value[index] = { name: user };
}

const handleDelete = (index) => {
    userList.value.splice(index, 1);
}

const handleEdit = (index) => {
    currentUser.value = { index: index, user: userList.value[index] };
    showEdit.value = true;
}
</script>

<template>
    <h1>User List</h1>
    <ul>
        <li v-for="(user, index) in userList" :data-user="user.name">
            {{ user.name }}
            <button @click="() => handleDelete(index)" class="delete">Delete</button>
            <button @click="() => handleEdit(index)" class="edit">Edit</button>
        </li>
    </ul>

    <AddUser @onSubmit="addUserEvent" />

    <div v-show="showEdit">
        <EditUser @onSubmit="editUserEvent" :user="currentUser" :key="currentUser" />
    </div>

</template>
