describe('Renders website', () => {
  it('Visit the website', () => {
    cy.visit('http://localhost:5173/');
  })
})

describe('Interact with the userlist', () => {
  it('Add a user', () => {
    cy.visit('http://localhost:5173/');

    //Get the inputfield, type into it
    cy.get("#addUser").type("Ronja");

    //Get the CTA and click it
    cy.get("#addUserCTA").click();

    //Check that the value has been added to the list
    cy.get("ul").contains("Ronja");
    cy.get("ul").find("[data-user]").should("have.length", 4);
  })
})
