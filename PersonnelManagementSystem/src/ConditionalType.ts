export type ConditionalTypeOrNot<T, U> = T extends { age: number } ? (U & { extraInfo: string }) : U;