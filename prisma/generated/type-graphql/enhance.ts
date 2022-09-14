import { ClassType } from "type-graphql";
import * as tslib from "tslib";
import * as crudResolvers from "./resolvers/crud/resolvers-crud.index";
import * as argsTypes from "./resolvers/crud/args.index";
import * as actionResolvers from "./resolvers/crud/resolvers-actions.index";
import * as relationResolvers from "./resolvers/relations/resolvers.index";
import * as models from "./models";
import * as outputTypes from "./resolvers/outputs";
import * as inputTypes from "./resolvers/inputs";

const crudResolversMap = {
  Card: crudResolvers.CardCrudResolver,
  Card_rank: crudResolvers.Card_rankCrudResolver,
  Card_type: crudResolvers.Card_typeCrudResolver,
  Element: crudResolvers.ElementCrudResolver,
  Element_weakness: crudResolvers.Element_weaknessCrudResolver,
  Player: crudResolvers.PlayerCrudResolver,
  Player_card: crudResolvers.Player_cardCrudResolver,
  Element_affinity: crudResolvers.Element_affinityCrudResolver
};
const actionResolversMap = {
  Card: {
    aggregateCard: actionResolvers.AggregateCardResolver,
    createManyCard: actionResolvers.CreateManyCardResolver,
    createOneCard: actionResolvers.CreateOneCardResolver,
    deleteManyCard: actionResolvers.DeleteManyCardResolver,
    deleteOneCard: actionResolvers.DeleteOneCardResolver,
    findFirstCard: actionResolvers.FindFirstCardResolver,
    cards: actionResolvers.FindManyCardResolver,
    card: actionResolvers.FindUniqueCardResolver,
    groupByCard: actionResolvers.GroupByCardResolver,
    updateManyCard: actionResolvers.UpdateManyCardResolver,
    updateOneCard: actionResolvers.UpdateOneCardResolver,
    upsertOneCard: actionResolvers.UpsertOneCardResolver
  },
  Card_rank: {
    aggregateCard_rank: actionResolvers.AggregateCard_rankResolver,
    createManyCard_rank: actionResolvers.CreateManyCard_rankResolver,
    createOneCard_rank: actionResolvers.CreateOneCard_rankResolver,
    deleteManyCard_rank: actionResolvers.DeleteManyCard_rankResolver,
    deleteOneCard_rank: actionResolvers.DeleteOneCard_rankResolver,
    findFirstCard_rank: actionResolvers.FindFirstCard_rankResolver,
    card_ranks: actionResolvers.FindManyCard_rankResolver,
    card_rank: actionResolvers.FindUniqueCard_rankResolver,
    groupByCard_rank: actionResolvers.GroupByCard_rankResolver,
    updateManyCard_rank: actionResolvers.UpdateManyCard_rankResolver,
    updateOneCard_rank: actionResolvers.UpdateOneCard_rankResolver,
    upsertOneCard_rank: actionResolvers.UpsertOneCard_rankResolver
  },
  Card_type: {
    aggregateCard_type: actionResolvers.AggregateCard_typeResolver,
    createManyCard_type: actionResolvers.CreateManyCard_typeResolver,
    createOneCard_type: actionResolvers.CreateOneCard_typeResolver,
    deleteManyCard_type: actionResolvers.DeleteManyCard_typeResolver,
    deleteOneCard_type: actionResolvers.DeleteOneCard_typeResolver,
    findFirstCard_type: actionResolvers.FindFirstCard_typeResolver,
    card_types: actionResolvers.FindManyCard_typeResolver,
    card_type: actionResolvers.FindUniqueCard_typeResolver,
    groupByCard_type: actionResolvers.GroupByCard_typeResolver,
    updateManyCard_type: actionResolvers.UpdateManyCard_typeResolver,
    updateOneCard_type: actionResolvers.UpdateOneCard_typeResolver,
    upsertOneCard_type: actionResolvers.UpsertOneCard_typeResolver
  },
  Element: {
    aggregateElement: actionResolvers.AggregateElementResolver,
    createManyElement: actionResolvers.CreateManyElementResolver,
    createOneElement: actionResolvers.CreateOneElementResolver,
    deleteManyElement: actionResolvers.DeleteManyElementResolver,
    deleteOneElement: actionResolvers.DeleteOneElementResolver,
    findFirstElement: actionResolvers.FindFirstElementResolver,
    elements: actionResolvers.FindManyElementResolver,
    element: actionResolvers.FindUniqueElementResolver,
    groupByElement: actionResolvers.GroupByElementResolver,
    updateManyElement: actionResolvers.UpdateManyElementResolver,
    updateOneElement: actionResolvers.UpdateOneElementResolver,
    upsertOneElement: actionResolvers.UpsertOneElementResolver
  },
  Element_weakness: {
    aggregateElement_weakness: actionResolvers.AggregateElement_weaknessResolver,
    createManyElement_weakness: actionResolvers.CreateManyElement_weaknessResolver,
    createOneElement_weakness: actionResolvers.CreateOneElement_weaknessResolver,
    deleteManyElement_weakness: actionResolvers.DeleteManyElement_weaknessResolver,
    deleteOneElement_weakness: actionResolvers.DeleteOneElement_weaknessResolver,
    findFirstElement_weakness: actionResolvers.FindFirstElement_weaknessResolver,
    element_weaknesses: actionResolvers.FindManyElement_weaknessResolver,
    element_weakness: actionResolvers.FindUniqueElement_weaknessResolver,
    groupByElement_weakness: actionResolvers.GroupByElement_weaknessResolver,
    updateManyElement_weakness: actionResolvers.UpdateManyElement_weaknessResolver,
    updateOneElement_weakness: actionResolvers.UpdateOneElement_weaknessResolver,
    upsertOneElement_weakness: actionResolvers.UpsertOneElement_weaknessResolver
  },
  Player: {
    aggregatePlayer: actionResolvers.AggregatePlayerResolver,
    createManyPlayer: actionResolvers.CreateManyPlayerResolver,
    createOnePlayer: actionResolvers.CreateOnePlayerResolver,
    deleteManyPlayer: actionResolvers.DeleteManyPlayerResolver,
    deleteOnePlayer: actionResolvers.DeleteOnePlayerResolver,
    findFirstPlayer: actionResolvers.FindFirstPlayerResolver,
    players: actionResolvers.FindManyPlayerResolver,
    player: actionResolvers.FindUniquePlayerResolver,
    groupByPlayer: actionResolvers.GroupByPlayerResolver,
    updateManyPlayer: actionResolvers.UpdateManyPlayerResolver,
    updateOnePlayer: actionResolvers.UpdateOnePlayerResolver,
    upsertOnePlayer: actionResolvers.UpsertOnePlayerResolver
  },
  Player_card: {
    aggregatePlayer_card: actionResolvers.AggregatePlayer_cardResolver,
    createManyPlayer_card: actionResolvers.CreateManyPlayer_cardResolver,
    createOnePlayer_card: actionResolvers.CreateOnePlayer_cardResolver,
    deleteManyPlayer_card: actionResolvers.DeleteManyPlayer_cardResolver,
    deleteOnePlayer_card: actionResolvers.DeleteOnePlayer_cardResolver,
    findFirstPlayer_card: actionResolvers.FindFirstPlayer_cardResolver,
    player_cards: actionResolvers.FindManyPlayer_cardResolver,
    player_card: actionResolvers.FindUniquePlayer_cardResolver,
    groupByPlayer_card: actionResolvers.GroupByPlayer_cardResolver,
    updateManyPlayer_card: actionResolvers.UpdateManyPlayer_cardResolver,
    updateOnePlayer_card: actionResolvers.UpdateOnePlayer_cardResolver,
    upsertOnePlayer_card: actionResolvers.UpsertOnePlayer_cardResolver
  },
  Element_affinity: {
    aggregateElement_affinity: actionResolvers.AggregateElement_affinityResolver,
    createManyElement_affinity: actionResolvers.CreateManyElement_affinityResolver,
    createOneElement_affinity: actionResolvers.CreateOneElement_affinityResolver,
    deleteManyElement_affinity: actionResolvers.DeleteManyElement_affinityResolver,
    deleteOneElement_affinity: actionResolvers.DeleteOneElement_affinityResolver,
    findFirstElement_affinity: actionResolvers.FindFirstElement_affinityResolver,
    element_affinities: actionResolvers.FindManyElement_affinityResolver,
    element_affinity: actionResolvers.FindUniqueElement_affinityResolver,
    groupByElement_affinity: actionResolvers.GroupByElement_affinityResolver,
    updateManyElement_affinity: actionResolvers.UpdateManyElement_affinityResolver,
    updateOneElement_affinity: actionResolvers.UpdateOneElement_affinityResolver,
    upsertOneElement_affinity: actionResolvers.UpsertOneElement_affinityResolver
  }
};
const crudResolversInfo = {
  Card: ["aggregateCard", "createManyCard", "createOneCard", "deleteManyCard", "deleteOneCard", "findFirstCard", "cards", "card", "groupByCard", "updateManyCard", "updateOneCard", "upsertOneCard"],
  Card_rank: ["aggregateCard_rank", "createManyCard_rank", "createOneCard_rank", "deleteManyCard_rank", "deleteOneCard_rank", "findFirstCard_rank", "card_ranks", "card_rank", "groupByCard_rank", "updateManyCard_rank", "updateOneCard_rank", "upsertOneCard_rank"],
  Card_type: ["aggregateCard_type", "createManyCard_type", "createOneCard_type", "deleteManyCard_type", "deleteOneCard_type", "findFirstCard_type", "card_types", "card_type", "groupByCard_type", "updateManyCard_type", "updateOneCard_type", "upsertOneCard_type"],
  Element: ["aggregateElement", "createManyElement", "createOneElement", "deleteManyElement", "deleteOneElement", "findFirstElement", "elements", "element", "groupByElement", "updateManyElement", "updateOneElement", "upsertOneElement"],
  Element_weakness: ["aggregateElement_weakness", "createManyElement_weakness", "createOneElement_weakness", "deleteManyElement_weakness", "deleteOneElement_weakness", "findFirstElement_weakness", "element_weaknesses", "element_weakness", "groupByElement_weakness", "updateManyElement_weakness", "updateOneElement_weakness", "upsertOneElement_weakness"],
  Player: ["aggregatePlayer", "createManyPlayer", "createOnePlayer", "deleteManyPlayer", "deleteOnePlayer", "findFirstPlayer", "players", "player", "groupByPlayer", "updateManyPlayer", "updateOnePlayer", "upsertOnePlayer"],
  Player_card: ["aggregatePlayer_card", "createManyPlayer_card", "createOnePlayer_card", "deleteManyPlayer_card", "deleteOnePlayer_card", "findFirstPlayer_card", "player_cards", "player_card", "groupByPlayer_card", "updateManyPlayer_card", "updateOnePlayer_card", "upsertOnePlayer_card"],
  Element_affinity: ["aggregateElement_affinity", "createManyElement_affinity", "createOneElement_affinity", "deleteManyElement_affinity", "deleteOneElement_affinity", "findFirstElement_affinity", "element_affinities", "element_affinity", "groupByElement_affinity", "updateManyElement_affinity", "updateOneElement_affinity", "upsertOneElement_affinity"]
};
const argsInfo = {
  AggregateCardArgs: ["where", "orderBy", "cursor", "take", "skip"],
  CreateManyCardArgs: ["data", "skipDuplicates"],
  CreateOneCardArgs: ["data"],
  DeleteManyCardArgs: ["where"],
  DeleteOneCardArgs: ["where"],
  FindFirstCardArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyCardArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindUniqueCardArgs: ["where"],
  GroupByCardArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  UpdateManyCardArgs: ["data", "where"],
  UpdateOneCardArgs: ["data", "where"],
  UpsertOneCardArgs: ["where", "create", "update"],
  AggregateCard_rankArgs: ["where", "orderBy", "cursor", "take", "skip"],
  CreateManyCard_rankArgs: ["data", "skipDuplicates"],
  CreateOneCard_rankArgs: ["data"],
  DeleteManyCard_rankArgs: ["where"],
  DeleteOneCard_rankArgs: ["where"],
  FindFirstCard_rankArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyCard_rankArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindUniqueCard_rankArgs: ["where"],
  GroupByCard_rankArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  UpdateManyCard_rankArgs: ["data", "where"],
  UpdateOneCard_rankArgs: ["data", "where"],
  UpsertOneCard_rankArgs: ["where", "create", "update"],
  AggregateCard_typeArgs: ["where", "orderBy", "cursor", "take", "skip"],
  CreateManyCard_typeArgs: ["data", "skipDuplicates"],
  CreateOneCard_typeArgs: ["data"],
  DeleteManyCard_typeArgs: ["where"],
  DeleteOneCard_typeArgs: ["where"],
  FindFirstCard_typeArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyCard_typeArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindUniqueCard_typeArgs: ["where"],
  GroupByCard_typeArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  UpdateManyCard_typeArgs: ["data", "where"],
  UpdateOneCard_typeArgs: ["data", "where"],
  UpsertOneCard_typeArgs: ["where", "create", "update"],
  AggregateElementArgs: ["where", "orderBy", "cursor", "take", "skip"],
  CreateManyElementArgs: ["data", "skipDuplicates"],
  CreateOneElementArgs: ["data"],
  DeleteManyElementArgs: ["where"],
  DeleteOneElementArgs: ["where"],
  FindFirstElementArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyElementArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindUniqueElementArgs: ["where"],
  GroupByElementArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  UpdateManyElementArgs: ["data", "where"],
  UpdateOneElementArgs: ["data", "where"],
  UpsertOneElementArgs: ["where", "create", "update"],
  AggregateElement_weaknessArgs: ["where", "orderBy", "cursor", "take", "skip"],
  CreateManyElement_weaknessArgs: ["data", "skipDuplicates"],
  CreateOneElement_weaknessArgs: ["data"],
  DeleteManyElement_weaknessArgs: ["where"],
  DeleteOneElement_weaknessArgs: ["where"],
  FindFirstElement_weaknessArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyElement_weaknessArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindUniqueElement_weaknessArgs: ["where"],
  GroupByElement_weaknessArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  UpdateManyElement_weaknessArgs: ["data", "where"],
  UpdateOneElement_weaknessArgs: ["data", "where"],
  UpsertOneElement_weaknessArgs: ["where", "create", "update"],
  AggregatePlayerArgs: ["where", "orderBy", "cursor", "take", "skip"],
  CreateManyPlayerArgs: ["data", "skipDuplicates"],
  CreateOnePlayerArgs: ["data"],
  DeleteManyPlayerArgs: ["where"],
  DeleteOnePlayerArgs: ["where"],
  FindFirstPlayerArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyPlayerArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindUniquePlayerArgs: ["where"],
  GroupByPlayerArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  UpdateManyPlayerArgs: ["data", "where"],
  UpdateOnePlayerArgs: ["data", "where"],
  UpsertOnePlayerArgs: ["where", "create", "update"],
  AggregatePlayer_cardArgs: ["where", "orderBy", "cursor", "take", "skip"],
  CreateManyPlayer_cardArgs: ["data", "skipDuplicates"],
  CreateOnePlayer_cardArgs: ["data"],
  DeleteManyPlayer_cardArgs: ["where"],
  DeleteOnePlayer_cardArgs: ["where"],
  FindFirstPlayer_cardArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyPlayer_cardArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindUniquePlayer_cardArgs: ["where"],
  GroupByPlayer_cardArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  UpdateManyPlayer_cardArgs: ["data", "where"],
  UpdateOnePlayer_cardArgs: ["data", "where"],
  UpsertOnePlayer_cardArgs: ["where", "create", "update"],
  AggregateElement_affinityArgs: ["where", "orderBy", "cursor", "take", "skip"],
  CreateManyElement_affinityArgs: ["data", "skipDuplicates"],
  CreateOneElement_affinityArgs: ["data"],
  DeleteManyElement_affinityArgs: ["where"],
  DeleteOneElement_affinityArgs: ["where"],
  FindFirstElement_affinityArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyElement_affinityArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindUniqueElement_affinityArgs: ["where"],
  GroupByElement_affinityArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  UpdateManyElement_affinityArgs: ["data", "where"],
  UpdateOneElement_affinityArgs: ["data", "where"],
  UpsertOneElement_affinityArgs: ["where", "create", "update"]
};

