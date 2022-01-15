/* eslint-disable no-undef */
describe("Journalist can see a Header and create an article", () => {
  before(() => {
    cy.visit("/");
  });

  it("is expected to display Yesterday News Admin Header", () => {
    cy.get("[data-cy=header]").should("contain", "Yesterdays News Admin");
  });

  it("is expected to be able to insert a title in input field", () => {
    cy.get("[data-cy=title-input]").type("Covid-19 pandemic over");
  });

  it("is expected to be able to write a body for article", () => {
    cy.get("[data-cy=body-input]").type("Latest news concering the...");
  });

  it("is expected to be able to select category", () => {
    cy.get("[data-cy=select-category]").select("Politics");
  });

  it("is expected to see a submit button", () => {
    cy.get("[data-cy=submit-button").should("be.visible");
  });
});
