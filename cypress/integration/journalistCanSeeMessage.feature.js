/* eslint-disable no-undef */
describe("Journalist can see aproval message", () => {
  before(() => {
    cy.intercept("POST", "**/api/articles", {
      statusCode: 201,
      fixture: "create_response.json",
    }).as("getArticle");
    cy.visit("/");
    cy.get("[data-cy=submit-button").click();
  });

  it("is expected to make a POST request to the API", () => {
    cy.wait("@getArticle").its("request.method").should("eq", "POST");
  });

  it("is expected to see created message", () => {
    cy.get("[data-cy=message]").should("contain", "Article was created");
  });
});
