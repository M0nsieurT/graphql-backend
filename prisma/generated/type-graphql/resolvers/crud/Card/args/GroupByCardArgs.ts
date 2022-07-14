import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CardOrderByWithAggregationInput } from "../../../inputs/CardOrderByWithAggregationInput";
import { CardScalarWhereWithAggregatesInput } from "../../../inputs/CardScalarWhereWithAggregatesInput";
import { CardWhereInput } from "../../../inputs/CardWhereInput";
import { CardScalarFieldEnum } from "../../../../enums/CardScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByCardArgs {
  @TypeGraphQL.Field(_type => CardWhereInput, {
    nullable: true
  })
  where?: CardWhereInput | undefined;

  @TypeGraphQL.Field(_type => [CardOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: CardOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [CardScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "name" | "description" | "power" | "element_id" | "rank_id" | "card_type_id" | "max_chain">;

  @TypeGraphQL.Field(_type => CardScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: CardScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
