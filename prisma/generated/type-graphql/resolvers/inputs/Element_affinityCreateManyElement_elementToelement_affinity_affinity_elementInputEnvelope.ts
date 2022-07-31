import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Element_affinityCreateManyElement_elementToelement_affinity_affinity_elementInput } from "../inputs/Element_affinityCreateManyElement_elementToelement_affinity_affinity_elementInput";

@TypeGraphQL.InputType("Element_affinityCreateManyElement_elementToelement_affinity_affinity_elementInputEnvelope", {
  isAbstract: true
})
export class Element_affinityCreateManyElement_elementToelement_affinity_affinity_elementInputEnvelope {
  @TypeGraphQL.Field(_type => [Element_affinityCreateManyElement_elementToelement_affinity_affinity_elementInput], {
    nullable: false
  })
  data!: Element_affinityCreateManyElement_elementToelement_affinity_affinity_elementInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
