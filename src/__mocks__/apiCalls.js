export const fetchRecipes = jest.fn()
  .mockImplementationOnce(() => ([
    {
        calories: "516 kcal",
        carbos: "47 g",
        description: "There’s nothing like the simple things in life - the smell of freshly cut grass, sitting outside on a nice sunny day, spending time with friends and family. Well here is a recipe that delivers simple culinary pleasures - some nice fresh fish with a crispy crust, crunchy potato wedges and some delightfully sweet sugar snap peas flavoured with cooling mint. Slip into something comfortable and relax into a delicious dinner!",
        difficulty: 0,
        fats: "8 g",
        favorites: 1,
        headline: "with Sweet Potato Wedges and Minted Snap Peas",
        id: "533143aaff604d567f8b4571",
        image: "https://d3hvwccx09j84u.cloudfront.net/web/image/533143aaff604d567f8b4571.jpg",
        ingredients: [
        "375g Sweet Potatoes",
        "1 Tsp Paprika",
        "2 Tbsps Parmesan Cheese",
        "1 Lemon",
        "A Few Sprigs Thyme",
        "25g Panko Breadcrumbs",
        "1 Tbsp Butter",
        "2 Cod Fillets",
        "150g Sugar Snap Peas",
        "A Few Sprigs Mint",
        "75ml Sour Cream"
        ],
        name: "Crispy Fish Goujons ",
        proteins: "43 g",
        rating: 5,
        thumb: "https://d3hvwccx09j84u.cloudfront.net/thumb/image/533143aaff604d567f8b4571.jpg",
        time: "PT35M"
    }, {
        calories: "397 kcal",
        carbos: "26 g",
        description: "Close your eyes, open up your Ras El Hanout and inhale deeply. You are no longer standing in your kitchen. Around you are the sounds of a bustling market. Robed men sell ornate carpets and a camel nibbles affectionately at your ear. OK, we’re pretty sure Paul McKenna’s job is safe for now, but get cooking this recipe and take dinnertime on a magic carpet ride to Casablanca! Our tip for this recipe is to take your meat out of the fridge at least 30 minutes before dinner which will allow you to cook it more evenly.",
        difficulty: 0,
        fats: "5 g",
        favorites: 13,
        headline: "with Spinach and Lemon Couscous",
        id: "53314247ff604d44808b4569",
        image: "https://d3hvwccx09j84u.cloudfront.net/web/image/53314247ff604d44808b4569.jpg",
        ingredients: [
        "1 Lemon",
        "1 Fillet Skirt Steak",
        "1 Tsp Ras El Hanout",
        "1 Clove Garlic",
        "1 Spring Onion",
        "1/2 Cup Carrot",
        "1 Red Pepper",
        "150g Couscous",
        "A Handful Baby Spinach Leaves",
        "4 Tbsps Coriander"
        ],
        name: "Moroccan Skirt Steak ",
        proteins: "31 g",
        rating: 4.3,
        thumb: "https://d3hvwccx09j84u.cloudfront.net/thumb/image/53314247ff604d44808b4569.jpg",
        time: "PT30M"
    }]
  ))
  .mockImplementationOnce(() => {
    throw(new Error('Error fetching recipes'))
  })