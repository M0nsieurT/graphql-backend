import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Card_typeAvgOrderByAggregateInput } from "../inputs/Card_typeAvgOrderByAggregateInput";
import { Card_typeCountOrderByAggregateInput } from "../inputs/Card_typeCountOrderByAggregateInput";
import { Card_typeMaxOrderByAggregateInput } from "../inputs/Card_typeMaxOrderByAggregateInput";
import { Card_typeMinOrderByAggregateInput } from "../inputs/Card_typeMinOrderByAggregateInput";
import { Card_typeSumOrderByAggregateInput } from "../inputs/Card_typeSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("Card_typeOrderByWithAggregationInput", {
  isAbstract: true
})
export class Card_typeOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  name?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => Card_typeCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: Card_typeCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Card_typeAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: Card_typeAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Card_typeMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: Card_typeMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Card_typeMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: Card_typeMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Card_typeSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: Card_typeSumOrderByAggregateInput | undefined;
}