type ResolverModelNames = keyof typeof crudResolversMap;

type ModelResolverActionNames<
  TModel extends ResolverModelNames
  > = keyof typeof crudResolversMap[TModel]["prototype"];

export type ResolverActionsConfig<
  TModel extends ResolverModelNames
  > = Partial<Record<ModelResolverActionNames<TModel> | "_all", MethodDecorator[]>>;

export type ResolversEnhanceMap = {
  [TModel in ResolverModelNames]?: ResolverActionsConfig<TModel>;
};

export function applyResolversEnhanceMap(
  resolversEnhanceMap: ResolversEnhanceMap,
) {
  for (const resolversEnhanceMapKey of Object.keys(resolversEnhanceMap)) {
    const modelName = resolversEnhanceMapKey as keyof typeof resolversEnhanceMap;
    const crudTarget = crudResolversMap[modelName].prototype;
    const resolverActionsConfig = resolversEnhanceMap[modelName]!;
    const actionResolversConfig = actionResolversMap[modelName];
    if (resolverActionsConfig._all) {
      const allActionsDecorators = resolverActionsConfig._all;
      const resolverActionNames = crudResolversInfo[modelName as keyof typeof crudResolversInfo];
      for (const resolverActionName of resolverActionNames) {
        const actionTarget = (actionResolversConfig[
          resolverActionName as keyof typeof actionResolversConfig
        ] as Function).prototype;
        tslib.__decorate(allActionsDecorators, crudTarget, resolverActionName, null);
        tslib.__decorate(allActionsDecorators, actionTarget, resolverActionName, null);
      }
    }
    const resolverActionsToApply = Object.keys(resolverActionsConfig).filter(
      it => it !== "_all"
    );
    for (const resolverActionName of resolverActionsToApply) {
      const decorators = resolverActionsConfig[
        resolverActionName as keyof typeof resolverActionsConfig
      ] as MethodDecorator[];
      const actionTarget = (actionResolversConfig[
        resolverActionName as keyof typeof actionResolversConfig
      ] as Function).prototype;
      tslib.__decorate(decorators, crudTarget, resolverActionName, null);
      tslib.__decorate(decorators, actionTarget, resolverActionName, null);
    }
  }
}

