'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.0/routing
|
*/

const Route = use('Route')
const faker = require('faker')
Route.get('/api/users', ({response}) => {

  let data = []
  for (let i = 0; i < 30; i++) {
    data.push({
      id: i,
      first_name: faker.name.firstName(),
      last_name: faker.name.lastName(),
      avatar: faker.image.imageUrl(),
      email : faker.internet.email()
    })
  }

  return response.send({
    "page": 1,
    "per_page": 3,
    "total": 12,
    "total_pages": 4,
    "data": data
  })
})
Route.on('/').render('welcome')
