/* eslint-disable no-undef */
describe("Journalist can see a Header", () => {
  before(() => {
    cy.visit("/");
  });
  it("is expected to display Yesterday News Admin Header", () => {
    cy.get("[data-cy=header").should("contain", "Yesterdays News Admin");
  });
});
