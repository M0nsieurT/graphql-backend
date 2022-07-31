import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Element_affinityOrderByWithRelationInput } from "../../../inputs/Element_affinityOrderByWithRelationInput";
import { Element_affinityWhereInput } from "../../../inputs/Element_affinityWhereInput";
import { Element_affinityWhereUniqueInput } from "../../../inputs/Element_affinityWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateElement_affinityArgs {
  @TypeGraphQL.Field(_type => Element_affinityWhereInput, {
    nullable: true
  })
  where?: Element_affinityWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Element_affinityOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: Element_affinityOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => Element_affinityWhereUniqueInput, {
    nullable: true
  })
  cursor?: Element_affinityWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
