import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ElementCreateOrConnectWithoutElement_affinity_elementToelement_affinity_affinity_elementInput } from "../inputs/ElementCreateOrConnectWithoutElement_affinity_elementToelement_affinity_affinity_elementInput";
import { ElementCreateWithoutElement_affinity_elementToelement_affinity_affinity_elementInput } from "../inputs/ElementCreateWithoutElement_affinity_elementToelement_affinity_affinity_elementInput";
import { ElementUpdateWithoutElement_affinity_elementToelement_affinity_affinity_elementInput } from "../inputs/ElementUpdateWithoutElement_affinity_elementToelement_affinity_affinity_elementInput";
import { ElementUpsertWithoutElement_affinity_elementToelement_affinity_affinity_elementInput } from "../inputs/ElementUpsertWithoutElement_affinity_elementToelement_affinity_affinity_elementInput";
import { ElementWhereUniqueInput } from "../inputs/ElementWhereUniqueInput";

@TypeGraphQL.InputType("ElementUpdateOneRequiredWithoutElement_affinity_elementToelement_affinity_affinity_elementNestedInput", {
  isAbstract: true
})
export class ElementUpdateOneRequiredWithoutElement_affinity_elementToelement_affinity_affinity_elementNestedInput {
  @TypeGraphQL.Field(_type => ElementCreateWithoutElement_affinity_elementToelement_affinity_affinity_elementInput, {
    nullable: true
  })
  create?: ElementCreateWithoutElement_affinity_elementToelement_affinity_affinity_elementInput | undefined;

  @TypeGraphQL.Field(_type => ElementCreateOrConnectWithoutElement_affinity_elementToelement_affinity_affinity_elementInput, {
    nullable: true
  })
  connectOrCreate?: ElementCreateOrConnectWithoutElement_affinity_elementToelement_affinity_affinity_elementInput | undefined;

  @TypeGraphQL.Field(_type => ElementUpsertWithoutElement_affinity_elementToelement_affinity_affinity_elementInput, {
    nullable: true
  })
  upsert?: ElementUpsertWithoutElement_affinity_elementToelement_affinity_affinity_elementInput | undefined;

  @TypeGraphQL.Field(_type => ElementWhereUniqueInput, {
    nullable: true
  })
  connect?: ElementWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => ElementUpdateWithoutElement_affinity_elementToelement_affinity_affinity_elementInput, {
    nullable: true
  })
  update?: ElementUpdateWithoutElement_affinity_elementToelement_affinity_affinity_elementInput | undefined;
}
