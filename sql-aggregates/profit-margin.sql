with "cte_replacementCost" as (
  select "films"."title",
         count("inventory"."filmId")*("films"."replacementCost") as "totalCost"
  from   "films"
  join   "inventory" using ("filmId")
  group by "films"."title", "films"."replacementCost"
)

select "films"."title",
       "films"."description",
       "films"."rating",
       sum("payments"."amount") - "cte_replacementCost"."totalCost" as "totalProfit"
from "cte_replacementCost"
join "films" using ("title")
join "inventory" using ("filmId")
join "rentals" using ("inventoryId")
join "payments" using ("rentalId")
group by "films"."title", "films"."description", "films"."rating", "cte_replacementCost"."totalCost"
order by "totalProfit" desc
limit 5;