type ArgsTypesNames = keyof typeof argsTypes;

type ArgFieldNames<TArgsType extends ArgsTypesNames> = Exclude<
  keyof typeof argsTypes[TArgsType]["prototype"],
  number | symbol
>;

type ArgFieldsConfig<
  TArgsType extends ArgsTypesNames
  > = FieldsConfig<ArgFieldNames<TArgsType>>;

export type ArgConfig<TArgsType extends ArgsTypesNames> = {
  class?: ClassDecorator[];
  fields?: ArgFieldsConfig<TArgsType>;
};

export type ArgsTypesEnhanceMap = {
  [TArgsType in ArgsTypesNames]?: ArgConfig<TArgsType>;
};

export function applyArgsTypesEnhanceMap(
  argsTypesEnhanceMap: ArgsTypesEnhanceMap,
) {
  for (const argsTypesEnhanceMapKey of Object.keys(argsTypesEnhanceMap)) {
    const argsTypeName = argsTypesEnhanceMapKey as keyof typeof argsTypesEnhanceMap;
    const typeConfig = argsTypesEnhanceMap[argsTypeName]!;
    const typeClass = argsTypes[argsTypeName];
    const typeTarget = typeClass.prototype;
    applyTypeClassEnhanceConfig(
      typeConfig,
      typeClass,
      typeTarget,
      argsInfo[argsTypeName as keyof typeof argsInfo],
    );
  }
}

const relationResolversMap = {
  Card: relationResolvers.CardRelationsResolver,
  Card_rank: relationResolvers.Card_rankRelationsResolver,
  Card_type: relationResolvers.Card_typeRelationsResolver,
  Element: relationResolvers.ElementRelationsResolver,
  Element_weakness: relationResolvers.Element_weaknessRelationsResolver,
  Player: relationResolvers.PlayerRelationsResolver,
  Player_card: relationResolvers.Player_cardRelationsResolver,
  Element_affinity: relationResolvers.Element_affinityRelationsResolver
};
const relationResolversInfo = {
  Card: ["card_rank", "card_type", "element", "player_card"],
  Card_rank: ["card"],
  Card_type: ["card"],
  Element: ["card", "element_affinity_elementToelement_affinity_element_id", "element_affinity_elementToelement_affinity_affinity_element", "element_weakness_elementToelement_weakness_element_id", "element_weakness_elementToelement_weakness_weakness_element_id"],
  Element_weakness: ["element_elementToelement_weakness_element_id", "element_elementToelement_weakness_weakness_element_id"],
  Player: ["player_card"],
  Player_card: ["card", "player"],
  Element_affinity: ["element_elementToelement_affinity_element_id", "element_elementToelement_affinity_affinity_element"]
};

type RelationResolverModelNames = keyof typeof relationResolversMap;

type RelationResolverActionNames<
  TModel extends RelationResolverModelNames
  > = keyof typeof relationResolversMap[TModel]["prototype"];

export type RelationResolverActionsConfig<TModel extends RelationResolverModelNames>
  = Partial<Record<RelationResolverActionNames<TModel> | "_all", MethodDecorator[]>>;

export type RelationResolversEnhanceMap = {
  [TModel in RelationResolverModelNames]?: RelationResolverActionsConfig<TModel>;
};

export function applyRelationResolversEnhanceMap(
  relationResolversEnhanceMap: RelationResolversEnhanceMap,
) {
  for (const relationResolversEnhanceMapKey of Object.keys(relationResolversEnhanceMap)) {
    const modelName = relationResolversEnhanceMapKey as keyof typeof relationResolversEnhanceMap;
    const relationResolverTarget = relationResolversMap[modelName].prototype;
    const relationResolverActionsConfig = relationResolversEnhanceMap[modelName]!;
    if (relationResolverActionsConfig._all) {
      const allActionsDecorators = relationResolverActionsConfig._all;
      const relationResolverActionNames = relationResolversInfo[modelName as keyof typeof relationResolversInfo];
      for (const relationResolverActionName of relationResolverActionNames) {
        tslib.__decorate(allActionsDecorators, relationResolverTarget, relationResolverActionName, null);
      }
    }
    const relationResolverActionsToApply = Object.keys(relationResolverActionsConfig).filter(
      it => it !== "_all"
    );
    for (const relationResolverActionName of relationResolverActionsToApply) {
      const decorators = relationResolverActionsConfig[
        relationResolverActionName as keyof typeof relationResolverActionsConfig
      ] as MethodDecorator[];
      tslib.__decorate(decorators, relationResolverTarget, relationResolverActionName, null);
    }
  }
}

type TypeConfig = {
  class?: ClassDecorator[];
  fields?: FieldsConfig;
};

type FieldsConfig<TTypeKeys extends string = string> = Partial<
  Record<TTypeKeys | "_all", PropertyDecorator[]>
>;

function applyTypeClassEnhanceConfig<
  TEnhanceConfig extends TypeConfig,
  TType extends object
>(
  enhanceConfig: TEnhanceConfig,
  typeClass: ClassType<TType>,
  typePrototype: TType,
  typeFieldNames: string[]
) {
  if (enhanceConfig.class) {
    tslib.__decorate(enhanceConfig.class, typeClass);
  }
  if (enhanceConfig.fields) {
    if (enhanceConfig.fields._all) {
      const allFieldsDecorators = enhanceConfig.fields._all;
      for (const typeFieldName of typeFieldNames) {
        tslib.__decorate(allFieldsDecorators, typePrototype, typeFieldName, void 0);
      }
    }
    const configFieldsToApply = Object.keys(enhanceConfig.fields).filter(
      it => it !== "_all"
    );
    for (const typeFieldName of configFieldsToApply) {
      const fieldDecorators = enhanceConfig.fields[typeFieldName]!;
      tslib.__decorate(fieldDecorators, typePrototype, typeFieldName, void 0);
    }
  }
}

