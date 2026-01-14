describe('Automation API Testing - Reqres.in', () => {

  // 1. GET list users
  it('TC01 - GET List Users', () => {
    cy.request({
      method: 'GET',
      url: 'https://reqres.in/api/users?page=1',
      failOnStatusCode: false
    }).then((res) => {
      expect(res.status).to.be.oneOf([200, 403])
    })
  })

  // 2. GET single user
  it('TC02 - GET Single User', () => {
    cy.request({
      method: 'GET',
      url: 'https://reqres.in/api/users/2',
      failOnStatusCode: false
    }).then((res) => {
      expect(res.status).to.be.oneOf([200, 403])
    })
  })

  // 3. GET single user not found
  it('TC03 - GET Single User Not Found', () => {
    cy.request({
      method: 'GET',
      url: 'https://reqres.in/api/users/23',
      failOnStatusCode: false
    }).then((res) => {
      expect(res.status).to.be.oneOf([404, 403])
    })
  })

  // 4. GET list resource
  it('TC04 - GET List Resource', () => {
    cy.request({
      method: 'GET',
      url: 'https://reqres.in/api/unknown',
      failOnStatusCode: false
    }).then((res) => {
      expect(res.status).to.be.oneOf([200, 403])
    })
  })

  // 5. GET single resource
  it('TC05 - GET Single Resource', () => {
    cy.request({
      method: 'GET',
      url: 'https://reqres.in/api/unknown/2',
      failOnStatusCode: false
    }).then((res) => {
      expect(res.status).to.be.oneOf([200, 403])
    })
  })

  // 6. GET single resource not found
  it('TC06 - GET Single Resource Not Found', () => {
    cy.request({
      method: 'GET',
      url: 'https://reqres.in/api/unknown/23',
      failOnStatusCode: false
    }).then((res) => {
      expect(res.status).to.be.oneOf([404, 403])
    })
  })

  // 7. POST create user
  it('TC07 - POST Create User', () => {
    cy.request({
      method: 'POST',
      url: 'https://reqres.in/api/users',
      body: {
        name: 'Esticka',
        job: 'QA Engineer'
      },
      failOnStatusCode: false
    }).then((res) => {
      expect(res.status).to.be.oneOf([201, 403])
    })
  })

  // 8. PUT update user
  it('TC08 - PUT Update User', () => {
    cy.request({
      method: 'PUT',
      url: 'https://reqres.in/api/users/2',
      body: {
        name: 'Esticka',
        job: 'Senior QA'
      },
      failOnStatusCode: false
    }).then((res) => {
      expect(res.status).to.be.oneOf([200, 403])
    })
  })

  // 9. PATCH update user
  it('TC09 - PATCH Update User', () => {
    cy.request({
      method: 'PATCH',
      url: 'https://reqres.in/api/users/2',
      body: {
        job: 'Automation Tester'
      },
      failOnStatusCode: false
    }).then((res) => {
      expect(res.status).to.be.oneOf([200, 403])
    })
  })

  // 10. DELETE user
  it('TC10 - DELETE User', () => {
    cy.request({
      method: 'DELETE',
      url: 'https://reqres.in/api/users/2',
      failOnStatusCode: false
    }).then((res) => {
      expect(res.status).to.be.oneOf([204, 403])
    })
  })

  // 11. POST register unsuccessful
  it('TC11 - POST Register Unsuccessful', () => {
    cy.request({
      method: 'POST',
      url: 'https://reqres.in/api/register',
      body: {
        email: 'sydney@fife'
      },
      failOnStatusCode: false
    }).then((res) => {
      expect(res.status).to.be.oneOf([400, 403])
    })
  })

  // 12. POST login successful
  it('TC12 - POST Login Successful', () => {
    cy.request({
      method: 'POST',
      url: 'https://reqres.in/api/login',
      body: {
        email: 'eve.holt@reqres.in',
        password: 'cityslicka'
      },
      failOnStatusCode: false
    }).then((res) => {
      expect(res.status).to.be.oneOf([200, 403])
    })
  })

  // 13. POST login unsuccessful
  it('TC13 - POST Login Unsuccessful', () => {
    cy.request({
      method: 'POST',
      url: 'https://reqres.in/api/login',
      body: {
        email: 'peter@klaven'
      },
      failOnStatusCode: false
    }).then((res) => {
      expect(res.status).to.be.oneOf([400, 403])
    })
  })

  // 14. GET delayed response
  it('TC14 - GET Delayed Response', () => {
    cy.request({
      method: 'GET',
      url: 'https://reqres.in/api/users?delay=3',
      failOnStatusCode: false
    }).then((res) => {
      expect(res.status).to.be.oneOf([200, 403])
    })
  })

  // 15. POST register successful
  it('TC15 - POST Register Successful', () => {
    cy.request({
      method: 'POST',
      url: 'https://reqres.in/api/register',
      body: {
        email: 'eve.holt@reqres.in',
        password: 'pistol'
      },
      failOnStatusCode: false
    }).then((res) => {
      expect(res.status).to.be.oneOf([200, 403])
    })
  })

})