it('can GET a contact', ()=>{
	cy.request({
		failOnStatusCode: false,
		method: 'GET', 
		url: {url},
		headers {
			'heders', 'AuthToken', 'test'
		}
	}).then((response) => {
		expect(response.body).to.have.property('_id', contactId)
	})
})

//Negative API TESTIng
//Status Code Assertion - Not Authenticated

it('gets a 401 when not authenticated', () => {
	cy.request
})