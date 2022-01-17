/* eslint-disable no-undef */
describe("Journalist can create an article and recieve message article created", () => {
  beforeEach(() => {
    cy.intercept("POST", "/api/articles", {
      fixture: "create_response.json",
    }).as("getArticle");
    cy.visit("/");
    cy.get("[data-cy=title-input]").type("Vikings ate pizza");
    cy.get("[data-cy=body-input]").type(
      "New findings on Björkö shows that Vikings enjoyed Pineapple pizza"
    );
    cy.get("[data-cy=select-category").select("News");
    cy.get("[data-cy=submit-button").click();
  });

  it("is expected to make a POST request to the API", () => {
    cy.wait("@getArticle").its("request.method").should("eq", "POST");
  });

  it("is expected to be able to insert a title in input field", () => {
    cy.wait("@getArticle")
      .its("response.body.article.title")
      .should("contain", "Vikings ate pizza");
  });

  it("is expected to be able to write a body for article", () => {
    cy.wait("@getArticle")
      .its("response.body.article.body")
      .should(
        "contain",
        "New findings on Björkö shows that Vikings enjoyed Pineapple pizza"
      );
  });

  it("is expected to be able to select category", () => {
    cy.get("[data-cy=select-category]").should("contain", "News");
  });

  it("is expected to return an error message if article is not created", () => {
    cy.wait("@getArticle")
      .its("response.body.message")
      .should("contain", "Article succesfully created!");
  });
});
