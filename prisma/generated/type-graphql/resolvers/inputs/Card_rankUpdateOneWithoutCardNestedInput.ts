import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Card_rankCreateOrConnectWithoutCardInput } from "../inputs/Card_rankCreateOrConnectWithoutCardInput";
import { Card_rankCreateWithoutCardInput } from "../inputs/Card_rankCreateWithoutCardInput";
import { Card_rankUpdateWithoutCardInput } from "../inputs/Card_rankUpdateWithoutCardInput";
import { Card_rankUpsertWithoutCardInput } from "../inputs/Card_rankUpsertWithoutCardInput";
import { Card_rankWhereUniqueInput } from "../inputs/Card_rankWhereUniqueInput";

@TypeGraphQL.InputType("Card_rankUpdateOneWithoutCardNestedInput", {
  isAbstract: true
})
export class Card_rankUpdateOneWithoutCardNestedInput {
  @TypeGraphQL.Field(_type => Card_rankCreateWithoutCardInput, {
    nullable: true
  })
  create?: Card_rankCreateWithoutCardInput | undefined;

  @TypeGraphQL.Field(_type => Card_rankCreateOrConnectWithoutCardInput, {
    nullable: true
  })
  connectOrCreate?: Card_rankCreateOrConnectWithoutCardInput | undefined;

  @TypeGraphQL.Field(_type => Card_rankUpsertWithoutCardInput, {
    nullable: true
  })
  upsert?: Card_rankUpsertWithoutCardInput | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  disconnect?: boolean | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  delete?: boolean | undefined;

  @TypeGraphQL.Field(_type => Card_rankWhereUniqueInput, {
    nullable: true
  })
  connect?: Card_rankWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => Card_rankUpdateWithoutCardInput, {
    nullable: true
  })
  update?: Card_rankUpdateWithoutCardInput | undefined;
}
