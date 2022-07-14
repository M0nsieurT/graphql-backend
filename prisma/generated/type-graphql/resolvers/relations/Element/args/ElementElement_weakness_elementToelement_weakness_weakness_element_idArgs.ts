import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Element_weaknessOrderByWithRelationInput } from "../../../inputs/Element_weaknessOrderByWithRelationInput";
import { Element_weaknessWhereInput } from "../../../inputs/Element_weaknessWhereInput";
import { Element_weaknessWhereUniqueInput } from "../../../inputs/Element_weaknessWhereUniqueInput";
import { Element_weaknessScalarFieldEnum } from "../../../../enums/Element_weaknessScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class ElementElement_weakness_elementToelement_weakness_weakness_element_idArgs {
  @TypeGraphQL.Field(_type => Element_weaknessWhereInput, {
    nullable: true
  })
  where?: Element_weaknessWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Element_weaknessOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: Element_weaknessOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => Element_weaknessWhereUniqueInput, {
    nullable: true
  })
  cursor?: Element_weaknessWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [Element_weaknessScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"element_id" | "weakness_element_id" | "coef"> | undefined;
}
