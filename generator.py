#!/usr/bin/env python3
# Ugly python script to generate properties

import faker
import random


def gproperty():

    g = faker.Faker()  
    imageUrl = 'http://lorempixel.com/grey/1024/720/city/'

    title = g.text(max_nb_chars=30)
    description = g.text()

    location = { 'lat': g.latitude(), 'lng': g.longitude() }
    address = { 'city': g.city(), 'state': g.state(), 
        'postalCode': g.postalcode(), 'streetAddress': g.street_address() }

    contact = { 'email': g.email(), 'phone': g.phone_number() }
    ptype = random.choice([ 'rent', 'sale' ])
    price = random.uniform(10 , 20000)

    images = [ imageUrl for x in range(random.randint(1, 4)) ]
    status = g.boolean()

    return { 'title': title, 'description': description, 
        'location': location, 'address': address, 'contact': contact, 
        'type': ptype, 'price': price, 'images': images, 'available': status }