const modelsInfo = {
  Card: ["id", "name", "description", "power", "element_id", "rank_id", "card_type_id", "max_chain"],
  Card_rank: ["id", "code", "name"],
  Card_type: ["id", "name"],
  Element: ["id", "name"],
  Element_weakness: ["element_id", "weakness_element_id", "coef"],
  Player: ["id", "name", "password"],
  Player_card: ["id", "name", "card_id", "player_id"],
  Element_affinity: ["element_id", "affinity_element", "affinity_type"]
};

type ModelNames = keyof typeof models;

type ModelFieldNames<TModel extends ModelNames> = Exclude<
  keyof typeof models[TModel]["prototype"],
  number | symbol
>;

type ModelFieldsConfig<TModel extends ModelNames> = FieldsConfig<
  ModelFieldNames<TModel>
>;

export type ModelConfig<TModel extends ModelNames> = {
  class?: ClassDecorator[];
  fields?: ModelFieldsConfig<TModel>;
};

export type ModelsEnhanceMap = {
  [TModel in ModelNames]?: ModelConfig<TModel>;
};

export function applyModelsEnhanceMap(modelsEnhanceMap: ModelsEnhanceMap) {
  for (const modelsEnhanceMapKey of Object.keys(modelsEnhanceMap)) {
    const modelName = modelsEnhanceMapKey as keyof typeof modelsEnhanceMap;
    const modelConfig = modelsEnhanceMap[modelName]!;
    const modelClass = models[modelName];
    const modelTarget = modelClass.prototype;
    applyTypeClassEnhanceConfig(
      modelConfig,
      modelClass,
      modelTarget,
      modelsInfo[modelName as keyof typeof modelsInfo],
    );
  }
}

const outputsInfo = {
  AggregateCard: ["_count", "_avg", "_sum", "_min", "_max"],
  CardGroupBy: ["id", "name", "description", "power", "element_id", "rank_id", "card_type_id", "max_chain", "_count", "_avg", "_sum", "_min", "_max"],
  AggregateCard_rank: ["_count", "_avg", "_sum", "_min", "_max"],
  Card_rankGroupBy: ["id", "code", "name", "_count", "_avg", "_sum", "_min", "_max"],
  AggregateCard_type: ["_count", "_avg", "_sum", "_min", "_max"],
  Card_typeGroupBy: ["id", "name", "_count", "_avg", "_sum", "_min", "_max"],
  AggregateElement: ["_count", "_avg", "_sum", "_min", "_max"],
  ElementGroupBy: ["id", "name", "_count", "_avg", "_sum", "_min", "_max"],
  AggregateElement_weakness: ["_count", "_avg", "_sum", "_min", "_max"],
  Element_weaknessGroupBy: ["element_id", "weakness_element_id", "coef", "_count", "_avg", "_sum", "_min", "_max"],
  AggregatePlayer: ["_count", "_avg", "_sum", "_min", "_max"],
  PlayerGroupBy: ["id", "name", "password", "_count", "_avg", "_sum", "_min", "_max"],
  AggregatePlayer_card: ["_count", "_avg", "_sum", "_min", "_max"],
  Player_cardGroupBy: ["id", "name", "card_id", "player_id", "_count", "_avg", "_sum", "_min", "_max"],
  AggregateElement_affinity: ["_count", "_avg", "_sum", "_min", "_max"],
  Element_affinityGroupBy: ["element_id", "affinity_element", "affinity_type", "_count", "_avg", "_sum", "_min", "_max"],
  AffectedRowsOutput: ["count"],
  CardCount: ["player_card"],
  CardCountAggregate: ["id", "name", "description", "power", "element_id", "rank_id", "card_type_id", "max_chain", "_all"],
  CardAvgAggregate: ["id", "power", "element_id", "rank_id", "card_type_id", "max_chain"],
  CardSumAggregate: ["id", "power", "element_id", "rank_id", "card_type_id", "max_chain"],
  CardMinAggregate: ["id", "name", "description", "power", "element_id", "rank_id", "card_type_id", "max_chain"],
  CardMaxAggregate: ["id", "name", "description", "power", "element_id", "rank_id", "card_type_id", "max_chain"],
  Card_rankCount: ["card"],
  Card_rankCountAggregate: ["id", "code", "name", "_all"],
  Card_rankAvgAggregate: ["id"],
  Card_rankSumAggregate: ["id"],
  Card_rankMinAggregate: ["id", "code", "name"],
  Card_rankMaxAggregate: ["id", "code", "name"],
  Card_typeCount: ["card"],
  Card_typeCountAggregate: ["id", "name", "_all"],
  Card_typeAvgAggregate: ["id"],
  Card_typeSumAggregate: ["id"],
  Card_typeMinAggregate: ["id", "name"],
  Card_typeMaxAggregate: ["id", "name"],
  ElementCount: ["card", "element_affinity_elementToelement_affinity_element_id", "element_affinity_elementToelement_affinity_affinity_element", "element_weakness_elementToelement_weakness_element_id", "element_weakness_elementToelement_weakness_weakness_element_id"],
  ElementCountAggregate: ["id", "name", "_all"],
  ElementAvgAggregate: ["id"],
  ElementSumAggregate: ["id"],
  ElementMinAggregate: ["id", "name"],
  ElementMaxAggregate: ["id", "name"],
  Element_weaknessCountAggregate: ["element_id", "weakness_element_id", "coef", "_all"],
  Element_weaknessAvgAggregate: ["element_id", "weakness_element_id", "coef"],
  Element_weaknessSumAggregate: ["element_id", "weakness_element_id", "coef"],
  Element_weaknessMinAggregate: ["element_id", "weakness_element_id", "coef"],
  Element_weaknessMaxAggregate: ["element_id", "weakness_element_id", "coef"],
  PlayerCount: ["player_card"],
  PlayerCountAggregate: ["id", "name", "password", "_all"],
  PlayerAvgAggregate: ["id"],
  PlayerSumAggregate: ["id"],
  PlayerMinAggregate: ["id", "name", "password"],
  PlayerMaxAggregate: ["id", "name", "password"],
  Player_cardCountAggregate: ["id", "name", "card_id", "player_id", "_all"],
  Player_cardAvgAggregate: ["id", "card_id", "player_id"],
  Player_cardSumAggregate: ["id", "card_id", "player_id"],
  Player_cardMinAggregate: ["id", "name", "card_id", "player_id"],
  Player_cardMaxAggregate: ["id", "name", "card_id", "player_id"],
  Element_affinityCountAggregate: ["element_id", "affinity_element", "affinity_type", "_all"],
  Element_affinityAvgAggregate: ["element_id", "affinity_element", "affinity_type"],
  Element_affinitySumAggregate: ["element_id", "affinity_element", "affinity_type"],
  Element_affinityMinAggregate: ["element_id", "affinity_element", "affinity_type"],
  Element_affinityMaxAggregate: ["element_id", "affinity_element", "affinity_type"]
};

type OutputTypesNames = keyof typeof outputTypes;

type OutputTypeFieldNames<TOutput extends OutputTypesNames> = Exclude<
  keyof typeof outputTypes[TOutput]["prototype"],
  number | symbol
>;

type OutputTypeFieldsConfig<
  TOutput extends OutputTypesNames
  > = FieldsConfig<OutputTypeFieldNames<TOutput>>;

export type OutputTypeConfig<TOutput extends OutputTypesNames> = {
  class?: ClassDecorator[];
  fields?: OutputTypeFieldsConfig<TOutput>;
};

export type OutputTypesEnhanceMap = {
  [TOutput in OutputTypesNames]?: OutputTypeConfig<TOutput>;
};

