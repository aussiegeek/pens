User.destroy_all
User.create!(name: 'Alice User', email: 'alice@example.com', password: 'correct horse battery staple')

Brand.destroy_all
lamy = Brand.create!(name: 'Lamy')
pilot = Brand.create!(name: 'Pilot')
twsbi = Brand.create!(name: 'TWSBI')

lamy.pens.create!(model: 'Safari')
lamy.pens.create!(model: '2000')

pilot.pens.create!(model: 'Metropolitan')

twsbi.pens.create!(model: 'Eco')
