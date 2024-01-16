# Personal_Project-Pokemon_Stat_Website
This is fun small project in creating a website that displays stat attributes for each pokemon

## API request process
the API comes from a community made API "Pokemon API" which extracts and stores every known pokemon's detail in json format. The 'testing_purpose' tests on the request command by requesting specific information from the json. <br/>
While the API request provides the entire data information, only specific detail will be extracted. <br/>
Below is an example of the API request, which later the website will be displaying the pokemon image, name, description and a bar graph that showcase the base stat of the pokemon. <br/>

Note: this is a personal website, and will not be sold as a product as the API is from a community fanbase.

```
base_url = "https://pokeapi.co/api/v2/"
category = "pokemon/"
number_id = "50/"

response = requests.get(base_url + category + number_id)
data = response.json()
pprint(data)

pprint(data['stats'][1]['stat'])

```
## What is in the website?
The wesbite will contain the image of the request pokemon, which will be extracted from the bubliopedia website with jpg. <br/>
a box description of the pokemon and the name <br/>
a bar graph that showcase the base stat of the pokemon, each will be represented with the specific colour just like in the pokemon game. <br/>
 <br/>
there may be further addition to the website such as animation or smooth transition. These will be edited through CSS.