export function applyOutputTypesEnhanceMap(
  outputTypesEnhanceMap: OutputTypesEnhanceMap,
) {
  for (const outputTypeEnhanceMapKey of Object.keys(outputTypesEnhanceMap)) {
    const outputTypeName = outputTypeEnhanceMapKey as keyof typeof outputTypesEnhanceMap;
    const typeConfig = outputTypesEnhanceMap[outputTypeName]!;
    const typeClass = outputTypes[outputTypeName];
    const typeTarget = typeClass.prototype;
    applyTypeClassEnhanceConfig(
      typeConfig,
      typeClass,
      typeTarget,
      outputsInfo[outputTypeName as keyof typeof outputsInfo],
    );
  }
}

const inputsInfo = {
  CardWhereInput: ["AND", "OR", "NOT", "id", "name", "description", "power", "element_id", "rank_id", "card_type_id", "max_chain", "card_rank", "card_type", "element", "player_card"],
  CardOrderByWithRelationInput: ["id", "name", "description", "power", "element_id", "rank_id", "card_type_id", "max_chain", "card_rank", "card_type", "element", "player_card"],
  CardWhereUniqueInput: ["id"],
  CardOrderByWithAggregationInput: ["id", "name", "description", "power", "element_id", "rank_id", "card_type_id", "max_chain", "_count", "_avg", "_max", "_min", "_sum"],
  CardScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "name", "description", "power", "element_id", "rank_id", "card_type_id", "max_chain"],
  Card_rankWhereInput: ["AND", "OR", "NOT", "id", "code", "name", "card"],
  Card_rankOrderByWithRelationInput: ["id", "code", "name", "card"],
  Card_rankWhereUniqueInput: ["id"],
  Card_rankOrderByWithAggregationInput: ["id", "code", "name", "_count", "_avg", "_max", "_min", "_sum"],
  Card_rankScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "code", "name"],
  Card_typeWhereInput: ["AND", "OR", "NOT", "id", "name", "card"],
  Card_typeOrderByWithRelationInput: ["id", "name", "card"],
  Card_typeWhereUniqueInput: ["id"],
  Card_typeOrderByWithAggregationInput: ["id", "name", "_count", "_avg", "_max", "_min", "_sum"],
  Card_typeScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "name"],
  ElementWhereInput: ["AND", "OR", "NOT", "id", "name", "card", "element_affinity_elementToelement_affinity_element_id", "element_affinity_elementToelement_affinity_affinity_element", "element_weakness_elementToelement_weakness_element_id", "element_weakness_elementToelement_weakness_weakness_element_id"],
  ElementOrderByWithRelationInput: ["id", "name", "card", "element_affinity_elementToelement_affinity_element_id", "element_affinity_elementToelement_affinity_affinity_element", "element_weakness_elementToelement_weakness_element_id", "element_weakness_elementToelement_weakness_weakness_element_id"],
  ElementWhereUniqueInput: ["id"],
  ElementOrderByWithAggregationInput: ["id", "name", "_count", "_avg", "_max", "_min", "_sum"],
  ElementScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "name"],
  Element_weaknessWhereInput: ["AND", "OR", "NOT", "element_id", "weakness_element_id", "coef", "element_elementToelement_weakness_element_id", "element_elementToelement_weakness_weakness_element_id"],
  Element_weaknessOrderByWithRelationInput: ["element_id", "weakness_element_id", "coef", "element_elementToelement_weakness_element_id", "element_elementToelement_weakness_weakness_element_id"],
  Element_weaknessWhereUniqueInput: ["element_id_weakness_element_id"],
  Element_weaknessOrderByWithAggregationInput: ["element_id", "weakness_element_id", "coef", "_count", "_avg", "_max", "_min", "_sum"],
  Element_weaknessScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "element_id", "weakness_element_id", "coef"],
  PlayerWhereInput: ["AND", "OR", "NOT", "id", "name", "password", "player_card"],
  PlayerOrderByWithRelationInput: ["id", "name", "password", "player_card"],
  PlayerWhereUniqueInput: ["id", "name"],
  PlayerOrderByWithAggregationInput: ["id", "name", "password", "_count", "_avg", "_max", "_min", "_sum"],
  PlayerScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "name", "password"],
  Player_cardWhereInput: ["AND", "OR", "NOT", "id", "name", "card_id", "player_id", "card", "player"],
  Player_cardOrderByWithRelationInput: ["id", "name", "card_id", "player_id", "card", "player"],
  Player_cardWhereUniqueInput: ["id"],
  Player_cardOrderByWithAggregationInput: ["id", "name", "card_id", "player_id", "_count", "_avg", "_max", "_min", "_sum"],
  Player_cardScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "name", "card_id", "player_id"],
  Element_affinityWhereInput: ["AND", "OR", "NOT", "element_id", "affinity_element", "affinity_type", "element_elementToelement_affinity_element_id", "element_elementToelement_affinity_affinity_element"],
  Element_affinityOrderByWithRelationInput: ["element_id", "affinity_element", "affinity_type", "element_elementToelement_affinity_element_id", "element_elementToelement_affinity_affinity_element"],
  Element_affinityWhereUniqueInput: ["element_id_affinity_element"],
  Element_affinityOrderByWithAggregationInput: ["element_id", "affinity_element", "affinity_type", "_count", "_avg", "_max", "_min", "_sum"],
  Element_affinityScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "element_id", "affinity_element", "affinity_type"],
  CardCreateInput: ["name", "description", "power", "max_chain", "card_rank", "card_type", "element", "player_card"],
  CardUpdateInput: ["name", "description", "power", "max_chain", "card_rank", "card_type", "element", "player_card"],
  CardCreateManyInput: ["id", "name", "description", "power", "element_id", "rank_id", "card_type_id", "max_chain"],
  CardUpdateManyMutationInput: ["name", "description", "power", "max_chain"],
  Card_rankCreateInput: ["code", "name", "card"],
  Card_rankUpdateInput: ["code", "name", "card"],
  Card_rankCreateManyInput: ["id", "code", "name"],
  Card_rankUpdateManyMutationInput: ["code", "name"],
  Card_typeCreateInput: ["name", "card"],
  Card_typeUpdateInput: ["name", "card"],
  Card_typeCreateManyInput: ["id", "name"],
  Card_typeUpdateManyMutationInput: ["name"],
  ElementCreateInput: ["name", "card", "element_affinity_elementToelement_affinity_element_id", "element_affinity_elementToelement_affinity_affinity_element", "element_weakness_elementToelement_weakness_element_id", "element_weakness_elementToelement_weakness_weakness_element_id"],
  ElementUpdateInput: ["name", "card", "element_affinity_elementToelement_affinity_element_id", "element_affinity_elementToelement_affinity_affinity_element", "element_weakness_elementToelement_weakness_element_id", "element_weakness_elementToelement_weakness_weakness_element_id"],
  ElementCreateManyInput: ["id", "name"],
  ElementUpdateManyMutationInput: ["name"],
  Element_weaknessCreateInput: ["coef", "element_elementToelement_weakness_element_id", "element_elementToelement_weakness_weakness_element_id"],
  Element_weaknessUpdateInput: ["coef", "element_elementToelement_weakness_element_id", "element_elementToelement_weakness_weakness_element_id"],
  Element_weaknessCreateManyInput: ["element_id", "weakness_element_id", "coef"],
  Element_weaknessUpdateManyMutationInput: ["coef"],
  PlayerCreateInput: ["name", "password", "player_card"],
  PlayerUpdateInput: ["name", "password", "player_card"],
  PlayerCreateManyInput: ["id", "name", "password"],
  PlayerUpdateManyMutationInput: ["name", "password"],
  Player_cardCreateInput: ["name", "card", "player"],
  Player_cardUpdateInput: ["name", "card", "player"],
  Player_cardCreateManyInput: ["id", "name", "card_id", "player_id"],
  Player_cardUpdateManyMutationInput: ["name"],
  Element_affinityCreateInput: ["affinity_type", "element_elementToelement_affinity_element_id", "element_elementToelement_affinity_affinity_element"],
  Element_affinityUpdateInput: ["affinity_type", "element_elementToelement_affinity_element_id", "element_elementToelement_affinity_affinity_element"],
  Element_affinityCreateManyInput: ["element_id", "affinity_element", "affinity_type"],
  Element_affinityUpdateManyMutationInput: ["affinity_type"],
  IntFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  StringFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not"],
  IntNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  Card_rankRelationFilter: ["is", "isNot"],
  Card_typeRelationFilter: ["is", "isNot"],
  ElementRelationFilter: ["is", "isNot"],
  Player_cardListRelationFilter: ["every", "some", "none"],
  Player_cardOrderByRelationAggregateInput: ["_count"],
  CardCountOrderByAggregateInput: ["id", "name", "description", "power", "element_id", "rank_id", "card_type_id", "max_chain"],
  CardAvgOrderByAggregateInput: ["id", "power", "element_id", "rank_id", "card_type_id", "max_chain"],
  CardMaxOrderByAggregateInput: ["id", "name", "description", "power", "element_id", "rank_id", "card_type_id", "max_chain"],
  CardMinOrderByAggregateInput: ["id", "name", "description", "power", "element_id", "rank_id", "card_type_id", "max_chain"],
  CardSumOrderByAggregateInput: ["id", "power", "element_id", "rank_id", "card_type_id", "max_chain"],
  IntWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
  StringWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not", "_count", "_min", "_max"],
  IntNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
  CardListRelationFilter: ["every", "some", "none"],
  CardOrderByRelationAggregateInput: ["_count"],
  Card_rankCountOrderByAggregateInput: ["id", "code", "name"],
  Card_rankAvgOrderByAggregateInput: ["id"],
  Card_rankMaxOrderByAggregateInput: ["id", "code", "name"],
  Card_rankMinOrderByAggregateInput: ["id", "code", "name"],
  Card_rankSumOrderByAggregateInput: ["id"],
  Card_typeCountOrderByAggregateInput: ["id", "name"],
  Card_typeAvgOrderByAggregateInput: ["id"],
  Card_typeMaxOrderByAggregateInput: ["id", "name"],
  Card_typeMinOrderByAggregateInput: ["id", "name"],
  Card_typeSumOrderByAggregateInput: ["id"],
  Element_affinityListRelationFilter: ["every", "some", "none"],
  Element_weaknessListRelationFilter: ["every", "some", "none"],
  Element_affinityOrderByRelationAggregateInput: ["_count"],
  Element_weaknessOrderByRelationAggregateInput: ["_count"],
  ElementCountOrderByAggregateInput: ["id", "name"],
  ElementAvgOrderByAggregateInput: ["id"],
  ElementMaxOrderByAggregateInput: ["id", "name"],
  ElementMinOrderByAggregateInput: ["id", "name"],
  ElementSumOrderByAggregateInput: ["id"],
  FloatFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  element_weaknessElement_idWeakness_element_idCompoundUniqueInput: ["element_id", "weakness_element_id"],
  Element_weaknessCountOrderByAggregateInput: ["element_id", "weakness_element_id", "coef"],
  Element_weaknessAvgOrderByAggregateInput: ["element_id", "weakness_element_id", "coef"],
  Element_weaknessMaxOrderByAggregateInput: ["element_id", "weakness_element_id", "coef"],
  Element_weaknessMinOrderByAggregateInput: ["element_id", "weakness_element_id", "coef"],
  Element_weaknessSumOrderByAggregateInput: ["element_id", "weakness_element_id", "coef"],
  FloatWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
  PlayerCountOrderByAggregateInput: ["id", "name", "password"],
  PlayerAvgOrderByAggregateInput: ["id"],
  PlayerMaxOrderByAggregateInput: ["id", "name", "password"],
  PlayerMinOrderByAggregateInput: ["id", "name", "password"],
  PlayerSumOrderByAggregateInput: ["id"],
  CardRelationFilter: ["is", "isNot"],
  PlayerRelationFilter: ["is", "isNot"],
  Player_cardCountOrderByAggregateInput: ["id", "name", "card_id", "player_id"],
  Player_cardAvgOrderByAggregateInput: ["id", "card_id", "player_id"],
  Player_cardMaxOrderByAggregateInput: ["id", "name", "card_id", "player_id"],
  Player_cardMinOrderByAggregateInput: ["id", "name", "card_id", "player_id"],
  Player_cardSumOrderByAggregateInput: ["id", "card_id", "player_id"],
  element_affinityElement_idAffinity_elementCompoundUniqueInput: ["element_id", "affinity_element"],
  Element_affinityCountOrderByAggregateInput: ["element_id", "affinity_element", "affinity_type"],
  Element_affinityAvgOrderByAggregateInput: ["element_id", "affinity_element", "affinity_type"],
  Element_affinityMaxOrderByAggregateInput: ["element_id", "affinity_element", "affinity_type"],
  Element_affinityMinOrderByAggregateInput: ["element_id", "affinity_element", "affinity_type"],
  Element_affinitySumOrderByAggregateInput: ["element_id", "affinity_element", "affinity_type"],
  Card_rankCreateNestedOneWithoutCardInput: ["create", "connectOrCreate", "connect"],
  Card_typeCreateNestedOneWithoutCardInput: ["create", "connectOrCreate", "connect"],
  ElementCreateNestedOneWithoutCardInput: ["create", "connectOrCreate", "connect"],
  Player_cardCreateNestedManyWithoutCardInput: ["create", "connectOrCreate", "createMany", "connect"],
  StringFieldUpdateOperationsInput: ["set"],
  IntFieldUpdateOperationsInput: ["set", "increment", "decrement", "multiply", "divide"],
  Card_rankUpdateOneWithoutCardNestedInput: ["create", "connectOrCreate", "upsert", "disconnect", "delete", "connect", "update"],
  Card_typeUpdateOneRequiredWithoutCardNestedInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  ElementUpdateOneRequiredWithoutCardNestedInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  Player_cardUpdateManyWithoutCardNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  NullableIntFieldUpdateOperationsInput: ["set", "increment", "decrement", "multiply", "divide"],
  CardCreateNestedManyWithoutCard_rankInput: ["create", "connectOrCreate", "createMany", "connect"],
  CardUpdateManyWithoutCard_rankNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  CardCreateNestedManyWithoutCard_typeInput: ["create", "connectOrCreate", "createMany", "connect"],
  CardUpdateManyWithoutCard_typeNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  CardCreateNestedManyWithoutElementInput: ["create", "connectOrCreate", "createMany", "connect"],
  Element_affinityCreateNestedManyWithoutElement_elementToelement_affinity_element_idInput: ["create", "connectOrCreate", "createMany", "connect"],
  Element_affinityCreateNestedManyWithoutElement_elementToelement_affinity_affinity_elementInput: ["create", "connectOrCreate", "createMany", "connect"],
  Element_weaknessCreateNestedManyWithoutElement_elementToelement_weakness_element_idInput: ["create", "connectOrCreate", "createMany", "connect"],
  Element_weaknessCreateNestedManyWithoutElement_elementToelement_weakness_weakness_element_idInput: ["create", "connectOrCreate", "createMany", "connect"],
  CardUpdateManyWithoutElementNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  Element_affinityUpdateManyWithoutElement_elementToelement_affinity_element_idNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  Element_affinityUpdateManyWithoutElement_elementToelement_affinity_affinity_elementNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  Element_weaknessUpdateManyWithoutElement_elementToelement_weakness_element_idNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  Element_weaknessUpdateManyWithoutElement_elementToelement_weakness_weakness_element_idNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  ElementCreateNestedOneWithoutElement_weakness_elementToelement_weakness_element_idInput: ["create", "connectOrCreate", "connect"],
  ElementCreateNestedOneWithoutElement_weakness_elementToelement_weakness_weakness_element_idInput: ["create", "connectOrCreate", "connect"],
  FloatFieldUpdateOperationsInput: ["set", "increment", "decrement", "multiply", "divide"],
  ElementUpdateOneRequiredWithoutElement_weakness_elementToelement_weakness_element_idNestedInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  ElementUpdateOneRequiredWithoutElement_weakness_elementToelement_weakness_weakness_element_idNestedInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  Player_cardCreateNestedManyWithoutPlayerInput: ["create", "connectOrCreate", "createMany", "connect"],
  Player_cardUpdateManyWithoutPlayerNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  CardCreateNestedOneWithoutPlayer_cardInput: ["create", "connectOrCreate", "connect"],
  PlayerCreateNestedOneWithoutPlayer_cardInput: ["create", "connectOrCreate", "connect"],
  CardUpdateOneRequiredWithoutPlayer_cardNestedInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  PlayerUpdateOneRequiredWithoutPlayer_cardNestedInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  ElementCreateNestedOneWithoutElement_affinity_elementToelement_affinity_element_idInput: ["create", "connectOrCreate", "connect"],
  ElementCreateNestedOneWithoutElement_affinity_elementToelement_affinity_affinity_elementInput: ["create", "connectOrCreate", "connect"],
  ElementUpdateOneRequiredWithoutElement_affinity_elementToelement_affinity_element_idNestedInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  ElementUpdateOneRequiredWithoutElement_affinity_elementToelement_affinity_affinity_elementNestedInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  NestedIntFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedStringFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not"],
  NestedIntNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedIntWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
  NestedFloatFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedStringWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not", "_count", "_min", "_max"],
  NestedIntNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
  NestedFloatNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedFloatWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
  Card_rankCreateWithoutCardInput: ["code", "name"],
  Card_rankCreateOrConnectWithoutCardInput: ["where", "create"],
  Card_typeCreateWithoutCardInput: ["name"],
  Card_typeCreateOrConnectWithoutCardInput: ["where", "create"],
  ElementCreateWithoutCardInput: ["name", "element_affinity_elementToelement_affinity_element_id", "element_affinity_elementToelement_affinity_affinity_element", "element_weakness_elementToelement_weakness_element_id", "element_weakness_elementToelement_weakness_weakness_element_id"],
  ElementCreateOrConnectWithoutCardInput: ["where", "create"],
  Player_cardCreateWithoutCardInput: ["name", "player"],
  Player_cardCreateOrConnectWithoutCardInput: ["where", "create"],
  Player_cardCreateManyCardInputEnvelope: ["data", "skipDuplicates"],
  Card_rankUpsertWithoutCardInput: ["update", "create"],
  Card_rankUpdateWithoutCardInput: ["code", "name"],
  Card_typeUpsertWithoutCardInput: ["update", "create"],
  Card_typeUpdateWithoutCardInput: ["name"],
  ElementUpsertWithoutCardInput: ["update", "create"],
  ElementUpdateWithoutCardInput: ["name", "element_affinity_elementToelement_affinity_element_id", "element_affinity_elementToelement_affinity_affinity_element", "element_weakness_elementToelement_weakness_element_id", "element_weakness_elementToelement_weakness_weakness_element_id"],
  Player_cardUpsertWithWhereUniqueWithoutCardInput: ["where", "update", "create"],
  Player_cardUpdateWithWhereUniqueWithoutCardInput: ["where", "data"],
  Player_cardUpdateManyWithWhereWithoutCardInput: ["where", "data"],
  Player_cardScalarWhereInput: ["AND", "OR", "NOT", "id", "name", "card_id", "player_id"],
  CardCreateWithoutCard_rankInput: ["name", "description", "power", "max_chain", "card_type", "element", "player_card"],
  CardCreateOrConnectWithoutCard_rankInput: ["where", "create"],
  CardCreateManyCard_rankInputEnvelope: ["data", "skipDuplicates"],
  CardUpsertWithWhereUniqueWithoutCard_rankInput: ["where", "update", "create"],
  CardUpdateWithWhereUniqueWithoutCard_rankInput: ["where", "data"],
  CardUpdateManyWithWhereWithoutCard_rankInput: ["where", "data"],
  CardScalarWhereInput: ["AND", "OR", "NOT", "id", "name", "description", "power", "element_id", "rank_id", "card_type_id", "max_chain"],
  CardCreateWithoutCard_typeInput: ["name", "description", "power", "max_chain", "card_rank", "element", "player_card"],
  CardCreateOrConnectWithoutCard_typeInput: ["where", "create"],
  CardCreateManyCard_typeInputEnvelope: ["data", "skipDuplicates"],
  CardUpsertWithWhereUniqueWithoutCard_typeInput: ["where", "update", "create"],
  CardUpdateWithWhereUniqueWithoutCard_typeInput: ["where", "data"],
  CardUpdateManyWithWhereWithoutCard_typeInput: ["where", "data"],
  CardCreateWithoutElementInput: ["name", "description", "power", "max_chain", "card_rank", "card_type", "player_card"],
  CardCreateOrConnectWithoutElementInput: ["where", "create"],
  CardCreateManyElementInputEnvelope: ["data", "skipDuplicates"],
  Element_affinityCreateWithoutElement_elementToelement_affinity_element_idInput: ["affinity_type", "element_elementToelement_affinity_affinity_element"],
  Element_affinityCreateOrConnectWithoutElement_elementToelement_affinity_element_idInput: ["where", "create"],
  Element_affinityCreateManyElement_elementToelement_affinity_element_idInputEnvelope: ["data", "skipDuplicates"],
  Element_affinityCreateWithoutElement_elementToelement_affinity_affinity_elementInput: ["affinity_type", "element_elementToelement_affinity_element_id"],
  Element_affinityCreateOrConnectWithoutElement_elementToelement_affinity_affinity_elementInput: ["where", "create"],
  Element_affinityCreateManyElement_elementToelement_affinity_affinity_elementInputEnvelope: ["data", "skipDuplicates"],
  Element_weaknessCreateWithoutElement_elementToelement_weakness_element_idInput: ["coef", "element_elementToelement_weakness_weakness_element_id"],
  Element_weaknessCreateOrConnectWithoutElement_elementToelement_weakness_element_idInput: ["where", "create"],
  Element_weaknessCreateManyElement_elementToelement_weakness_element_idInputEnvelope: ["data", "skipDuplicates"],
  Element_weaknessCreateWithoutElement_elementToelement_weakness_weakness_element_idInput: ["coef", "element_elementToelement_weakness_element_id"],
  Element_weaknessCreateOrConnectWithoutElement_elementToelement_weakness_weakness_element_idInput: ["where", "create"],
  Element_weaknessCreateManyElement_elementToelement_weakness_weakness_element_idInputEnvelope: ["data", "skipDuplicates"],
  CardUpsertWithWhereUniqueWithoutElementInput: ["where", "update", "create"],
  CardUpdateWithWhereUniqueWithoutElementInput: ["where", "data"],
  CardUpdateManyWithWhereWithoutElementInput: ["where", "data"],
  Element_affinityUpsertWithWhereUniqueWithoutElement_elementToelement_affinity_element_idInput: ["where", "update", "create"],
  Element_affinityUpdateWithWhereUniqueWithoutElement_elementToelement_affinity_element_idInput: ["where", "data"],
  Element_affinityUpdateManyWithWhereWithoutElement_elementToelement_affinity_element_idInput: ["where", "data"],
  Element_affinityScalarWhereInput: ["AND", "OR", "NOT", "element_id", "affinity_element", "affinity_type"],
  Element_affinityUpsertWithWhereUniqueWithoutElement_elementToelement_affinity_affinity_elementInput: ["where", "update", "create"],
  Element_affinityUpdateWithWhereUniqueWithoutElement_elementToelement_affinity_affinity_elementInput: ["where", "data"],
  Element_affinityUpdateManyWithWhereWithoutElement_elementToelement_affinity_affinity_elementInput: ["where", "data"],
  Element_weaknessUpsertWithWhereUniqueWithoutElement_elementToelement_weakness_element_idInput: ["where", "update", "create"],
  Element_weaknessUpdateWithWhereUniqueWithoutElement_elementToelement_weakness_element_idInput: ["where", "data"],
  Element_weaknessUpdateManyWithWhereWithoutElement_elementToelement_weakness_element_idInput: ["where", "data"],
  Element_weaknessScalarWhereInput: ["AND", "OR", "NOT", "element_id", "weakness_element_id", "coef"],
  Element_weaknessUpsertWithWhereUniqueWithoutElement_elementToelement_weakness_weakness_element_idInput: ["where", "update", "create"],
  Element_weaknessUpdateWithWhereUniqueWithoutElement_elementToelement_weakness_weakness_element_idInput: ["where", "data"],
  Element_weaknessUpdateManyWithWhereWithoutElement_elementToelement_weakness_weakness_element_idInput: ["where", "data"],
  ElementCreateWithoutElement_weakness_elementToelement_weakness_element_idInput: ["name", "card", "element_affinity_elementToelement_affinity_element_id", "element_affinity_elementToelement_affinity_affinity_element", "element_weakness_elementToelement_weakness_weakness_element_id"],
  ElementCreateOrConnectWithoutElement_weakness_elementToelement_weakness_element_idInput: ["where", "create"],
  ElementCreateWithoutElement_weakness_elementToelement_weakness_weakness_element_idInput: ["name", "card", "element_affinity_elementToelement_affinity_element_id", "element_affinity_elementToelement_affinity_affinity_element", "element_weakness_elementToelement_weakness_element_id"],
  ElementCreateOrConnectWithoutElement_weakness_elementToelement_weakness_weakness_element_idInput: ["where", "create"],
  ElementUpsertWithoutElement_weakness_elementToelement_weakness_element_idInput: ["update", "create"],
  ElementUpdateWithoutElement_weakness_elementToelement_weakness_element_idInput: ["name", "card", "element_affinity_elementToelement_affinity_element_id", "element_affinity_elementToelement_affinity_affinity_element", "element_weakness_elementToelement_weakness_weakness_element_id"],
  ElementUpsertWithoutElement_weakness_elementToelement_weakness_weakness_element_idInput: ["update", "create"],
  ElementUpdateWithoutElement_weakness_elementToelement_weakness_weakness_element_idInput: ["name", "card", "element_affinity_elementToelement_affinity_element_id", "element_affinity_elementToelement_affinity_affinity_element", "element_weakness_elementToelement_weakness_element_id"],
  Player_cardCreateWithoutPlayerInput: ["name", "card"],
  Player_cardCreateOrConnectWithoutPlayerInput: ["where", "create"],
  Player_cardCreateManyPlayerInputEnvelope: ["data", "skipDuplicates"],
  Player_cardUpsertWithWhereUniqueWithoutPlayerInput: ["where", "update", "create"],
  Player_cardUpdateWithWhereUniqueWithoutPlayerInput: ["where", "data"],
  Player_cardUpdateManyWithWhereWithoutPlayerInput: ["where", "data"],
  CardCreateWithoutPlayer_cardInput: ["name", "description", "power", "max_chain", "card_rank", "card_type", "element"],
  CardCreateOrConnectWithoutPlayer_cardInput: ["where", "create"],
  PlayerCreateWithoutPlayer_cardInput: ["name", "password"],
  PlayerCreateOrConnectWithoutPlayer_cardInput: ["where", "create"],
  CardUpsertWithoutPlayer_cardInput: ["update", "create"],
  CardUpdateWithoutPlayer_cardInput: ["name", "description", "power", "max_chain", "card_rank", "card_type", "element"],
  PlayerUpsertWithoutPlayer_cardInput: ["update", "create"],
  PlayerUpdateWithoutPlayer_cardInput: ["name", "password"],
  ElementCreateWithoutElement_affinity_elementToelement_affinity_element_idInput: ["name", "card", "element_affinity_elementToelement_affinity_affinity_element", "element_weakness_elementToelement_weakness_element_id", "element_weakness_elementToelement_weakness_weakness_element_id"],
  ElementCreateOrConnectWithoutElement_affinity_elementToelement_affinity_element_idInput: ["where", "create"],
  ElementCreateWithoutElement_affinity_elementToelement_affinity_affinity_elementInput: ["name", "card", "element_affinity_elementToelement_affinity_element_id", "element_weakness_elementToelement_weakness_element_id", "element_weakness_elementToelement_weakness_weakness_element_id"],
  ElementCreateOrConnectWithoutElement_affinity_elementToelement_affinity_affinity_elementInput: ["where", "create"],
  ElementUpsertWithoutElement_affinity_elementToelement_affinity_element_idInput: ["update", "create"],
  ElementUpdateWithoutElement_affinity_elementToelement_affinity_element_idInput: ["name", "card", "element_affinity_elementToelement_affinity_affinity_element", "element_weakness_elementToelement_weakness_element_id", "element_weakness_elementToelement_weakness_weakness_element_id"],
  ElementUpsertWithoutElement_affinity_elementToelement_affinity_affinity_elementInput: ["update", "create"],
  ElementUpdateWithoutElement_affinity_elementToelement_affinity_affinity_elementInput: ["name", "card", "element_affinity_elementToelement_affinity_element_id", "element_weakness_elementToelement_weakness_element_id", "element_weakness_elementToelement_weakness_weakness_element_id"],
  Player_cardCreateManyCardInput: ["id", "name", "player_id"],
  Player_cardUpdateWithoutCardInput: ["name", "player"],
  CardCreateManyCard_rankInput: ["id", "name", "description", "power", "element_id", "card_type_id", "max_chain"],
  CardUpdateWithoutCard_rankInput: ["name", "description", "power", "max_chain", "card_type", "element", "player_card"],
  CardCreateManyCard_typeInput: ["id", "name", "description", "power", "element_id", "rank_id", "max_chain"],
  CardUpdateWithoutCard_typeInput: ["name", "description", "power", "max_chain", "card_rank", "element", "player_card"],
  CardCreateManyElementInput: ["id", "name", "description", "power", "rank_id", "card_type_id", "max_chain"],
  Element_affinityCreateManyElement_elementToelement_affinity_element_idInput: ["affinity_element", "affinity_type"],
  Element_affinityCreateManyElement_elementToelement_affinity_affinity_elementInput: ["element_id", "affinity_type"],
  Element_weaknessCreateManyElement_elementToelement_weakness_element_idInput: ["weakness_element_id", "coef"],
  Element_weaknessCreateManyElement_elementToelement_weakness_weakness_element_idInput: ["element_id", "coef"],
  CardUpdateWithoutElementInput: ["name", "description", "power", "max_chain", "card_rank", "card_type", "player_card"],
  Element_affinityUpdateWithoutElement_elementToelement_affinity_element_idInput: ["affinity_type", "element_elementToelement_affinity_affinity_element"],
  Element_affinityUpdateWithoutElement_elementToelement_affinity_affinity_elementInput: ["affinity_type", "element_elementToelement_affinity_element_id"],
  Element_weaknessUpdateWithoutElement_elementToelement_weakness_element_idInput: ["coef", "element_elementToelement_weakness_weakness_element_id"],
  Element_weaknessUpdateWithoutElement_elementToelement_weakness_weakness_element_idInput: ["coef", "element_elementToelement_weakness_element_id"],
  Player_cardCreateManyPlayerInput: ["id", "name", "card_id"],
  Player_cardUpdateWithoutPlayerInput: ["name", "card"]
};

