describe("Journalist can recieve an error message if article not created due to missing params", () => {
  before(() => {
    cy.intercept("POST", "/api/articles", {
      fixture: "title_is_missing.json",
    }).as("getArticle");
    cy.visit("/");
    cy.get("[data-cy=body-input]").type(
      "New findings on Björkö shows that Vikings enjoyed Pineapple pizza"
    );
    cy.get("[data-cy=select-category").select("News");
    cy.get("[data-cy=submit-button").click();
  });

  it("is expected to return an error message if title is blank", () => {
    cy.wait("@getArticle")
      .its("response.body.message")
      .should("contain", "Not Created - Title can't be blank");
  });
});

describe("Missing body", () => {
  before(() => {
    cy.intercept("POST", "/api/articles", {
      fixture: "body_is_missing.json",
    }).as("getArticle");
    cy.visit("/");
    cy.get("[data-cy=title-input]").type("Vikings ate pizza");
    cy.get("[data-cy=select-category").select("News");
    cy.get("[data-cy=submit-button").click();
  });

  it("is expected to return an error message if body is missing", () => {
    cy.wait("@getArticle")
      .its("response.body.message")
      .should("contain", "Not Created - Article must have a body");
  });

  describe("Missing category", () => {
    before(() => {
      cy.intercept("POST", "/api/articles", {
        fixture: "category_is_missing.json",
      }).as("getArticle");
      cy.visit("/");
      cy.get("[data-cy=title-input]").type("Vikings ate pizza");
      cy.get("[data-cy=body-input]").type(
        "New findings on Björkö shows that Vikings enjoyed Pineapple pizza"
      );
      cy.get("[data-cy=submit-button").click();
    });

    it("is expected to return an error message if category is missing", () => {
      cy.wait("@getArticle")
        .its("response.body.message")
        .should("contain", "Not Created - Article must have a category");
    });
  });
});
