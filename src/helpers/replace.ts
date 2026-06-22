export type Replace<Originaltype, ReplaceTypes> = Omit<
  Originaltype,
  keyof ReplaceTypes
> &
  ReplaceTypes;
