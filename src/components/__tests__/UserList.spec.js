import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';

import UserList from '@/components/UserList.vue';
import Users from "@/assets/users.json";

const userListLength = Users.users.length;

describe("UserList", () => {
    it("render properly", () => {
        const wrapper = mount(UserList);
        expect(wrapper.text()).toContain("User List");
        expect(wrapper.findAll("[data-user]")).length(userListLength);
    });

    it('user can be added', async () => {
        const wrapper = mount(UserList);
        const addForm = wrapper.find("#addForm");
        const textInput = addForm.find("#addUser");
        const text = "Ronja";
        textInput.setValue(text);
    
        await addForm.find("#addUserCTA").trigger("click");
        expect(wrapper.findAll("[data-user]")).length(userListLength + 1);
    
        const newElementText = wrapper.findAll("[data-user]")[0].element.firstChild.textContent.trim();
        expect(newElementText).toBe(text);
      })
    
      it('user can be deleted', async () => {
        const wrapper = mount(UserList);
        const elementToBeDeleted = wrapper.findAll("[data-user]")[1];
        const deleteBtn = elementToBeDeleted.find(".delete");
        await deleteBtn.trigger("click");
        expect(wrapper.findAll("[data-user]")).length(userListLength);
      })
    
      it('user can be edited', async () => {
        const wrapper = mount(UserList);
        const elementToBeEdited = wrapper.findAll("[data-user]")[1];
        const editText = elementToBeEdited.element.firstChild.textContent;
        await elementToBeEdited.find(".edit").trigger("click");
        const editForm = wrapper.find("#editForm");
    
        expect(editForm.find("#editUser").isVisible()).toBe(true);
    
        const textInput = editForm.find("#editUser");
        const editUserCTA = editForm.find("#editUserCTA");
    
        await editUserCTA.trigger("click");
        expect(elementToBeEdited.element.firstChild.textContent).toBe(editText);
        textInput.setValue("New value");
        
        await editUserCTA.trigger("click");
        expect(elementToBeEdited.element.firstChild.textContent).not.toBe(editText);
      })
})