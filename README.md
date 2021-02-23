# Project Overview

## Now We're Cookin'!

## Project Description

This app will be a recipe catalogue. It will allow users to view a list of recipes, and also contribute recipes. The homepage will have a few select recipes. There will be a link for both the recipe list and also to contribute a recipe. The recipe list will have recipe titles with a photo (if photo exists). Then when the user selects a certain recipe the recipe page will give a detailed description to cook the recipe, including ingredients and steps. The contribute a recipe link will lead to a form that a user can fill out with recipe details to add to the list of recipes.

## Wireframes

[Desktop Link](https://wireframe.cc/pro/pp/644724e32415092) \
[Tablet Link](https://wireframe.cc/pro/pp/7d7cc787e415010) \
[Mobile](https://wireframe.cc/pro/pp/9d9819bbe415093)

## Component Hierarchy

[Heirarchy Diagram](https://app.diagrams.net/#G1JkH1gxs-ZQBVArigTTg3pPn7uZtfDW9y)

## API and Data Sample

```json
{
  "records": [
    {
      "id": "recBqtGF9biJ87Qs5",
      "fields": {
        "title": "Avocado Pesto Pasta",
        "likes": 1,
        "types": ["Breakfast", "Lunch", "Dinner", "Dessert", "Snack"],
        "ingredients": "1/2 cup basil; 3-4 cloves garlic; 2 Tbs olive oil; 2 avocados, pitted; 3/4-1 tsp salt to taste; black pepper; 1lb pasta of choice",
        "steps": "In a large pot, bring salted water to boil. Once Boiling, cook pasta according to package directions;  Make sauce in food processor. Combine basil and...",
        "vegetarian?": true,
        "author": "Andy Bayer",
        "photo": "https://unsplash.com/photos/ticuPP5l2qg",
        "reviews": "Bon Appetit! Delicious, would definitely make again;",
        "dislikes": 0,
        "selected type": "Dinner"
      },
      "createdTime": "2021-02-10T23:57:27.000Z"
    }
  ],
  "offset": "recBqtGF9biJ87Qs5"
}
```

### MVP/PostMVP

#### MVP

- Create functional database on Airtable
- Use recipe data from airtable using axios Get request
- Homepage with a few selected recipes, and navigation bar with links to recipe list and recipe submission
- Recipe list page will have links to full recipe.
- Form will allow user to submit new recipe to add to list (axios Post).

#### PostMVP

- Add more advanced search features for dietary restrictions, allergens, etc.
- Like and dislike button for each recipe.
- Sort recipes based on users likes/dislikes
- Delete recipes based on if dislike percentage is too high.
- Display user reviews and allow users to add a review.

## Project Schedule

This schedule will be used to keep track of your progress throughout the week and align with our expectations. Here's an example.

| Day    | Deliverable                                          | Status     |
| ------ | ---------------------------------------------------- | ---------- |
| Feb 15 | Prompt / Wireframes / Priority Matrix / Timeframes   | Complete   |
| Feb 16 | Project Approval/ Complete Airtable/ Setup React App | Incomplete |
| Feb 17 | Setup Components/GET and POST/ Basic Clickable       | Incomplete |
| Feb 18 | Style Components                                     | Incomplete |
| Feb 19 | Media Queries/ Deploy on Netlify/ MVP                | Incomplete |
| Feb 22 | Post MVP                                             | Incomplete |
| Feb 23 | Presentations                                        | Incomplete |

## Timeframes

| Component                     | Priority | Estimated Time | Time Invested | Actual Time |
| ----------------------------- | :------: | :------------: | :-----------: | :---------: |
| Adding Data To Airtable       |    H     |      3hrs      |      1hr      |     1hr     |
| App Component with Routes     |    H     |      3hrs      |     2hrs      |    2hrs     |
| Right-Nav Component           |    H     |      2hrs      |    1.5hrs     |   1.5hrs    |
| Hamburger Component           |    L     |      2hrs      |    1.5hrs     |   1.5hrs    |
| Header and Fotter Componennts |    H     |      2hrs      |      1hr      |     1hr     |
| Home Component                |    H     |      2hrs      |      1hr      |     1hr     |
| Recipes Component             |    H     |      2hrs      |      1hr      |     1hr     |
| Recipe Component              |    H     |      2hrs      |      1hr      |     1hr     |
| Form Component                |    H     |      3hrs      |    2.5hrs     |   2.5hrs    |
| Flex and Grid                 |    H     |      4hrs      |     8hrs      |    8hrs     |
| General Styling               |    M     |      4hrs      |     12hrs     |    12hrs    |
| Media Queries                 |    H     |      4hrs      |     4hrs      |    4hrs     |
| Post-MVP Componenet Additions |    L     |      3hrs      |     3hrs      |    3hrs     |
| Post-MVP Styling              |    L     |      3hrs      |     2hrs      |    2hrs     |
| Total                         |    H     |     37hrs      |    41.5hrs    |   41.5hrs   |

## SWOT Analysis

### Strengths:

Writing components and navigating the data structures from airtable API call are things I have gotten really strong at.

### Weaknesses:

Styling and user experience. I know what looks good, and what doesn't when I see it. It is just hard for me to get envision the styling. I'm hoping continued
practice will allow me to improve.

### Opportunities:

I think I have the chance to make a really functional app that also allows me to stretch my current abilities in React to become a stronger developer.

### Threats:

My biggest threat is time management. Sometimes I get wrapped up in small details that aren't that important and waste too much time on them.

## Change Log:

- I changed my component layout just slightly (mostly for post MVP work)
- I decided just rendering one recipe on homepage as the recipe of the day would look best.
