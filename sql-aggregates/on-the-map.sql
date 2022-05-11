select "countries"."name",
       count("cities"."countryId") as "numberOfCities"
from "cities"
join "countries" using ("countryId")
group by "countries"."name";
