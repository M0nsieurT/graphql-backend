import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ElementCreateOrConnectWithoutElement_affinity_elementToelement_affinity_element_idInput } from "../inputs/ElementCreateOrConnectWithoutElement_affinity_elementToelement_affinity_element_idInput";
import { ElementCreateWithoutElement_affinity_elementToelement_affinity_element_idInput } from "../inputs/ElementCreateWithoutElement_affinity_elementToelement_affinity_element_idInput";
import { ElementUpdateWithoutElement_affinity_elementToelement_affinity_element_idInput } from "../inputs/ElementUpdateWithoutElement_affinity_elementToelement_affinity_element_idInput";
import { ElementUpsertWithoutElement_affinity_elementToelement_affinity_element_idInput } from "../inputs/ElementUpsertWithoutElement_affinity_elementToelement_affinity_element_idInput";
import { ElementWhereUniqueInput } from "../inputs/ElementWhereUniqueInput";

@TypeGraphQL.InputType("ElementUpdateOneRequiredWithoutElement_affinity_elementToelement_affinity_element_idNestedInput", {
  isAbstract: true
})
export class ElementUpdateOneRequiredWithoutElement_affinity_elementToelement_affinity_element_idNestedInput {
  @TypeGraphQL.Field(_type => ElementCreateWithoutElement_affinity_elementToelement_affinity_element_idInput, {
    nullable: true
  })
  create?: ElementCreateWithoutElement_affinity_elementToelement_affinity_element_idInput | undefined;

  @TypeGraphQL.Field(_type => ElementCreateOrConnectWithoutElement_affinity_elementToelement_affinity_element_idInput, {
    nullable: true
  })
  connectOrCreate?: ElementCreateOrConnectWithoutElement_affinity_elementToelement_affinity_element_idInput | undefined;

  @TypeGraphQL.Field(_type => ElementUpsertWithoutElement_affinity_elementToelement_affinity_element_idInput, {
    nullable: true
  })
  upsert?: ElementUpsertWithoutElement_affinity_elementToelement_affinity_element_idInput | undefined;

  @TypeGraphQL.Field(_type => ElementWhereUniqueInput, {
    nullable: true
  })
  connect?: ElementWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => ElementUpdateWithoutElement_affinity_elementToelement_affinity_element_idInput, {
    nullable: true
  })
  update?: ElementUpdateWithoutElement_affinity_elementToelement_affinity_element_idInput | undefined;
}
