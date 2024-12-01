const deleteSubstrFromProperties = <Object extends {}, Substr extends string>(obj: Object, substr: Substr) => {
  const keys = Object.keys(obj) as Array<keyof Object & string>;

  return keys.reduce(
    (acc, key) => ({...acc, [key.replace(substr, '')]: obj[key]}),
    {} as {
      [Key in keyof Object as Key extends `${infer Prefix}${Substr}${infer Suffix}` ? `${Prefix}${Suffix}` : Key]: Object[Key];
    },
  );
};

export {deleteSubstrFromProperties};