type InputTypesNames = keyof typeof inputTypes;

type InputTypeFieldNames<TInput extends InputTypesNames> = Exclude<
  keyof typeof inputTypes[TInput]["prototype"],
  number | symbol
>;

type InputTypeFieldsConfig<
  TInput extends InputTypesNames
  > = FieldsConfig<InputTypeFieldNames<TInput>>;

export type InputTypeConfig<TInput extends InputTypesNames> = {
  class?: ClassDecorator[];
  fields?: InputTypeFieldsConfig<TInput>;
};

export type InputTypesEnhanceMap = {
  [TInput in InputTypesNames]?: InputTypeConfig<TInput>;
};

export function applyInputTypesEnhanceMap(
  inputTypesEnhanceMap: InputTypesEnhanceMap,
) {
  for (const inputTypeEnhanceMapKey of Object.keys(inputTypesEnhanceMap)) {
    const inputTypeName = inputTypeEnhanceMapKey as keyof typeof inputTypesEnhanceMap;
    const typeConfig = inputTypesEnhanceMap[inputTypeName]!;
    const typeClass = inputTypes[inputTypeName];
    const typeTarget = typeClass.prototype;
    applyTypeClassEnhanceConfig(
      typeConfig,
      typeClass,
      typeTarget,
      inputsInfo[inputTypeName as keyof typeof inputsInfo],
    );
  }
}

