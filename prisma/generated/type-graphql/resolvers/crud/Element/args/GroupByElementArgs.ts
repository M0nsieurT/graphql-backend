import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ElementOrderByWithAggregationInput } from "../../../inputs/ElementOrderByWithAggregationInput";
import { ElementScalarWhereWithAggregatesInput } from "../../../inputs/ElementScalarWhereWithAggregatesInput";
import { ElementWhereInput } from "../../../inputs/ElementWhereInput";
import { ElementScalarFieldEnum } from "../../../../enums/ElementScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByElementArgs {
  @TypeGraphQL.Field(_type => ElementWhereInput, {
    nullable: true
  })
  where?: ElementWhereInput | undefined;

  @TypeGraphQL.Field(_type => [ElementOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: ElementOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [ElementScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "name">;

  @TypeGraphQL.Field(_type => ElementScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: ElementScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
