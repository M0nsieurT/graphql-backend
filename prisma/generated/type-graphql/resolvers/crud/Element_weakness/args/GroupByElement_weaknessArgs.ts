import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Element_weaknessOrderByWithAggregationInput } from "../../../inputs/Element_weaknessOrderByWithAggregationInput";
import { Element_weaknessScalarWhereWithAggregatesInput } from "../../../inputs/Element_weaknessScalarWhereWithAggregatesInput";
import { Element_weaknessWhereInput } from "../../../inputs/Element_weaknessWhereInput";
import { Element_weaknessScalarFieldEnum } from "../../../../enums/Element_weaknessScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByElement_weaknessArgs {
  @TypeGraphQL.Field(_type => Element_weaknessWhereInput, {
    nullable: true
  })
  where?: Element_weaknessWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Element_weaknessOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: Element_weaknessOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [Element_weaknessScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"element_id" | "weakness_element_id" | "coef">;

  @TypeGraphQL.Field(_type => Element_weaknessScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: Element_weaknessScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
