import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Element_affinityOrderByWithAggregationInput } from "../../../inputs/Element_affinityOrderByWithAggregationInput";
import { Element_affinityScalarWhereWithAggregatesInput } from "../../../inputs/Element_affinityScalarWhereWithAggregatesInput";
import { Element_affinityWhereInput } from "../../../inputs/Element_affinityWhereInput";
import { Element_affinityScalarFieldEnum } from "../../../../enums/Element_affinityScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByElement_affinityArgs {
  @TypeGraphQL.Field(_type => Element_affinityWhereInput, {
    nullable: true
  })
  where?: Element_affinityWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Element_affinityOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: Element_affinityOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [Element_affinityScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"element_id" | "affinity_element" | "affinity_type">;

  @TypeGraphQL.Field(_type => Element_affinityScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: Element_affinityScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
