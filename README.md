# Toronto Waste Lookup
Toronto waste lookup is an application that searches Toronto's Waste Wizard Lookup table that could be found at https://www.toronto.ca/city-government/data-research-maps/open-data/open-data-catalogue/#5ed40494-a290-7807-d5da-09ab6a56fca2

# Logic
1) Searches will only be performed when an enter button or the search icon are pressed.
2) Favoured items will have a grey star next to them and unfavoured items will have a green one.
3) Pressing a star toggles between favoured and unfavoured.
4) When the search box is empty all results disapear.

# Tools
1) I used axios to retrieve the data.
2) Stored the data inside Redux.
3) When a star is clicked the record that is associated with the favorited item is modified.
4) I used https://fontawesome.com/start for icons.
