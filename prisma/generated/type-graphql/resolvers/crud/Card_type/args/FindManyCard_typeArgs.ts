import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Card_typeOrderByWithRelationInput } from "../../../inputs/Card_typeOrderByWithRelationInput";
import { Card_typeWhereInput } from "../../../inputs/Card_typeWhereInput";
import { Card_typeWhereUniqueInput } from "../../../inputs/Card_typeWhereUniqueInput";
import { Card_typeScalarFieldEnum } from "../../../../enums/Card_typeScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindManyCard_typeArgs {
  @TypeGraphQL.Field(_type => Card_typeWhereInput, {
    nullable: true
  })
  where?: Card_typeWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Card_typeOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: Card_typeOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => Card_typeWhereUniqueInput, {
    nullable: true
  })
  cursor?: Card_typeWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [Card_typeScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "name"> | undefined;
}
