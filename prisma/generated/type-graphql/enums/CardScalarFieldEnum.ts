import * as TypeGraphQL from "type-graphql";

export enum CardScalarFieldEnum {
  id = "id",
  name = "name",
  description = "description",
  power = "power",
  element_id = "element_id",
  rank_id = "rank_id",
  card_type_id = "card_type_id",
  max_chain = "max_chain"
}
TypeGraphQL.registerEnumType(CardScalarFieldEnum, {
  name: "CardScalarFieldEnum",
  description: undefined,
});
