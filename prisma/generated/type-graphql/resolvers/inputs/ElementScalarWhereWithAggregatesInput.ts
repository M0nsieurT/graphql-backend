import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("ElementScalarWhereWithAggregatesInput", {
  isAbstract: true
})
export class ElementScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [ElementScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: ElementScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [ElementScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: ElementScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [ElementScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: ElementScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  id?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  name?: StringWithAggregatesFilter | undefined;
}
