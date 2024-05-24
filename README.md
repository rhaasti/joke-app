Instructions: 

MAIN.tsx

- The 'Joke Please' button should fetch a joke from the api
(use axios or fetch)
- If there already is a current joke then it should check to see if 
it fetched the same joke, if it has indeed fetched the same joke
then it should automatically fetch another joke.
- Create a button beside the joke that says 'favorite'
  - When favorite is clicked it should save this joke to our list of 
  favorite jokes
  - This function should be provided as a prop from App.tsx
  - Favorite jokes should be stored in context & localStorage, 
  so we can view them when we visit any 
  other pages (ie. favorites list page)
- account for possible memory leaks while fetching information from 
the api, (cancel tokens)

APP.tsx

- App should be providing the favorites list to all pages that can
can be routed to through the application.
- it should provide methods to its children components (Main.tsx),
that can be used to add and remove favorites from the favorites list
- everytime a favorite is added or removed, we should save that list 
in localStorage, so the next time we use the application we can 
return our favorites list.

FAVORITES.tsx 

- Simply loop through the favorites list that should be provided through
the context, and display them.

