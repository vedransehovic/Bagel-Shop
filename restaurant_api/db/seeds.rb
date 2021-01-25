bagels = [
    {
        'name': 'Everything Bagel',
        'image': 'https://d2d8wwwkmhfcva.cloudfront.net/800x/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_30330a0e-de12-446b-a095-0dfd968bee34.jpg',
        'description': "",
        'likes': 0,
        'quantity': 10, 
        'price': 119,
    },
    {
        'name': 'Sesame Seed Bagel',
        'image': 'https://d2d8wwwkmhfcva.cloudfront.net/600x/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_6aef42c0-58ad-4baa-ba2f-d9b31ccc0885.jpg',
        'description': "",
        'likes': 0,
        'quantity': 10, 
        'price': 119,
    },
    {
        'name': 'Poppy Seed Bagel',
        'image': 'https://d2d8wwwkmhfcva.cloudfront.net/600x/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_20803d64-788d-4566-8236-9f4f65b42152.jpg',
        'description': "",
        'likes': 0,
        'quantity': 10, 
        'price': 119,
    },
    {
        'name': 'Onion Bagel',
        'image': 'https://d2d8wwwkmhfcva.cloudfront.net/600x/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_aef71754-5846-4c2d-9370-9f918b9eb05b.jpg',
        'description': "",
        'likes': 0,
        'quantity': 10, 
        'price': 119,
    },
    {
        'name': 'Plain Bagel',
        'image': 'https://d2d8wwwkmhfcva.cloudfront.net/600x/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_0554f4a8-063a-47d7-83ff-425323c2c077.jpg',
        'description': "",
        'likes': 0,
        'quantity': 10, 
        'price': 119,
    },
    {
        'name': 'Whole Wheat Bagel',
        'image': 'https://d2d8wwwkmhfcva.cloudfront.net/600x/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_b9a31c7f-974b-463a-bfb0-23189a626f92.jpg',
        'description': "",
        'likes': 0,
        'quantity': 10, 
        'price': 119,
    },
    {
        'name': 'Cinnamon Raisin Bagel',
        'image': 'https://d2d8wwwkmhfcva.cloudfront.net/600x/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_67481c46-b702-4cdc-8217-d14ebcb43068.jpg',
        'description': "",
        'likes': 0,
        'quantity': 10, 
        'price': 119,
    },
    {
        'name': 'Toufayan Smart Bagel (gluten free)',
        'image': 'https://d2d8wwwkmhfcva.cloudfront.net/600x/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_96fe07f4-ec86-40da-b983-f4f077a6429e.jpg',
        'description': "",
        'likes': 0,
        'quantity': 10, 
        'price': 119,
    },
    {
        'name': 'Pumpernickel Bagel',
        'image': 'https://d2d8wwwkmhfcva.cloudfront.net/600x/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_041e3825-c798-4232-9d34-f6518cdf451c.jpg',
        'description': "",
        'likes': 0,
        'quantity': 10, 
        'price': 119,
    },
]

bagels.each do |bagel|
    Api::V1::Bagel.create(name: bagel[:name], image: bagel[:image], likes: bagel[:likes], quantity: bagel[:quantity], price: bagel[:price])
end