import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CardOrderByWithRelationInput } from "../../../inputs/CardOrderByWithRelationInput";
import { CardWhereInput } from "../../../inputs/CardWhereInput";
import { CardWhereUniqueInput } from "../../../inputs/CardWhereUniqueInput";
import { CardScalarFieldEnum } from "../../../../enums/CardScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindManyCardArgs {
  @TypeGraphQL.Field(_type => CardWhereInput, {
    nullable: true
  })
  where?: CardWhereInput | undefined;

  @TypeGraphQL.Field(_type => [CardOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: CardOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => CardWhereUniqueInput, {
    nullable: true
  })
  cursor?: CardWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [CardScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "name" | "description" | "power" | "element_id" | "rank_id" | "card_type_id" | "max_chain"> | undefined;
}
