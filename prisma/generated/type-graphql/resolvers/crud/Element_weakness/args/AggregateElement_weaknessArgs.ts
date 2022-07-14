import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Element_weaknessOrderByWithRelationInput } from "../../../inputs/Element_weaknessOrderByWithRelationInput";
import { Element_weaknessWhereInput } from "../../../inputs/Element_weaknessWhereInput";
import { Element_weaknessWhereUniqueInput } from "../../../inputs/Element_weaknessWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateElement_weaknessArgs {
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
}
